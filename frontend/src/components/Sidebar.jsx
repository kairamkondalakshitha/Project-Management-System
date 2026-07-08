import {
  LayoutDashboard,
  ListTodo,
  Users,
  Settings
} from "lucide-react";


function Sidebar(){

return (

<aside className="hidden md:flex w-64 bg-white shadow-lg min-h-screen p-6 flex-col">


<h2 className="text-2xl font-bold text-blue-600">
TaskFlow
</h2>


<nav className="mt-8 space-y-4">


<div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
<LayoutDashboard size={20}/>
Dashboard
</div>


<div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
<ListTodo size={20}/>
Tasks
</div>


<div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
<Users size={20}/>
Team
</div>


<div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
<Settings size={20}/>
Settings
</div>


</nav>


</aside>

)

}

export default Sidebar;