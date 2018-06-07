import React, { Component } from "react";
import { NAVBAR_BRAND } from "./constants/constants";
import VideoFeedManager from "./containers/VideoFeedManager";
import NavigationBar from "./components/NavigationBar";
import { Provider } from "react-redux";
import "./styles/App.css";
import PropTypes from "prop-types";

export class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <NavigationBar brand={NAVBAR_BRAND} />
          <VideoFeedManager />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object
};

export default App;
