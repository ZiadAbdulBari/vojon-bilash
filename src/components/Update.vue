<template>
    <div>
        <Header></Header>
        <div class="container">
            <div class="add-form">
                <h1>Update Restaurant</h1>
                <form>
                    <div class="mb-3">
                        <input type="email" v-model="name" placeholder="Restaurant Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <input type="text" v-model="address" placeholder="Location" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <input type="text" v-model="phone" placeholder="Contact Number" class="form-control" id="exampleInputPassword1">
                    </div>
                    <button type="submit" @click="updateRestaurantData()" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
import axios from 'axios';
    export default {
        name:'Update',
        components:{
            Header
        },
        data(){
            return{
                name:'',
                address:'',
                phone:'',
                id:this.$route.params.id
            }
        },
        created(){
            this.getRestaurantData();
        },
        methods:{
            getRestaurantData(){
                let url = "http://localhost:3000/restaurants/"+this.id;
                axios.get(url)
                .then(response=>{
                    console.log(response);
                    this.name = response.data.name;
                    this.address = response.data.location;
                    this.phone = response.data.contact;
                })
            },
            updateRestaurantData(){
                let url = "http://localhost:3000/restaurants/"+this.id;
                let data = {
                    name:this.name,
                    location:this.address,
                    contact:this.phone
                }
                axios.put(url,data)
                .then(response=>{
                    if(response.status==200){
                        this.$router.push({
                            name:'Home'
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>