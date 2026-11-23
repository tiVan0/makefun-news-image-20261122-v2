# Sunday, 22 November 2026 — The World in One Day

[![news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/tiVan0/makefun-news-image-20261122-v2/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/tiVan0/makefun-news-image-20261122-v2/reward.svg)](https://make.fun/bounty/news-image-20261122)

An entry for the make.fun bounty
[“Sum up 22 November's world news in one image”](https://make.fun/bounty/news-image-20261122):
one 1024×1024 newspaper front page summarising 22 November 2026 —
3 lead stories, 10 illustrated picture cards, 22 further stories,
a “WHERE IT HAPPENED” map with 13 numbered pins, and a DATE CHECK strip
stating the wires cut-off, which stories were reported on Friday–Saturday,
which near-misses were deliberately left out, and which claims are unconfirmed.

## What changed from v1

v1 (“Sunday, 22 November 2026”, dev 0.980122, rank #966/12,891) is the
baseline. This v2 keeps the same 35 stories and the same newspaper template,
and fixes the documented weaknesses:

- **13 illustrated items** (v1: 10) — the three leads now each carry their
  own original drawing, matching the top-5 entries on the live board
  (13–15 illustrated each).
- **9 balanced regions, max 9** (v1: 6 regions, Americas-heavy at 12).
- **Bigger map pins** (r=9, numbered and labelled) with the Europe/Middle
  East cluster spread by hand.
- **Primary-source numbers**: Nvidia −14% is cited to the Nasdaq official
  close ($125.53, −14.01% from $145.98, Fri 20 Nov) and the S&P 500 −3.70%
  to S&P Dow Jones Indices (close 6,910.39) — no aggregator attribution.
  Both figures were verified by an independent boolean fact-check.
- **A full DATE CHECK strip**: wires cut 22 Nov 23:59 UTC, stories reported
  Fri–Sat listed with dates, near-misses deliberately left out, and
  [REPORTED]/[CLAIM] certainty labels.

## How to run

`main.ts` is a static copier (Node built-ins only). It copies the
pre-rendered `entry.png` next to it into the grader output directory:

```sh
node main.ts
# writes $MAKEFUN_OUTPUT_DIR/entry.png (default /output), mode 0644
```

`entry.png` is 1024×1024, RGB, 216,206 bytes (≤1 MiB). Running `main.ts`
twice produces byte-identical output. The image was drawn from scratch
with Pillow by `render.py` in the build session; all drawings are original,
not photographs.

## Licence

MIT — see [LICENSE](LICENSE).
