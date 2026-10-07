# Working on the hall desk

## Before you push

```sh
npm test
npm test
npm run typecheck
npm run lint
npm run build
```

Run the tests twice. A test that waits badly can pass once and fail when the files run together,
and one clean run does not show the suite is steady.

One change per commit, with a message saying what the desk now does: *Hold a tin back from
dispatch*, not *tin fix*.

## Where things go

- **A rule** goes in the right module under `src/spicery` as a `…Problem` function that returns a
  message or `null`, with tests beside it, and its message goes in `docs/hall-rules.md`.
- **A record or a list** goes in `src/spicery/kinds.ts`. If the seed should hold some, add them to
  `seed.ts` and to the checks in `seed.test.ts`.
- **A call on the hall book** goes in the module under `src/hallbook` for that record. Read and
  write only inside `inquire`, turn the clerk away with `improper`, `stalled` or `mislaid`, and test it.
- **A page** goes in `src/stalls`, with a route in `App.tsx`, a menu line if the office should
  reach it from there, and a `*.test.tsx` that opens the desk with `visitHall`.
- **Something stalls share** goes in `src/crockery` if it is furniture, or `src/cranks` if it reaches
  the book.
- **A choice for one browser** goes in `src/humour`, never in the hall book.

## Tests

Read [docs/testing.md](docs/testing.md). In short: look records up instead of writing ids into a
test, copy a *before* figure before the call that changes it, and wait for a write to land.
