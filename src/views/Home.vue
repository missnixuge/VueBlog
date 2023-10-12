<template>
 
 <div class="home">
        <article class="newhome" v-cloak >
 
          <template>
          <el-backtop target=".el-main" :visibility-height="300" :bottom="200" >
                    <div>
                      <i class='el-icon-top'></i>
                    </div>
          </el-backtop>
          </template>
          <div class="fontsize">
              <el-divider content-position="center"><span class="fontsize">知识的海洋</span></el-divider>
              <p >
                  知识就是我们借以飞上天堂的羽翼。
              </p>
          </div>

          <blog-left></blog-left>
          <blog-right></blog-right>
        </article>
       
</div>
</template>

<script>
// @ is an alias to /src
import BlogLeft from '../components/blog/blog-left'
import BlogRight from '../components/blog/blog-right'

export default {
  name: "Home",
  components: {BlogLeft,BlogRight},

};
</script>
<style>

  .fontsize{
    font-size: 1.1em;
    font-weight: bolder;
    text-align: center;
    color: black;
  }
  .bolgtitle
  {
    font-size: 1.1em;
    font-weight: bolder;
    color: black;
  }
  .bolgcontent
  {
    font-size: 0.8em;
    color: black;
  }
  .el-col {
    border-radius: 4px;
  }
  .el-card{
    margin-top: 20px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .icon-container {  
      display: inline-block;  
      width: 30px;  
      height: 30px;  
      border-radius: 50%;  
     
      border: 1px solid #ccc;  
      text-align: center;  
      line-height: 30px;  
      transition: background-color 0.3s ease;  
    }  
 .icon-container:hover {  
      border-color: rgb(2, 162, 255);
      color:  rgb(2, 162, 255);
      
    }  
 
.el-icon-my-qq{
  background: url('../assets/img/icons8-qq-32.png') no-repeat;
  font-size: 16px;
  background-size: cover;
  background-position: center center;
}
.el-icon-my-qq:before{
    content: "\e611";
    font-size: 16px;
    visibility: hidden;
   }
   @keyframes loading {
  0% {
    width: 90%;
  }
  50% {
    width: 100%;
  }
  to {
    width: 90%;
  }
}
[v-cloak] {
  display: none !important;
}


</style>