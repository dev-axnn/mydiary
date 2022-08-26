<template>
  <div class="list-wrap">
    <ul>
      <!-- v-for"in" :key -->
      <li v-for="(item, index) in memoItemArr" :key="index" class="shadow">
        <i class="fas fa-check-square check-bt" @click="updateMemo(item)" v-bind:class="{completeCheck:item.complete}"></i>
        <span :class="{completeCheckTxt:!item.complete}">{{item.memotitle}}</span>
        <span class="remove-bt" @click="removeMemo(item.id, index)">
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
          // 날짜시간을 id 값으로 가진 실제 item.title 나타내기
          // 추후 DB 연동 예정
          let obj = localStorage.getItem(localStorage.key(i));
          memoItemArr.push(JSON.parse(obj));
        }
        // Key 값을 이용하여 정렬(오름차순)
      }

      const removeMemo = (item, index) => {
        // localStrage 에서 key를 통해 삭제.
        localStorage.removeItem(item);
        // 배열(memoItemArr) 에서도 삭제. (splice : 시작점으로부터 갯수 설정하여 삭제해주는 명령어)
        memoItemArr.splice(index, 1);
      }

      const updateMemo = (item) => {
        // localStorage 에서는 update method 를 지원하지 않는다.
        // 찾아서 지우고, 다시 set 한다.
        localStorage.removeItem(item.id);
        item.complete = !item.complete;
        localStorage.setItem(item.id, JSON.stringify(item));
      }

      return{
        memoItemArr,
        removeMemo,
        updateMemo
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

  .remove-bt:hover {
    color: rgb(255, 100, 100);
  }

  .check-bt {
    line-height: 50px;
    color: hotpink;
    margin: 0 20px 0 10px;
    cursor: pointer;
  }

  .completeCheck {
    color: #aaa;
  }

  .completeCheckTxt {
    color: #666;
    text-decoration: line-through;
  }
</style>