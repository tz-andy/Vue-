<template>
    <div class="newsinfo-container">
        <div class="title">
           {{newsinfo.title}}
            <p class='sub-title'>
                <span>发表时间：{{newsinfo.add_time| dateFormat}}</span>
                <span>点击：{{newsinfo.click}}次</span>
            </p>
        </div>
        <hr>
        <div class="newsinfo-content" v-html="newsinfo.content"></div>

        <comment :id="id"></comment>
    </div>
</template>

<script>
    import comment from '../commen/comment.vue'
    export default {
        data:function () {
            return {
                id:this.$route.params.id,
                newsinfo:{}
            }
        },
        methods:{
            getNewsInfo:function () {
                this.$http.get('api/getnew/'+this.id).then(function (data) {
//                    console.log(data.body);
                    var result=data.body;
                    if(result.status===0){
                        this.newsinfo=result.message[0];
                    }
                })
            }
        },
        created:function () {
            this.getNewsInfo();
        },
        components:{
            comment
        }
    };
</script>

<style lang="scss">
    .newsinfo-container{
        padding: 0 5px;
        .title{
            margin: 15px 0;
            color: red;
            text-align: center;
            font-size: 16px;
            .sub-title{
                display:flex;
                justify-content: space-between;
                color: blue;
                font-size: 12px;
                margin-top: 5px;
            }
        }
        .newsinfo-content{
            img{
                width: 100%;
            }
        }
    }
</style>