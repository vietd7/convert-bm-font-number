import React from "react"
import ReactDOM from "react-dom"
import formatter from "js-common-formatter";
require("./style.scss")
class BitmapFontNumber extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (<div className="number-wrap" style={{
        height: this.props.deltaHeight + "px"
      }}>
      {
        (() => {
          var arrNumberDisplay = [];
          var arrNumber = this.props.numberFormat
            ? formatter.numberWithCommas(this.props.number).split("")
            : this.props.number.toString().split("");
          for (var i in arrNumber) {
            switch (arrNumber[i]) {
              case "1":
                arrNumberDisplay.push(<div key={i} className="number-item item-1" style={{
                    background: this.props.numberUrl + "-" + 0 * this.props.numberDistance + "px 0px no-repeat",
                    width: (this.props.deltaWidth * (9 / 10)) + 'px'
                  }}></div>)
                break;
              case "2":
                arrNumberDisplay.push(<div key={i} className="number-item item-2" style={{
                    background: this.props.numberUrl + "-" + 1 * this.props.numberDistance + "px 0px no-repeat",
                    width: this.props.deltaWidth + 'px'
                  }}></div>)
                break;
              case "3":
                arrNumberDisplay.push(<div key={i} className="number-item item-3" style={{
                    background: this.props.numberUrl + "-" + 2 * this.props.numberDistance + "px 0px no-repeat",
                    width: this.props.deltaWidth + 'px'
                  }}></div>)
                break;
              case "4":
                arrNumberDisplay.push(<div key={i} className="number-item item-4" style={{
                    background: this.props.numberUrl + "-" + 3 * this.props.numberDistance + "px 0px no-repeat",
                    width: this.props.deltaWidth + 'px'
                  }}></div>)
                break;
              case "5":
                arrNumberDisplay.push(<div key={i} className="number-item item-5" style={{
                    background: this.props.numberUrl + "-" + 4 * this.props.numberDistance + "px 0px no-repeat",
                    width: this.props.deltaWidth + 'px'
                  }}></div>)
                break;
              case "6":
                arrNumberDisplay.push(<div key={i} className="number-item item-6" style={{
                    background: this.props.numberUrl + "-" + 5 * this.props.numberDistance + "px 0px no-repeat",
                    width: this.props.deltaWidth + 'px'
                  }}></div>)
                break;
              case "7":
                arrNumberDisplay.push(<div key={i} className="number-item item-7" style={{
                    background: this.props.numberUrl + "-" + 6 * this.props.numberDistance + "px 0px no-repeat",
                    width: this.props.deltaWidth + 'px'
                  }}></div>)
                break;
              case "8":
                arrNumberDisplay.push(<div key={i} className="number-item item-8" style={{
                    background: this.props.numberUrl + "-" + 7 * this.props.numberDistance + "px 0px no-repeat",
                    width: this.props.deltaWidth + 'px'
                  }}></div>)
                break;
              case "9":
                arrNumberDisplay.push(<div key={i} className="number-item item-9" style={{
                    background: this.props.numberUrl + "-" + 8 * this.props.numberDistance + "px 0px no-repeat",
                    width: this.props.deltaWidth + 'px'
                  }}></div>)
                break;
              case "0":
                arrNumberDisplay.push(<div key={i} className="number-item item-0" style={{
                    background: this.props.numberUrl + "-" + 9 * this.props.numberDistance + "px 0px no-repeat",
                    width: this.props.deltaWidth + 'px'
                  }}></div>)
                break;
              case ",":
                arrNumberDisplay.push(<div key={i} className="number-item item--" style={{
                    background: this.props.numberUrl + "-" + (
                    (9 * this.props.numberDistance) + this.props.numberDistance * (9.4 / 10)) + "px 0px no-repeat",
                    width: (this.props.deltaWidth * (6 / 10)) + 'px',
                    marginLeft: "-" + (
                    this.props.deltaWidth * (1 / 10)) + 'px'
                  }}></div>)
                break;

            }
          }
          return arrNumberDisplay;
        })()
      }
    </div>)
  }

}

export default BitmapFontNumber;
