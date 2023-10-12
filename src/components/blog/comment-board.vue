<template>
  <div>
        <p style="padding-top:15px;" v-if="!data || data.length==0">暂无评论，我来发表第一篇评论！</p>

        <ul class="blog-comment">
            <li v-for="(item,index) in data" :key="index">
                <div class="comment-parent">
                    <a href="javascript:void(0);">
                        <el-avatar class="avatar" :src="item.Avatar">
                            <img src="../../assets/img/man.png"/>
                        </el-avatar>
                        <!-- <img :src="item.commentatorAvatar" alt="" /> -->
                    </a>
                    <div class="info">
                        <span class="username"><a href="javascript:void(0);" class="to-username">{{item.NickName}}</a></span>
                        <el-tag v-if="!item.Id" class="tag" color="orange" size="mini" effect="dark">博主</el-tag>
                    </div>
                    <div class="content comment-text" v-html="createEmoji(item.Comment)"></div>
                    <p class="info info-footer">
                        <span class="aux-word">
                            <i class="el-icon-time"></i>{{item.CreateTime}}
                        </span> 
                        <span class="aux-word" v-if="item.Address">
                            <i class="el-icon-location-information"></i>{{item.Address}}
                        </span>
                        <span class="aux-word" v-if="item.Browser">
                            {{item.Browser}}
                        </span>
                        <span class="aux-word" v-if="item.Os">
                            {{item.Os}}
                        </span>
                        <el-link type="success" @click="reply(item,item.Id);">{{isActive === item.Id ? '收起' : '回复'}}</el-link>
                    </p>
                </div>
                <div v-if="item.ReplyComment && item.ReplyComment.length > 0">
                    <div class="comment-child" v-for="(child,i) in item.ReplyComment" :key="i">
                        <a href="javascript:void(0);">
                            <el-avatar class="avatar" :src="child.Avatar">
                                <img src="../../assets/img/man.png"/>
                            </el-avatar>
                        </a>
                        <!-- <a href="javascript:void(0);"><img :src="child.responderAvatar" alt="" /></a> -->
                        <div class="info">
                            <span class="username"><a href="javascript:void(0);" class="to-username">{{child.NickName}} </a></span>
                            <el-tag v-if="!child.Id" class="tag" color="orange" size="mini" effect="dark">博主</el-tag>
                            <span>
                                回复
                                <a href="javascript:void(0);" class="to-username">@{{child.ParentNickName}}</a>
                                <el-tag v-if="!child.ParentNickName" class="tag" color="orange" size="mini" effect="dark">博主</el-tag>
                                ：
                            </span>
                            <div class="comment-text" v-html="createEmoji(child.Comment)"></div>
                        </div>
                        <p class="info">
                            <span class="aux-word">
                                <i class="el-icon-time"></i>{{child.CreateTime}}
                            </span> 
                            <span class="aux-word" v-if="child.Address">
                                <i class="el-icon-location-information"></i>{{child.Address}}
                            </span>
                            <span class="aux-word" v-if="child.Browser">
                                {{child.Browser}}
                            </span>
                            <span class="aux-word" v-if="child.Os" >
                                {{child.Os}}
                            </span>
                            <el-link type="success" @click="reply(child,item.Id);">{{isActive === child.Id ? '收起' : '回复'}}</el-link>
                        </p>
                    </div>
                </div>
                <div v-if="commentList[item.Id]" v-show="!commentList[item.Id].hide" :class="['replycontainer', 'replycontainer_' + item.Id]">

                    <el-form :model="ChildValidateForm" ref="ChildValidateForm" label-width="100px" class="demo-ruleForm">
                        <el-row>
                            <el-col>
                                <el-form-item label="评论内容" prop="Comment" :rules="[
                                    { required: true, message: '评论内容不能为空'}
                                    ]" style="width: 100%;">
                                    <el-input
                                        type="textarea"
                                        :autosize="{ minRows: 3, maxRows: 20}"
                                        :placeholder="commentList[item.Id].placeholder"
                                        resize="none"
                                        maxlength="250"
                                        show-word-limit
                                        v-model="ChildValidateForm.Comment">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                <el-form-item
                                    label="名称"
                                    prop="NickName" 
                                    :rules="[
                                    { required: true, message: '名称不能为空'}
                                    ]"
                                >
                                    <el-input v-model.NickName="ChildValidateForm.NickName" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                <el-form-item
                                    prop="Email" 
                                    label="邮箱"
                                    :rules="[
                                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                                    ]"
                                >
                                    <el-input v-model="ChildValidateForm.Email"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                <el-form-item
                                    label="链接"
                                
                                >
                                    <el-input v-model.Link="ChildValidateForm.Link" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row> 

                        <el-row>
                            <el-col :xs="12" :sm="12" :md="16" :lg="18" :xl="19">  
                                <vue-emoji
                                    @select="selectEmoji">
                                </vue-emoji>
                            </el-col>
                            <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="5">
                                <el-form-item>
                                
                                <el-button type="primary" size="small" @click="submit('ChildValidateForm',item.Id, index)">提交</el-button>
                                <el-button @click="reset('ChildValidateForm')" size="small">重置</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                       
                         
                        </el-form>
                   
                </div>
                <el-divider></el-divider>
            </li>
        </ul>
        <el-row style="height: 50px" v-if="loading && !noMore"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(255, 255, 255, 0)"></el-row>
        <p align="center" v-if="!disabled">
            <el-button type="text" class="more-btn" @click="loadData()">点击查看更多</el-button>
        </p>
        <p align="center" v-if="noMore" style="color: red">没有更多了</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import vueEmoji from '@/components/emoji/emoji.vue'
