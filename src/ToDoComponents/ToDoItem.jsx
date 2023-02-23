export default function ToDoItem(param){

    return (
        <>  
            <div className="toDoItem">
                <label>
                    <input type="checkbox"/>
                    <span className="task">{param.todo.description}</span>
                </label>
                <button className="doRestore">↺</button>
                <div className="toDoItemMenu">
                    <img className="edit" src="images/pencil.svg"/>
                    <img className="delete" src="images/trash.svg"/>
                </div>
            </div>    
        </>
    );
}