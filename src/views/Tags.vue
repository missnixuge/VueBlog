<template>
  <div class="home">
      <article class="newhome">
        <div  class="lbox">

        
          <el-card class="box-card" shadow="hover" >
                <blog-tags-word :chartData="tagList" :width="'100%'" :height="'calc(100vh - 121px)'"></blog-tags-word>
          </el-card>
        </div>
        <blog-right></blog-right>
      </article>
  </div>
</template>


<script>
 import BlogTagsWord from '../components/blog/blog-tags-word'
 import BlogRight from '../components/blog/blog-right'
  // 引入Echarts-wordcloud插件  
 
  export default {
      data() {
          return {
              tagList:[ ]
          }
      },
      components: {
          BlogTagsWord,BlogRight
      },
      created() {
          this.getTagWordle()
      },
      methods: {
          getTagWordle() {
            this.$api.get('Tags/',null,r=>{

              let result = r.response;
                    if(result.length > 0) {
                        this.tagList = result;
                    }
            })
              
          }
      }
  }
</script>

<style lang="scss" scoped>
.wordcloud-wrapper {
  height: 400px;
}
</style>