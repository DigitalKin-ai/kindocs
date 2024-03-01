// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation DigitalKin',
  tagline: 'Libérer le temps humain',
  favicon: 'img/logo-dark.svg',

  // Set the production url of your site here
  url: 'https://digitalkin.ai/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'digitalkin', // Usually your GitHub org/user name.
  projectName: 'kindocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  /* plugins: [
      [
          "docusaurus-plugin-remote-content",
          {
              // options here
              name: "some-content", // used by CLI, must be path safe
              sourceBaseUrl: "https://drive.google.com/drive/folders/1dr5OBgzuOSPMRIcnYAk35_XQpjndrjHu?usp=sharing", // the base url for the markdown (gets prepended to all of the documents when fetching)
              outDir: "docs", // the base directory to output to.
              documents: ["home.md"], // the file names to download
          },
      ],
  ], */

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DigitalKin-ai/kindocs/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DigitalKin-ai/kindocs/tree/main',
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
        title: 'Documentation DigitalKin',
        logo: {
          alt: 'DigitalKin Logo',
          src: 'img/logo-dark.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Kin Academy',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/DigitalKin-ai',
            label: 'GitHub',
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
                label: 'Kin Academy',
                to: '/docs/category/catalogue-de-kins',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/rTZtRUtQ2v',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/digitalkin-ai/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              /**{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'GitHub',
                href: 'https://github.com/DigitalKin-ai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DigitalKin.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
