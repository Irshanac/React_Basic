import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <h3>by</h3>
        <h5>have good day {this.props.name}</h5>
      </div>
    );
  }
}
export default Footer;
