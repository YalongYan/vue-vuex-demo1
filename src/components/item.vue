<template>
  <div class="ctn">
     <div class="item_back item_container_style">
         <div class="item_list_container">
             <header class="item_title">题目{{itemNum}}</header>
                <ul>
                  <li v-for="(item, index) in itemDetail[itemNum-1].topic_answer"  class="item_list" @click="choosed(index, item.topic_answer_id)" >
                      <span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span> 
                      <span class="option_detail">{{item.answer_name}}</span>
                  </li>
                  <!-- <li class="item_list has_choosed "><span class="option_style">A</span> <span class="option_detail">答案aaaa</span></li> -->
                
                </ul>
        </div>
    </div>
    <!--如果所选的题目的itemNum 小与题目的长度  就是没到最后一题 就可以点击下一题 -->
   <span class="submitBtn next" @click="nextItem" v-if="itemNum< itemDetail.length">下一题</span>
   <span class="submitBtn submit" @click="submitAnswer" v-else>提交</span>
  </div>
</template>

<script>
//这个必须导入    因为使用了store里面的数据 所以 导入mapState     因为使用了action 方法   所以导入 mapAction 
import { mapState, mapActions } from 'vuex'

export default {
  name: 'item',
  data() {
		return {
			choosedNum: null, //选中答案索引
			choosedId:null //选中答案id
		}
	},
  //使用辅助函数 从store 获取要用到的   数据
  computed: mapState([
	  	'itemNum', //第几题
  		//'level', //第几周
  		'itemDetail', //题目详情
  		'timer', //计时器
    ]),
    //方法
    methods: {
        //使用辅助函数 从store获取需要使用的 action
  		...mapActions([
  			'addNum', 'initializeData',
  		]),
  		//点击下一题
  		nextItem(){
  			if (this.choosedNum !== null) {
	  			this.choosedNum = null;
	  			//保存答案, 题目索引加一，跳到下一题
	  			this.addNum(this.choosedId);   
  			}else{
  				alert('您还没有选择答案哦')
  			}
  		},
  		//索引0-3对应答案A-B
	  	chooseType: type => {
	  		switch(type){
	  			case 0: return 'A';
	  			case 1: return 'B';
	  			case 2: return 'C';
	  			case 3: return 'D';
	  		}
	  	},
	  	//选中的答案信息
	  	choosed(type,id){
	  		this.choosedNum = type;
	  		this.choosedId = id;
	  	},
	  	//到达最后一题，交卷，请空定时器，跳转分数页面
	  	submitAnswer(){
	  		if (this.choosedNum !== null) {
	  			this.addNum(this.choosedId);
	  			clearInterval(this.timer);
	  			this.$router.push('score');
  			}else{
  				alert('您还没有选择答案哦')
  			}
	  	},
    },
    // 每次进来都要初始化  不然从提交页面返回  还是显示的最后一个题
    created(){
		//初始化信息
		this.initializeData();
		//document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)';
	}
}

</script>

<style lang="scss" scoped>
.ctn{
    .item_list_container{
       font-size: 0.5rem;
    }
    .button_style {
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 8.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-repeat: no-repeat;
}
.next_item {
    background-image: url(../assets/images/2-2.png);
}
.has_choosed{
   color: red ;
}
.submitBtn {
    font-size: 0.5rem;
    margin-top: 1rem;
    display: inline-block;
    border: 1px solid red;
    padding: 0.2rem;
}
}
   
</style>
