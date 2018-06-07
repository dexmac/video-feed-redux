import React from "react";
import jest from "jest-mock";
import VideoSourceSelect from "../../components/VideoSourceSelect";

describe("VideoSourceSelect", () => {
  let props;
  let mountedVideoSourceSelect;

  /**
   * Clearing props before each test
   */
  beforeEach(() => {
    props = {
      selectedValues: undefined,
      actionOnSelection: undefined
    };
    mountedVideoSourceSelect = undefined;
  });

  /**
   * Shallow rendering vs. snapshot test
   */
  it("renders correctly && matches snapshot", () => {
    const actionOnSelectionMock = jest.fn();
    const tree = shallow(
      <VideoSourceSelect
        selectedValues={[]}
        actionOnSelection={actionOnSelectionMock}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
