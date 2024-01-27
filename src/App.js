import React, { useState } from 'react'
import "./App.css"
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList';
function App() {
  const [listTodo,setListtodo] = useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
 setListtodo([...listTodo, inputText]);
  }
  const deleteListItem = (key)=>{
  let newListTodo  = [...listTodo];
  newListTodo.splice(key,1)
  setListtodo([...newListTodo]);
 }
  return (
   <div className="main-container">
   <div className="centre-container">
   <TodoInput addList = {addList}/>
   <hi className="app heading">TODO</hi>
   <hr/>
   {listTodo.map((listItem,i)=>{
 return (
   <TodoList key={i} index = {i} item={listItem} deleteItem = {deleteListItem}/>
  )
 })}
   
   </div>
   </div>
  )
}

export default App
