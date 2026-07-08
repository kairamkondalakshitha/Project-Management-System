function TaskCard({title, description, status, priority}){

return (

<div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">


<h3 className="text-xl font-bold text-gray-800">
{title}
</h3>


<p className="text-gray-500 mt-2">
{description}
</p>


<div className="flex justify-between items-center mt-5">


<span 
className={`px-3 py-1 rounded-full text-sm
${
status === "Completed"
? "bg-green-100 text-green-600"
: status === "In Progress"
? "bg-yellow-100 text-yellow-600"
: "bg-gray-100 text-gray-600"
}
`}
>
{status}
</span>


<span className="text-sm font-semibold text-red-500">
{priority}
</span>


</div>


</div>

)

}

export default TaskCard;