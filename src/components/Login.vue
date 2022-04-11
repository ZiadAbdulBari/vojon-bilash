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
                                <button  class="btn">Login</button>
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
export default {
    name:'Login',
};
</script>

<style>
</style>