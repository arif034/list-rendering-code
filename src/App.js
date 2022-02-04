import "./styles.css";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ele: "",
      eles: []
    };
  }
  changeHandler = (event) => {
    this.setState(() => {
      return {
        ele: event.target.value
      };
    });
  };

  submitHandler = () => {
    this.setState(() => {
      return {
        eles: [this.state.ele, ...this.state.eles],
        ele: ""
      };
    });
  };

  render() {
    const disp = this.state.eles.map((element, index) => {
      return <div key={index}>{element}</div>;
    });
    console.log(disp);
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.ele}
          onChange={this.changeHandler}
        ></input>
        <button onClick={this.submitHandler}> Submit</button>
        <div className="current-element">{this.state.ele}</div>
        <div className="element-list">{disp}</div>
      </div>
    );
  }
}
export default App;
