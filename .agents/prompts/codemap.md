# Build or refresh CODEMAP.md
*Read lane · Gemini · Light*

One file the other agents read instead of crawling the repo. Read as much of the repo as you need. Write at most 150 lines.

Write `.agents/CODEMAP.md` with:

1. **Header:** today's date and `git rev-parse --short HEAD`.
2. **Stack and commands:** the exact install, dev, test and lint commands. Check each one exists in the package files or scripts.
3. **Folder map:** every top-level folder and the important second-level ones, one line each on what lives there.
4. **Flow:** entry points and how a request or data moves through the app, in 5–10 lines.
5. **Where to change X:** the 10–15 most likely edits (routes, styles and tokens, copy strings, API calls, env config, tests), each with its path.
6. **Conventions:** naming, state, styling, error handling. Only what's actually in the code.
7. **Gotchas:** generated files, unusual build steps, code that looks dead but isn't.

Don't change any code. Commit as `docs: refresh CODEMAP`.

Refresh it after a big refactor, or when another agent reports the map is wrong.
