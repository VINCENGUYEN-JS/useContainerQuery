/**
 * @jest-environment jsdom
 */

import useContainerQuery from "../src";
import { renderHook } from "@testing-library/react-hooks";

let createNode = jest.fn((node) => ({
  target: node,
  contentRect: { width: 300 },
}));

describe("useContainerQuery", () => {
  let node;
  beforeEach(() => {
    node = createNode(document.createElement("div"));
  });

  test("useContainerQuery is not null", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useContainerQuery(node, 150)
    );
    // await waitForNextUpdate();
    // const matches = result.current;
    console.log({ result });
    expect(result.current).toBeTruthy();
  });
});
