import React, { useState } from 'react'
import "./style.css"

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState } from "./../../Redux/store";
import ToDoItem from '../ToDoItem/ToDoItem';
import { IToDoItem } from '../../Redux/interfaces';
import { hideToDoList, showTrash } from '../../Redux/appSlice';
import AddEditItem from '../AddEditItem/AddEditItem';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import TrashItem from '../TrashItem/TrashItem';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;



const ToDoList: React.FC = () => {
  const dispatch = useDispatch()
  const showList = useTypedSelector((store) => store.app.showToDoList);
 


  const [editData, setEditData] = useState<IToDoItem>();

  const handleAddItem = () => {
    setEditData(undefined)
    dispatch(hideToDoList())
  }


  const handleEdit = (item: IToDoItem) => {
    dispatch(hideToDoList())
    setEditData(item);
  };

  const todoList = useTypedSelector((store) => store.todo.list);
  const trash = useTypedSelector((store) => store.trash);

  const handleOpenTrash = () => {
    dispatch(hideToDoList())
    dispatch(showTrash())
  }

  return (
    <>
      {showList ? <> < div className='toDoList' >

        {
          todoList ? todoList.map(todo =>
            <ToDoItem key={todo.id} data={todo} onEdit={handleEdit} />)
            : null}
      </div > <button className="add" onClick={handleAddItem}>+ New Tusk</button></> : <AddEditItem editData={editData} />}


      <div className='trashTitle'><h4>Trash</h4> <div className='trash'><FolderDeleteIcon fontSize='large' style={{ fill: " #af7eeb" }} /><span className='trashNumber'>{trash ? trash.length : null}</span></div></div>
      {trash.map(trashItem => (
        <TrashItem key={trashItem.id} item={trashItem} />
      ))}



    </>
  )
}

export default ToDoList