import { createIcon } from '@/components/emoji/utils/emoji'
import * as sysTool from '../../assets/js/sysTools'
export default {
    name: 'commentBoard',
    data() {
        return {
           
            recomment: {},                   //当前点击回复对象
            commentList: [],
            isActive: null,                  //当前点击回复的id
            isActiveParent: null,            //当前点击回复id的父id
            loading: false,
            ChildValidateForm: {
                NickName: '',
                Email: '',
                Link: '',
                Comment: '',
                bID: '',
                FollowId:'',
                Ip:'',
                Os:'',
                Browser:'',
                Address:'',
                Avatar:'',
                UserId: 0
                },
           
        }
    },
    props: {
        data: {
            type: Array,
            default: () => {
                return []
            }
        },
        current: {
            type: Number,
            default: 1
        },
        size: {
            type: Number,
            default: 10
        },
        noMore: {
            type: Boolean,
            default: false
        }
    },
    components: {
        vueEmoji
    },
    watch: {
        data (newValue) {
            this.initComment(newValue)
        }
    },
    computed: {
       // ...mapGetters(["blogger"]),
        disabled () {
            return this.loading || this.noMore
        }
    },
    created() {
        this.initComment();
      
    },
    methods: {
        initComment(newValue) {
            let c_data = this.data
            if(newValue) {
                c_data = newValue
            }else {
                return
            }
            let arr = {}
            for(let index in c_data) {
                if(!c_data[index]) {
                    continue
                }
                let obj = {}
                obj.hide = true
                obj.placeholder = '说点什么吧~'
                arr[c_data[index].Id] = obj
            }
            this.commentList = arr

            this.isActive = null
            this.isActiveParent = null
            this.ValidateForm ={}
        },
        loadData () {
            let p = {
                bid: 1,
               // size: this.size
            }
            this.loading = true
            this.$emit('loadData', p)
            console.log(this.commentList)
            setTimeout(() => {
                this.loading = false
            }, 2000)
        },
        reply(comment,id) {
            this.reset('ChildValidateForm');
            this.recomment = comment

            // 判断点击的是父级评论
            if (comment.FollowId==0) {
                //点击收起
                if(comment.Id === this.isActive) {
                    this.isActive = null
                    this.isActiveParent = null
                } else {
                    //点击回复
                    if(this.isActiveParent) {
                        let o_obj = this.commentList[this.isActiveParent]
                        o_obj.hide = !o_obj.hide
                        o_obj.placeholder = '说点什么吧~'
                        this.$set(this.commentList, this.isActiveParent, o_obj)
                    }
                    this.isActive = comment.Id
                    this.isActiveParent = comment.Id
                    // document.querySelector('.replycontainer_'+this.isActive).scrollIntoView({ behavior: 'smooth' })
                }
                let obj = this.commentList[comment.Id]
                obj.hide = !obj.hide
                obj.placeholder = '回复【'+comment.NickName+'】'
                this.$set(this.commentList, comment.Id, obj)
            } else {
                //子级评论
                //点击收起
                if(comment.Id === this.isActive) {
                    this.isActive = null
                    this.isActiveParent = null
                } else {
                    //点击回复
                    console.log('isActiveParent:',this.isActiveParent)
                    if(this.isActiveParent) {
                        let o_obj = this.commentList[this.isActiveParent]
                        o_obj.hide = !o_obj.hide
                        o_obj.placeholder = '说点什么吧~'
                        this.$set(this.commentList, this.isActiveParent, o_obj)
                    }
                    this.isActive = comment.Id;
                    this.isActiveParent =this.commentList[comment.FollowId] ? comment.FollowId : id;
                   
                    // document.querySelector('.replycontainer_'+this.isActive).scrollIntoView({ behavior: 'smooth' })
                }
                let obj = this.commentList[id]
                obj.hide = !obj.hide
                obj.placeholder = '回复【'+comment.NickName+'】'
                this.$set(this.commentList, id, obj)
            }
            
        },
        selectEmoji (code) {
            this.ChildValidateForm.Comment += code
        },
        createEmoji(val) {
            if(!val) {
                return ''
            }
            //return val.replace(/:.*?:/g, createIcon).replace(/\n|\r\n/g, '<br>')
            return val.replace(/:[0-9a-z_-]{1,}:/g, createIcon).replace(/\n|\r\n/g, '<br>')
        },
        submit (formName,currentId, index) 
        {
          this.$refs[formName][0].validate((valid) => {
          if (valid) {
                this.ChildValidateForm.FollowId=this.recomment.Id
                this.ChildValidateForm.Ip = sessionStorage.getItem('ip');
                this.ChildValidateForm.Address = sessionStorage.getItem('area');
                this.ChildValidateForm.Browser = sysTool.GetCurrentBrowser();
                this.ChildValidateForm.Os = sysTool.GetOs();

                let obj = this.commentList[currentId]
                obj.hide = !obj.hide
                obj.placeholder = '说点什么吧~'
                this.$set(this.commentList, currentId, obj)

                this.isActive = null
                this.isActiveParent = null
                
                this.$emit('submit',this.ChildValidateForm)
            
                
                setTimeout(() => {
                    //重置内容
                    this.reset('ChildValidateForm')
                    this.recomment = {}
                    
                 
                }, 1000)
           } 
           else {
                console.log('error submit!!');
                return false;
          }
        });
        }
        ,
      reset(formName) {
        this.$refs[formName][0].resetFields();
      },  
      
    }
}
</script>

