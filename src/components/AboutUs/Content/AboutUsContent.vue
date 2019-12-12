<template>
    <div id="aboutUsContent">
        <h3>Disclaimer</h3>
        <div class="disclaimerText">JESEM EDUCATION TRAINING & SERVICES (JETS) is not a degree awarding institution.</div>
        <p>
            However, we run training programmes in the field of Arts, Management and Professional
            Studies and award proficiency certificates to successful students as follows: <span class="proText">
            Professional Membership Certificate, Professional Diploma Certificate, Professional Advanced Diploma
            Certificate and Professional Graduate Diploma Certificate as well as Professional Post
            Graduate Diploma Certificate respectively.</span>
        </p>
        <p>
            These courses are articulated or recognized by various Educational Institutions and
            Universities to confer appropriate conversion examination opportunities to holders of
            Professional Diploma, Professional Advanced Diploma Certificate (PADC), Professional
            Graduate Diploma Certificate (PGDC) as well as Professional Post Graduate Diploma
            Certificate upon successful completion of their training with us for National Diploma,
            Higher National Diploma, Bachelors Degree, Masters Degree and Doctorate Degree respectively.
        </p>
    </div>
</template>

<script>
    export default {
        name: "AboutUsContent"
    }
</script>

<style scoped>

    #aboutUsContent {
        background-image: url("../../../assets/contentAboutUs.jpg");
        width: 70%;
        margin: 50px auto;
        padding: 30px;
    }

    .disclaimerText {
        color: tomato;
    }
    .proText {
        font-weight: bold;
    }
</style>