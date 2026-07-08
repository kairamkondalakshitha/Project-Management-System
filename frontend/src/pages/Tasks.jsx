import TaskCard from "../components/TaskCard";


function Tasks(){

const tasks=[
{
title:"Build Frontend UI",
description:"Create responsive React components",
status:"Completed",
priority:"High"
},

{
title:"API Integration",
description:"Connect frontend with backend",
status:"In Progress",
priority:"Medium"
},

{
title:"Testing",
description:"Test application features",
status:"Pending",
priority:"Low"
}

]


return(

<div className="min-h-screen bg-gray-100 p-6">


<div className="flex justify-between items-center">

<h1 className="text-3xl font-bold">
Tasks
</h1>


<button className="bg-blue-600 text-white px-5 py-3 rounded-lg">
+ Create Task
</button>


</div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">


{
tasks.map((task,index)=>(

<TaskCard
key={index}
title={task.title}
description={task.description}
status={task.status}
priority={task.priority}
/>

))
}


</div>


</div>

)

}

export default Tasks;