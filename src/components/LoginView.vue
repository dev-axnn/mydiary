<template>
  <div class="login-wrap">
    <div class="symbol">
      <div class="title"></div>
    </div>
    <div class="input-wrap">
      <label>Enter your ID.</label>
      <input type="text" placeholder="아이디(5자 이상 10자 이하)" minlength="5" maxlength="10">
      <label>Enter your password.</label>
      <input type="password" placeholder="비밀번호(8자 이상 16자 이하)" minlength="8" maxlength="16">
    </div>
    <div class="login-btn">
      <button class="login">Login</button>
      <button class="login-naver">Naver</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .login-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #FFD7D7;
    z-index: 9998;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .symbol {
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #fff url('@/assets/images/ahn-symbol_300x300.png') no-repeat center;
    background-size: 60%;
  }
  
  .title {
    position: absolute;
    left: 50%;
    top: -3%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 80px;
    background: url('@/assets/images/ahn-title.png') no-repeat center;
    background-size: contain;
  }

  .input-wrap {
    position: absolute;
    left: 50%;
    top: 48.5%;
    transform: translate(-50%, -50%);
    width: 250px;
  }

  label {
    display: block;
    width: 100%;
    text-align: center;
    font-family: 'Shrikhand', cursive;
    color: #fff;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 20px;
    padding: 0 20px;
    color: #666;
    font-size: 14px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 15px;
  }

  input::placeholder {
    color: #ccc;
    font-size: 14px;
    line-height: 40px;
  }

  .login-btn {
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    width: 130px;
  }

  .login {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 20px;
    background: #fff;
    font-size: 24px;
    font-family: 'Shrikhand', cursive;
    text-align: center;
    line-height: 40px;
    color: #999;
    cursor: pointer;
    transition: all 0.15s;
    margin-bottom: 15px;
  }

  .login:hover {
    font-size: 26px;
    color: #F69191;
  }

  .login-naver {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 20px;
    background: #fff;
    font-size: 24px;
    font-family: 'Shrikhand', cursive;
    text-align: center;
    line-height: 40px;
    color: rgb(165, 196, 163);
    cursor: pointer;
    transition: all 0.15s;
  }

  .login-naver:hover {
    font-size: 26px;
    color: rgb(55, 163, 51);
  }
</style>