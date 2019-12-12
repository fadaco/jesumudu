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
        justify-content: space-evenly;
        width: 80%;
        margin: 0 auto;
    }

    .aboutUsBanner p {
        color: #251871;
        font-weight: bold;
        font-size: 20px;
    }

    .paraHeader {
        color: #251871;
        text-align: center;
    }

    .paraContent {
        color: #5340BC;
        text-align: center;
    }

    .aboutUsBanner div {
        color: #5340BC;
    }

    .aboutUsBannerContent {
        padding: 20px;
        box-shadow: 0 1px 8px 6px #ececec;
        width: 27%;
    }

    .imageHolder {
        height: 60px;
    }

    .imageHolder img {
        height: 100%;
    }

    #aboutUsHeaderContent {
        width: 70%;
        margin: 50px auto;
    }

    #aboutUsHeader {
        background-image: url("../../assets/About-us-bg.svg");
        background-size: cover;
        padding: 60px;
    }

</style>