import React from "react";

import { useState } from "react";

import styles from "./todo.module.css";


const Todoitem = ({todo , onDelete }) => {
    const [isCompleted , setIsCompleted] =useState(todo.isCompleted);

    return (
        <div style={{ display:"flex" , justifycontent:"space-evenly", backgroundColor:"white", color:"black"}}  className={styles.todo} key={todo.id}>

        <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => {
            setIsCompleted(e.target.checked);
        }}
        />
{/* {condition ? true : false} */}
        <div className={isCompleted ? styles.striked : ""}>{todo.value}</div>
        <button className="buttondelete"  onClick={()=> onDelete(todo.id)}>Delete</button>
        </div>
    );
}

export default Todoitem;




