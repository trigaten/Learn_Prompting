const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");

async function createConfig() {
  const katex = (await import("rehype-katex")).default;
  return {
    title: "Learn Prompting: Your Guide to Communicating with AI",
    tagline:
      "A Free, Open Source Course on Communicating with Artificial Intelligence",
    url: "https://learnprompting.org",
    baseUrl: "/docs",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "trigaten",
    projectName: "promptgineering",
    deploymentBranch: "gh-pages",
    trailingSlash: false,
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
        "de",
        "uk",
        "id",
      ],
    },
    scripts: [
      {
        src:
          "https://tag.clearbitscripts.com/v1/pk_5621ff511ea83a6ec015bee0a0b5dd79/tags.js",
        async: true,
      },
    ],
    plugins: [
      [
        "@docusaurus/plugin-client-redirects",
        {
          redirects: [
            {
              to: "/docs/basics/formalizing",
              from: "/docs/basics/standard_prompt",
            },
            {
              to: "/docs/tooling/IDEs/intro",
              from: "/docs/IDEs/intro",
            },
            {
              to: "/our_services",
              from: "/consulting",
            },
          ],
        },
      ],
      async function myPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
      ["posthog-docusaurus", {
        apiKey: process.env.POSTHOG_API_KEY || "DEV",
        appUrl: "https://app.posthog.com", // optional
        enableInDevelopment: false, // optional
      }],
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
            admonitions: {
              tag: ":::",
              keywords: [
                "note",
                "tip",
                "info",
                "caution",
                "danger",
                "takeaways",
              ],
            },
            sidebarPath: require.resolve("./sidebars.js"),
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
            rehypePlugins: [[katex, { strict: false }]],
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        },
      ],
    ],
    stylesheets: [
      {
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
        type: "text/css",
        integrity:
          "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
        crossorigin: "anonymous",
        defer: true,
      },
      {
        href: "https://fonts.googleapis.com",
        rel: "preconnect",
        async: true,
      },
      {
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
        crossorigin: "",
        async: true,
      },
      {
        href:
          "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        async: true,
      },
    ],
    themeConfig: {
      metadata: [
        {
          name: "description",
          content:
            "Learn Prompting is the largest and most comprehensive course in prompt engineering available on the internet, with over 60 content modules, translated into 9 languages, and a thriving community.",
        },
        {
          name: "keywords",
          content:
            "prompting, prompt engineering, learn prompting, learn, prompt, AI, chatGPT",
        },
        {
          name: "og:title",
          content: "Learn Prompting: Your Guide to Communicating with AI",
        },
        {
          name: "og:description",
          content:
            "Learn Prompting is the largest and most comprehensive course in prompt engineering available on the internet, with over 60 content modules, translated into 9 languages, and a thriving community.",
        },
        {
          name: "og:url",
          content: "https://learnprompting.org",
        },
        {
          name: "og:image",
          content: "https://learnprompting.org/docs/assets/astronaut.webp", // Replace this with the actual path to your og-image.
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          to: "consulting",
          label: "Consulting",
          position: "left",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Learn Prompting: Your Guide to Communicating with AI",
        },
        {
          name: "twitter:description",
          content:
            "Learn Prompting is the largest and most comprehensive course in prompt engineering available on the internet, with over 60 content modules, translated into 9 languages, and a thriving community.",
        },
        {
          name: "twitter:url",
          content: "https://learnprompting.org",
        },
        {
          name: "twitter:image",
          content: "https://learnprompting.org/img/twitter-image.webp", // Replace this with the actual path to your twitter-image.
        },
      ],
      navbar: {
        title: "Learn Prompting",
        logo: {
          alt: "My Site Logo",
          src: "img/simple_ai.webp",
        },
        items: [
          {
            type: "custom-myAwesomeNavbarItem",
            position: "left",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/trigaten/Learn_Prompting/releases",
            label: "Change Log",
            position: "right",
          },
        ],
      },
      announcementBar: {
        id: "announcement",
        content:
          'Now available: <a href="https://learn-prompting.webflow.io/courses/intro-to-prompt-engineering">Intro to Prompt Engineering</a>',
        backgroundColor: "#53ffd4",
        textColor: "#000",
        isCloseable: true,
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
