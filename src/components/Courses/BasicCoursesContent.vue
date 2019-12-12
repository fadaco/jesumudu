<template>
    <div id="basicCourse">
        <div class="courseTitle center">COURSES FOR PROFICIENCY DIPLOMA CERTIFICATION</div>
        <div class="courseSubTitle center basicTitle">BASIC</div>
        <div id="basicCourses">

            <div>
            <div>
                <h3 class="courseSubTitle">Pure & Applied Sciences</h3>
                <ul>
                    <li>Information Technology</li>
                    <li> Computer Science</li>
                </ul>
            </div>
             <div>
                    <h3 class="courseSubTitle">SOCIAL SCIENCE </h3>
                    <ul>
                        <li>Mass Communication</li>
                        <li>Public Administration</li>
                        <li>Corporate Communication</li>
                        <li>Human Resources Management</li>
                    </ul>
                </div>

            </div>

            <div>
                <h3 class="courseSubTitle">Management</h3>
                <ul>
                    <li>Accounting</li>
                    <li>Economics</li>
                    <li>Business Administration</li>
                    <li>Education planning and management</li>
                </ul>
            </div>




        </div>
    </div>
</template>

<script>
    export default {
        name: "CoursesContent"
    }
</script>

<style scoped>
    #basicCourses {
        display: flex;
        justify-content: space-evenly;

    }

    .courseSubTitle {
        color: #1C115C;
        font-weight: bold;
    }

    .center {
        text-align: center;
    }

    .basicTitle {
        font-size: 20px;
    }

    .courseTitle {
        color: #801D56;
        font-weight: bold;
        margin: 20px 0;
    }

    ul {
        list-style-type: none;
    }

    #basicCourse {
        background-image: url("../../assets/layout.svg");
        padding: 40px 0;
        margin: 50px;
    }
</style>