// @ts-check
'use strict';

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const pageIdsThatHaveThumnail = [];

fs.readdirSync('./public/images/thumbnails/pages/').forEach((filename) => {
  pageIdsThatHaveThumnail.push(filename.split('.')[0]);
});

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/pages/0b13e1e97b2f4868ac4e2e44e6873ad0',
      },
      {
        source: '/mongsiltour',
        destination: '/pages/08fe6e5ec9e84a2ab515a79799962ac4',
      },
    ];
  },
  env: {},
  publicRuntimeConfig: {
    rootNotionPageId: '0b13e1e97b2f4868ac4e2e44e6873ad0',
    rootNotionSpaceId: 'eb3b7133-dcdd-4332-a932-aaf5cd3a0c02',
    gaTraceId: 'G-1QLKVVZ1G7',
    pageIdsThatHaveThumnail,
  },
};

module.exports = nextConfig;

if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });

  module.exports = withBundleAnalyzer(nextConfig);
}
