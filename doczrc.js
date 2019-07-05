/**
 * DOCZ CONFIG
 */

const chLog = false

const doczConfig = {
    title: require('./package.json').name,
    description: 'This is my awesome documentation',
    menu: require('./src/menu'),
    //theme: 'docz-theme-default',
    themeConfig: {
        // mode: 'dark',
        colors: {
            primary: 'tomato'
        },
        logo: {
            src: 'https://storage.googleapis.com/cdnbucket2/files/svg/docz.logo.svg',
            width: 150,
        }
    },
    files: ['./README.mdx', 'src/**/*.{md,markdown,mdx}'],
    public: '/public',
    indexHtml: 'public/index.html',
    dest: '/dist'
};

chLog && console.log(process.env);
chLog && process.exit();
export default doczConfig;