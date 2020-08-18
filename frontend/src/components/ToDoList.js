import React from "react";
import ToDo from './ToDo';
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [],
    };
  }

  componentWillMount() {
    this.setState({
      toDos: [
        {
          id: 1,
          text: "First toDo",
          completed: false,
        },
        {
          id: 2,
          text: "Second toDo",
          completed: false,
        },
      ],
    });
  }

  render() {
    const toDoItems = this.state.toDos.map((toDo) => {
      return (
        <ToDo key={toDo.id} text={toDo.text} completed={toDo.completed}/>
      );
    });
    return (
      <div>
        <h1>ToDos</h1>
        {toDoItems}
      </div>
    );
  }
}

export default ToDoList;
