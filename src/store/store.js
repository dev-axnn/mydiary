import { createStore } from 'vuex';
// data 를 불러오는 내용
const storage = {
  getData(){
    const memoItemArr = [];
    const total = localStorage.length;
    if( total.value > 0) {
      for(let i = 0; i < total.value; i++) {
        // 추후 DB 연동 예정
        let obj = localStorage.getItem( localStorage.key(i) );       
        memoItemArr.push(JSON.parse(obj));
      }
      // 키값을 이용해서 정렬하기(오름차순)
      memoItemArr.sort((a, b) => {
        if(a.id > b.id) return 1;
        if(a.id === b.id) return 0;
        if(a.id < b.id) return -1;
      });
    }

    return memoItemArr
  }
}

const timeUtil = {
  // 현재 시간값을 계산해서 중복이 되지 않는 값을 처리한다.
  // 용도는 key 와 id 를 생성해 주기 위해서 처리      
  // 10보다 작은 값에 0을 붙임
  addZero(n){
    return n < 10 ? '0' + n : n;
  },

  // 현재 시간을 리턴
  getCurrentDate(){
    let date = new Date();
    return date.getFullYear().toString() + this.addZero(date.getMonth() + 1) + this.addZero(date.getDate()) +
    this.addZero(date.getHours()) + this.addZero(date.getMinutes()) + this.addZero(date.getSeconds());              
  },  
  getCurrentTime(){
    let date = new Date();
    return date.getFullYear().toString() + '/' + this.addZero(date.getMonth() + 1) + '/' + this.addZero(date.getDate()) + '/' +
    this.addZero(date.getHours()) + ':' + this.addZero(date.getMinutes());              
  }
}

export default createStore({
  state: {
    headerText: 'My Diary Memo',
    memoItemArr: storage.getData(),
    iconArr: ['dog1.png', 'dog2.png', 'str.png']
  },

  // 외부 데이터 연동
  actions: {
    fetchAddMemo(context, obj){
      // 서버의 주소로 접근하여 자료를 push 한다.
      // 정상적으로 이행되었다면 아래의 명령을 실행.
      context.commit("ADD_MEMO", obj);
    },
    fetchDeleteMemo({ commit }, obj){
      // 서버의 주소로 접근하여 데이터 delete
      // 정상적으로 이행되었다면 아래의 명령을 실행.
      commit("DELETE_MEMO", obj);
    },
    fetchUpdateMemo({ commit }, obj){
      // 서버의 주소로 접근하여 데이터 update(fetch)
      // 정상적으로 이행되었다면 아래의 명령을 실행.
      commit("UPDATE_MEMO", obj);
    },
    fetchClearMemo({ commit }){
      // 서버의 주소로 접근하여 데이터 delete
      // 정상적으로 이행되었다면 아래의 명령을 실행.
      commit("CLEAR_MEMO");
    }
  },

  mutations: {
    // item 추가 {item, index}
    ADD_MEMO(state, payload){
      console.log("ADD_MEMO", payload.item, payload.index)
      // json 저장 문자열
      ///{completed:false, title:메모내용, icon:파일명 ....}
      // 아이콘 관련 처리
      let memoTemp = {
        id: timeUtil.getCurrentDate(),
        complete: false,
        memotitle: payload.item,
        memodate: timeUtil.getCurrentTime(),
        memoicon: state.iconArr[payload.index]
      };
      // 추후 실제 DB 연동 예정
      localStorage.setItem(memoTemp.id, JSON.stringify(memoTemp));
      // 화면갱신을 위한 배열 요소 추가
      state.memoItemArr.push(memoTemp);
    },
    // item 삭제 {item, index}
    DELETE_MEMO(state, payload){
      // localStrage 에서 key를 통해서 지운다.
      localStorage.removeItem(payload.item);
      // 배열(memoItemArr) 에서도 지운다.
      state.memoItemArr.splice(payload.index, 1);
    },
    // item 변경 {item, index}
    UPDATE_MEMO(state, payload){
      // localStorage 에서는 update 메소드를 지원하지 않습니다.
      // 찾아서 지우고, 
      localStorage.removeItem(payload.item.id);
      // 변경한다.
      // item.complete = !item.complete;
      state.memoItemArr[payload.index].complete = !state.memoItemArr[payload.index].complete;
      // 다시 set 한다.
      localStorage.setItem(payload.item.id, JSON.stringify(payload.item));

      state.memoItemArr.sort((a, b) => {
        if(a.id > b.id) return 1;
        if(a.id === b.id) return 0;
        if(a.id < b.id) return -1;
      });
    },
    // 전체 item 삭제
    CLEAR_MEMO(state){
      // localStorage 에서 내용 전체 삭제
      // 추후 DB 연동 예정
      localStorage.clear();
      state.memoItemArr.splice(0);
    }
  },

  // state 의 값을 호출한다
  // computed 에서 감시하여 반영한다
  getters: {
    getMemoArr(state){
      // 조건에 따라 다른 결과물을 돌려준다.
      return state.memoItemArr;
    }
  }
});