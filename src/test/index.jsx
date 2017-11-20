import React from "react";
import ReactDOM from "react-dom";
import BitmapFontNumber from "../main"
import {connect} from "react-redux";

class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (<div>
      <BitmapFontNumber textTest={this.props.textTest}/>
    </div>)
  }
}
const mapStatetoProps = (state, ownprops) => ({textTest: state.utils.test});

export default connect(mapStatetoProps)(Test);
