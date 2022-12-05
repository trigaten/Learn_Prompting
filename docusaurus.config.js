// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');

async function createConfig() {
  const katex = (await import('rehype-katex')).default;
  return {
    title: 'Learn Prompting',
    tagline: 'Prompting LLMs is opaque. Lets make it transparent.',
    url: 'https://learnprompting.org',
    baseUrl: '/',
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
          gtag: {
            trackingID: 'G-FV0C417KS8',
          },
          googleAnalytics: {
            trackingID: 'G-FV0C417KS8',
          },
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://github.com/trigaten/promptgineering/tree/v0.0.2',
            remarkPlugins: [
              math,
              (await import("remark-gfm")).default,
              [(await import("@benchmark-urbanism/remark-bibtex")).default, { bibtexFile: 'bibliography.bib' }]
            ],
            rehypePlugins: [katex],
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
    themeConfig:
      ({
        navbar: {
          title: 'Learn Prompting',
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
          copyright: `Copyright © ${new Date().getFullYear()} Learn Prompting.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
      markdown: {
        mermaid: true,
      },
      themes: ['@docusaurus/theme-mermaid'],
  };
}

module.exports = createConfig;
