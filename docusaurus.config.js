const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const math = require('remark-math')

async function createConfig() {
    const katex = (await import('rehype-katex')).default
    return {
        title: 'Naučte se Promptingu: AI Prompt Engineering',
        tagline: 'Český bezplatný kurz o komunikaci s umělou inteligencí',
        url: 'https://aipe.cz',
        baseUrl: '',
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'warn',
        favicon: 'img/cai_logo.ico',
        organizationName: 'kkosheev',
        projectName: 'Learn_Prompting_CAI',
        deploymentBranch: 'gh-pages',
        trailingSlash: false,
        // i18n: {
        //     defaultLocale: 'cs',
        //     locales: ['cs'],
        // },
        plugins: [
            [
                '@docusaurus/plugin-client-redirects',
                {
                    redirects: [
                        {
                            to: '/docs/basics/formalizing',
                            from: '/docs/basics/standard_prompt',
                        },
                        {
                            to: '/docs/tooling/IDEs/intro',
                            from: '/docs/IDEs/intro',
                        },
                    ],
                },
            ],
            async function myPlugin(context, options) {
                return {
                    name: 'docusaurus-tailwindcss',
                    configurePostCss(postcssOptions) {
                        postcssOptions.plugins.push(require('tailwindcss'))
                        postcssOptions.plugins.push(require('autoprefixer'))
                        return postcssOptions
                    },
                }
            },
        ],

        presets: [
            [
                'classic',
                {
                    gtag: {
                        trackingID: 'G-BV2JPXRYS8',
                    },
                    googleAnalytics: {
                        trackingID: 'G-BV2JPXRYS8',
                    },
                    docs: {
                        sidebarPath: require.resolve('./sidebars.js'),
                        remarkPlugins: [
                            math,
                            (await import('remark-gfm')).default,
                            [
                                (await import('@benchmark-urbanism/remark-bibtex')).default,
                                { bibtexFile: 'bibliography.bib' },
                            ],
                            [
                                (await import('@renatonagliati/remark-auto-glossary')).default,
                                { yamlFile: 'glossary.yml' },
                            ],
                        ],
                        rehypePlugins: [katex],
                    },
                    theme: {
                        customCss: require.resolve('./src/css/custom.css'),
                    },
                },
            ],
        ],
        stylesheets: [
            {
                href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
                type: 'text/css',
                integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
                crossorigin: 'anonymous',
            },
            {
                href: 'https://embed.trydyno.com/embedder.css',
                type: 'text/css',
                crossorigin: 'anonymous',
            },
            {
                href: 'https://fonts.googleapis.com',
                rel: 'preconnect',
            },
            {
                href: 'https://fonts.gstatic.com',
                rel: 'preconnect',
                crossorigin: '',
            },
            {
                href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            },
        ],
        themeConfig: {
            metadata: [
                {
                    name: 'description',
                    content:
                        'Learn Prompting je nejrozsáhlejší a nejkomplexnější kurz v oblasti prompt inženýrství dostupný online, s více než 60 moduly obsahu, přeloženými do 9 jazyků a prosperující komunitou.',
                },
                {
                    name: 'keywords',
                    content: 'prompting, AI kurz zdarma, AI zdarma, prompt engeneering, naučit se prompting, naučit se, prompt, AI, chatGPT',
                },
                {
                    name: 'og:title',
                    content: 'Naučte se Promptingu: Průvodce komunikací s umělou inteligencí',
                },
                {
                    name: 'og:description',
                    content:
                        'Learn Prompting je nejrozsáhlejší a nejkomplexnější kurz v oblasti prompt inženýrství dostupný online, s více než 60 moduly obsahu, přeloženými do 9 jazyků a prosperující komunitou..',
                },
                {
                    name: 'og:url',
                    content: 'https://aipe.cz',
                },
                {
                    name: 'og:image',
                    content: 'https://aipe.cz/img/og-image.jpg', // Replace this with the actual path to your og-image.
                },
                {
                    name: 'og:type',
                    content: 'website',
                },
            ],
            navbar: {
                title: 'AI Česky',
                logo: {
                    alt: 'AI Kurzy v Češtině',
                    src: 'img/cai_logo.png',
                },
                items: [
                    {
                        type: 'custom-myAwesomeNavbarItem',
                        position: 'left',
                    },
                    //          {
                    //            type: "localeDropdown",
                    //            position: "right",
                    //         },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `Copyright © ${new Date().getFullYear()} Learn Prompting (AI Česky).`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        },
        markdown: {
            mermaid: true,
        },
        themes: ['@docusaurus/theme-mermaid'],
    }
}

module.exports = createConfig
