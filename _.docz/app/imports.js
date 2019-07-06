export const imports = {
  'src/pages/howto.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-howto" */ 'src/pages/howto.mdx'
    ),
  'src/pages/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-index" */ 'src/pages/index.mdx'
    ),
  'src/pages/page1.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-page1" */ 'src/pages/page1.mdx'
    ),
  'src/pages/page2.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-page2" */ 'src/pages/page2.mdx'
    ),
}
