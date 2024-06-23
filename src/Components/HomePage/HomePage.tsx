
import Head from "../Head/Head"
import ToDoList from "../ToDoList/ToDoList"
import "./style.css"


const HomePage: React.FC = () => {

  return (

    <div className="mainContainer">
      <Head />
      <ToDoList />
    </div>

  )
}

export default HomePage