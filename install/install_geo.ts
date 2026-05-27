/**
 * Geo backend installer.
 *
 * Installs a `geo-edge-esmeralda` command wrapper into `$HOME/.local/bin`.
 * The wrapper executes the public CLI package through Bun so the agent can use
 * a stable command without this installer vendoring the CLI package.
 */

import { chmodSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

function localBinDir(): string {
  return join(process.env.HOME?.trim() || homedir(), ".local", "bin");
}

export function installGeo(): void {
  const binDir = localBinDir();
  if (!existsSync(binDir)) mkdirSync(binDir, { recursive: true });

  const target = join(binDir, "geo-edge-esmeralda");
  const script = [
    "#!/bin/sh",
    "set -eu",
    'exec bun x --bun @geoprotocol/geo-edge-esmeralda-cli "$@"',
    "",
  ].join("\n");

  writeFileSync(target, script, { mode: 0o755 });
  chmodSync(target, 0o755);
  console.log(`→ geo: installed geo-edge-esmeralda wrapper at ${target}`);
}
