import { Component } from "react";
import uniqid from "uniqid"
//Need to adjust this so it updates tasks from passing props
class Overview extends Component {
  constructor(props) {
    super(props);
    this.genTaskList = this.genTaskList.bind(this)
  }

  genTaskList() {
    const tasksLi = this.props.input.map((e) => {
      return <li key={uniqid()}>{e}</li>
  });
    return <ul>{tasksLi}</ul>;
  }

  render() {
    console.log(this.props.input);
    return (
      <div>
        {this.props.input.length ? this.genTaskList() : <p>Tasks go here</p>}
      </div>
    )
  }
}

export default Overview;
