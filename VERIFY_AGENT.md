# ChatGPT / Codex Verification Contract

## Standard entrypoint

`npm run verify:agent`

This repository currently uses a dependency-free Node verification helper for its static learning-site artifacts. It checks required management files, rejects GitHub Actions workflow files, parses JSON, and syntax-checks JavaScript.

## Execution rules

1. Read `AGENTS.md`, `task-list.md`, and `NEXT_WORK.md` first.
2. Verify a fixed commit SHA and record it.
3. Use Node.js 22 or newer.
4. Run `npm run verify:agent`.
5. Run any additional task-specific browser/content checks required by the current task.
6. Skipped, unavailable, or failed checks are not PASS.
7. Re-run affected checks if the SHA changes.
8. GitHub Actions are not verification evidence.

## Evidence

Record the verified SHA, command, result, extra task checks, blockers/unrun checks, and review result in `task-list.md`. Store raw evidence only when readback is required.
