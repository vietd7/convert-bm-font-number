import React from "react"
import ReactDOM from "react-dom"
require("./style.scss")
class BitmapFontNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textTest: this.props.textTest
    }
  }
  render() {
    return (<div>{this.state.textTest}</div>)
  }

}

export default BitmapFontNumber;
