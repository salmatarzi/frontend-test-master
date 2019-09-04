import React from "react";
import renderer from "react-test-renderer";
import { ContactView } from "./ContactView";
import { Router } from "../utils/router";

import "isomorphic-fetch";

describe("ContactView", () => {
  it("renders without errors", () => {
    const tree = renderer.create(
      <Router>
        <ContactView />
      </Router>
    );
    expect(tree.toJSON()).toBeTruthy();
  });
});
