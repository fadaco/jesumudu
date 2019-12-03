<template>
  <div id="app">
    <Header/>
   <Banner/>
    <WhoWeAre/>
      <Study/>
      <Alumni/>
      <Join/>
      <Footer/>
  </div>
</template>

<script>
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import WhoWeAre from './components/WhoWeAre/whoWeAre';
import Study from './components/Study/study';
import Alumni from './components/Alumni/alumni';
import Join from './components/Join/join';
import Footer from './components/Footer/footer';

export default {
  name: 'app',
  components: {
    Header,
    Banner,
    WhoWeAre,
    Study,
    Alumni,
    Join,
    Footer
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
