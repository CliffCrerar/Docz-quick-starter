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
            src: 'https://now-static-cdn.c1i44.now.sh/svg/docz.logo.svg',
            width: 150,
        }
    },
    files: ['./README.mdx', 'src/**/*.{md,markdown,mdx}'],
    public: '/public',
    indexHtml: 'public/index.html'
};

chLog && console.log(process.env);

export default doczConfig;
chLog && process.exit();