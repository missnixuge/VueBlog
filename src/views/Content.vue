<template>
    <div class="home">
      <template>
          <el-backtop target=".el-main" :visibility-height="300" :bottom="200" >
                    <div>
                      <i class='el-icon-top'></i>
                    </div>
          </el-backtop>
          </template>
      <article class="l_body">
            <div class="container clearfix">
              <div class="l_main">
                    <article id="" class="post white-box article-type-post" itemscope="" itemprop="blogPost">
                        <section class="meta">
                          <el-page-header @back="goBack" content="">
                          </el-page-header>
              
                          <el-card class="box-card" shadow="hover">
                            <div slot="header" class="clearfix">
                              
                              <span class="bolgtitle"> {{dat.btitle}}</span>
                              <section class="meta">
                                   <i class="el-icon-timer"></i>
                                    <time>
                                        {{dat.bCreateTime}}
                                    </time>
                                    <div class="cats">
                                        <a href="/categories/dotnet/">{{dat.bsubmitter}}</a>
                                    </div>

                                    <div class="cats" >
                                      <i class="iconfont icon-dianji"></i>
                                      <span id="click_count_text">{{dat.btraffic}} 次</span>
                                      <a @click="myScrollIntoView('.explain')">
                                        <i class="el-icon-chat-dot-round"></i>
                                        <span id="comment_count_text">{{dat.bcommentNum}} 条</span>
                                      </a>
                                    </div>
                                 
                              </section>
                            </div>

                            <section class="article typo">
                                    <div class="article-entry" itemprop="articleBody">
                                        <blockquote>
                                            <p>
                                                {{dat.digest}}
                                            </p>
                                        </blockquote>

                                        <article v-html="dat.bcontent"></article>


                                    </div>
                                    <div class="explain">
                                              温馨提示：本站所有内容仅供学习，不允许商用，如有侵权，请联系站长删除，谢谢。
                                      </div>
                                    <div class="detail">
                                     
                                      <!-- <el-divider content-position="left">分享快乐</el-divider>
                                      <div id="share" class="share">
                                          <ul>
                                              <li class="f-praise" @click="clickLike(article)"><span><a href="javascript:void(0);" class="s-praise"></a></span></li>
                                              <li class="f-weinxi" @click="clickShare('wechat')"><a class="s-weinxi" data-cmd="weixin"></a></li>
                                              <li class="f-sina" @click="clickShare('sina')"><a class="s-sina" data-cmd="tsina"></a></li>
                                              <li class="f-qq" @click="clickShare('qq')"><i class="iconfont icon-qq1"></i></li>
                                              <li class="f-qzone" @click="clickShare('qzone')"><a class="s-qzone" data-cmd="qzone"></a></li>
                                          </ul>
                                      </div> -->
                                    </div>
                                    <div class="article-tags tags">
                                        <a href="javascript:void(0);">{{dat.bcategory}}</a>
                                    </div>
                                    <div class="art-item-footer">
                                        <span class="art-item-left"><i class="icon icon-chevron-thin-left"></i>
                                        上一篇：  <router-link :to="'/content/' + dat.previousID">
                                                    {{ dat.previous }}
                                                </router-link>
                                        </span>
                                        <span class="art-item-right">
                                        下一篇： <router-link :to="'/content/' + dat.nextID">
                                                    {{ dat.next }}
                                                </router-link>
                                                <i class="icon icon-chevron-thin-right"></i>
                                        </span>
                                    </div>
                            </section>
              
                
                    
                          </el-card>

                        </section>
                    </article>
                    <el-divider content-position="left">发表评论</el-divider>
                        <div id="comment" class="comment">
                          <el-form :model="ValidateForm"  ref="ValidateForm" label-width="100px" class="demo-ruleForm">
                          <el-form-item label="" prop="Comment" :rules="[
                              { required: true, message: '评论内容不能为空'}
                            ]" style="width: 100%;">
                            <el-input
                                type="textarea"
                                :autosize="{ minRows: 6, maxRows: 20}"
                                placeholder="说点什么吧~"
                                resize="none"
                                maxlength="250"
                                show-word-limit
                                v-model="ValidateForm.Comment" >
                            </el-input>
                          </el-form-item>
                          <el-form-item
                            label="名称"
                            prop="NickName" 
                            :rules="[
                              { required: true, message: '名称不能为空'}
                            ]"
                          >
                            <el-input v-model.NickName="ValidateForm.NickName" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item
                            prop="Email" 
                            label="邮箱"
                            :rules="[
                              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                            ]"
                          >
                            <el-input v-model="ValidateForm.Email"></el-input>
                          </el-form-item>
                          <el-form-item
                            label="链接"
                            prop="Link" >
                            <el-input v-model.Link="ValidateForm.Link" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-row>
                            <el-col :xs="12" :sm="12" :md="16" :lg="18" :xl="19">  
                              <vue-emoji
                               @select="selectEmoji">
                              </vue-emoji>
                            </el-col>
                            <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="5">
                                <!-- <el-button type="success" size="small" click="submit" class="submit">提交</el-button> -->
                                <el-button type="primary" size="small" @click="submit('ValidateForm')">提交</el-button>
                                <el-button @click="reset('ValidateForm')" size="small">重置</el-button>
                            </el-col>
                            </el-row>
                           
                          </el-form-item>
                        </el-form>
                           
                            <comment-board :data="commentList"
                               
                                :noMore="noMore"
                                @loadData="loadComment"
                                @submit="submitComment">
                            </comment-board>
                        </div>
                    
              </div>  
      </div>
    </article>
    </div>
