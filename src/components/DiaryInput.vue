<template>
  <div class="input-wrap shadow">
    <input type="text" v-model="newItem" class="input-box" maxlength="30" @keyup.enter="addItem">
    <!-- <button v-on:click="addItem">등록</button> -->
    <span @click="addItem" class="add-bt">
      <i class="fas fa-plus add-bt-icon"></i>
    </span>
  </div>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup(){
      const newItem = ref('');

      // 현재 시간값을 계산하여 '중복되지 않는 id'로 사용한다.
      // 10보다 작은 값에 0을 붙임
      const addZero = (n) => {
        return n < 10 ? '0' + n : n;
      }
      // 현재 시간을 리턴
      const getCurrentDate = () => {
        let date = new Date();
        return date.getFullYear().toString() + addZero(date.getMonth() + 1) + addZero(date.getDate()) +
          addZero(date.getHours()) + addZero(date.getMinutes()) + addZero(date.getSeconds());              
      }

      const addItem = () => {
        let temp = newItem.value;
        // 앞쪽 뒷쪽 공백 제거
        temp = temp.trim();
        // 앞자리 공백, 뒷자리 공백 제거해주는 코드 추후 업데이트 예정
        if(temp !== ''){
          // localStorage.setItem(키.값 (json 형태로 저장 및 업데이트 예정 JSON.stringify(object)))
          // ('localStorage', 'setItem' 은 고정값.)
          let memoTemp = {
            id: getCurrentDate(),
            complete: false,
            memotitle: newItem.value
          };

          // 추후 DB 연동 예정
          localStorage.setItem(memoTemp.id, JSON.stringify(memoTemp));
          resetItem();
        }
      }
      const resetItem = () => {
        newItem.value = '';
      }

      return{
        newItem,
        addItem,
        resetItem
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
    width: calc(93% - 60px);
    font-size: 16px;
    margin-left: 20px;
  }

  .add-bt {
    display: block;
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