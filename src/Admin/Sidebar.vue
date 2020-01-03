<template>
    <div>
        <ul>
            <li>
                <router-link to="/admin">Dashboard</router-link>
            </li>
            <li>
                <router-link to="/admin/user-list">Users Bio Data</router-link>
            </li>
            <li>User Management</li>
            <li>Logout</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

</style>