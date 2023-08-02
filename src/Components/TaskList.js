import TaskCard from './taskCard'
function TaskList(props){
    const deleteHandler = (id)=>{
        props.getId(id)
    }
    return( props.tasks.map(task=>{
        return( 
        
         <TaskCard task={task} clickHandler ={ deleteHandler } key = {task.id}/>
        )})
        
    )
}



export default TaskList;