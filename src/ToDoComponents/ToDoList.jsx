import ToDoItem from "./ToDoItem"
export default function ToDoList(param){

    return (
        <>
            <article className="listToDoItems">
                {console.log(param.toDoS)}
                {param.toDoS.map((toDo) => {
                    return (
                        <>
                            <ToDoItem toDo={toDo}>
                            </ToDoItem>
                        </>
                    )
                })}                 
            </article>
        </>
    )



}