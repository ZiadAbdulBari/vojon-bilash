<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img class="logo-img" src="@/assets/images/logo.png" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Add</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Update</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Delete</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Signup</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" v-if="isLoggedin=='false'" class="nav-link active" aria-current="page" href="#">Signin</router-link>
                            <a @click="logout()" v-else class="nav-link active" aria-current="page" href="#">Signout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name:'Header',
        data(){
            return{
                isLoggedin:'',
            }
        },
        created(){
            this.loginChecker();
        },
        methods:{
            loginChecker(){
                this.isLoggedin = localStorage.getItem('isLogedIn')
            },
            logout(){
                localStorage.setItem('isLogedIn',false);
                this.$router.push({
                    name:'Login'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
