<template>
    <div class="alumni">
        <div class="alumni-header bold">What our Alumni has to say</div>
        <div class="alumni-tab">
            <div class="inner-tab">
                <div class="tas">
                   <img src="../../../assets/image-guy.svg">
                    <div>
                        <div class="bold">Alpha Ceturi</div>
                        <div style="opacity: 0.6">Student</div>
                    </div>
                </div>
                <div style="color:#170E46">
                    Lorem ipsum mordicus edictum marm marcuskld
                    Dixon. Lorem ipsum mordicus edictum marm
                    marcuskld Dixon. Lorem ipsum mordicus edictum
                    marm marcuskld Dixon. Lorem ipsum mordicus
                    edictum marm marcuskld Dixon
                </div>
            </div>
            <div class="inner-tab">
                <div class="tas">
                    <img src="../../../assets/image-woman.svg">
                    <div>
                        <div class="bold">Canis Major</div>
                        <div style="opacity: 0.6">Student</div>
                    </div>
                </div>
                <div style="color:#170E46 ">
                    Lorem ipsum mordicus edictum marm marcuskld
                    Dixon. Lorem ipsum mordicus edictum marm
                    marcuskld Dixon. Lorem ipsum mordicus edictum
                    marm marcuskld Dixon. Lorem ipsum mordicus
                    edictum marm marcuskld Dixon
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "alumni"
    }
</script>

<style scoped>
    .alumni {
        background-image: url("../../../assets/testimonal-bg.svg");
        background-size: cover;
        padding: 102px 0 154px 0;
    }
    .alumni-tab{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: 0 auto;
        flex-wrap: wrap;
    }

    .tas {
        display: flex;
        margin-bottom: 18px;
        align-items: center;
    }

    .tas img {
        width: 17%;
        margin-right: 20px;
    }

    .inner-tab {
        background: #ffffff;
        padding: 25px 45px;
        width: 33%;
        box-shadow: 0 10px 20px 0 rgba(0,0,0, 0.06);
        border-radius: 5px;
    }

    .alumni-header {
        text-align: center;
        margin-bottom: 44px;
        font-size: 40px;
        color: #170E46;
    }

    .bold {
        font-weight: bold;
        color: #170E46;
    }

    @media only screen and (max-width: 415px ) {
        .inner-tab {
            width: 65%;
            margin: 0 0 20px 0;
        }

        .alumni-header {
            font-size: 30px;
            padding: 0 40px;

        }

        .alumni {
            padding: 50px 0 40px 0;
        }

        .inner-tab {
            padding: 45px 45px;

        }

    }

</style>