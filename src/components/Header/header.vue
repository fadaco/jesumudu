<template>
    <header class="mainHeader">
        <div class="logo">JESEM</div>
        <div class="sideHeader">
            <div class="sideHeaderContent">
                <div>Partners</div>
                <div>Courses</div>
                <div>About Us</div>
                <div class="register">Register</div>
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

</style>