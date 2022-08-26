<template>
  <div class="list-wrap">
    <ul>
      <!-- v-for"in" :key -->
      <li v-for="(item, index) in memoItemArr" :key="index" class="shadow">
        {{item}}
        <span class="remove-bt" @click="removeMemo(item, index)">
          <i class="fas fa-times"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { ref, reactive } from "vue";

  export default {
    setup(){
      // localstorage 의 목록을 가지고 오기
      // 전체 개수 
      const total = ref(0);
      total.value = localStorage.length;
      console.log(total.value);

      // Keyname 을 저장하는 배열
      const memoItemArr = reactive([]);
      
      if(total.value > 0){
        for(let i = 0; i < total.value; i++){
          // memoItemArr 배열에 데이터 담기
          memoItemArr.push(localStorage.key(i));
        }
        console.log(memoItemArr);
      }

      const removeMemo = (item, index) => {
        // localStrage 에서 key를 통해 삭제.
        localStorage.removeItem(item);
        // 배열(memoItemArr) 에서도 삭제. (splice : 시작점으로부터 갯수 설정하여 삭제해주는 명령어)
        memoItemArr.splice(index, 1);
      }

      return{
        memoItemArr,
        removeMemo
      }
    }
  }
</script>

<style scoped>
  li {
    display: flex;
    min-height: 50px;
    line-height: 50px;
    margin: 10px 0;
    background: #fff;
    border-radius: 5px;
    padding-left: 10px;
  }

  .remove-bt {
    cursor: pointer;
    margin-left: auto;
    color: #aaa;
    padding: 0 20px;
  }
</style>