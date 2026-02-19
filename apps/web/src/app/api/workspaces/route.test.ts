import { describe, expect, it } from "vitest";

import { createPostWorkspaceHandler } from "./route";

describe("POST /api/workspaces", () => {
  it("creates workspace and owner membership", async () => {
    const postWorkspace = createPostWorkspaceHandler({
      getUserId: async () => "user-1",
      createWorkspaceWithOwner: async ({ name, ownerUserId }) => ({
        workspace: {
          id: "ws-1",
          name,
          createdBy: ownerUserId,
        },
        membership: {
          workspaceId: "ws-1",
          userId: ownerUserId,
          role: "owner",
        },
      }),
    });

    const req = new Request("http://localhost/api/workspaces", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: "Capstone Team" }),
    });

    const res = await postWorkspace(req);
    const body = await res.json();

    expect(res.status).toBe(201);
    expect(body.workspace.name).toBe("Capstone Team");
    expect(body.membership.role).toBe("owner");
    expect(body.membership.userId).toBe("user-1");
  });
});
