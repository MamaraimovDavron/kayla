import { Component } from "react";
import Header from "./Header";
import Middle from "./Middle";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Middle />
      </div>
    );
  }
}

export default App;
