<template>
  <div class="list-wrap">
    <TransitionGroup name="list" tag="ul">
      <!-- v-for"in" :key -->
      <li v-for="(item, index) in items" :key="index" class="shadow">
        <i class="fas fa-check-square check-bt" @click="updateMemo(item, index)" v-bind:class="{completeCheck:item.complete}"></i>
        <span :class="{completeCheckTxt:!item.complete}">{{item.memotitle}}</span>
        <div class="info">
          <span class="icon" :style="{backgroundImage:'url(' + require(`@/assets/images/${item.memoicon}`) + ')'}"></span>            
          <span class="date">{{item.memodate}}</span>
          <span class="remove-bt" @click="removeMemo(item.id, index)">
            <i class="fas fa-times"></i>
          </span>
        </div>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { useStore } from 'vuex';

  export default {
    setup() {

      // vue store 사용
      const store = useStore();
      const items = ref([]);
      items.value = store.state.memoItemArr;

      const removeMemo = (item, index) => {
        // context.emit('removeitem', item, index);
        store.commit('DELETE_MEMO', {item, index});
      }

      const updateMemo = (item, index) => {      
        // context.emit("updateitem", item, index);
        store.commit('UPDATE_MEMO', {item, index});
      }

      return{
        removeMemo,
        updateMemo,
        items
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

  .info {
    margin-left: auto;
  }
  .icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;  
  }
  .date {}

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

  /* Animation */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>