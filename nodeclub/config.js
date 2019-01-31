/**
 * config
 */

var path = require('path');

var config = {

  debug: false,

  get mini_assets() { return !this.debug; }, 

  name: 'Nodeclub',
  description: 'CNode：Node.js专业中文社区', 
  keywords: 'nodejs, node, express, connect, socket.io',

  site_headers: [
    '<meta name="author" content="EDP@TAOBAO" />'
  ],
  site_logo: '/public/images/cnodejs_light.svg', 
  site_icon: '/public/images/cnode_icon_32.png', 

  site_navs: [

    [ '/about', '关于' ]
  ],

  site_static_host: '', 
  
  host: 'localhost',
 
  google_tracker_id: '',

  cnzz_tracker_id: '',

  db: 'mongodb://127.0.0.1/node_club_dev',


  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_db: 0,
  redis_password: '',

  session_secret: 'node_club_secret',  //这个应该填什么，是一个字符串么
  auth_cookie_name: 'node_club',

  port: 3000,

  list_topic_count: 20,

  rss: {
    title: 'CNode：Node.js专业中文社区',
    link: 'http://cnodejs.org',
    language: 'zh-cn',
    description: 'CNode：Node.js专业中文社区',

    max_rss_items: 50
  },

  log_dir: path.join(__dirname, 'logs'),

  // 邮箱配置 不知道怎么填，我用的是foxmail邮箱
  mail_opts: {
    host: 'smtp.qq.com',
    port: 456,
    auth: {
      user: 'nanhupatar@foxmail.com',
      pass: 'xxx'    //这里放自己的密码
    },
    ignoreTLS: true,
  },

  // 这个填的是什么
  weibo_key: 10000000,
  weibo_id: 'your_weibo_id',

  // 这个地方这么写应该没问题吧
  admins: { 'admin': true },

  // 这个地方我是根据官方用例写的但是callbackURL 不知道这样写可不可以   
  GITHUB_OAUTH: {
    clientID: 'xxx',
    clientSecret: 'xxx',
    callbackURL: 'http://mysite.cn/auth/github/callback'
  },

  allow_sign_up: true,


  oneapm_key: '',

  qn_access: {
    accessKey: 'your access key',
    secretKey: 'your secret key',
    bucket: 'your bucket name',
    origin: 'http://your qiniu domain',
    uploadURL: 'http://xxxxxxxx',
  },

  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  file_limit: '1MB',


  tabs: [
    ['share', '分享'],
    ['ask', '问答'],
    ['job', '招聘'],
  ],

  jpush: {
    appKey: 'YourAccessKeyyyyyyyyyyyy',
    masterSecret: 'YourSecretKeyyyyyyyyyyyyy',
    isDebug: false,
  },

  create_post_per_day: 1000, 
  create_reply_per_day: 1000, 
  create_user_per_ip: 1000,
  visit_per_day: 1000, 
};

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://127.0.0.1/node_club_test';
}

module.exports = config;
