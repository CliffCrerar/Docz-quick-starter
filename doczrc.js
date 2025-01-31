/**
 * DOCZ CONFIG
 */
const chLog = false;
const doczConfig = {
    title: 'Docks Quick Starter',
    description: 'This is my awesome documentation',
    menu: [
        'Landing',
        'How to',
        'Page Z',
        'Page A'
    ],
    // theme: 'docz-theme-default',
    themeConfig: {
        logo: {
            src: 'https://cdn-cloudflare.ga/assets/site-logo/docz/docz.logo.svg',
            width: 150
        }
        // mode: 'dark',
        // colors: {
        //     primary: 'tomato'
        // },
    },
    files: ['./README.mdx', 'src/**/*.{md,markdown,mdx}'],
    public: 'public',
    indexHtml: 'index.html',
    dest: '/dist'
};

export default doczConfig;
