import { describe, it, expect } from "@jest/globals";
import { graph } from "../index.js";
import { GraphConfig } from "@open-swe/shared/open-swe/types";

// Graph invocation requires Node runtime to support local mode.
// This test ensures the graph executes end-to-end in local mode.
describe("computer-use graph", () => {
  it("runs command and returns output", async () => {
    const config = { configurable: { "x-local-mode": "true" } } as GraphConfig;
    const result = await graph.invoke(
      {
        command: "echo hi",
        targetRepository: { owner: "foo", repo: "bar" },
        branchName: "main",
      },
      config,
    );
    expect(result.commandResult).toContain("hi");
  });
});
