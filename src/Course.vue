<template>
    <div>

        <div id="courseMainContainer">
            <mobile-nav class="mobile"/>
            <HeaderName  v-if="!mobileView"/>
            <BasicCourseContent/>
            <IntermediateCourseContent/>
            <AdvancedCourseContent/>
            <Foot/>
        </div>
    </div>

</template>

<script>
    import mobileNav from './components/Mobile-menu/mobile-menu';
    import HeaderName from './components/Shared/Header/header';
    import BasicCourseContent from './components/Courses/BasicCoursesContent';
    import IntermediateCourseContent from "./components/Courses/IntermediateCoursesContent";
    import AdvancedCourseContent from "./components/Courses/AdvancedCoursesContent";
    import Foot from './components/Shared/Footer/footer';
    export default {
        name: "Course",

        data: () => {
            return {
                mobileView: true,
                showNav: false,
            };
        },

        methods: {
            handleView() {
                this.mobileView = window.innerWidth <= 990;
            }
        },
        components: {
            mobileNav,
            HeaderName,
            BasicCourseContent,
            IntermediateCourseContent,
            AdvancedCourseContent,
            Foot
        },
        created () {
            this.handleView();
            window.console.log ('works');
            window.addEventListener("resize", this.handleView)
        }
    }
</script>

<style scoped>

    #courseMainContainer {
        background-image: url("./assets/courses-bg.svg");
        background-repeat: no-repeat;
        background-size: 193% 19%;
    }

    .mobile {
        top: 0px;
    }

</style>