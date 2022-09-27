<template>
  <RouterView />
  <div class="opening-wrap">
    <div class="symbol">
      <div class="title"></div>
    </div>
    <button class="login">Login</button>
  </div>
</template>

<style>
@charset 'utf-8';
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&family=Shrikhand&display=swap");

.opening-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #d9d9d9;
  z-index: 9999;
  overflow-x: hidden;
  overflow-y: hidden;
}

.symbol {
  position: absolute;
  left: 50%;
  top: 43%;
  transform: translate(-50%, -50%);
  width: 215px;
  height: 215px;
  border-radius: 50%;
  background: #fff url("@/assets/images/ahn-symbol_300x300.png") no-repeat
    center;
  background-size: 60%;
}

.title {
  position: absolute;
  left: 50%;
  top: -3%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 80px;
  background: url("@/assets/images/ahn-title.png") no-repeat center;
  background-size: contain;
}

.login {
  position: absolute;
  left: 50%;
  top: 63%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 25px;
  font-size: 28px;
  font-family: "Shrikhand", cursive;
  text-align: center;
  line-height: 50px;
  color: #999;
  background: #fff;
  cursor: pointer;

  transition: all 0.15s;
}

.login:hover {
  font-size: 30px;
  color: #3a79b4;
}
</style>
