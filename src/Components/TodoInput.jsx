import { useState } from "react";
import "./TodoInput.css";
import styled from "styled-components";

const Button = styled.button `
  margin-top: .75rem;
  padding-top: 12px;
  width: 100%;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 1rem;
  background-color: #023047;
  color: white;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    box-shadow: 0px 0px 2px 2px rgba(2, 48, 71, 0.2);
  }

  @media (min-width: 768px) {
    width: auto;
  }
`

const InputBox = styled.div`

  display: flex;
  flex-direction: column;
  gap: .75rem;

  & label {
    font-size: 1.5rem;
    color: ${props => (props.invalid == 1 ? 'red' : 'black')};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
  }

  & input {
    font-size: 1.5rem;
    padding-left: .3rem;
    padding-right: .3rem;
    padding-top: .2rem;
    padding-bottom: .2rem;
    border-radius: 5px;
    border: 1px solid ${props => (props.invalid == 1 ? 'red' : 'white')};
    background: ${props => (props.invalid == 1 ? '#ffd7d7' : 'white')};
  }

`;

const TodoInput = (props) => {
  const [newTask, setNewTask] = useState("");
  const [isValid, setIsValid] = useState(true)

  const inputChangeHandler = (e) => {
    if(e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setNewTask(e.target.value);
  };

  const formSubmitHandler = (e) => {
      e.preventDefault();
      if(newTask.trim().length === 0) {
        setIsValid(false);
        return;
      }
      props.onAddNewTask(newTask);
      setNewTask('');
  }



  return (
    <form onSubmit={formSubmitHandler} className="input-form">
      <InputBox invalid={isValid ? 0 : 1}> {/*false:true */}
        <label htmlFor="task">Task:</label>
        <input 
          // style={{border: !isValid ? '2px solid red' : 'white'}} 
          value={newTask} 
          type="text" 
          id="task" 
          onChange={inputChangeHandler} 
        />
      </InputBox>
      {/* <button className="button" type="submit" >
        Add New
      </button> */}
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TodoInput;
