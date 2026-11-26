# Deadpan Forecasts — Cities That Don't Exist

[![Bounty](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/Junior-Coding-ID/deadpan-forecasts/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/Junior-Coding-ID/deadpan-forecasts/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

Entry for the [DEADPAN FORECASTS bounty](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c) ($2, winner takes all).

## Jawaban (152 karakter)

> Torvick: Today's 1.2 inches of rain will fall at 3:14 p.m. as a single 80-ton drop on Market Square; umbrellas are discouraged, and skies clear by 3:15.

## Cara kerja main.ts

`main.ts` adalah program Node.js (CommonJS) yang:

1. Menyimpan jawaban final sebagai konstanta `ANSWER`.
2. Memvalidasi panjang jawaban harus 1–160 karakter (gate bounty), dan menolak whitespace di awal/akhir — throw bila di luar gate.
3. Menulis `entry.txt` ke `outDir` dari `MAKEFUN_OUTPUT_DIR` (fallback `MAKEFUN_OUTPUT`, lalu `/output`), tanpa newline tambahan.
4. Membaca kembali `entry.txt` dan memastikan isinya byte-identik dengan `ANSWER`.

Jalankan dengan `node main.ts`.
