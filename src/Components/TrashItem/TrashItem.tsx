import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import RestoreIcon from '@mui/icons-material/Restore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IToDoItem } from '../../Redux/interfaces';
import { deletePermanently, restoreItem } from '../../Redux/trashSlice';
import { addItem } from '../../Redux/ToDoSlice';

interface TrashItemProps {
  item: IToDoItem;
}

const TrashItem: React.FC<TrashItemProps> = ({ item }) => {
  
  const dispatch = useDispatch();
 

  const handleRestoreClick = () => {
    dispatch(restoreItem({ id: item.id }));
    dispatch(addItem( item ))
  };

  const handleDeletePermanentlyClick = () => {
    dispatch(deletePermanently({ id: item.id }));
  };

  return (
    <div className="item">
      <div className="start">
      <p className='description'>Removed</p>
        <span className="title">{item.title}</span>
        <p className="description">{" : " + item.description.slice(0, 20) + "..."} </p>
      </div>
      <div className="end">
        <span className="description"> {item.deadline}</span>
        <RestoreIcon onClick={handleRestoreClick} style={{ background: "white", fill: "#af7eeb" }} />
        <DeleteForeverIcon onClick={handleDeletePermanentlyClick} style={{ background: "white", fill: "#af7eeb" }} />
      </div>
    </div>
  );
};

export default TrashItem;
