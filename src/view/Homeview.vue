<template>
  <div class="wrap">
    <DiaryHeader/>
    <DiaryInput/>
    <DiaryList/>
    <DiaryFooter/>
    <IntroView @closeintro="hideIntro" v-if="introShow"/>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import DiaryHeader from '@/components/DiaryHeader.vue';
  import DiaryInput from '@/components/DiaryInput.vue';
  import DiaryList from '@/components/DiaryList.vue';
  import DiaryFooter from '@/components/DiaryFooter.vue';
  import IntroView from '@/components/IntroView.vue';

  export default {
    components: {
      OpeningView,
      LoginView,
      DiaryHeader,
      DiaryInput,
      DiaryList,
      DiaryFooter,
      IntroView
    },
    
    setup(){  
      // 첫화면(IntroView) 보여질 여부 설정 (true-false)
      const introShow = ref(false);
      const hideIntro = () => {
        introShow.value = false;
      }

      return {  
        hideIntro,
        introShow
      }
    }
  }
</script>

<style>
  @charset 'utf-8';
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&family=Shrikhand&display=swap');


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  img {
    border: 0;
    vertical-align: middle;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  html {
    font-size: 16px;
    overflow-x: hidden;
  }

  body {
    font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.64;
    color: #333;
    background: #f6f6f6;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
  
  .wrap {
    position: relative;
    display: block;
    width: 90%;
    margin: 0 auto;
  }
</style>