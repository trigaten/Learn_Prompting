// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig() {
  return {
    title: 'Promptgineering',
    tagline: 'Prompt engineering is opaque. Lets make it transparent.',
    url: 'https://trigaten.github.io/',
    baseUrl: '/promptgineering/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
  
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'trigaten', // Usually your GitHub org/user name.
    projectName: 'promptgineering', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },
  
    presets: [
      [
        'classic',
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://github.com/trigaten/promptgineering',
            remarkPlugins: [
              (await import("remark-gfm")).default,
              [(await import("@benchmark-urbanism/remark-bibtex")).default, { bibtexFile: 'bibliography.bib' }]
            ]
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
          googleAnalytics: {
            trackingID: 'G-FV0C417KS8'
          },
        }),
      ],
    ],
  
    themeConfig:
      ({
        navbar: {
          title: 'Promptgineering',
          logo: {
            alt: 'My Site Logo',
            src: 'img/simple_ai.png',
          },
          items: [
            {
              href: 'https://github.com/trigaten/promptgineering',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          copyright: `Copyright © ${new Date().getFullYear()} Promptgineering.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  };
}

module.exports = createConfig;
