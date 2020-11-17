import React from "react";
import { fetchAsync } from "./ToDoListSlice";
import { useSelector, useDispatch } from "react-redux";

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleSubmit(event) {
    const dispatch = useDispatch();
    event.preventDefault();

    const toDo = {
      title: this.state.title,
    };

    //dispatch(fetchAsync);

    /* fetch('website', {
          method: 'POST',
          headers : {
              'content-type' : 'application/json'
          },
          body : JSON.stringify(toDo)
      }) */
    fetch("http://localhost:3001/api/v1/todos/bertolaz", {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    }).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <div>
        <h1>Add ToDo</h1>
        <form>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>

          <input type="submit" value="Submit"></input>
        </form>
        <p></p>
      </div>
    );
  }
}

export default ToDoForm;
