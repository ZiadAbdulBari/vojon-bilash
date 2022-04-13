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
                            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/add">Add</router-link>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/update">Update</router-link>
                        </li> -->
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/">Delete</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/signup">Signup</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" v-if="isLoggedin=='false'" class="nav-link active" aria-current="page">Signin</router-link>
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
