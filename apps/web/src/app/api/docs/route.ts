import { z } from "zod";

import { getRequestUserId } from "@/lib/auth/request-user";
import {
  collabStore,
  type CollabStore,
  type DocTemplateKey,
} from "@/lib/data/collab-store";

const createDocSchema = z.object({
  workspaceId: z.string().min(1),
  title: z.string().min(1),
  content: z.string().default(""),
  templateKey: z
    .enum(["meeting-note", "weekly-report", "retrospective", "custom"])
    .default("custom"),
});

type DocsDeps = {
  getUserId: (request: Request) => Promise<string>;
  store: CollabStore;
};

const defaultDeps: DocsDeps = {
  getUserId: getRequestUserId,
  store: collabStore,
};

function getWorkspaceIdFromUrl(url: string) {
  const workspaceId = new URL(url).searchParams.get("workspaceId");
  if (!workspaceId) throw new Error("INVALID_INPUT");
  return workspaceId;
}

function ensureWorkspaceAccess(store: CollabStore, workspaceId: string, userId: string) {
  if (!store.isWorkspaceMember(workspaceId, userId)) {
    throw new Error("FORBIDDEN");
  }
}

function handleError(error: unknown) {
  if (error instanceof z.ZodError) {
    return Response.json({ message: "INVALID_INPUT", issues: error.issues }, { status: 400 });
  }
  if (error instanceof Error && error.message === "INVALID_INPUT") {
    return Response.json({ message: "INVALID_INPUT" }, { status: 400 });
  }
  if (error instanceof Error && error.message === "UNAUTHORIZED") {
    return Response.json({ message: "UNAUTHORIZED" }, { status: 401 });
  }
  if (error instanceof Error && error.message === "FORBIDDEN") {
    return Response.json({ message: "FORBIDDEN" }, { status: 403 });
  }
  return Response.json({ message: "INTERNAL_ERROR" }, { status: 500 });
}

export function createDocsHandlers(deps: DocsDeps) {
  return {
    GET: async (request: Request) => {
      try {
        const userId = await deps.getUserId(request);
        const workspaceId = getWorkspaceIdFromUrl(request.url);
        ensureWorkspaceAccess(deps.store, workspaceId, userId);

        const docs = deps.store.listDocsByWorkspace(workspaceId);
        return Response.json({ docs }, { status: 200 });
      } catch (error) {
        return handleError(error);
      }
    },

    POST: async (request: Request) => {
      try {
        const userId = await deps.getUserId(request);
        const payload = createDocSchema.parse(await request.json());
        ensureWorkspaceAccess(deps.store, payload.workspaceId, userId);

        const doc = deps.store.createDoc({
          workspaceId: payload.workspaceId,
          title: payload.title,
          content: payload.content,
          templateKey: payload.templateKey as DocTemplateKey,
          userId,
        });

        return Response.json({ doc }, { status: 201 });
      } catch (error) {
        return handleError(error);
      }
    },
  };
}

const handlers = createDocsHandlers(defaultDeps);

export const GET = handlers.GET;
export const POST = handlers.POST;
