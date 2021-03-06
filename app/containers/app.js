import React, { Component, PropTypes } from "react";

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        {this.props.children}
        {/*
          (() => {
            if (process.env.NODE_ENV !== "production") {
              const DevTools = require("mobx-react-devtools").default;
              return <DevTools />;
            }
          })()
        */}
      </div>
    );
  }
}
