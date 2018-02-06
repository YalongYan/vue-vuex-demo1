<template>
  <div class="ctn">
      <header class="top_tips"><span class="num_tip">{{level}}</span></header>
      <div><div class="home_logo item_container_style"></div> 
       <!-- <a href="#/item" class="start button_style"></a> -->
       <router-link to="item" class="start button_style" ></router-link>
       </div>
  </div>
</template>

<script>
//使用辅助函数    由于这里只是引用
import { mapState } from 'vuex'  

export default {
  name: 'home',
   created(){
        
    },
 
  computed: mapState([
	  	'level'//第几周
	]),
}

</script>

<style lang="scss" scoped>
.ctn{
    width: 100%;
    height: 100%;
    position: relative;
      .top_tips {
     background-size: 100% 100%;
    z-index: 10;
    font-size: 0.5rem;
}
.home_logo {
    background-image: url(../assets/images/1-2.png);
    background-size: 13.142rem 100%;
    background-position: right center;
}
.button_style {
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 7.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-repeat: no-repeat;
}
.start {
    background-image: url(../assets/images/1-4.png);
}
}
   
</style>
