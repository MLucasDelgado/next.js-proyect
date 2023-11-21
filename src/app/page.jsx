import {prisma} from '@/libs/prisma'
import TaskCard from './components/TaskCard'

const loadTask = async() => {
    // Peticion a la base de datos
    const task = await prisma.task.findMany()
    return task

    // Otra forma de hacerlo es haciendo una peticion al back
    // const res = await fetch('http:localhost:3000/api/task')
    // const data = await res.json()
}

const HomePage = async() => {
    const tasks = await loadTask()
    return(
        <section className='container mx-auto mt-10'>
            <div className='grid grid-cols-3 gap-3'>
            {
                tasks.map((task) => {
                    return(
                        <TaskCard task={task} key={task.id} />
                    )
                })
            }
        </div>
        </section>
    )
}

export default HomePage;