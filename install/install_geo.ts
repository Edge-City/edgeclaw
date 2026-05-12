#!/usr/bin/env bun
/**
 * Geo backend installer — placeholder.
 *
 * Geo provides the village knowledge graph. Integration is not yet wired up.
 *
 * If your Geo integration needs OpenClaw configuration (MCP server entries,
 * cron jobs, gateway settings), wire it here. Runtime guidance for the
 * agent (tool usage, behavioral notes, prompt content) can be added by
 * editing the markdown files in `../workspace/` — TOOLS.md, HEARTBEAT.md,
 * AGENTS.md, etc. — or adding Geo-specific files there.
 *
 * The orchestrator (`install.ts`) calls `installGeo()` during the EdgeClaw
 * install pass. Can also be run directly:
 *
 *   bun install_geo.ts
 */

export function installGeo(): void {
  // placeholder — no-op
}

if (import.meta.main) {
  installGeo();
}
