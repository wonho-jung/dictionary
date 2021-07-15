import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";

describe("snapshot testting", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
