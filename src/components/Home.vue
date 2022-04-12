<template>
    <div>
        <Header></Header>
        <div class="container">
            <h1>Welcome to Home Page</h1>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    export default {
        name:'Home',
        components:{
            Header
        },
        data(){
            return{

            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({
                    name:'SignUp'
                })
            }
        }
    }
</script>

<style>

</style>