<template>
    <header class="mainHeader">
        <div class="logo"><router-link to="/">JESEM</router-link></div>
        <div class="sideHeader">
            <div class="sideHeaderContent">
                <div>Partners</div>
                <div><router-link to="/courses">Courses</router-link></div>
                <div><router-link to="/about">About Us</router-link></div>
                <router-link to="/register"><div class="register">Register</div></router-link>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
    .mainHeader {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 20px auto;
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
        color: #614fc1;
        font-weight: bold;
        padding: 9px 26px;
        border-radius: 19px;
    }
    .logo {
        font-weight: bolder;
    }

    a {
        text-decoration: none;
    }

</style>