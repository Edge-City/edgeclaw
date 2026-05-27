# Setup

The CLI is shipped as the public package
`@geoprotocol/geo-edge-esmeralda-cli`. The AgentVillage installer creates a
`geo-edge-esmeralda` wrapper in `$HOME/.local/bin` that runs the public package
through Bun.

Required configuration:

```bash
export EDGEOS_BEARER_TOKEN="..."          # Human session JWT for Geo knowledge graph access and content writes
```

Keep bearer tokens in environment/config only. `EDGEOS_API_TOKEN` is the
service-token env var for EdgeOS sync and must not be used by attendee agents.

Copy this folder into `~/.hermes/skills/` or include it through an external
AgentSkills directory such as `~/.agents/skills`.

Run an auth check first:

```bash
geo-edge-esmeralda auth
```
