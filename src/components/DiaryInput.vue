<template>
  <div class="input-wrap shadow">
    <input type="text" v-model="newTitle" class="input-box" maxlength="30" @keyup.enter="addTitle">
    <!-- <button v-on:click="addTitle">등록</button> -->
    <span @click="addTitle" class="add-bt">
      <i class="fas fa-plus add-bt-icon"></i>
    </span>
  </div>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup(){
      const newTitle = ref('');
      const addTitle = () => {
        let temp = newTitle.value;
        // 앞쪽 뒷쪽 공백 제거
        temp = temp.trim();
        // 앞자리 공백, 뒷자리 공백 제거해주는 코드 추후 업데이트 예정
        if(temp !== ''){
          // 데이터서버가 없어서 로컬스토리지에 저장. 추후 연결 예정
          // localStorage.setItem(키.값 (json 형태로 저장 및 업데이트 예정 JSON.stringify(object)))
          // ('localStorage', 'setItem' 은 고정값.)
          localStorage.setItem(temp, temp);
          resetTitle();
        }
      };
      const resetTitle = () => {
        newTitle.value = '';
      }

      return{
        newTitle,
        addTitle,
        resetTitle
      }
    }
  }
</script>

<style scoped>
  .input-wrap {
    position: relative;
    display: block;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
    padding-left: 20px;
    margin: 30px 0;
  }

  .input-wrap input {
    border-style: none;
  }

  .input-wrap input:focus {
    outline: none;
  }

  .input-box {
    width: 80%;

  }

  .add-bt {
    float: right;
    background: hotpink;
    cursor: pointer;
  }

  .add-bt-icon {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    cursor: pointer;
    margin: 0 20px;
  }
</style>