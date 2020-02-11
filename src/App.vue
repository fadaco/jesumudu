<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
    import Firebase from 'firebase'

     let firebaseConfig = {
    apiKey: "AIzaSyBZTlLAWTNH2MDkhTIxwWTaLleYbjZTZO8",
    authDomain: "jesem-88f42.firebaseapp.com",
    databaseURL: "https://jesem-88f42.firebaseio.com",
    projectId: "jesem-88f42",
    storageBucket: "jesem-88f42.appspot.com",
    messagingSenderId: "271781138568",
    appId: "1:271781138568:web:c874301c02abdf0296cf3d",
    measurementId: "G-9WHYW445PV"
  };
    let app = Firebase.initializeApp(firebaseConfig);
    let db = app.database()
    export const booksRef = db.ref('user-data')
export default {
  name: 'app',
}
</script>

<style>

#app {
  font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-smooth: always;
}
</style>
