<template>
    <div>
        <div id="study">
            <div class="study-one">
                <div class="study-one-cont">
                <h1 class="header-one" >Study at your own pace</h1>
                <div class="par">Lorem ipsum mordicus edictum marm <br>
                    marcuskld Dixon. Lorem ipsum mordicus <br>
                    edictum marm marcuskld Dixon </div>
                    <div><a href="http://www.easyclass.com" target="_blank"><button class="btn-jesu">Learn More</button></a></div>
                </div>
            </div>
            <div class="study-two">
                <div class="diver">
                <img src="../../../assets/study-now.jpg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "study"
    }
</script>

<style scoped>
    #study {
        display: flex;
        flex-wrap: wrap;
    }

    .study-one {
        width: 40%;
    }
    .study-two {
        width: 60%;
    }

    .study-two img {
        width: 100%;
        height: 100%;

    }

    .btn-jesu {
        background: none;
        color: #5340BC;
        margin: 20px 0;
        font-size: 16px;
        padding: 12px 40px;
        border: 2px solid #5340BC;
        border-radius: 30px;
        font-weight: bold;
        cursor: pointer;
    }

    .btn-jesu:hover {
        background-color: #614fc1;
        color: white;
        transition-property: background-color;
        transition-duration: 0.5s;
    }

    .study-one-cont {
        margin: 30% auto;
        width: 65%;

    }

    .header-one {
        color: #251871;
        font-weight: 900;
    }

    .diver {
        height: 100%;
    }
    .par {
        color: #170E46;
        font-weight: 700;
        line-height: 1.7em;
        letter-spacing: 0.5px;
    }

    @media only screen and (max-width: 415px ) {
        .study-two  {
            width: 100%;
        }

        .study-one  {
            width: 100%;
            text-align: center;
        }

        .study-one-cont {
            width: 80%;
            margin: 0 auto;
            padding: 20px 0;
        }

        .btn-jesu {
            font-size: 19px;
            padding: 10px 50px;
            border: 2px solid #5340BC;
            border-radius: 30px;
        }

    }

</style>