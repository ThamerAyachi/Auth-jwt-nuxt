<template>
    <div class="app h-screen bg-gray-100">
        <Navbar/>
        <main class="mx-3 md:mx-28">
            <Nuxt/>
        </main>
    </div>
    
</template>

<script>
import Navbar from '../components/Navbar.vue' 

export default {
    components: {
        Navbar
    },
    middleware: 'auth',
    created(){
        // try{
        //      this.$store.dispatch('nuxtServerInit');
        // }catch(er){
        //     console.log(er.message)
        // }
    }

}
</script>

<style>

</style>