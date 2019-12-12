<template>
    <div>
        <HeadName/>
        <Banner/>
        <WhoWeAre/>
        <Study/>
        <Alumni/>
        <Join/>
        <Foot/>
    </div>
    
</template>

<script>
    import HeadName from './components/Shared/Header/header';
    import Banner from './components/Banner/banner';
    import WhoWeAre from './components/Home/WhoWeAre/whoWeAre';
    import Study from './components/Home/Study/study';
    import Alumni from './components/Home/Alumni/alumni';
    import Join from './components/Home/Join/join';
    import Foot from './components/Shared/Footer/footer';
    export default {
        name: "HomePage",
        components: {
            HeadName,
            Banner,
            WhoWeAre,
            Study,
            Alumni,
            Join,
            Foot
        }
    }
</script>

<style scoped>

</style>