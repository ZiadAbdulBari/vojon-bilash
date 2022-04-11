<template>
    <div>
        <div>
            <div class="container">
                <div class="signup-grid">
                    <div class="signup-form">
                        <div class="logo">
                            <img src="@/assets/images/logo.png" alt="" />
                        </div>
                        <div>
                            <!-- <div class="mb-3">
                                <input
                                    v-model="name"
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Name"
                                />
                            </div> -->
                            <div class="mb-3">
                                <input
                                    v-model="email"
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                    v-model="password"
                                    type="password"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <div class="mb-3">
                                <button @click="login()"  class="btn">Login</button>
                            </div>
                            <div class="mb-3">
                                You have no account? Please <router-link to="SignUp">Signup</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="signup-img">
                        <img src="@/assets/images/signup.avif" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Login',
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        async login(){
            let url = `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            let response = await axios.get(url);
            console.log(response);
            if(response.status==200 && response.data.length!=0){
                localStorage.setItem('isLogedIn',true);
                this.$router.push({
                    name:'Home'
                })
            }

        }
    }
};
</script>

<style>
</style>