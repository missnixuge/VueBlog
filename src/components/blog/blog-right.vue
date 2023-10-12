<template >
     <div class="rbox">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img src="@/assets/img/banner.jpg" class="image">
                    <div style="padding: 14px;">
                      <span>毕竟几人真得鹿，不知终日梦为鱼。</span>
                      <div class="bottom clearfix">

                      <el-row :span="24" :offset="0">
                      
                        <el-col :span="5" :offset="1">  
                          <el-tooltip class="item icon-container" effect="dark" content="首页" placement="top">
                            <el-link :underline="false" href="/" >
                              <i class="el-icon-s-home"></i>
                            </el-link>
                            
                          </el-tooltip>
                        </el-col>  
                        <el-col :span="5" :offset="1" >  
                          <el-tooltip class="item icon-container" effect="dark" content="QQ" placement="top">
                            <el-link :underline="false" href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1669387823" ><i class="el-icon-my-qq"></i></el-link>
                            
                          
                          </el-tooltip>
                        </el-col>    
                        <el-col :span="5" :offset="1" >  
                          <el-tooltip class="item icon-container" effect="light"  placement="right">
                            <div slot="content" style="font-size: 14px;">
                                    <img src="../../assets/img/wechat.png" style="width:6rem"/>
                                    
                                </div>
                            <i class="el-icon-chat-dot-round"></i>
                          </el-tooltip>
                        </el-col>    
                        <el-col :span="5" :offset="1" >  
                          <el-tooltip class="item icon-container" effect="dark" content="GitHub" placement="top" >
                            <i class="el-icon-tickets"></i>
                          </el-tooltip>
                        </el-col>    
                      </el-row>
                        <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                      </div>
                    </div>
              </el-card>
              <el-card :body-style="{ padding: '0px' }" shadow="hover" style=" 
                width: 100%;
                /* height: 80px; */
                font-family: Share Tech Mono,monospace;
                text-align: center;
                position: relative;
                color: #0c7454;
                text-shadow: 0 0 20px #0fa779, 0 0 20px rgba(11, 97, 85, 0); letter-spacing: .05em;">
                <p ><time>{{ currentDate }}</time></p>
                <p ><time style="font-size: 1.5rem;">{{ currentTime }}</time></p>
              </el-card>
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <div class="whitebg notice">
                    <h2 class="htitle">热门文章</h2>
                    <ul>
                        <li v-for="item in hotData" :key="item.bID">
                          <router-link :to="'/content/' + item.bID">
                                  <span  v-cloak>{{ item.btitle }}</span>
                            </router-link>
                           
                          
                         </li>
                      
                    </ul>
                </div>
              </el-card>
          </div>
</template>
<script>
    export default {
        data() {
            return {
                currentDate: '',
                currentTime: '',
                hotData:[],
            }
        },
        mounted() {
            var date = new Date();
            this.currentDate =this.$options.filters['formatDate'](date,'yyyy-MM-dd  星期w') ;
            this.currentTime = date.toLocaleTimeString();
            this.getHotArticle();

        },
        methods:{
          getHotArticle(){
            this.$api.get("Blog/GetHotArticle", null, r => {
            this.hotData = r.response;

      });

          },

        },
        
    }
</script>