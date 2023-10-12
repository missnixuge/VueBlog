<template>
         <div class="lbox" v-loading="pictLoading" element-loading-background="rgba(247, 245, 245, 0.7)" element-loading-text="Loading..." >
            <div class="whitebg bloglist">

              <h2 class="htitle">最新博文
                        <router-link :to="'/Editor'" class="prev" style="float:right;" rel="prev">
                            Add My Study
                        </router-link>
                    </h2>
                  <div class="infinite-list-wrapper"  >
                    <!-- style="overflow:auto;overflow-anchor: none;" v-infinite-scroll="load" infinite-scroll-disabled="disabled" -->
                  <el-card class="box-card" shadow="hover" v-for="i in list" :key="i.bID" >
                  
                    <div  >
                      
                      <section class="meta">
                        <h3 class="bolgtitle">
                                <router-link :to="'/content/' + i.bID">
                                  <span  v-cloak>{{ i.btitle }}</span>
                                </router-link>
                            </h3>
                      </section>
                      <section class=" ">
                        <article v-html="i.bcontent" class="bolgcontent"></article>
                        <div >
                          <el-divider content-position="right"><span><router-link :to="'/content/' + i.bID" class="fontsize">查看<i class="el-icon-view el-icon--right"></i> </router-link></span></el-divider>
                        </div>
                        <div class="bolgcontent" >
                          <span  v-cloak>{{ i.bcategory }}</span>
                          <time  v-cloak>
                            {{ i.bCreateTime | formatDate("yyyy-MM-dd 星期w") }}
                          </time>
                          <span  v-cloak>{{ i.bsubmitter }}</span>
                      
                        </div>
                      </section>
              
                      <!-- <el-divider></el-divider> -->
                    
                    </div>
                  </el-card>
                  <!-- <p v-if="loading">加载中...</p>
                  <p v-if="noMore">没有更多了</p> -->
                  </div>
                  <nav id="page-nav">
                    <el-pagination
                        background
                        @size-change="handleSizeChange"
                          @current-change="handleCurrentChange"
                          :current-page="page"
                          :page-size="PageSize"
                        layout="prev, pager, next"
                        :total="TotalCount">
                      </el-pagination>
                        
                    </nav > 
                   
              </div>
          </div>
</template>
<script>
export default {
  name: "Home",
    data() {
        return {
            page: 1,
            TotalCount: 1,
            PageCount: 1,
            PageSize: 1,
            isShow: true,
            pictLoading: true,
            list: [],
            currentDate: null,
            currentTime: null,
            loading: false
          
        }
    },
    computed: {
      // noMore () {
        
      //   return  this.TotalCount <= this.list.length
      // },
      // disabled () {
       
      //     return this.noMore || this.loading;
      // }
    },
    mounted: function() {
      setInterval(this.tick, 1000);
    }
  ,
    created() {
        this.getData(this.page)
    },
    methods: {
      tick: function() {
      var date = new Date();
      this.currentDate =this.$options.filters['formatDate'](date,'yyyy-MM-dd  星期w') ;
      this.currentTime = date.toLocaleTimeString();
      },
       getData(pages) {
           
            this.$api.get("Blog?page=" + pages+"&bcategory="+"技术博文"+"&key="+""+"&PageSize=6", null, r => {
     
            this.list = r.response.data;
          
            this.page = r.response.page;
            this.PageCount = r.response.pageCount;
            this.TotalCount = r.response.dataCount;
            this.PageSize = r.response.PageSize;
            // if (this.TotalCount >this.list.length)
            // {
            //   this.list.push.apply(this.list,data);
            //   this.page +=1;
            // }
            this.loading = false;
            this.isShow = false;
            this.pictLoading = false;
      });
    },
    load () 
    {
      this.loading=true;
      if (this.TotalCount>this.list.length)
       {
          setTimeout(() => {
             
              this.getData();
            }, 2000)
         
       }
       this.loading = false
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
      this.page=val;
      this.getData( this.page);
      console.log(`当前页: ${val}`);
    }
  },
  watch: {
    $route(to) {
      this.list = [];
      this.isShow = true;
      this.page = to.query.page;
      this.getData();
    }
  }
};
</script>