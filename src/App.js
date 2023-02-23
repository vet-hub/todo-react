import ToDoForm from "./ToDoComponents/ToDoForm"
import ToDoList from "./ToDoComponents/ToDoList"
import ToDoProgress from "./ToDoComponents/ToDoProgress"
import "./App.css"





const toDosArray =[ {
  key: 1,
  description: "test",
  done: true
  
},{
  key: 2,
  description: "test1",
  done: false
},{
  key: 3, 
  description: "test2",
  done: true
} ]


function App() {
  return (
    <>
      <div className="toDoContainer">
        <ToDoForm list={toDosArray}></ToDoForm>
        <ToDoProgress></ToDoProgress>
        <ToDoList list={toDosArray}>
        </ToDoList>
      </div>
    </>
  );
}

export default App;
