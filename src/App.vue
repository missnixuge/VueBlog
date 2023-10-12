<template>
  <div id="app" >
    <el-container class="container">
      <el-header >
           <el-row>
            <el-col :span="4">
              <a class="header-container-logo" href="/" rel="noopener noreferrer">
                      <img src="@/assets/img/logo.png" style="width: 4rem;"/>
              </a>
            </el-col>
            <el-col :span="18" >
              <div class="hidden-md-and-down" style="float: right;">
                  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"  >

                    <template v-for="(item,index) in navdata" >
                      <el-submenu  v-if ="item.children && item.children.length > 0" :index="item.id" >
                          <template slot="title"><i :class="item.icon"></i>{{item.linkName}} </template>
                          <el-menu-item v-for="(subitem,subindex) in item.children" :key="subindex" :index="subindex+'-'+index">
                            <router-link :to="subitem.path" ><i :class="subitem.icon"></i>{{subitem.linkName}} </router-link>
                          </el-menu-item>   
                        </el-submenu>
                        <el-menu-item   v-else :index="item.id" ><router-link :to="item.path"><i :class="item.icon"></i>{{item.linkName}}</router-link>
                        </el-menu-item>
                    </template>
                    </el-menu>
              </div>
              <div class="hidden-lg-and-up">   
                    <el-button @click="drawer = !drawer" type="success" icon="el-icon-more" circle class="menubutton">  
                    </el-button>

                    <el-drawer
                      title="我是标题"
                      :visible.sync="drawer"
                      :with-header="false"
                      :append-to-body="true"
                      :modal-append-to-body="false">

                      <el-menu
                          :default-active="activeIndex"
                          class="el-menu-vertical-demo" @select="handleSelect">
                          <template v-for="(item,index) in navdata" >
                            <el-submenu   v-if ="item.children && item.children.length > 0" :index="item.id" >
                                <template slot="title"><i :class="item.icon"></i>{{item.linkName}}</template>
                                <el-menu-item v-for="(subitem,subindex) in item.children" :key="subindex" :index="subindex+'-'+index">
                                  <router-link :to="subitem.path"><i :class="subitem.icon"></i>{{subitem.linkName}}</router-link>
                                </el-menu-item>   
                              </el-submenu>
                              <el-menu-item  v-else :index="item.id" @click="drawer = !drawer" ><router-link :to="item.path"><i :class="item.icon"></i>{{item.linkName}}</router-link>
                              </el-menu-item>
                          </template>

                      
                        
                        </el-menu>
                    </el-drawer>
              </div>
            </el-col>
           </el-row>
              
             
          
       
       
        <!-- <side-bar :data="website.sideBar"></side-bar> -->
      </el-header>
      

      
    </el-container>
    <el-container>
          <el-main >
            <router-view/>
          </el-main>
      </el-container>
    <footer>
            <div class="box">

                <div class="endnav">
                   <div id="footer" style="text-align: center;">
                      Copyright © 2023 得梦为鱼
                     
                  </div>
                </div>
            </div>
    </footer>
 

</div>
</template>

<script>

  export default {
    data() {
      return {
        activeIndex: '1',
        navdata:[],
        drawer: false,
        website: this.$store.state.website,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
       
        localStorage.setItem("index", key);
      },      
      loadNav() {
            this.$api.get("NavigationBar", null, r => {
                    let result = r.data;
                    if(result.length > 0) {
                        this.navdata = result;
                    }
                })
            },
    },
    created() {
      this.loadNav();
      // 页面手动刷新指定路由
      //获取地址栏中的路由，设置elementui中的导航栏选中状态
      let index = localStorage.getItem("index");
      if (index) {
        this.activeIndex = index;
      } 
   },

  }
</script>

<style lang="css">
@import "./assets/styles/stylehome.css";
@import "./assets/styles/base.css";
@import "./assets/styles/m.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  text-decoration: none;
  &.router-link-exact-active {
    color: #08b0f3;
  }
}
.el-header{
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
}
.menubutton{
  float: right;
  margin-right: 10px; 
  margin-top: 10px; 
 
}

.el-main{
  height:calc(100vh - 121px);
   overflow-y: none; 
}
.header-container-logo {
  float: left;
  margin-left: 10ch;

} 
.iconfont {
    color: #fff;
    font-size: 30px;
  }
</style>
