console.log("***** THIS IS MY SERVER.JS *****");

const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

// Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

// Socket
const { initializeSocket } = require("./socket/socket");

// Middleware
const protect = require("./middleware/authMiddleware");
const errorHandler = require("./middleware/errorMiddleware");

// Routes
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const commentRoutes = require("./routes/commentRoutes");
const fileRoutes = require("./routes/fileRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const activityRoutes = require("./routes/activityRoutes");
const userRoutes = require("./routes/userRoutes");

// Load Environment Variables
dotenv.config();

// Connect Database
connectDB();

// Create Express App
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

initializeSocket(io);

// ================= Middleware =================

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

console.log("✅ Routes loaded");

// ================= API Routes =================

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/users", userRoutes);

// Swagger Documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// ================= Home Route =================

app.get("/", (req, res) => {
  res.send("HOME ROUTE WORKING");
});

// ================= Test Route =================

app.get("/api/test", (req, res) => {
  res.send("API TEST WORKING");
});

// ================= Protected Route =================

app.get("/api/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected Route Accessed Successfully",
    user: req.user,
  });
});

// ================= Socket.IO =================

io.on("connection", (socket) => {
  console.log("✅ User Connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ User Disconnected:", socket.id);
  });
});

// ================= 404 Handler =================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ================= Error Middleware =================

app.use(errorHandler);

// ================= Start Server =================

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});