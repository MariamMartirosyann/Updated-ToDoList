import { useState } from "react"
import AddEditItem from "../AddEditItem/AddEditItem"
import Head from "../Head/Head"
import ToDoList from "../ToDoList/ToDoList"
import "./style.css"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { useDispatch } from "react-redux"
import { hideToDoList } from "../../Redux/appSlice"

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const HomePage: React.FC = () => {

 


  return (

    <div className="mainContainer">
      <Head />
      <ToDoList />
     
    </div>

  )
}

export default HomePage