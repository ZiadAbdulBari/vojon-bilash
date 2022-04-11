<template>
    <div>
        <div class="container">
            <div class="signup-grid">
                <div class="signup-form">
                    <div class="logo">
                        <img src="@/assets/images/logo.png" alt="">
                    </div>
                    <div>

                        <div class="mb-3">
                            <input v-model="name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name">
                        </div>
                        <div class="mb-3">
                            <input v-model="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email">
                        </div>
                        <div class="mb-3">
                            <input v-model="password" type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter Password">
                        </div>
                        <div class="mb-3">
                            <button @click="signup()" class="btn">Signup</button>
                        </div>
                    </div>
                </div>
                <div class="signup-img">
                    <img src="@/assets/images/signup.avif" alt="">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data(){
            return{
                name:'',
                email:'',
                password:'',
            }
        },
        methods:{
            async signup(){
                let url = "http://localhost:3000/user";
                let data = {
                                "name": this.name,
                                "email": this.email,
                                "password": this.password 
                            }
                let result = await axios.post(url,data);
                console.log(result)
                if(result.status==201){
                    localStorage.setItem('user-info', JSON.stringify(result.data));
                    this.$router.push({
                       name:'Home'
                    })
                }
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            if(user){
                this.$router.push({
                    name:'Home'
                })
            }
        }

    }
</script>

<style>

</style>