<style lang="css" >
/* @import '../../assets/styles/blog/blog-common.css';  */
/*评论与留言*/
.blog-comment {
    position: relative;
    margin-bottom: 10px;
    li {
        border-bottom: 1px dotted #01aaed;
        padding: 15px 0 10px 0;
        list-style: none;
    }
    .tag {
        border-color:orange;
        margin:0 5px;
    }
    .info-footer {
        font-size: 13px;
    }
    .info {
        padding-top: 5px;
        span {
            padding-right: 5px;
            a {
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        .layui-badge {
            margin-right: 5px;
        }
        .username {
            a {
                color: #01aaed;
            }
        }
        .btn-reply {
            color: #009688;
        }
    }
    .replycontainer {
        margin-top: 10px;
        margin-bottom: 10px;
        .el-textarea__inner {
            background-color: transparent !important;
        }
        .submit {
            float: right;
            position: relative;
            margin-top: 20px;
        }
    }
    .content {
        padding: 5px 0;
        min-height: 30px;
        font-size: 14px;
    }
    hr {
        margin-left: 53px;
    }
    i {
        font-size: 12px;
        margin-right: 2px;
    }
}
.blog-comment .content,
.blog-comment .info {
    margin-left: 53px;
}
.comment-parent {
    & > a {
        & > .avatar {
            width: 40px;
            height: 40px;
            margin: 5px 5px 5px 0;
            position: absolute;
            border-radius: 50px;
        }
        & > img {
            width: 45px;
            height: 45px;
            margin: 5px 5px 5px 0;
            position: absolute;
            border-radius: 50px;
        }
    }
}
.comment-child {
    margin-left: 53px;
    min-height: 50px;
    & > a {
        & > .avatar {
            width: 40px;
            height: 40px;
            margin: 5px 5px 5px 0;
            position: absolute;
            border-radius: 50px;
        }
        & > img {
            width: 40px;
            height: 40px;
            margin: 5px 5px 5px 0;
            position: absolute;
            border-radius: 50px;
        }
    }
   
}
.info {
        margin-left: 48px;
        font-size: 13px;
        line-height: 20px;
        .to-username {
            color: #01aaed;
            font-weight: bolder;
            margin-left: 5px;
        }
    }
.comment-text {
    padding: 10px 10px 0px 30px;
    font-family:Arial,Helvetica,sans-serif;
    word-wrap: break-word;
    word-break: break-all;
    /* // white-space: normal; */
    white-space: pre-wrap;
    a {
        color: #1e9fff;
        font-weight: bold;
        &:hover {
            text-decoration: underline;
        }
    }
}
.aux-word {
    margin-right: 3px;
    color: #555;
}
.emoji_icon {
    width: 25px;
}
.more-btn {
    margin: 0 auto;
    width: 100%;
    color: green;
}
/*评论与留言END*/
</style>