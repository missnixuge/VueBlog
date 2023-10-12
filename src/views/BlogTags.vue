<template>
    <div class="home">
        <article class="newhome" >
            <el-card >
                <el-timeline>
                    <el-timeline-item
                        class="timeline-first"
                        size="large"
                        type= "success"
                        icon="el-icon-time"
                        data-aos="fade-up">
                        <h2>标签-{{TagName}}</h2>
                    </el-timeline-item>
                    <el-timeline-item 
                        class="timeline-item"
                        v-for="(item,index) in data" :key="index"
                        :timestamp="item.time"
                        size="large"
                        type= "primary"
                        icon="el-icon-star-on"
                        placement="top"
                        data-aos="fade-up">
                        <!-- <el-card class="update-card"> -->
                            <router-link :to="'/content/' + item.bID">
                                  <span  v-cloak>{{ item.btitle }}</span>
                            </router-link>
                        <!-- </el-card> -->
                    </el-timeline-item>
                </el-timeline>
            </el-card>
        </article>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        data: [],
        TagId: this.$route.query.TagId,
        TagName: this.$route.query.TagName,
        page: {
                current: 1,
                size: 10
            },
      };
    },
    mounted(){
        this.init(this.page);
    },
    methods: {
        init(page) {

            this.$api.get("BlogTags?TagId="+ this.TagId,null,res => {
             
                let  tags= res.response;
                if(tags && tags.length > 0) {
                    this.data = this.data.concat(tags)
                    this.page.current = tags.current
                }
			})
        },
    }
  };
</script>