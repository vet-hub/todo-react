import ToDoItem from "./ToDoItem"
export default function ToDoList(param){

    return (
        <>
            <article className="listToDoItems">
                {param.list.map((toDo) => {
                    return (
                        <>
                            <ToDoItem todo={toDo}>
                            </ToDoItem>
                        </>
                    )
                })}                 
            </article>
        </>
    )



}