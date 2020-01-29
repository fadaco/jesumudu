<template>
    <div id="sidebar">
        <ul>

            <li>
                <div id="jesemLogo" class="linkDiv">JESEM</div>
            </li>

            <li class="linkDiv">
                <router-link to="/admin">Dashboard</router-link>
            </li>
            <li class="linkDiv">
                <router-link to="/admin/user-list">Users Bio Data</router-link>
            </li>
            <li class="linkDiv">
                <router-link to="#">User Management</router-link></li>
            <li class="linkDiv"><a href="#">Logout</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

    #jesemLogo {
        color: #000000;
        font-weight: bold;
        font-size: 25px;
    }
    #sidebar {
        background: #ffffff;
        height: 100vh;
        box-shadow: 10px 0 5px -2px #cccccc;
    }

    #sidebar ul {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: #514882;
        font-size: 20px;
    }

    li {
        list-style-type: none;
    }

    .linkDiv {
        padding: 20px 38px;
        margin: 20px 0;
    }

    li:hover {
        background: #f8f8f8;
        color: #5543bd;
        font-weight: bold;
    }

</style>