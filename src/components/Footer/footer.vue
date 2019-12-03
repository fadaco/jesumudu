<template>
    <div>
        <div class="footer">
            <div>JESUMIDO</div>
            <div class="footer-inner">
                <div>ABOUT COMPANY</div>
                <div>CONTACT US</div>
                <div>TEAMS</div>
                <div>LEGAL TERMS</div>
            </div>
        </div>
        <hr>
        <div class="footer-inner footer-bottom">
            <div>
                Copyright 2019 UtivaSolutions.<br>
                All rights reserved

            </div>
            <div>
                <img src="../../assets/twitter-logo-silhouette.svg">
                <img src="../../assets/instagram.svg">
                <img src="../../assets/facebook-logo.svg">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    .footer {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 100px auto 50px;
        font-weight: bold;
    }

    .footer-inner {
        display: flex;
        justify-content: space-between;
    }

    .footer-inner div {
        margin: 0 20px;
    }
    hr {
        width: 90%;
        margin: 0 auto 50px auto;
    }
    .footer-bottom {
        width: 90%;
        margin: 0 auto 40px;
    }

    .footer-bottom img {
        width: 30%;
        height: 30%;
    }

</style>