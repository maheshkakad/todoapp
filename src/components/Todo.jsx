import React, { useState } from "react";
import Todoitem from "./Todoitem";
import styles from "./todo.module.css"

const Todo = () => {
    
    let [value,setvalue] =useState("")

    const [todos,setTodos] =useState([])

    const onDelete =(id)=>{
     let newTodos = todos.filter(todo => todo.id !== id);
     setTodos(newTodos)
    }

  

    return (
        <div className={styles.container} >
    Todo
        <input style={{ width: "200px"}} value={value} 
        onChange={(e) => {setvalue(e.target.value)}}/>
        <button onClick={() =>{
          
                setTodos([...todos, {id: Date.now(), value: value}
                ]);
            setvalue("")
            }}>+</button>
            <div className={styles.todoList}>

        {todos.map((todo) => (
            <Todoitem key={todo.id} todo={todo} onDelete={onDelete} />
            // <div>{todo.value}</div>

        ))}
        </div>
        </div>
    );
}

export default Todo