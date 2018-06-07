import React from "react";
import NavigationBar from "../../components/NavigationBar";

describe("NavigationBar", () => {
  let props;
  let mountedNavBar;

  /**
   * Mounts the component using Enzyme if it is not mounted yet
   * @returns {object} - returns the mounted component
   */
  const navBar = () => {
    if (!mountedNavBar) {
      mountedNavBar = mount(<NavigationBar {...props} />);
    }
    return mountedNavBar;
  };

  /**
   * Clearing props before each test
   */
  beforeEach(() => {
    props = {
      brand: undefined
    };
    mountedNavBar = undefined;
  });

  /**
   * Shallow rendering vs. snapshot test
   */
  it("renders correctly && matches snapshot", () => {
    const tree = shallow(<NavigationBar />);
    expect(tree).toMatchSnapshot();
  });

  describe("when `brand` is defined", () => {
    beforeEach(() => {
      props.brand = "mybrand";
    });

    it("sets the rendered `div` text to the same value as `brand`", () => {
      const myDiv = navBar().find("div.navbar-brand");
      expect(myDiv.text()).toBe(props.brand);
    });
  });

  describe("when `brand` is undefined", () => {
    beforeEach(() => {
      props.brand = undefined;
    });

    it("sets the rendered `div` text to be an empty string", () => {
      const myDiv = navBar().find("div.navbar-brand");
      expect(myDiv.text()).toBe("");
    });
  });
});
