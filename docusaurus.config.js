// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Royal Family Gaming',
  tagline: 'Rules, and server commands, all in one place',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'http://216.158.237.106:29015',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sickness0666', // Usually your GitHub org/user name.
  projectName: 'RFGDocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Royal Family Gaming',
        logo: {
          alt: 'RFG Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://royalfamilygaming.com',
            label: 'Royal Family Gaming',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Rules',
                to: '/docs/rules',
              },
			  {
                label: 'Commands',
                to: '/docs/commands',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/rfgaming',
              },
              {
                label: 'X',
                href: 'https://x.com/RoyalFamilyRust',
              },
			  {
                label: 'Instagram',
                href: 'https://www.instagram.com/royal.family.gaming',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@RoyalFamilyGaming',
              },
              {
                label: 'News',
                href: 'https://royalfamilygaming.com/news',
              },			  
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Royal Family Gaming`,
      },
      prism: {
        darkTheme: prismThemes.github,
        theme: prismThemes.dracula,
      },
    }),
};

export default config;
