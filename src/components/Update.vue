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
                    <button type="submit" @click="updateRestaurant()" class="btn btn-primary">Add</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
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
                id:this.$route.params
            }
        },
        created(){
            this.updateRestaurant();
        },
        methods:{
            updateRestaurant(){

            }
        }
    }
</script>

<style scoped>

</style>