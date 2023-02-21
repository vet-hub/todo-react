export default function ToDoForm(){

    return (
        <>
            <form className="toDoForm">
                <input id="newTaskInput" type="text" required name="toDoItemDescription"/> 
                <button type="submit" id="submitBtn"><img src="images/add.svg" /></button>
            </form> 
        </>
    )



}