import Sidebar from "../components/Sidebar";

function Dashboard(){

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />


      <main className="flex-1 p-6">

        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back! Manage your projects and tasks.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">


          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-gray-500">
              Total Tasks
            </h3>

            <p className="text-3xl font-bold text-blue-600 mt-2">
              120
            </p>

          </div>


          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-gray-500">
              Completed
            </h3>

            <p className="text-3xl font-bold text-green-600 mt-2">
              80
            </p>

          </div>


          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-gray-500">
              Pending
            </h3>

            <p className="text-3xl font-bold text-yellow-600 mt-2">
              30
            </p>

          </div>


          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-gray-500">
              Overdue
            </h3>

            <p className="text-3xl font-bold text-red-600 mt-2">
              10
            </p>

          </div>


        </div>


        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-xl font-bold">
            Recent Tasks
          </h2>


          <div className="mt-4 space-y-3">


            <div className="border p-4 rounded-lg flex justify-between">

              <span>
                Design Dashboard UI
              </span>

              <span className="text-green-600">
                Completed
              </span>

            </div>


            <div className="border p-4 rounded-lg flex justify-between">

              <span>
                Backend API Integration
              </span>

              <span className="text-yellow-600">
                In Progress
              </span>

            </div>


          </div>

        </div>


      </main>


    </div>

  )

}

export default Dashboard;