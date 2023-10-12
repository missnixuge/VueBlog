/**
 * 全局配置文件
 */
const title = '得梦为鱼'
export default {
  title: title,
  logo: '/src/assets/logo.png',
  key: '*',   //配置主键,目前用于存储
  link: 'https://51as.top',
  favicon: 'https://51as.top/favicon.ico',
  introduction: '毕竟几人真得鹿，不知终日梦为鱼',
  whiteList: ['/login', '/404', '/401', '/lock'], // 配置无权限可以访问的页面
  whiteTagList: ['/login', '/404', '/401', '/lock' ], // 配置不添加tags页面 （'/advanced-router/mutative-detail/*'——*为通配符）
  homePage: '/home',
  aboutPage: '/About',
  copyright: '19058591号',
  tokenTime: 6000,
  blogger: {
    name: '得梦为鱼',
    address: '广东省深圳市',
    qq: '1669387823',
    email: '18272654878@163.com',
    github: 'https://github.com/'
  },
  //http的status默认放行不才用统一处理的,
  statusWhiteList: [400],
  //配置菜单的属性
  menu: {
      props: {
          label: 'label',
          path: 'path',
          icon: 'icon',
          children: 'children'
      }
  },
  sideBar: [{name:'关于',path:'/About'},{name:'友链',path:'/FriendLink'},{name:'留言',path:'/MessageBoard'}]
}
