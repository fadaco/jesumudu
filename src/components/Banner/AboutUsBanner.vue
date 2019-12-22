<template>
    <div id="aboutUsHeader">
        <div id="aboutUsHeaderContent">
        <h1 class="paraHeader">Empowering Nigerians, to build a
            sustainable nation</h1>
        <p class="paraContent">We are a value driven oriented Institution that offers professional training.
            We are committed to helping individuals, leaders and organizations achieve
            success and corporate goals.</p>
        </div>

        <div class="aboutUsBanner">
            <div class="aboutUsBannerContent">
                <div class="imageHolder">
                <img src="../../assets/vision.jpg">
                </div>
                <p>Vision</p>
                <div>
                    To be the pacesetter for other private
                    Institutions across the globe by breeding graduates with
                    Excellence, Intelligence and skill.
                </div>
            </div>
            <div class="aboutUsBannerContent">
                <div class="imageHolder">
                <img src="../../assets/mission.jpg">
                </div>
                <p>Mission</p>
                <div>
                    To be the pacesetter for other private
                    Institutions across the globe by breeding graduates with
                    Excellence, Intelligence and skill.
                </div>
            </div>
            <div class="aboutUsBannerContent">
                <div class="imageHolder">
                <img src="../../assets/coreValue.jpg">
                </div>
                <p>Core Values</p>
                <div>
                    To be the pacesetter for other private
                    Institutions across the globe by breeding graduates with
                    Excellence, Intelligence and skill.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutUsHeader"
    }
</script>

<style scoped>
    .aboutUsBanner {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 85%;
        margin: 0 auto;
    }

    .aboutUsBanner p {
        color: #1C115C;
        font-weight: bold;
        font-size: 25px;
    }

    .paraHeader {
        color: #251871;
        text-align: center;
    }

    .paraContent {
        color: rgba(28,17,92, .8);
        text-align: center;
    }

    .aboutUsBanner div {
        color: rgba(28,17,92, .8);
        font-size: 15px;
        font-weight: 500;
        line-height: 150%;
    }

    .aboutUsBannerContent {
        padding: 25px;
        box-shadow: 0 6px 24px 4px rgba(28,17,92, .08);
        width: 25%;
        border-radius: 5px;
        background-color: #fff;
        margin: 0 5px;
    }

    .imageHolder {
        height: 60px;
    }

    .imageHolder img {
        height: 70%;
    }

    #aboutUsHeaderContent {
        width: 75%;
        margin: 50px auto;

    }


    #aboutUsHeader {
        background-image: url("../../assets/About-us-bg.svg");
        background-size: cover;
        padding: 60px;
    }

    @media only screen and (max-width: 417px) {

        .aboutUsBannerContent {
            margin: 0 0 20px 0;
            width: 90%;

        }

        #aboutUsHeader {
            background-image: url("../../assets/mobile-bg.svg");
            background-size: cover;
            -webkit-background-size: 30%;
            background-size: 30%;
            background-repeat: no-repeat;
            background-position: 0% 35%;
            padding: 20px;
            background-color: #f3f3f3b0;
        }

        .imageHolder img {
            height: 60%;
        }

        .aboutUsBanner p {
            margin: 0 0 10px 0;
            font-size: 20px;
        }

        .aboutUsBanner div {
            font-size: 14px;
            line-height: 160%;
        }

        #aboutUsHeaderContent {
            width: 85%;
            margin: 50px auto;

        }

    }


</style>