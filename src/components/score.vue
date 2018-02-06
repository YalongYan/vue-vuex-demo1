<template>
<div>
 <span class="score_num">您的得分： {{score}}</span>
 <div class="result_tip">{{scoreTips}}</div>
 <div class="share_button" @click="showCover"></div>
 <div class="share_cover" v-show="showHide" @click="showCover">
     这是遮罩层
    <img src="../assets/images/5-1.png" class="share_img">
</div>
</div>


</template>

<script>
// 这里只是 使用store里面的数据  所以 只引入了 mapState
import {mapState} from 'vuex';
export default {
  name: 'score',
  data(){
        return {
            showHide: false, //是否显示分享的提示
            score: 0, //分数
            scoreTips:'', //分数提示
            rightAnswer: [4, 5], //正确答案
            scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
        }
    },
    //引入store 里面的answerid
    computed: mapState(['answerid']),
     methods: {
        //计算分数
        computedScore(){
            this.answerid.forEach((item, index) => {
                if (item == this.rightAnswer[index]) {
                    this.score += 20;
                }
            })
        },
        //是否显示分享提示
        showCover: function (){
            this.showHide = !this.showHide;
        },
        //根据分数显示提示
        getScoreTip: function (){
            if(this.score <= 20) {
                this.scoreTips = this.scoreTipsArr[0];
                return
            }
            if(this.score <= 40) {
                this.scoreTips = this.scoreTipsArr[1];
                return
            }
        
        }
    },
    // 初始化执行的函数
    created(){
        this.computedScore();
        this.getScoreTip();
        document.body.style.backgroundImage = 'url(./static/img/4-1.jpg)';
    },
}

</script>

<style lang="scss" scoped>

 .share_button {
    width: 6.025rem;
    height: 2.4rem;
    margin: 0.8rem auto 0;
    background: url(../assets/images/4-3.png) no-repeat 0.4rem 0;
    background-size: 5.825rem 100%;
}
.share_img{
    height: 4rem;
    width: 100%;
}
 .share_cover{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background-color: black;
    opacity: 0.5;
 }  
</style>
