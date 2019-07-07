/**
 * DOCZ CONFIG
 */
const chLog = false;
import { splash } from 'docz-plugin-splash';
const doczConfig = {
    title: require('./package.json').name,
    description: 'This is my awesome documentation',
    menu: require('./src/menu'),
    // theme: 'docz-theme-default',
    themeConfig: {
        logo: {
            src: 'https://cdn-docz-quick-starter.c1i44.now.sh/docz.logo.svg',
            width: 150
        }
        // mode: 'dark',
        // colors: {
        //     primary: 'tomato'
        // },
    },
    files: ['./README.mdx', 'src/**/*.{md,markdown,mdx}'],
    public: 'public',
    indexHtml: './public/index.html',
    dest: '/dist',
    plugins: [splash()]
};

chLog && console.log(process.env);
chLog && process.exit();
export default doczConfig;