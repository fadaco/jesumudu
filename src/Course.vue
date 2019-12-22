<template>
    <div id="courseMainContainer">
        <HeaderName/>
        <BasicCourseContent/>
        <IntermediateCourseContent/>
        <AdvancedCourseContent/>
        <Foot/>
    </div>
</template>

<script>
    import HeaderName from './components/Shared/Header/header';
    import BasicCourseContent from './components/Courses/BasicCoursesContent';
    import IntermediateCourseContent from "./components/Courses/IntermediateCoursesContent";
    import AdvancedCourseContent from "./components/Courses/AdvancedCoursesContent";
    import Foot from './components/Shared/Footer/footer';
    export default {
        name: "Course",
        components: {
            HeaderName,
            BasicCourseContent,
            IntermediateCourseContent,
            AdvancedCourseContent,
            Foot
        }
    }
</script>

<style scoped>

    #courseMainContainer {
        background-image: url("./assets/courses-bg.svg");
        background-repeat: no-repeat;
        background-size: 193% 19%;
    }

</style>