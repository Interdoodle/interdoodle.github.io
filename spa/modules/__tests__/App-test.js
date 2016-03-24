'use strict';

jest.unmock("../App");

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import App from "../App";

describe("App", () => {
  describe("header", () => {
    const app = TestUtils.renderIntoDocument(<App/>);
    const appNode = ReactDOM.findDOMNode(app);

    it("contains a title", () => {
      expect(appNode.textContent).toContain("Interdoodle");
    });
  });
});