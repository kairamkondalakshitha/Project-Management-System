import Navbar from "../components/Navbar";

function Home(){

return (

<div className="min-h-screen bg-gray-50">

<Navbar />

<div className="flex items-center justify-center min-h-[80vh]">

<div className="text-center">

<h1 className="text-5xl font-bold text-gray-800">
Project Management System
</h1>

<p className="mt-5 text-gray-600 text-lg">
Manage projects, tasks and teams efficiently
</p>

<button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
Get Started
</button>

</div>

</div>

</div>

)

}

export default Home;