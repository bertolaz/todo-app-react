import React from "react";

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
          title : event.target.value
      });
  }

  handleSubmit(event) {
      event.preventDefault();

      const toDo = {
          title: this.state.title
      }

      /* fetch('website', {
          method: 'POST',
          headers : {
              'content-type' : 'application/json'
          },
          body : JSON.stringify(toDo)
      }) */
  }

  render() {
    return (
      <div>
        <h1>Add ToDo</h1>
        <form>
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit"></input>
        </form>
        <p></p>
      </div>
    );
  }
}

export default ToDoForm;
