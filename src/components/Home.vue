<template>
    <div>
        <Header></Header>
        <div class="container">
            <!-- <h1>Welcome to Home Page</h1> -->
            <div class="card" style="width: 18rem;" v-for="(res,i) in restaurants" :key="i">
                <img :src="res.image-url" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{res.name}}</h5>
                    <p class="card-text">{{res.location}}</p>
                    <a href="#" class="btn btn-primary">Detail</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import axios from 'axios';
    export default {
        name:'Home',
        components:{
            Header
        },
        data(){
            return{
                restaurants:[],
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({
                    name:'SignUp'
                })
            }
        },
        created(){
            this.getRestaurantList();
        },
        methods:{
            getRestaurantList(){
                let url = 'http://localhost:3000/restaurants';
                axios.get(url).then(response=>{
                    console.log(response);
                    this.restaurants = response.data;
                })
            }
        }
    }
</script>

<style>

</style>