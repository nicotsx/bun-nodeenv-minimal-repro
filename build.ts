await Bun.build({
  entrypoints: ['./src/program.ts'],
  outdir: './dist',
  target: 'bun',
  env: 'disable',
});

