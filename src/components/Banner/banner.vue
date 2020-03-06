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
                <a href="http://www.easyclass.com" target="_blank"><button class="btn-jesu">Learn More</button></a>
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
        letter-spacing: 1px;
    }

    .header-one {
        font-weight: 900;
        color: #000;
        font-size: 40px;
    }

    .btn-jesu {
        background: none;
        color: #5340BC;
        margin: 20px 0;
        font-size: 19px;
        padding: 15px 40px;
        border: 2px solid #5340BC;
        border-radius: 50px;
        font-weight: bold;
        cursor: pointer;
    }

    .btn-jesu:hover {
        background-color: #614fc1;
        color: white;
        transition-property: background-color;
        transition-duration: 0.5s;
    }

    .banner-first {
        width: 70%;
        padding: 40px;
    }

    @media only screen and (max-width: 415px ) {
        .banner-second {
            display: none;
        }

        #banner {
            margin-top: 20px;
        }

        .banner-first {
            width: 100%;
            text-align: center;
        }

        .left {
            text-align: center;
        }

        .btn-jesu {
            font-size: 19px;
            padding: 10px 50px;
            border-radius: 50px;
        }

    }

</style>