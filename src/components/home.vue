
<template>
    <div class="homeContainer">
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imagesList" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!--九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <img src="../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu3.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        data:function () {
            return {
                imagesList:[]
            }
        },
        methods:{
            getImagesList:function () {
                this.$http.get('api/getlunbo').then(function (data) {
//                    console.log(data.body);
                    var result=data.body;
                    if(result.status===0){
                        this.imagesList=result.message;
                    }else{
                        Toast('加载轮播图失败');
                    }

                })
            }
        },
        created:function () {
            this.getImagesList();
        }
    };
</script>

<style scoped lang="scss">
    .homeContainer{
        .mint-swipe{
           height: 200px;
            .mint-swipe-item{
                img{
                    width: 100%;
                    height:100%;
                }
            }
       }
        .mui-table-view.mui-grid-view.mui-grid-9{
            background-color: #fff;
            .mui-table-view-cell{
                border:none;
                img{
                    width: 80%;
                    height:80%;
                }
                mui-media-body{
                    font-size:12px;
                }
            }
        }
    }
</style>