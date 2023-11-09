import "./App.css";
import { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component1Visible: true,
      component2Visible: true,
      component3Visible: true,
    };
  }

  handleComponent1Click = () => {
    this.setState({
      component1Visible: true,
      component2Visible: false,
      component3Visible: false,
    });
  };

  handleComponent2Click = () => {
    this.setState({
      component1Visible: false,
      component2Visible: true,
      component3Visible: false,
    });
  };

  
  handleComponent3Click = () => {
    this.setState({
      component1Visible: false,
      component2Visible: false,
      component3Visible: true,
    });
  };

  render() {
    return (
      <div>
        {this.state.component1Visible && 
          <Component1 onClick={this.handleComponent1Click}/>}
        {this.state.component2Visible && 
          <Component2 onClick={this.handleComponent2Click}/>}
        {this.state.component3Visible && (
          <Component3 onClick={this.handleComponent3Click} />
        )}
      </div>
    );
  }
}

class Component1 extends Component {
  render() {
    return (
      <div className="App">
        <PieChart onClick={this.props.onClick}
          radius={15}
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" },
          ]}
        />
      </div>
    );
  }
}

class Component2 extends Component {
  render() {
    return (
      <div className="App">
        <PieChart onClick={this.props.onClick}
          radius={15}
          data={[
            { title: "One", value: 30, color: "#d31900" },
            { title: "Two", value: 15, color: "#001449" },
            { title: "Three", value: 10, color: "#0a837f" },
          ]}
        />
      </div>
    );
  }
}

class Component3 extends Component {
  render() {
    return (
      <div className="App">
        <PieChart onClick={this.props.onClick}
          radius={15}
          data={[
            { title: "One", value: 15, color: "#031c30" },
            { title: "Two", value: 35, color: "#482344" },
            { title: "Three", value: 40, color: "#6A2135" },
          ]}
        />
      </div>
    );
  }
}

export default App;
