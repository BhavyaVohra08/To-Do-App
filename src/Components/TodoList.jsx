import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.tasks.map((task) => {
        return (
          <TodoItem
            key={task.id}
            task={task.text}
            id={task.id}
            onDeleteTask={props.deleteTask}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
