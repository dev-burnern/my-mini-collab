import { z } from "zod";

import { getRequestUserId } from "@/lib/auth/request-user";
import { collabStore } from "@/lib/data/collab-store";

const createWorkspaceSchema = z.object({
  name: z.string().min(1).max(120),
});

type WorkspaceResponse = Awaited<
  ReturnType<typeof collabStore.createWorkspaceWithOwner>
>;

type WorkspaceDeps = {
  getUserId: (request: Request) => Promise<string>;
  createWorkspaceWithOwner: (input: {
    name: string;
    ownerUserId: string;
  }) => WorkspaceResponse | Promise<WorkspaceResponse>;
};

const defaultDeps: WorkspaceDeps = {
  getUserId: getRequestUserId,
  createWorkspaceWithOwner: (input) => collabStore.createWorkspaceWithOwner(input),
};

export function createPostWorkspaceHandler(deps: WorkspaceDeps) {
  return async function POST(request: Request) {
    try {
      const userId = await deps.getUserId(request);
      const payload = createWorkspaceSchema.parse(await request.json());
      const result = await deps.createWorkspaceWithOwner({
        name: payload.name,
        ownerUserId: userId,
      });

      return Response.json(result, { status: 201 });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return Response.json(
          {
            message: "INVALID_INPUT",
            issues: error.issues,
          },
          { status: 400 }
        );
      }

      if (error instanceof Error && error.message === "UNAUTHORIZED") {
        return Response.json({ message: "UNAUTHORIZED" }, { status: 401 });
      }

      return Response.json({ message: "INTERNAL_ERROR" }, { status: 500 });
    }
  };
}

export const POST = createPostWorkspaceHandler(defaultDeps);
