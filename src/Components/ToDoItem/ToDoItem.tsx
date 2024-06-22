

import { useDispatch } from 'react-redux';
import { toggleDone, deleteItem } from '../../Redux/ToDoSlice';
import { IToDoItem } from '../../Redux/interfaces';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { moveToTrash } from "../../Redux/trashSlice";
import { useEffect, useState } from "react";
import "./style.css"

interface ToDoItemProps {
  data: IToDoItem;
  onEdit: (item: IToDoItem) => void;
}
const statusList = ["Pending", "Completed", "Overdue"]

const ToDoItem: React.FC<ToDoItemProps> = ({ onEdit, data }) => {
  const { id, title, description, deadline, done } = data

  const dispatch = useDispatch();

  const [status, setStatus] = useState(statusList[0])
  const disabled = status === statusList[2]

  const handleDoneClick = () => {
    dispatch(
      toggleDone({ id: id, done: !done })
    )
  }
  const handleDeleteClick = () => {
    dispatch(moveToTrash(data))
    dispatch(deleteItem(data))
  }


  const handleStatus = () => {
    setStatus(statusList[0])
    if (done) {
      setStatus(statusList[1])
    }
    if (Date.now() > Date.parse(deadline)) {
      setStatus(statusList[2])
    }
  }

  useEffect(() => { handleStatus() }, [done, status])
  return (

    <div className='item'>
      <div className="start"> <input className='checkbox' type="checkbox" checked={!disabled && done} onChange={handleDoneClick} />
        <p className='description'>{status}</p>{done}<span className='title'>{title}</span><p className='description'>{" : " + description.slice(0, 20) + "..."}</p>{done}</div>

      <div className="end"><span className='description'>{deadline}</span>
        <EditIcon onClick={() => onEdit(data)} style={{ background: "white", fill: " #af7eeb" }} />
        <DeleteOutlineIcon onClick={handleDeleteClick} style={{ background: "white", fill: " #af7eeb" }} /></div>

    </div>
  )
}



export default ToDoItem