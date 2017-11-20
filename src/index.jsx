import React from "react";
import ReactDOM from "react-dom";
import Test from "./test";

import store from './reducers'
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={store}>
  <Test/>
</Provider>, document.querySelector("#application-container"));
