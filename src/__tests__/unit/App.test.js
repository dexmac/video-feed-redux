import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import { App } from "../../App";

it("renders correctly && matches snapshot", () => {
  const tree = shallow(<App store={store} />);
  expect(tree).toMatchSnapshot();
});
