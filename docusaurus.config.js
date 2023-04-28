// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");

async function createConfig() {
  const katex = (await import("rehype-katex")).default;
  return {
    title: "Learn Prompting",
    tagline:
      "A Free, Open Source Course on Communicating with Artificial Intelligence",
    url: "https://learnprompting.org",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "trigaten", // Usually your GitHub org/user name.
    projectName: "promptgineering", // Usually your repo name.
    deploymentBranch: "gh-pages",
    trailingSlash: false,
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: "en",
      locales: [
        "en",
        "es",
        "fr",
        "ja",
        "pt",
        "zh-Hans",
        "ko",
        "si",
        "ru",
        "ar",
      ],
    },
    plugins: [
      [
        "@docusaurus/plugin-client-redirects",
        {
          redirects: [
            // /docs/oldDoc -> /docs/newDoc
            {
              to: "/docs/basics/formalizing",
              from: "/docs/basics/standard_prompt",
            },
          ],
        },
      ],
      async function myPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
    ],

    presets: [
      [
        "classic",
        {
          gtag: {
            trackingID: "G-FV0C417KS8",
          },
          googleAnalytics: {
            trackingID: "G-FV0C417KS8",
          },
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: "https://github.com/trigaten/promptgineering/tree/v1.2.3",
            remarkPlugins: [
              math,
              (await import("remark-gfm")).default,
              [
                (await import("@benchmark-urbanism/remark-bibtex")).default,
                { bibtexFile: "bibliography.bib" },
              ],
              [
                (await import("@renatonagliati/remark-auto-glossary")).default,
                { yamlFile: "glossary.yml" },
              ],
            ],
            rehypePlugins: [katex],
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        },
      ],
    ],
    scripts: [
      {
        src: "https://embed.trydyno.com/embedder.js",
        defer: true,
      },
    ],
    stylesheets: [
      {
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
        type: "text/css",
        integrity:
          "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
        crossorigin: "anonymous",
      },
      {
        href: "https://embed.trydyno.com/embedder.css",
        type: "text/css",
        crossorigin: "anonymous",
      },
      {
        href: "https://fonts.googleapis.com",
        rel: "preconnect",
      },
      {
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
        crossorigin: "",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
    ],
    themeConfig: {
      metadata: [
        {
          name: "keywords",
          content:
            "prompting, prompt engineering, learn prompting, learn, prompt",
        },
      ],
      navbar: {
        title: "Learn Prompting",
        logo: {
          alt: "My Site Logo",
          src: "img/simple_ai.png",
        },
        items: [
          {
            type: 'custom-myAwesomeNavbarItem', 
            position: "left",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: 'https://github.com/trigaten/Learn_Prompting/releases',
            label: 'Change Log',
            position: 'right',
          },
        ]
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Learn Prompting.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
    markdown: {
      mermaid: true,
    },
    themes: ["@docusaurus/theme-mermaid"],
  };
}

module.exports = createConfig;
