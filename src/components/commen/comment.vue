<template>
    <div class="comment-container">
        <h4>发表评论</h4>
        <hr>
        <textarea name="" id="" placeholder="请输入评论"></textarea>
        <mt-button size="large" type="primary">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{ item.content === "undefined" ? '此用户很懒，嘛都没说': item.content }}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        data:function () {
            return {
                comments:[],
                pageIndex:1
            }
        },
        methods:{
            getComment:function () {
                this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(function (data) {
                    var result=data.body;
                    if(result.status===0){
                        this.comments=this.comments.concat(result.message);
                    }
                })
            },
            getMore:function () {
                this.pageIndex++;
                this.getComment();
            }
        },
        created:function () {
            this.getComment();
        },
        props:['id']
    };
</script>

<style scoped lang="scss">
.comment-container{
    h3 {
        font-size: 18px;
    }
    textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list {
        margin: 5px 0;
        .cmt-item {
            font-size: 13px;
            .cmt-title {
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body {
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>