<template>
    <header class="mobileHeader">
        <div class="logo"><router-link class="route"  tag="ul" to="/">Home</router-link></div>
        <div class="sideHeader">
            <div class="sideHeaderContent">
                <div>Partners</div>
                <div><router-link class="route"  tag="ul" to="/courses">Courses</router-link></div>
                <div><router-link class="route"  tag="ul" to="/about">About Us</router-link></div>
                <router-link to="/register"><div class="register">Register</div></router-link>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "mobileNavigation",

    }
</script>

<style scoped lang="scss">
.mobileHeader {
    font-size: 20px;
    text-decoration: none;
    background-color: #5340BC;
    height: 100vh;
    width: 300px;
    position: fixed;



    padding: 50px 0 0 0;
    div {
        max-width: 300px;
        text-align: center;
        color: #fff;
        font-weight: 700;

    }

    .sideHeaderContent {
        div {
            padding: 30px 0 0 0;

        }
    }

    .register {
        font-weight: 700;
        background-color: #fff;
        max-width: 70%;
        margin: 0 auto;
        color: #5340BC;
        padding: 20px 0 !important;
        border-radius: 50px;
    }

    .route {


            li {
                text-decoration: none;


            }
        }

 ul {
        padding: 0;
    }


}


</style>