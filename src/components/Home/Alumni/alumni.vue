<template>
    <div class="alumni">
        <div class="alumni-header bold">What our Alumni has to say</div>
        <div class="alumni-tab">
            <div class="inner-tab">
                <div class="tas">
                   <img src="../../../assets/image-guy.svg">
                    <div>
                        <div class="bold">Alpha Ceturi</div>
                        <div>Student</div>
                    </div>
                </div>
                <div>
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
                        <div>Student</div>
                    </div>
                </div>
                <div>
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
        box-shadow: 0 0 18px 0 #d0d0d0;
        border-radius: 5px;
    }

    .alumni-header {
        text-align: center;
        margin-bottom: 44px;
        font-size: 40px;
        color: rgb(37, 24, 113);
    }

    .bold {
        font-weight: bold;
    }
</style>