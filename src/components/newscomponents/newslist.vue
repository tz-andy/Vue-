<template>
    <div class="newslist-container">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/newslist/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time | dateFormat}}</span>
                            <span>点击：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data:function () {
            return {
                newslist:[]
            }
        },
        methods:{
            getNewsList:function () {
                this.$http.get('api/getnewslist').then(function (data) {
//                    console.log(data.body);
                    var result=data.body;
                    if(result.status===0){
                        this.newslist=result.message;
                    }
                })
            }
        },
        created:function () {
            this.getNewsList();
        }
    };
</script>

<style scoped lang="scss">
.newslist-container{
    .mui-table-view{
        .mui-table-view-cell{
            a{
               .mui-media-body{
                   font-size: 13px;
                   font-weight:bold;
                   p{
                       display:flex;
                       justify-content: space-between;
                       span{
                           font-size:12px;
                           color: #226aff;
                       }
                   }
               }
            }
        }
    }
}
</style>