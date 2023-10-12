<template>
    <div class="home">
        <article class="page-container">
            <div class="section">
                <div class="page">
                    <div class="title">
                        <el-divider content-position="center" data-aos="zoom-in"><span class="message-divider">留言板</span></el-divider>
                        <p data-aos="fade-right">
                            如果对本站有任何建议 欢迎在页面下方留言进行探讨
                        </p>
                    </div>
                    <div id="comment" class="comment">
                          <el-form :model="ValidateForm" ref="ValidateForm" label-width="100px" class="demo-ruleForm">
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
                                v-model="ValidateForm.Comment"  style="width: 100%;">
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
    name: 'message',
    components: {
        CommentBoard,
        vueEmoji,
    },
    data() {
        return {
            type: '4',
            email: '',
            commentList: [],
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
            page: {
                current: 1,
                size: 10
            },
            noMore: false
        }
    },
	computed: {
		//...mapGetters(["website"])
	},

    mounted() {
        this.loadComment(this.page)
    },
    methods: {
        loadComment(page) {

            this.$api.get("BlogComment?bid="+ 0, null, r => {
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

                data.bID =  0;
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
        selectEmoji (code) {
            this.value += code
        },
        submit(formName) {//一级评论添加
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.ValidateForm.bID =  0;
            this.ValidateForm.UserId = 0;
            this.ValidateForm.Ip = sessionStorage.getItem('ip');
            this.ValidateForm.Address = sessionStorage.getItem('area');
            this.ValidateForm.Browser = sysTool.GetCurrentBrowser();
            this.ValidateForm.Os = sysTool.GetOs();
           
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
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/blog/blog-common.css';
.section {
    padding: 10px 0;
}
.page-container {
	position: relative;
	z-index: 2;
	position: relative;
	background: #fff;
    padding: 20px 0 20px;
    min-height: 800px;
    width: 1200px;
    opacity: 0.9;
}
.title {
    height: 80px;
    .message-divider {
        font-size: 2.2em;
        font-weight: 700;
    }
    p {
        font-size: 1.1em;
        text-align: center;
        padding-top: 10px;
        &:last-child {
            padding-bottom: 20px;
        }
    }
}
.comment {
    padding-bottom: 115px;
    .submit {
        float: right;
        position: relative;
        margin-top: 20px;
    }
}
@media (max-width: 415px) {
    .title {height: 100px;}
    .title .message-divider {
        font-size: 1.8em;
    }
    .title p {
        font-size: 1em;
    }
}
@media (max-width: 376px) {
    .title .message-divider {
        font-size: 1.6em;
    }
    .title p {
        font-size: 0.85em;
    }
}
</style>