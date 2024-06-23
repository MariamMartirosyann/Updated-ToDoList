import { useForm } from "react-hook-form"
import { IFormdata, IToDoItem } from "../../Redux/interfaces"
import { useDispatch } from "react-redux";
import { addItem, editItem } from "../../Redux/ToDoSlice";
import { showToDoList } from "../../Redux/appSlice";
import { useEffect } from "react";
import "./style.css"



interface IAddEditItemProps {

    editData?: IToDoItem;
}

const AddEditItem = ({ editData }: IAddEditItemProps) => {

    const dispatch = useDispatch();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormdata>();


    const onSubmit = (data: IFormdata) => {
        if (editData) {
            const newFormData = {
                id: editData.id,
                title: data.title,
                description: data.description,
                done: data.done,
                deadline: data.deadline,

            };
            dispatch(editItem(newFormData));

        }
        else {
            const newFormData = {
                title: data.title,
                description: data.description,
                done: data.done,
                deadline: data.deadline,
            };
            dispatch(addItem(newFormData));

        }
        reset()
        dispatch(showToDoList())
    }
    const handleBackToList = () => {
        dispatch(showToDoList())
    }


    useEffect(() => {
        if (editData) {
            reset({
                title: editData.title,
                description: editData.description,
                deadline: editData.deadline,

            });

        }
    }, [editData, reset]);

    return (
        <div className="addEdit">

            <h3 className="formTitle">{editData ? "Edit" : "Add"}  Task</h3>
            <form onSubmit={handleSubmit(onSubmit)}   >
                <div className="inputItem">
                    <label className="inputTitle"> Title :</label>
                    <div className="fragment">
                        <input className="bg-white" type="text" id="title"  {...register('title', { required: "Title is required." })} />
                        {errors.title ? <p className="error"> Name is required</p> : null}
                    </div>

                </div>
                <div className="inputItem">
                    <label className="inputTitle">Description: </label>
                    <input className="bg-white" maxLength={100} type="textarea" id="description" {...register('description')} />
                </div>
                <div className="inputItem">
                    <label className="inputTitle">Deadline: </label>
                    <input className="bg-white" type="date" min={Date.now()} id="deadline"   {...register('deadline')} />
                </div>
                <div className="inputItem" >
                    <input type="submit" value="Save Task" />
                </div>
            </form>
            <div className="inputItem" >
            <input  type="submit" value="Back to List" onClick={handleBackToList} />
            </div>
        </div>
    )
}

export default AddEditItem