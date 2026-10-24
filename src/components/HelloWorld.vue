<template>
  <main class="container">
    <div class="input-container">
      <label class="mail">
        <span>Email</span>
        <input v-model="value1" class="input success" type="email" autocomplete="username" placeholder="Email Success">
      </label>

      <label class="password">
        <span>Password</span>
        <input v-model="value2" class="input danger" type="password" autocomplete="current-password" placeholder="Password Error">
        <a href="#"><small>Forget Password?</small></a>
      </label>

      <div class="btn">
        <button type="button"><strong>Sign up</strong></button>
        <button type="button">Sign in</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      value1:"",
      value2:"",
    }
  }
}

</script>


<style>
.container {
  background-color: #DDD;
  
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .input-container {
  margin-left: 500px;
  margin-right: 500px;
  background-color: #CCC;
  align-items: center;
  border-radius: 10px;
  margin: 50px;
}

.container .input-container .input {
  width: 500px;
  box-sizing: border-box;
}

.mail {
  margin:30px;
  display: grid;
  gap: 8px;
}

.password {
  margin: 30px;
  display: grid;
  gap: 8px;
}

.success {
  border: 2px solid #2b8a3e;
}

.danger {
  border: 2px solid #c92a2a;
}

.btn {
  margin: 10px;
}

button {
  width: 200px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px 16px;
}
</style>
