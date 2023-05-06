import "./App.css";
import { Component } from "react";
import Overview from "./components/overview";

class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      tasks: [],
      value: "",
    }
    this.updateInput = this.updateInput.bind(this)
    this.updateTasks = this.updateTasks.bind(this)
  }

//  input() {
//   this.state = {
//      value: "",
//    };
//  }

  updateInput(e) {
    const input = e.target.value;
    this.setState({
      value: input,
    });
  }

  updateTasks() {
    this.setState({
      tasks: this.state.tasks.concat(this.state.value)
    })
  }


  render() {
    return (
    <div>
      <p>{this.state.tasks}</p>
      <label htmlFor="tasks">Enter your tasks below</label>
      <input
        type="text"
        id="tasks"
        name="tasks"
        value={this.state.value}
        onChange={this.updateInput}
      />
      <button type="button" onClick={this.updateTasks}>
        Click me!
      </button>
      <Overview input={this.state.tasks} />
    </div>
    )
  }
}

export default App;
