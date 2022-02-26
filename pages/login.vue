<template>
  <div class="login my-5 w-full flex justify-center">
      <form @submit.prevent="_login" class="md:w-96 w-full">
        <h1 class="text-3xl text-gray-800 my-2">Login</h1>
        <input type="text" name="username" placeholder="username" v-model="username"
          class="w-full p-2 border-2 rounded my-1"
        >
        <input type="password" name="password" placeholder="password" v-model="password"
          class="w-full p-2 border-2 rounded my-1"
        >
        <p v-if="AuthError"
          class="flex text-sm bg-red-500 space-x-1 p-1 border-2 rounded border-white text-white tracking-wider">
          <span v-html="icons.exclamation"></span>
          <span>Username or password is incorrect - try again </span>
        </p>
        <button 
        class="text-white bg-indigo-600 w-full p-2 rounded my-2 flex justify-center space-x-1 hover:bg-indigo-500">
          <span v-html="icons.login"></span>
          <span>Login</span>
        </button>
      </form>
  </div>
</template>

<script>
import ICONS from '../assets/icons'

export default {
  data(){return{
    icons: ICONS,
    AuthError: false,
    username: '',
    password: '',
  }},
  methods: {
    async _login(){
      const data = {username: this.username, password: this.password};
      try{
        await this.$store.dispatch('auth/login', data);
        // console.log(token)
      }catch(er){console.log(er.message)}
    }
  }
}
</script>

<style>

</style>