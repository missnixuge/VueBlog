<template>
    <!-- 词云图 -->
    <div ref="echart" class="className" :style="{height:height,width:width}" />
</template>
<script>
    import * as echarts from 'echarts';
    import "echarts-wordcloud";
    import router from "@/router";
    const animationDuration = 1000
    export default {
       // mixins: [resize],
        props: {
            className: {
                type: String,
                default: 'chart'
            },
            width: {
                type: String,
                default: '400px'
            },
            height: {
                type: String,
                default: '400px'
            },
            chartData: {
                type: Array,
                required: true
            },
        },
        data() {
            return {
                chart: null
            }
        },
        watch: {
            chartData: {
                deep: true,
                handler(val) {
                    this.setOptions(val)
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.initChart()
            })
        },
        beforeDestroy() {
            if (!this.chart) {
                return
            }
            this.chart.dispose()
            this.chart = null
        },
        methods: {
            initChart() {
                this.chart = echarts.init(this.$refs.echart);
                this.setOptions(this.chartData);
                //点击事件
                this.chart.on('click', function(params) {
                    router.push({path:params.data.url,query: {TagId:params.data.id,TagName:params.data.name}})
                    console.log(params.data.id+"="+params.data.value+"="+params.data.url);
                });
               
            },

            
            setOptions(data) {
                this.chart.setOption({
                    title: {
                        text: '标签',
                        top: '0%',
                        left: '1%',
                        textStyle: {
                            fontSize: 25,
                            color: '#3B3E41',
                            fontWeight: 'normal'
                        }
                    },
                    grid: {
                        width: 'auto',
                        height: 'auto',
                        top: "10px",
                        left: "10px",
                        right: "10px",
                        bottom: "10px"
                    },
                    series: [{
                        type: 'wordCloud',

                        //绘制的图形 可用的属性有 圆形( circle 默认)，心形 cardioid ，菱形 diamond (正方形的别名)，三角形 triangle ，星形 star 
                        shape: 'diamond',

                        //保持宽高比为maskImage或1:1的形状
                        //该选项由echarts-wordcloud@2.1.0支持
                        keepAspect: false,

                        //一个轮廓图像，其白色区域将被排除在绘制文本之外。
                        //随着云的形状的增长，shape选项将继续应用。

                        //maskImage: maskImage,

                        //接下来的左/顶/宽/高/右/底是用来定位词云的
                        //默认放置在中间，大小为75% x 80%。

                        left: 'center',
                        top: 'center',
                        width: '80%',
                        height: '80%',
                        right: null,
                        bottom: null,

                        //数据中的值将被映射到的文本大小范围。
                        //默认最小12px，最大60px。
                        sizeRange: [12, 60],

                        // 文本旋转范围和步进度。文本将通过rotationStep 45在[- 90,90]范围内随机旋转

                        rotationRange: [0, 0],
                        rotationStep: 45,

                        //以像素为单位的网格大小，用于标记画布的可用性
                        //网格尺寸越大，单词之间的间距越大。
                        gridSize: 8,

                        //设置为true，允许文字部分在画布外绘制。
                        //允许绘制大于画布大小的单词
                        drawOutOfBound: false,

                        //如果字体太大而无法显示文本，
                        //是否收缩文本。如果将其设置为false，则文本将
                        //不渲染。如果设置为true，则文本将被缩小。
                        shrinkToFit: false,

                        // If执行布局动画。
                        //当有大量的单词时，关闭它会导致UI阻塞。
                        layoutAnimation: true,

                        // 字体样式
                        textStyle: {
                            fontFamily: 'sans-serif',
                            fontWeight: 'bold',
                            // 颜色随机
                            color: function () {
                                // Random color
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        //鼠标悬浮时高亮显示
                        emphasis: {
                            focus: 'self',

                            textStyle: {
                                textShadowBlur: 10,
                                textShadowColor: '#333'
                            }
                        },

                        // 绑定数据
                        data:data,
}]
                })
            },
        }
    }
</script>