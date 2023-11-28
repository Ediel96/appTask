import { ChangeEvent, useState } from "react"

export const TaskForm = () => {

    const [task, setTask] = useState({
        title: '',
        description: '',
        done: false
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) =>
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })

  return (
    <div>
        <form action="">
            <input type="text"
            name="title"
            placeholder="Write a task"
            className="boder-2 border-gray-700 p-2 rounded-lg bg-zinc-800 black w-full my-2"
            />

            <textarea name="description" rows={3}
             placeholder="Write a task"
             className="boder-2 border-gray-700 p-2 rounded-lg bg-zinc-800 black w-full my-2"></textarea>

            <label htmlFor="" className="inline-flex items-center gap-x-3">
                <input type="checkbox"className="h-5 w-5 text-indigo-600"/>
                <span> Donde </span>
            </label>

            <button className="bg-indigo-500 px-3 w-full">
                Save
            </button>
        </form>
    </div>
  )
}