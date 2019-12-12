<template>
    <div id="banner">
        <div class="banner-first">
            <h1 class="header-one left">We encourage and empower
                Nigerians, to build a sustainable nation</h1>
            <div class="left">
                We provide academic and professional trainings, with the following accreditation:
                ISO certification, Federal Ministry of Education, Nigeria, CAC, CIAP, Recognition,
                Accreditation and Charter Council (RACC) is globally recognized, WSO World
                Safety Organization, Euro-American Joint Accreditation Services (EA-JAS)
            </div>

            <div class="left">
                <button class="btn-jesu">Learn More</button>
            </div>
        </div>
        <div class="banner-second">
            <div class="img-holder">
            <img src="../../assets/banner-img.jpg" alt="banner image">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "banner"
    }
</script>

<style scoped>
    #banner {
        background: url("../../assets/bg-hero.svg");
        display: flex;
    }

    .img-holder {
        height: 400px;
    }

    .img-holder img {
        height: 100%;
    }

    .banner-first {
        padding: 56px;
    }

    .banner-second {
        padding: 71px 42px;
    }

    .left {
        text-align: left;
    }

    .header-one {
        font-weight: bolder;
    }

    .btn-jesu {
        background: none;
        color: #5340BC;
        margin: 20px 0;
        font-size: 19px;
        padding: 7px 30px;
        border: 2px solid #5340BC;
        border-radius: 14px;
        font-weight: bold;
    }

    .banner-first {
        width: 70%;
    }

</style>