<template>
  <div class="index my-5 flex justify-center">
    <!-- card -->
    <div class="bg-white p-3 w-full md:w-96 text-gray-700 rounded-sm shadow-sm tracking-widest" v-if="isDone">
      <div class="data">
        <div class="text-xl text-center text-indigo-700">Hello {{ user.username }}</div>
        <div class="text-indigo-700">Name: </div>
        <div class="text-sm ml-3">{{ user.name }}</div>
        <div class="text-indigo-700">Roles:</div>
        <ul class=""> 
          <li v-for="role in user.role" :key="role.id"
            class="ml-3 text-sm"
          >{{role.name}}</li>
        </ul>
      </div>
    </div>
    <div v-else>
      loding ...
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async created() {
    this.getdata();
  },
  data(){return{
    user: {},
    isDone: false
  }},
  methods:{
    async getdata(){
      let User = this.$store.getters['auth/getUser'];
      if(User.id == null){
        try{
          User = await this.$axios.$get('/listingapi/api/export/api/user');
          this.user = User;
          this.$store.commit('auth/setUser', User);
        }catch(re){console.info(re.message)}
      }else{
        this.user = this.$store.getters['auth/getUser'];
      }
      this.isDone = true
    }
  }
}
</script>
