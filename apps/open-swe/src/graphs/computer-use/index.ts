import { START, END, StateGraph } from "@langchain/langgraph";
import { GraphConfiguration } from "@open-swe/shared/open-swe/types";
import { initializeSandbox } from "../shared/initialize-sandbox.js";
import { runCommand, cleanup } from "./nodes/index.js";
import { ComputerUseGraphStateObj } from "./state.js";

const workflow = new StateGraph(ComputerUseGraphStateObj, GraphConfiguration)
  .addNode("initialize", initializeSandbox)
  .addNode("run-command", runCommand)
  .addNode("cleanup", cleanup)
  .addEdge(START, "initialize")
  .addEdge("initialize", "run-command")
  .addEdge("run-command", "cleanup")
  .addEdge("cleanup", END);

export const graph = workflow.compile();
graph.name = "Open SWE - Computer Use";
