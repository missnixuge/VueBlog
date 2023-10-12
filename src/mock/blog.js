import Mock from 'mockjs'

Mock.setup({
    timeout: 1000
})
export default ({ mock })=>{

    if (!mock) return;
    //导航
    Mock.mock('/api/NavigationBar', 'get', () => {
        return {
            data: [{
				id: '1',
				linkName: '首页',
				icon: 'el-icon-s-home',
				path: '/',
				children: []
			},
      // {
			// 	id: '2',
			// 	linkName: '博文',
			// 	icon: 'icon-book',
			// 	path: '/BlogArticle',
			// 	children: []
			// },
      // {
			// 	id: '3',
			// 	linkName: '随笔',
			// 	icon: 'icon-essay',
			// 	path: '/Essay',
			// 	children: []
			// },
      {
				id: '4',
				linkName: '标签',
				icon: 'el-icon-price-tag',
				path: '/Tags',
				children: []
			},{
				id: '5',
				linkName: '留言',
				icon: 'el-icon-edit-outline',
				path: '/MessageBoard',
				children: []
			},{
				id: '6',
				linkName: '友链',
				icon: 'el-icon-s-promotion',
				path: '/FriendLink',
				children: []
			},{
				id: '7',
				linkName: '关于',
				icon: 'el-icon-warning',
				path: '/About',
				children: []
			}
      // ,{
			// 	id: '8',
			// 	linkName: '登录',
			// 	icon: 'icon-renewal',
			// 	path: '/Login',
			// 	children: []
			// }
            // ,{
			// 	id: '9',
			// 	linkName: '关于',
			// 	icon: 'icon-guanyu',
			// 	path: '/about',
			// 	children: [{
			// 		id: '10',
			// 		linkName: '关于本站',
			// 		path: '/about'
			// 	},{
			// 		id: '11',
			// 		linkName: '关于博主',
			// 		path: '/author'
			// 	}]
			// }
        ]
        }
	  })

    //版本信息
    Mock.mock('/api/Blog/version','get',() => {
        return {
            code: 0,
            data: {
                current: 1,
                pages: 1,
                records: [
                    {"id":9,"content":"<p>新增博文置顶功能</p><p>其他小优化</p>","version":"1.2.2","time":"2020-10-15 18:15:29","createTime":"2020-10-15 18:15:31"},
                    {"id":8,"content":"<p>优化评论组件</p>","version":"1.2.1","time":"2020-09-25 18:00:00","createTime":"2020-09-25 17:46:10"},
                    {"id":7,"content":"<ol><li>新增资源分享</li><li>更改标签样式</li><li>其他小优化</li></ol>","version":"1.2.0","time":"2020-04-11 11:59:40","createTime":"2020-04-11 11:59:43"},
                    {"id":6,"content":"<p>加入百度统计</p>","version":"1.1.1","time":"2020-02-28 11:57:21","createTime":"2020-02-28 11:57:34"},
                    {"id":5,"content":"<p>增加了QQ互联，赶快登录试试吧。</p>","version":"1.1.0","time":"2020-02-19 00:00:00","createTime":"2020-02-19 15:49:29"},
                    {"id":4,"content":"<p>Zhua 个人博客正式上线了...</p><p></p><ol><li>博文：记录学习</li><li>美文：美文共享</li><li>心语：一句话精彩语录</li></ol><p></p>","version":"1.0.0","time":"2020-02-06 00:00:00","createTime":"2020-02-12 13:45:55"}
                ],
                size: 10,
                total: 6
            }
        };

    }); 
    // 需要兼容后面是否带有参数的情况
    //博文列表
    // let blog_url = new RegExp('^/api/Blog/' + '(\\?.*|)$')
    Mock.mock(/\/api\/Blog\?page=\d/,'get',() => {
        return {
            "status": 200,
            "success": true,
            "msg": "获取成功",
            "msgDev": null,
            "response": {
            "page": 1,
            "pageCount": 1,
            "dataCount": 6,
            "PageSize": 6,
            "data": [
                {
                "bID": "13",
                "bsubmitter": "kane13",
                "User": null,
                "btitle": "路过秋天，路过你",
                "bcategory": "技术博文",
                "bcontent": "&lt;p&gt;搭一座桥，去你心里瞧一瞧，一个人的世界，是否有万家灯火的明亮，是否像你说的那样喧闹。我只想知道，你的那一扇窗、一盏灯光，为谁在每个夜里点亮。  &lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p&gt;不同的时空，相同的频率，总有一些灵犀的念，让你情深依依，感动不已。 &lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p&gt;千百里云海翻涌，秋风卷起落花的香气；等待，是一场蓄谋已久的盛装出席，相逢，是万里挑一的乍现欢喜。就算在一切经纬度种植期盼，如果有一秒不同，都会错失良机，你就走不到我身边。&lt;/p&gt;&lt;p&gt; &lt;/p&gt;&lt;p class=\"ql-align-center\"&gt;&lt;/p&gt;&lt;p class=\"ql-align-center\"&gt;&lt;br&gt;&lt;/p&gt;&lt;p&gt;又是清秋，多想，与你重逢在相约的路口，多想，再牵你的手；问一问，你是否，还记得，那年那月那天的承诺，说好了，要一生信守。你是否，和我一样，",
                "btraffic": 388,
                "bcommentNum": 8,
                "bUpdateTime": "2019-01-01 00:00:00",
                "bCreateTime": "2019-01-01 00:00:00",
                "bRemark": "p搭一座桥，去你心里瞧一瞧，一个人的世界，是否有万家灯火的明亮，是否像你说的那样喧闹。我只想知道，你的那一扇窗、一盏灯光，为谁在每个夜里点亮。  /ppbr/pp不同的时空，相同的频率，总有一些灵犀的念，让你情深依依，感动不已。 /ppbr/pp千百里云海翻涌，秋风卷起落花的香气；等待，是一场蓄谋已久的盛装出席，相逢，是万里挑一的乍现欢喜。就算在一切经纬度种植期盼，如果有一秒不同，都会错失良机，你",
                "IsDeleted": false,
                "Comments": null
                },
                {
                "bID": "12",
                "bsubmitter": "aaa",
                "User": null,
                "btitle": "ceshi",
                "bcategory": "技术博文",
                "bcontent": "才是大打算打打打",
                "btraffic": 196,
                "bcommentNum": 1,
                "bUpdateTime": "2019-01-01 00:00:00",
                "bCreateTime": "2019-01-01 00:00:00",
                "bRemark": "才是大打算打打打",
                "IsDeleted": false,
                "Comments": null
                },
                {
                "bID": "11",
                "bsubmitter": "admins",
                "User": null,
                "btitle": "得梦为鱼",
                "bcategory": "技术博文",
                "bcontent": "“毕竟几人真得鹿”中“鹿”喻指人世间虚幻的富贵。富贵不坚牢，让人魂牵梦绕，始终不知自己是活在现实还是梦中，不知道梦醒后自己是否真正拥有。“不知终日梦为鱼”你在梦里认为自己是鸟，所以飞；你在梦里认为自己是鱼，所以游。你认为中的自己，真的就是你吗？\r\n\r\n　　一世到头，皆是虚空，不必太过计较成败与得失。其实我们所处的时代也仅仅是历史长河中的某个瞬间而已，顺着自己的心意去生活，就是最好的生活。",
                "btraffic": 173,
                "bcommentNum": 1,
                "bUpdateTime": "2019-01-01 00:00:00",
                "bCreateTime": "2019-01-01 00:00:00",
                "bRemark": "“毕竟几人真得鹿”中“鹿”喻指人世间虚幻的富贵。富贵不坚牢，让人魂牵梦绕，始终不知自己是活在现实还是梦中，不知道梦醒后自己是否真正拥有。“不知终日梦为鱼”你在梦里认为自己是鸟，所以飞；你在梦里认为自己是鱼，所以游。你认为中的自己，真的就是你吗？\r\n\r\n　　一世到头，皆是虚空，不必太过计较成败与得失。其实我们所处的时代也仅仅是历史长河中的某个瞬间而已，顺着自己的心意去生活，就是最好的生活。",
                "IsDeleted": false,
                "Comments": null
                },
                {
                "bID": "10",
                "bsubmitter": "admin",
                "User": null,
                "btitle": "ASPNET.NET Core",
                "bcategory": "技术博文",
                "bcontent": "1、【开源】ASPNET.NET Core 是由 Microsoft 和 .NET 社区在 GitHub 上开源并维护的一个跨平台（支持 Windows、macOS 和 Linux）的新一代高性能框架， 拥有十分广泛的社区与支持者，可用于构建web应用、物联网IOT应用和移动端应用。 2、【高效】Asp.net core(.net core)来源于.net，很容易迁移，而且也很容易上手， 但是又是",
                "btraffic": 149,
                "bcommentNum": 1,
                "bUpdateTime": "2019-01-01 00:00:00",
                "bCreateTime": "2019-01-01 00:00:00",
                "bRemark": "1、【开源】ASPNET.NET Core 是由 Microsoft 和 .NET 社区在 GitHub 上开源并维护的一个跨平台（支持 Windows、macOS 和 Linux）的新一代高性能框架， 拥有十分广泛的社区与支持者，可用于构建web应用、物联网IOT应用和移动端应用。 2、【高效】Asp.net core(.net core)来源于.net，很容易迁移，而且也很容易上手， 但是又是",
                "IsDeleted": false,
                "Comments": null
                },
                {
                "bID": "9",
                "bsubmitter": "aaa",
                "User": null,
                "btitle": "ceshi",
                "bcategory": "技术博文",
                "bcontent": "才是大打算打打打",
                "btraffic": 132,
                "bcommentNum": 1,
                "bUpdateTime": "2019-01-01 00:00:00",
                "bCreateTime": "2019-01-01 00:00:00",
                "bRemark": "才是大打算打打打",
                "IsDeleted": false,
                "Comments": null
                },
                {
                "bID": "8",
                "bsubmitter": "admins",
                "User": null,
                "btitle": "得梦为鱼",
                "bcategory": "技术博文",
                "bcontent": "“毕竟几人真得鹿”中“鹿”喻指人世间虚幻的富贵。富贵不坚牢，让人魂牵梦绕，始终不知自己是活在现实还是梦中，不知道梦醒后自己是否真正拥有。“不知终日梦为鱼”你在梦里认为自己是鸟，所以飞；你在梦里认为自己是鱼，所以游。你认为中的自己，真的就是你吗？\r\n\r\n　　一世到头，皆是虚空，不必太过计较成败与得失。其实我们所处的时代也仅仅是历史长河中的某个瞬间而已，顺着自己的心意去生活，就是最好的生活。",
                "btraffic": 155,
                "bcommentNum": 1,
                "bUpdateTime": "2019-01-01 00:00:00",
                "bCreateTime": "2019-01-01 00:00:00",
                "bRemark": "“毕竟几人真得鹿”中“鹿”喻指人世间虚幻的富贵。富贵不坚牢，让人魂牵梦绕，始终不知自己是活在现实还是梦中，不知道梦醒后自己是否真正拥有。“不知终日梦为鱼”你在梦里认为自己是鸟，所以飞；你在梦里认为自己是鱼，所以游。你认为中的自己，真的就是你吗？\r\n\r\n　　一世到头，皆是虚空，不必太过计较成败与得失。其实我们所处的时代也仅仅是历史长河中的某个瞬间而已，顺着自己的心意去生活，就是最好的生活。",
                "IsDeleted": false,
                "Comments": null
                }
            ]
            }
        };

    });
    //博文内容/\/api\/Blog\/\d/
    Mock.mock(/\/api\/Blog\/\d/,'get',() => {
        return {
            "status": 200,
            "success": true,
            "msg": "成功",
            "msgDev": null,
            "response": {
                "bID": "8",
                "bsubmitter": "admins",
                "btitle": "得梦为鱼",
                "digest": null,
                "previous": "ASPNET.NET Core",
                "previousID": "7",
                "next": "ceshi",
                "nextID": "9",
                "bcategory": "技术博文",
                "bcontent": "“毕竟几人真得鹿”中“鹿”喻指人世间虚幻的富贵。富贵不坚牢，让人魂牵梦绕，始终不知自己是活在现实还是梦中，不知道梦醒后自己是否真正拥有。“不知终日梦为鱼”你在梦里认为自己是鸟，所以飞；你在梦里认为自己是鱼，所以游。你认为中的自己，真的就是你吗？\r\n\r\n　　一世到头，皆是虚空，不必太过计较成败与得失。其实我们所处的时代也仅仅是历史长河中的某个瞬间而已，顺着自己的心意去生活，就是最好的生活。",
                "btraffic": 156,
                "bcommentNum": 1,
                "bUpdateTime": "2019-01-01 00:00:00",
                "bCreateTime": "2019-01-01 00:00:00",
                "bRemark": null
            }
        }

    });

    //博文评论 
    Mock.mock(/\/api\/BlogComment\?bid=\d/, 'get', () => {
        return {
            "status": 200,
            "success": true,
            "msg": "成功",
            "msgDev": null,
            "response": [
              {
                "Id": "1711223148592107520",
                "bID": "12",
                "NickName": "11",
                "Email": "123456@163.com",
                "Link": "",
                "Comment": ":bowtie:",
                "Avatar": "",
                "Ip": "219.134.170.37",
                "Os": "Windows 10",
                "Browser": "Edge",
                "Address": "广东省 深圳市",
                "CreateTime": "2023-10-09 11:32:46",
                "FollowId": "0",
                "UserId": "0",
                "ParentNickName": null,
                "ReplyComment": [
                  {
                    "Id": "1711223220209848320",
                    "bID": "12",
                    "NickName": "22",
                    "Email": "18272654878@163.com",
                    "Link": "",
                    "Comment": ":laughing:",
                    "Avatar": "",
                    "Ip": "219.134.170.37",
                    "Os": "Windows 10",
                    "Browser": "Edge",
                    "Address": "广东省 深圳市",
                    "CreateTime": "2023-10-09 11:33:03",
                    "FollowId": "1711223148592107520",
                    "UserId": "0",
                    "ParentNickName": "11",
                    "ReplyComment": null
                  },
                  {
                    "Id": "1711223317597392896",
                    "bID": "12",
                    "NickName": "33",
                    "Email": "123456@163.com",
                    "Link": "",
                    "Comment": ":smiley::dolls:",
                    "Avatar": "",
                    "Ip": "219.134.170.37",
                    "Os": "Windows 10",
                    "Browser": "Edge",
                    "Address": "广东省 深圳市",
                    "CreateTime": "2023-10-09 11:33:27",
                    "FollowId": "1711223220209848320",
                    "UserId": "0",
                    "ParentNickName": "22",
                    "ReplyComment": null
                  }
                ]
              },
              {
                "Id": "1711223393275219968",
                "bID": "12",
                "NickName": "44",
                "Email": "123456@163.com",
                "Link": "",
                "Comment": ":bowtie:",
                "Avatar": "",
                "Ip": "219.134.170.37",
                "Os": "Windows 10",
                "Browser": "Edge",
                "Address": "广东省 深圳市",
                "CreateTime": "2023-10-09 11:33:45",
                "FollowId": "0",
                "UserId": "0",
                "ParentNickName": null,
                "ReplyComment": null
              }
            ]
          }
	  });
    //热门文章
    Mock.mock('/api/Blog/GetHotArticle', 'get', () => {
    return {
      "status": 200,
      "success": true,
      "msg": "成功",
      "msgDev": null,
      "response": [
        {
          "bID": "1702277196191764480",
          "bsubmitter": "kane",
          "User": null,
          "btitle": "路过秋天，路过你",
          "bcategory": "技术博文",
          "bcontent": "<p>搭一座桥，去你心里瞧一瞧，一个人的世界，是否有万家灯火的明亮，是否像你说的那样喧闹。我只想知道，你的那一扇窗、一盏灯光，为谁在每个夜里点亮。&nbsp;&nbsp;</p><p><br></p><p>不同的时空，相同的频率，总有一些灵犀的念，让你情深依依，感动不已。&nbsp;</p><p><br></p><p>千百里云海翻涌，秋风卷起落花的香气；等待，是一场蓄谋已久的盛装出席，相逢，是万里挑一的乍现欢喜。就算在一切经纬度种植期盼，如果有一秒不同，都会错失良机，你就走不到我身边。</p><p>&nbsp;</p><p class=\"ql-align-center\"></p><p class=\"ql-align-center\"><br></p><p>又是清秋，多想，与你重逢在相约的路口，多想，再牵你的手；问一问，你是否，还记得，那年那月那天的承诺，说好了，要一生信守。你是否，和我一样，依然把一种光阴读不懂的温柔，紧紧捂在胸口。</p><p>这许多年人生，谁在你心里，赖着不走，你在谁命里，已成故事。世界在你眼中，有多单纯，你就有多善良；曾经向往，也许最适合放逐远方。</p><p><br></p>\r\n<p>山水跋涉，看到阳光万里的一刻，哪里都会有鲜花开放。满手的承诺，在摊开掌心的一瞬，你于全世界的爱，无限流放……</p>",
          "btraffic": 354,
          "bcommentNum": 7,
          "bUpdateTime": "2023-09-14 19:04:45",
          "bCreateTime": "2023-09-14 19:04:45",
          "bRemark": null,
          "IsDeleted": false,
          "Comments": null
        },
        {
          "bID": "12",
          "bsubmitter": "aaa",
          "User": null,
          "btitle": "ceshi",
          "bcategory": "技术博文",
          "bcontent": "才是大打算打打打",
          "btraffic": 196,
          "bcommentNum": 1,
          "bUpdateTime": "2023-09-13 17:06:00",
          "bCreateTime": "2023-09-13 17:06:00",
          "bRemark": null,
          "IsDeleted": false,
          "Comments": null
        },
        {
          "bID": "11",
          "bsubmitter": "admins",
          "User": null,
          "btitle": "得梦为鱼",
          "bcategory": "技术博文",
          "bcontent": "“毕竟几人真得鹿”中“鹿”喻指人世间虚幻的富贵。富贵不坚牢，让人魂牵梦绕，始终不知自己是活在现实还是梦中，不知道梦醒后自己是否真正拥有。“不知终日梦为鱼”你在梦里认为自己是鸟，所以飞；你在梦里认为自己是鱼，所以游。你认为中的自己，真的就是你吗？\r\n\r\n　　一世到头，皆是虚空，不必太过计较成败与得失。其实我们所处的时代也仅仅是历史长河中的某个瞬间而已，顺着自己的心意去生活，就是最好的生活。",
          "btraffic": 173,
          "bcommentNum": 1,
          "bUpdateTime": "2023-09-13 10:06:00",
          "bCreateTime": "2023-09-13 10:06:00",
          "bRemark": null,
          "IsDeleted": false,
          "Comments": null
        },
        {
          "bID": "2",
          "bsubmitter": "admins",
          "User": null,
          "btitle": "得梦为鱼",
          "bcategory": "技术博文",
          "bcontent": "“毕竟几人真得鹿”中“鹿”喻指人世间虚幻的富贵。富贵不坚牢，让人魂牵梦绕，始终不知自己是活在现实还是梦中，不知道梦醒后自己是否真正拥有。“不知终日梦为鱼”你在梦里认为自己是鸟，所以飞；你在梦里认为自己是鱼，所以游。你认为中的自己，真的就是你吗？\r\n\r\n　　一世到头，皆是虚空，不必太过计较成败与得失。其实我们所处的时代也仅仅是历史长河中的某个瞬间而已，顺着自己的心意去生活，就是最好的生活。",
          "btraffic": 158,
          "bcommentNum": 1,
          "bUpdateTime": "2023-09-13 10:06:00",
          "bCreateTime": "2023-09-13 10:06:00",
          "bRemark": null,
          "IsDeleted": false,
          "Comments": null
        },
        {
          "bID": "8",
          "bsubmitter": "admins",
          "User": null,
          "btitle": "得梦为鱼",
          "bcategory": "技术博文",
          "bcontent": "“毕竟几人真得鹿”中“鹿”喻指人世间虚幻的富贵。富贵不坚牢，让人魂牵梦绕，始终不知自己是活在现实还是梦中，不知道梦醒后自己是否真正拥有。“不知终日梦为鱼”你在梦里认为自己是鸟，所以飞；你在梦里认为自己是鱼，所以游。你认为中的自己，真的就是你吗？\r\n\r\n　　一世到头，皆是虚空，不必太过计较成败与得失。其实我们所处的时代也仅仅是历史长河中的某个瞬间而已，顺着自己的心意去生活，就是最好的生活。",
          "btraffic": 155,
          "bcommentNum": 1,
          "bUpdateTime": "2023-09-13 10:06:00",
          "bCreateTime": "2023-09-13 10:06:00",
          "bRemark": null,
          "IsDeleted": false,
          "Comments": null
        }
      ]
    }
    });
    //标签云
    Mock.mock("/api/Tags/", 'get', () => {
      return {
        "status": 200,
        "success": true,
        "msg": "成功",
        "msgDev": null,
        "response": [
          { id: 1,name: 'VUE', value: 28, url: '/BlogTags' },  
          { id: 2,name: 'NETCORE', value: 28, url: '/BlogTags' },  
          { id: 3,name: 'Docker', value: 28, url: '/BlogTags' },  
          { id: 4,name: 'SQLSERVER', value: 30, url: '/BlogTags' },  
          { id: 5,name: 'MySql', value: 25, url: '/BlogTags' },  
          { id: 6,name: '博客', value: 28, url: '/BlogTags' },  
          { id: 7,name: '感悟', value: 26, url: '/BlogTags' },  
          { id: 8,name: '生活', value: 30, url: '/BlogTags' },  
          { id: 9,name: '随笔', value: 32, url: '/BlogTags' },  
          { id: 10, name: '笔记', value: 26, url: '/BlogTags' },  
          { id: 1,name: 'VUE', value: 28, url: '/BlogTags' },  
          { id: 2,name: 'NETCORE', value: 28, url: '/BlogTags' },  
          { id: 3,name: 'Docker', value: 28, url: '/BlogTags' },  
          { id: 4,name: 'SQLSERVER', value: 30, url: '/BlogTags' },  
          { id: 5,name: 'MySql', value: 25, url: '/BlogTags' },  
          { id: 6,name: '博客', value: 28, url: '/BlogTags' },  
          { id: 7,name: '感悟', value: 26, url: '/BlogTags' },  
          { id: 8,name: '生活', value: 30, url: '/BlogTags' },  
          { id: 9,name: '随笔', value: 32, url: '/BlogTags' },  
          { id: 10, name: '笔记', value: 26, url: '/BlogTags' },  
          { id: 1,name: 'VUE', value: 28, url: '/BlogTags' },  
          { id: 2,name: 'NETCORE', value: 28, url: '/BlogTags' },  
          { id: 3,name: 'Docker', value: 28, url: '/BlogTags' },  
          { id: 4,name: 'SQLSERVER', value: 30, url: '/BlogTags' },  
          { id: 5,name: 'MySql', value: 25, url: '/BlogTags' },  
          { id: 6,name: '博客', value: 28, url: '/BlogTags' },  
          { id: 7,name: '感悟', value: 26, url: '/BlogTags' },  
          { id: 8,name: '生活', value: 30, url: '/BlogTags' },  
          { id: 9,name: '随笔', value: 32, url: '/BlogTags' },  
          { id: 10, name: '笔记', value: 26, url: '/BlogTags' },  
          { id: 1,name: 'VUE', value: 28, url: '/BlogTags' },  
          { id: 2,name: 'NETCORE', value: 28, url: '/BlogTags' },  
          { id: 3,name: 'Docker', value: 28, url: '/BlogTags' },  
          { id: 4,name: 'SQLSERVER', value: 30, url: '/BlogTags' },  
          { id: 5,name: 'MySql', value: 25, url: '/BlogTags' },  
          { id: 6,name: '博客', value: 28, url: '/BlogTags' },  
          { id: 7,name: '感悟', value: 26, url: '/BlogTags' },  
          { id: 8,name: '生活', value: 30, url: '/BlogTags' },  
    
   
          { id: 10, name: '笔记', value: 26, url: '/BlogTags' },  
          { id: 1,name: 'VUE', value: 28, url: '/BlogTags' },  
          { id: 2,name: 'NETCORE', value: 28, url: '/BlogTags' },  
          { id: 3,name: 'Docker', value: 28, url: '/BlogTags' },  
          { id: 4,name: 'SQLSERVER', value: 30, url: '/BlogTags' },  
          { id: 5,name: 'MySql', value: 25, url: '/BlogTags' },  
          { id: 6,name: '博客', value: 28, url: '/BlogTags' },  
          { id: 7,name: '感悟', value: 26, url: '/BlogTags' },  
          { id: 8,name: '生活', value: 30, url: '/BlogTags' },  
          { id: 9,name: '随笔', value: 32, url: '/BlogTags' },  
          { id: 10, name: '笔记', value: 26, url: '/BlogTags' },  
      ]
    }
    });
    //标签关系
    Mock.mock(/\/api\/BlogTags\?TagId=\d/, 'get', () => {
          return {
            "status": 200,
            "success": true,
            "msg": "成功",
            "msgDev": null,
            "response": [
              { bID: '1', btitle: "得梦为鱼", time: '2023-10-11' },  
              { bID: '2', btitle: "路过秋天，路过你", time: '2023-10-10' },  
              { bID: '3', btitle: "ceshi", time: '2023-10-09' },  
              { bID: '4', btitle: "Vue教程", time: '2023-10-08' },  
              { bID: '5', btitle: "得梦为鱼", time: '2023-10-07' },  
              { bID: '6', btitle: "得梦为鱼", time: '2023-09-11' },  
              { bID: '7', btitle: "得梦为鱼", time: '2023-01-11' },  
          ]
        }
    });

    //友链
	  Mock.mock(/\/api\/FriendLink.*/, 'get', () => {
		return {
            "status": 200,
            "success": true,
            "msg": "获取成功",
            "msgDev": null,
            "response": {
              "page": 1,
              "pageCount": 1,
              "dataCount": 1,
              "PageSize": 50,
              "data": [
                {
                  "id": 1,
                  "sitename": "得梦为鱼",
                  "siteurl": "http://51as.top:8081",
                  "siteremarks": "毕竟几人终得鹿，不知终日梦为鱼！",
                  "siteicon": "http://51as.top:8081/favicon.ico",
                  "createtime": "2023-09-27 18:01:00",
                  "isdel": 0,
                  "rem": null,
                  "sort": 1
                }
              ]
            }
          }
	  });
}
