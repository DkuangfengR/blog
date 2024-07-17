// 配置项
export const DEFAULT_GRID_COLUMNS: { [key: number]: string } = {
  1: 'md:grid-cols-1 xl:grid-cols-1',
  2: 'md:grid-cols-2 xl:grid-cols-2',
  3: 'md:grid-cols-3 xl:grid-cols-3',
  4: 'md:grid-cols-4 xl:grid-cols-4',
  5: 'md:grid-cols-5 xl:grid-cols-5',
  6: 'md:grid-cols-6 xl:grid-cols-6',
  7: 'md:grid-cols-7 xl:grid-cols-7',
  8: 'md:grid-cols-8 xl:grid-cols-8'
};

export default {
  /** 网站配置信息 start */
  title: 'DebNow',
  author: 'LaughingZhu',
  description: 'DevNow — 开发技术周刊',
  keywords: 'DevNow 开源技术博客项目。目前承载着一个技术新闻、开发weekly，每周一上午发布~',
  icon: 'https://gw.alicdn.com/imgextra/i2/O1CN01m9YYjS1QBeW5DOm3I_!!6000000001938-2-tps-400-400.png',
  homePage: 'https://devnow.laughingzhu.cn',
  blogPage: 'https://devnow.laughingzhu.cn',
  githubId: 'LaughingZhu',
  repo: 'LaughingZhu/DevNow',
  /** 网站配置信息  end */

  cdn: 'https://cdn.laughingzhu.cn/',
  // giscus comment status
  giscus: true,
  // use DocSearch?
  // doc: https://docsearch.algolia.com/docs/what-is-docsearch
  search: true,
  // pagntion 配置
  pageSize: 18,
  /** 首页默认列数 */
  default_column: 3
};
