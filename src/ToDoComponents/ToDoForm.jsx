import { useState } from "react"

export default function ToDoForm(param){
    var highestKey =0;
    param.list.forEach((x) => {if(x.key>highestKey){highestKey =x.key}})
    highestKey++;
    
    const [formData, setFormData] =useState({
        key: highestKey,
        description: "",
        done: false
    })

    function SubmitForm(e){
        e.preventDefault()
        console.log(param.list);
        param.list.push(formData);
        console.log(param.list);
        }
    
    
    

    return (
        <>
            <form className="toDoForm" onSubmit={SubmitForm}>
                <input onChange={(e) =>setFormData({...formData,[e.target.name]: e.target.value})}
                    id="newTaskInput" type="text" required name="description"/> 
                <button type="submit" id="submitBtn"><img src="images/add.svg" /></button>
            </form> 
        </>
    )



}