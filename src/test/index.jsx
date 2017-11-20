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
      <BitmapFontNumber number={1234567890} numberUrl="url(images/number.png)" deltaHeight={65} deltaWidth={29} numberDistance={64}
        numberFormat={true}
    />
    </div>)
  }
}

export default Test;
