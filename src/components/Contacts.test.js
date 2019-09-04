import React from "react";
import renderer from "react-test-renderer";
import Contacts from "./Contacts";
import { Router } from "../utils/router";

import "isomorphic-fetch";

describe("Contacts", () => {
  it("renders without errors", () => {
    const tree = renderer.create(
      <Router>
        <Contacts />
      </Router>
    );
    expect(tree.toJSON()).toBeTruthy();
  });
});
