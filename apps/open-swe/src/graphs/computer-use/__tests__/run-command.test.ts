import { describe, it, expect } from "@jest/globals";
import { runCommand } from "../nodes/run-command.js";
import type { ComputerUseGraphState } from "../state.js";
import { GraphConfig } from "@open-swe/shared/open-swe/types";

describe("runCommand", () => {
  it("executes shell command in local mode", async () => {
    const state = {
      command: "echo hello",
      sandboxSessionId: "",
      targetRepository: { owner: "foo", repo: "bar" },
      branchName: "main",
    } as unknown as ComputerUseGraphState;

    const config = { configurable: { "x-local-mode": "true" } } as GraphConfig;

    const result = await runCommand(state, config);
    expect(result.commandResult).toContain("hello");
  });
});
