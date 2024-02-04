import { useState } from 'react';
import './TodoItem.css'

const TodoItem = (props) => {

  const [isChecked, setIsChecked] = useState(false);

  const onClickHandler = () => {
    props.onDeleteTask(props.id);
  }

  const handleChange = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <li  className="todo-item" >
      <div>
        <input type="checkbox" onChange={handleChange} />
        <p className={`content ${isChecked ? 'check' : ''}`}>{props.task}</p>
      </div>      
      <button className='delete' onClick={onClickHandler}>Delete</button>
    </li>
  )
};

export default TodoItem;
