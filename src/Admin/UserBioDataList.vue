<template>
    <div>
    <div class="tableData">
        <div>Recently Registered</div>
        <table class="">
            <thead>
            <tr>
                <th>Name</th>
                <th>Applied For</th>
                <th>Location</th>
                <th>Gender</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in getUserData" :key="index">
                <td>{{user.firstName + ' ' + user.lastName}}</td>
                <td>{{user.applyingFor}}</td>
                <td>{{user.city}}</td>
                <td>{{user.gender}}</td>
                <td>View</td>
            </tr>
            </tbody>

        </table>
    </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        name: "UserBioDataList",
        data(){
          return {

          }
        },
        mounted() {
            this.getAllUserDataFromFireBase();
        },
        computed: {
            ...mapGetters(['getUserData'])

        },
        methods: {
            ...mapActions(['loadUserBioData']),
            getAllUserDataFromFireBase(){
                this.loadUserBioData();
            }
        }
    }
</script>

<style scoped>

    .tableData {
        background: #ffffff;
        width: 70%;
        margin: 0 auto;
        padding: 20px;
        box-shadow: 0 1px 4px #ccc;
    }

    table {
        width: 100%;
    }

    tr {
        border-bottom: 1px solid #f5f5f5;
    }



</style>