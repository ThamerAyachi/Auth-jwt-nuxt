<template>
  <div class="nav bg-white flex justify-between p-2">
      <div class="logo">
          <nuxtLink to="/" class="flex text-xl space-x-1">
            <span v-html="Icons.badgeCheck" class="text-indigo-600"></span>
            <span>UserService</span>
          </nuxtLink>
      </div>

      <div class="links">
          <button @click="logout" class="flex p-1 rounded-md hover:bg-gray-800 hover:text-white">
            <span v-html="Icons.login"></span>
            <span>Login</span>
          </button>
      </div>
  </div>
</template>

<script>
import ICONS from '../assets/icons'

export default {
    name: 'Navbar',
    data(){return{
        Icons: ICONS
    }},
    methods:{
      logout(){
        // will
        this.$router.push('/login')
        this.$store.commit('auth/logout');
        
      }
    }

}
</script>

<style>

</style>