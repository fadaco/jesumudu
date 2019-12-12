<template>
    <div>
        <HeadName/>
        <AboutUsBanner/>
        <AboutUsContent/>
        <Foot/>
    </div>
</template>

<script>
    import HeadName from './components/Shared/Header/header';
    import AboutUsBanner from "./components/Banner/AboutUsBanner";
    import AboutUsContent from "./components/AboutUs/Content/AboutUsContent";
    import Foot from './components/Shared/Footer/footer';
    export default {
        name: "AboutUS",
        components: {
            HeadName,
            AboutUsBanner,
            AboutUsContent,
            Foot
        }
    }
</script>

<style scoped>

</style>