<template>
    <div class="join">
    <div class="join-one">
        <div>
        <div class="joinHeader">Join the academy</div>
        <div>Lorem ipsum dolor sit amet, vix te eruditi <br>voluptatibus.</div>
        <div><button class="apply">Apply Now</button></div>
        </div>
    </div>
        <div class="join-two">
            <img src="../../assets/img-grp.svg">
        </div>
    </div>
</template>

<script>
    export default {
        name: "join"
    }
</script>

<style scoped>
    .join {
        display: flex;
        height: 350px;
    }
    .join-one {
        background: rgb(83, 64, 188);
        color: #ffffff;
        padding: 68px 4%;
        width: 50%;
    }

    .join-two {
        width: 50%;
    }

    .join-two img {
        height: 100%;
    }

    .joinHeader {
        font-size: 3.1em;
    }

    .apply {
        margin: 20px 0;
        color: rgb(83, 64, 188);
        padding: 17px 37px;
        font-size: 26px;
        border-radius: 32px;
    }

</style>