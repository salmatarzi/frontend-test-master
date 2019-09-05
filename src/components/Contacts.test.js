import React from "react";
import { create } from "react-test-renderer";
import Contacts from "./Contacts";
import { Router } from "../utils/router";

import "isomorphic-fetch";

describe("Contacts", () => {
  describe("UI element rendering", () => {
    it("renders without errors", () => {
      const tree = create(
        <Router>
          <Contacts />
        </Router>
      );
      expect(tree.toJSON()).toBeTruthy();
    });
  });

  describe("Data fetching", () => {
    beforeAll(() => {
      const mockFetchPromise = Promise.resolve({
        json: () => []
      });
      jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise); // 4
    });

    it("calls the correct url", () => {
      create(
        <Router>
          <Contacts />
        </Router>
      );

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/users"
      );
    });

    afterAll(() => {
      global.fetch.mockClear();
    });
  });
});
