<template>
    <div>
        <Header></Header>
        <div class="container">
            <div class="add-form">
                <h1>Add Restaurant</h1>
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
                    <!-- <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> -->
                    <button type="submit" @click="addRestaurant()" class="btn btn-primary">Add</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    export default {
        name:'Add',
        components:{
            Header
        },
        data(){
            return{
                name:'',
                address:'',
                phone:'',
            }
        },
        // created(){
        //     this.addRestaurant();
        // },
        methods:{
            addRestaurant(){
                console.log(this.name, this.address, this.phone);
            }
        }
        
    }
</script>

<style scoped>

</style>