</template>
<script>
import CommentBoard from '@/components/blog/comment-board'
import vueEmoji from '@/components/emoji/emoji.vue'
import * as sysTool from '../assets/js/sysTools'
export default {
  components: { CommentBoard,vueEmoji},
  data() {
    return {
      id: this.$route.params.id,
      dat: {},
      commentList: [],
      article: {},
      moreArticle: [],
      isShow: true,
      ValidateForm: {
          NickName: '',
          Email: '',
          Link: '',
          Comment: '',
          bID: '',
          Ip:'',
          Os:'',
          Browser:'',
          Address:'',
          Avatar:'',
          UserId: 0
        },
    
      email: '',
      page: {
                current: 1,
                size: 10
            },
      noMore: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$api.get("Blog/" + this.id, null, r => {
        
        this.dat = r.response;
        
        this.isShow = false;
        loading.close();
      });
      const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
     
      this.loadComment( this.id);
      loading.close();
   
    },
    goBack() {
        this.$router.back();
      },
    loadComment(page) {

        this.$api.get("BlogComment?bid="+ this.id, null, r => {
                let result = r.response;
                if(result.length > 0) {
                    this.commentList = result;//this.commentList.concat(result)
                    //this.page.current = result.current
                    this.isShow = false;
                }else {
                    setTimeout(() => {
                        this.noMore = true
                    }, 2000)
                }
			})
        },
    submitComment(data) {//二级及以下评论添加
    
            data.bID =  this.id;
            data.UserId = 0;
            var postPara = data;
            console.log(postPara)
            this.$api.post("BlogComment", postPara, r => {
              if (r.success) {
                  var id = r.response;
                  this.$notify({
                    type: "success",
                    message: "评论成功!",
                    duration: 3000
                  });
                  this.getData();//刷新数据
                } else {
                  var errorMsg = r.msg;
                  this.$message({
                    type: "error",
                    message: errorMsg,
                    showClose: true
                  });
                }
			        })

        },
    submit(formName) {//一级评论添加
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.ValidateForm.bID =  this.id;
            this.ValidateForm.UserId = 0;
            this.ValidateForm.Ip = sessionStorage.getItem('ip');
            this.ValidateForm.Address = sessionStorage.getItem('area');
            this.ValidateForm.Browser = sysTool.GetCurrentBrowser();
            this.ValidateForm.Os = sysTool.GetOs();
            console.log(this.ValidateForm)
            var postPara = this.ValidateForm;
            this.$api.post("BlogComment", postPara, r => {
              if (r.success) {
                  var id = r.response;
                  this.$notify({
                    type: "success",
                    message: "评论成功!",
                    duration: 3000
                  });
                  this.getData();//刷新数据
                } else {
                  var errorMsg = r.msg;
                  this.$message({
                    type: "error",
                    message: errorMsg,
                    showClose: true
                  });
                }
			        })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    reset(formName) {
        this.$refs[formName].resetFields();
      },
    selectEmoji (code) {//选择表情
            this.ValidateForm.Comment += code
        },
    clickLike(item) {//点赞
            if(!validatenull(this.$store.getters.readerAccessToken)) {
                blogLike({objectId:item.id,type:item.type}).then(res => {
                    item.like_count = res.data.data
                    if(this.likes[item.type+'-'+item.id]) {
                        this.$message({
                            message: '取消点赞成功!',
                            type: 'success'
                        });
                    }else {
                        this.$message({
                            message: '点赞成功!',
                            type: 'success'
                        });
                    }
                    this.likes[item.type+'-'+item.id] = !this.likes[item.type+'-'+item.id]
                    this.$store.dispatch("updateLikes", this.likes)
                })
            } else {
                this.$message({
                    message: '还未登录哦，请先登录再试试吧!',
                    type: 'warning'
                });
            }
        },
    clickShare(type) {//分享
            if ('wechat' == type) {//分享微信
                const url = 'https://cli.im/api/qrcode/code?text=' + encodeURIComponent(window.location.href)
                const thirdpart = '分享到微信'
                openWindow(url, thirdpart, 540, 540)
            } else if('sina' == type) {//分享到新浪
                 let p = {
                    url: window.location.href,
                    type: '3',
                    count: '1', /** 是否显示分享数，1显示(可选)*/
                    appkey: '', /** 您申请的应用appkey,显示分享来源(可选)*/
                    title: this.article.title, /** 分享的文字内容(可选，默认为所在页面的title)*/
                    pic: this.article.cover_src, /**分享图片的路径(可选)*/ 
                    ralateUid: '', /**关联用户的UID，分享微博会@该用户(可选)*/
                    rnd: new Date().valueOf()
                }
                let s = [];
                for (let i in p) {
                    s.push(i + '=' + encodeURIComponent(p[i] || ''))
                }
                const url = "http://service.weibo.com/share/share.php?" + s.join('&');
                const thirdpart = '分享到新浪'
                openWindow(url, thirdpart, 540, 540)
            } else if('qq' == type) {//分享到qq好友
                let p = {
                    url: window.location.href,/*获取URL，可加上来自分享到QQ标识，方便统计*/
                    desc: this.article.introduction, /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
                    title: this.article.title,/*分享标题(可选)*/
                    summary: this.article.introduction,/*分享描述(可选)*/
                    pics: this.article.cover_src,/*分享图片(可选)*/
                    flash: '', /*视频地址(可选)*/
                    //commonClient : true, /*客户端嵌入标志*/
                    site: this.website.title/*分享来源 (可选) ，如：QQ分享*/
                };
                let s = [];
                for (let i in p) {
                    s.push(i + '=' + encodeURIComponent(p[i] || ''));
                }
                const url = "http://connect.qq.com/widget/shareqq/iframe_index.html?" + s.join('&') 
                const thirdpart = '分享到qq好友'
                openWindow(url, thirdpart, 740, 540)
            } else if('qzone' == type) {//分享到qq空间
                let p = {
                    url: window.location.href,
                    showcount: '1',/*是否显示分享总数,显示：'1'，不显示：'0' */
                    desc: this.article.introduction,/*默认分享理由(可选)*/
                    summary: this.article.introduction,/*分享摘要(可选)*/
                    title: this.article.title,/*分享标题(可选)*/
                    site: this.website.title,/*分享来源 如：腾讯网(可选)summary*/
                    pics: this.article.cover_src, /*分享图片的路径(可选)*/
                    style: '101',
                    width: 199,
                    height: 30
                };
                let s = [];
                for (let i in p) {
                    s.push(i + '=' + encodeURIComponent(p[i] || ''));
                }
                const url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + s.join('&')
                const thirdpart = '分享到qq空间'
                openWindow(url, thirdpart, 600, 540)
            }
        },
        myScrollIntoView(c) {
            document.querySelector(c).scrollIntoView({ behavior: 'smooth' })
        }
  },
  watch: {
    $route(to) {
      this.dat = {};
      this.isShow = true;
      this.id = to.params.id;
      this.getData();
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/blog/blog-common.css';

.l_body{
  width: 1200px;
  height: 100%;
  overflow-x: hidden;
}
.detail {
    font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;
    line-height: 1.75;
    position: relative;
    margin: 0px auto;
   
    .detail-info {
        text-align: right;
        i {
            margin: 0 5px;
        }
        span {
            margin-right: 20px;
        }
    }
 


    .share {
        margin: 30px 0 0 0;
        text-align: center;
        font-size: 30px;
        ul {
            overflow: hidden;
            margin: 0 auto;
            display: table;
            li {
                float: left;
                width: 50px;
                height: 50px;
                box-sizing: border-box;
                border: 2px solid #e7e7e7;
                border-radius: 50%;
                margin: 0 10px;
                opacity: .75;
                transition: opacity .36s linear;
                cursor: pointer;
                position: relative;
                text-rendering: auto;
                 list-style: none;
                span {
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: relative;
                }
                a {
                    position: absolute;
                    background: url(../assets/img/share/shareicon.png) no-repeat;
                    background-size: 32px 160px;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%,-50%);
                    transform: translate(-50%,-50%);
                    margin: 0;
                    float: left;
                    width: 32px;
                    line-height: 32px;
                    height: 32px;
                    cursor: pointer;
                    text-indent: -100em;
                    overflow: hidden;
                   // color: #3a8ceb;
                    &:hover {
                        color: #333;
                        opacity: .8;
                        filter: alpha(opacity=80);
                        text-decoration: underline;
                    }
                }
                .s-praise {
                    background-position: 0 -68px;
                }
                .s-weinxi {
                    background-position: 0 0;
                }
                .s-sina {
                    background-position: 0 -64px;
                }
                .s-qzone {
                    background-position: 0 -32px;
                }
            }
            .f-qq i {
                margin: 0;
                width: 32px;
                line-height: 32px;
                height: 32px;
                cursor: pointer;
                overflow: hidden;
                color: #14afff;
                display: inline-block;
                font-size: inherit;
                text-rendering: auto;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                &:hover {
                    opacity: .8;
                    filter: alpha(opacity=80);
                    text-decoration: underline;
                }
            }
            li.f-praise {
                border-color: #f46753;
            }
            li.f-weinxi {
                border-color: #5ac64f;
            }
            li.f-sina {
                border-color: #ff7171;
            }
            li.f-qq {
                border-color: #14afff;
            }
            li.f-qzone {
                border-color: #fbb611;
            }
        }
    }
}
.recommentd {
    width: auto;
    margin-top: 64px;
    display: grid;
    padding: 0;
    grid-column-gap: 24px;
    grid-template-rows: auto;
    grid-template-areas: "previous next";
    grid-template-columns: 1fr 1fr;
    li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        text-align: -webkit-match-parent;
        border: 1px solid #e6ecf1;
        border-radius: 3px;
        -webkit-box-shadow: 0 3px 8px 0 rgba(116,129,141,.5);
        box-shadow: 0 3px 8px 0 rgba(116,129,141,.5);
        label {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 16px;
            i {
                color: #9daab6;
                font-size: 24px;
            }
        }
        &:hover {
            -webkit-box-shadow: #ccc 0px 10px 10px;
            -moz-box-shadow: #ccc 0px 10px 10px;
            box-shadow: #ccc 0px 10px 10px;
        }
        &:first-of-type div {
            -webkit-box-align: end;
            -ms-flex-align: end;
            align-items: flex-end;
        }
        &:last-of-type div {
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
        }
        div {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            margin: 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            padding: 16px;
            text-align: right;
            span {
                font-size: 12px;
                color: #babbc0;
                padding-bottom: 5px;
            }
            a,p {
                -webkit-transition: all .25s;
                transition: all .25s;
                font-size: 14px;
                color: #5c6875;
            }
            a:hover {
                color: #14afff;
            }
        }
    }
}
.comment {
    //padding-bottom: 115px;
    .submit {
        float: right;
        position: relative;
        margin-top: 20px;
    }
}
.explain {
    margin: 20px 0;
    border-left: 3px solid #6bc30d;
    min-height: 26px;
    line-height: 26px;
    padding: 5px 20px;
    background-color: #f8f9f7;
    font-size: 16px;
    font-weight: 400;
    color: #585957;
    text-shadow: 0 1px 0 rgba(255,255,255,.5);
    clear: both;
}

</style>
