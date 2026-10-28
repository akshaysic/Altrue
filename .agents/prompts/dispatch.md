# Dispatch a wave through the Conductor MCP
*Optional. Needs Conductor Cloud and the Conductor MCP server connected to the agent running this (see the kit README). The MCP is in beta, so tool shapes may change.*

Plan cards must already be merged to the default branch, because cloud workspaces start from it.

1. Call `list_models` and note the exact agent and model IDs on offer.
2. Read `.agents/PLAN.md`. For wave **<N>**, take every card whose Status is `ready`:
   - `create_workspace` in project **<P>**, with the card's agent and model. Map the model-map names to the IDs from step 1. If a model or agent isn't offered in the cloud (OpenCode/Gemini may not be), pick the same tier from another vendor allowed by AGENTS.md §11, or leave the card for a local workspace, and say which.
   - The first message is the card's start prompt.
3. Stay inside the parallel caps. Don't start the next wave until the human says go.
4. Reply with a table: card · workspace link · agent / model.

**Status check, later:** "For the workspaces from wave <N>, check each session's status, sum up in two lines what each agent did, and list which are ready for review."
