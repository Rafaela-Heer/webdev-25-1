import { useState } from "react"

export default function AddTaskBox({ onAddTaskName }) {
    const [taskName, setTaskName ]  = useState("Alguma tarefa")

    function addTask() {
        console.log("TaskName: ",taskName);
        onAddTaskName(taskName)          
    }

    // function keyDown(e) {
    //     console.log("Disparou evento keyDown",e)
    //     if(e.code == "Enter") {
    //         addTask()
    //     }
    // }

    return (
        <>
            <div className="border-2px border-blue-400 p-2 rounded m-2 md:w-120">
                <div>
                    Digite o nome da tarefa
                </div>
                <hr className="my-1" />
                <div className="flex items-center gap-2 my-2">
                    <div>
                        Tarefa:
                    </div>
                    <input type="text" value={taskName} onKeyDown={(e) => {if(e.code=="Enter") {addTask()}}} onChange={(e) => { setTaskName(e.target.value) }} className="border rounded border-gray-800 p-1 w-45" />
                    <button onClick={addTask} className="bg-blue-400 border border-blue-600 px-1 rounded">
                        Adicionar
                    </button>
                </div>
            </div>
        </>
    )
}