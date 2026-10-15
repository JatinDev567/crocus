# Crocus

The office desk of a saffron grower at Saffron Walden in Essex: the crofts contracted to grow
crocus for it, the baskets of flowers carried in, the bands at the stripping table, the spice
weighed off each basket, the tins it is sealed into, and the apothecaries, dyers and confectioners
who buy it.

```sh
npm install
npm run dev
npm test
```

The desk keeps **Tuesday 10 November 2026**, early in the stripping season. The whole hall book lives
in the page and is opened fresh from a fixed seed on every load, so changes do not survive a
reload.

## Stalls

| Stall | For |
|---|---|
| **Board** | the hall board: the gate loading today, the next delivery, the spice going stale, the garret and the slip book |
| **Crofts** | every croft under contract, its seed, agent, acreage and dock |
| **Baskets** | the intake book: each basket of crocus, whether it is tolled or bought, and what it makes |
| **Bands** | the stripping bands and their strength |
| **Weighings** | the spice off each basket, its yield, its grade and what it is worth |
| **Tins** | the tin book: every tin weighed, packed, held and sold, and the garret rent |
| **Dispatches** | the dispatches packed at the four gates, the tins in each and the cartage paid |
| **Patrons** | the hall's share register and the dividend due |
| **Dealers** | the dealers' ledger and each dealer's terms |
| **Slips** | the slip book, and taking money |
| **Pickers** | the wages book, and putting people on it |
| **Packmen** | who carts the tins away, and the least load they will take |
| **Humour** | how this browser lays the stalls out |

## Layout

```
src/spicery/    rules, lists and the seed
src/hallbook/   the hall book and one module for each part of the hall
src/cranks/     useRead, useWrite and useHeading
src/crockery/   shelves, choices and badges
src/stalls/     the pages, each with its tests
src/humour/     this browser's layout preferences
src/stile/      how a test opens the desk
docs/           architecture, testing, and the hall rules
```

## Conventions

- **Every refusal comes from a rule** in `src/spicery`, word for word; see
  [docs/hall-rules.md](docs/hall-rules.md).
- **Stalls only hold copies.** Everything goes through `inquire`, which returns a deep copy; a
  stall that wants fresh figures calls `refresh`.
- **A stall's source is a `useCallback`,** and its dependency list decides when the book is asked
  again, so every filter the stall offers belongs in it.
- **Money is whole pence** until `pounds` writes it out.
- **Days are `YYYY-MM-DD` strings,** read with `calendar.ts`, never with the machine clock.
- **Browser choices stay in the browser,** under `crocus.humour`.

See [docs/architecture.md](docs/architecture.md) and [docs/testing.md](docs/testing.md).

##Link
https://drive.google.com/file/d/12z7uBQLy3jTH0mqh7uy-yLFrfYCMZ2RD/view?usp=sharing
