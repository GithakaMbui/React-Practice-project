const Task = ({ task }) => {
    return (
        <div className='task'>
            <h4> {task.text} </h4>
            <p> {task.day } </p>
        </div>
    )
}

export default Task