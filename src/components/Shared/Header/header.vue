<template>
    <header class="mainHeader">
        <div class="logo"><router-link to="/">
        <div class="imgContainer">
            <img src="../../../assets/jesem-logo.jpg"/>
        </div>
        </router-link></div>
        <div class="sideHeader">
            <div class="sideHeaderContent">
                <div><router-link to="/courses">Courses</router-link></div>
                <div><router-link to="/about">About Us</router-link></div>
                <div><router-link to="/gallery">Gallery</router-link></div>
                <router-link to="/register"><div class="register">Register</div></router-link>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "header",
        
    }
</script>

<style scoped>

    .imgContainer {
        width: 200px;
    }

    .imgContainer img {
        width: 100%;
    }

    .mainHeader {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        align-items: center;
    }

    .sideHeaderContent div {
        float: left;
        margin: 0 26px;
    }

    .sideHeaderContent {
        display: flex;
        align-items: center;
    }

    .register {
        border: 2px solid #614fc1;
        background-color: #614fc1;
        font-weight: bold;
        padding: 9px 26px;
        border-radius: 50px;
        color: #fff;
    }

    .register:hover {
        /*background-color: #614fc1;*/
        /*color: white;*/
        transition-property: box-shadow;
        transition-duration: 0.3s;
        box-shadow: 0 6px 12px 0 rgba(97,79,193, 0.4);
    }

    .logo {
        font-weight: bolder;
    }

    a {
        text-decoration: none;
    }

    @media only screen and (max-width: 415px ) {
        /*.mainHeader {*/
            /*display: none;*/
        /*}*/

    }

</style>