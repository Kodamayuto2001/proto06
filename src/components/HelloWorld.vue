<template>
  <div class="container">
    <div class="input-container">
      <div class="mail">
        <!-- <span class="material-icons">account_circle</span> -->
        <vs-icon icon="account_circle" size="50px"></vs-icon>
        <vs-input
        :success="true"
        placeholder="Email Success"
        v-model="value1" 
        class="input"
        size="large" 
        />
      </div>      

      <div class="password">
        <!-- <span class="material-icons" size="75px">lock</span> -->
        <vs-icon icon="lock" size="50px"></vs-icon>
        <vs-input
        :danger="true"
        placeholder="Password Error"
        v-model="value2"
        class="input"
        size="large"
        type="password"/>
        <a href=""><small>Forget Password ?</small></a>
      </div>

      <div class="btn">
        <vs-button color="success" type="relief" size="large"><strong>Sign up</strong></vs-button>

        <vs-button color="success" type="relief" size="large">Sign in</vs-button>
      </div>


    </div>

  </div>


</template>

<script>
export default {
  data(){
    return {
      value1:"",
      value2:"",
    }
  }
}

</script>


<style>
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);

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
  /* background-color: #BBB; */
  width: 500px;
}

.mail {
  margin:30px;
  /* background-color: #AAA; */
}

.password {
  margin: 30px;
  /* background-color: #AAA; */
}

.btn {
  margin: 10px;
}

.vs-button {
  width: 200px;
  margin-left: 10px;
  margin-right: 10px;
}


</style>
