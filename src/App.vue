<template>
  <div class="wrap">
    <DiaryHeader/>
    <DiaryInput/>
    <DiaryList/>
    <DiaryFooter/>
  </div>
</template>

<script>
  import DiaryHeader from '@/components/DiaryHeader.vue';
  import DiaryInput from '@/components/DiaryInput.vue';
  import DiaryList from '@/components/DiaryList.vue';
  import DiaryFooter from '@/components/DiaryFooter.vue';

  export default {
    components: {
      DiaryHeader,
      DiaryInput,
      DiaryList,
      DiaryFooter
    }
  }
</script>

<style>
  @charset 'utf-8';
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

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