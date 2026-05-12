#!/usr/bin/env bun
/**
 * EdgeOS backend installer — placeholder.
 *
 * EdgeOS provides calendar + directory APIs. Integration is not yet wired up.
 *
 * If your EdgeOS integration needs OpenClaw configuration (MCP server
 * entries, cron jobs, gateway settings), wire it here. Runtime guidance for
 * the agent (tool usage, behavioral notes, prompt content) can be added by
 * editing the markdown files in `../workspace/` — TOOLS.md, HEARTBEAT.md,
 * AGENTS.md, etc. — or adding EdgeOS-specific files there.
 *
 * The orchestrator (`install.ts`) calls `installEdgeos()` during the
 * EdgeClaw install pass. Can also be run directly:
 *
 *   bun install_edgeos.ts
 */

export function installEdgeos(): void {
  // placeholder — no-op
}

if (import.meta.main) {
  installEdgeos();
}
