<template>
    <div>
        <h1>Welcome to Home Page</h1>
    </div>
</template>

<script>
    export default {
        name:'Home',
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