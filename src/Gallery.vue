<template>
    <div>
        <HeaderName v-if="!mobileView"/>
        <mobile-nav v-if="mobileView" class="mobile"/>

        <div>
             <carousel-3d :controls-visible="true">
                 <slide :index="0"><img src="./assets/join-now.jpg"></slide>
                 <slide :index="1"><img src="./assets/banner-img.jpg"></slide>
                 <slide :index="2"><img src="./assets/study-now.jpg"></slide>
                 <slide :index="3"><img src="./assets/profile1.jpg"> </slide>
                 <slide :index="4"><img src="./assets/profile2.jpg"></slide>
                 <slide :index="5"><img src="./assets/profile3.jpg"></slide>
             </carousel-3d>
         </div>
        <Foot/>
    </div>
</template>

<script>
    import HeaderName from "./components/Shared/Header/header";
    import mobileNav from "./components/Mobile-menu/mobile-menu";
    import { Carousel3d, Slide } from 'vue-carousel-3d';
    import Foot from "./components/Shared/Footer/footer";
    export default {
        name: "Gallery",
        data: () => {
          return {
              mobileView: true,
              showNav: false,
          }
        },
        components: {
            HeaderName,
            mobileNav,
            Carousel3d,
            Slide,
            Foot
        },
        methods: {
            handleView() {
                this.mobileView = window.innerWidth <= 990;
            }
        },
        created () {
            this.handleView();
            window.console.log ('works');
            window.addEventListener("resize", this.handleView)
        }
    }
</script>

<style scoped>

    .carousel-3d-slide img {
        height: 100%;
    }

    .carousel-3d-slide {
        background: #000000;
    }
</style>