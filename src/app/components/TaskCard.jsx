'use client'
import { useRouter } from "next/navigation";
const TaskCard = ({ task }) => {

    const router = useRouter()

    return (
        <div className='bg-slate-900 p-3 rounded hover:bg-slate-800 hover:cursor-pointer hover:animate-pulse'
        onClick={() => {
            router.push('/task/edit/' + task.id)
        }}>
            <h3 className='mb-2 font-bold'>{task.title}</h3>
            <p>{task.description}</p>
            <p>{new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
    )
}

export default TaskCard;