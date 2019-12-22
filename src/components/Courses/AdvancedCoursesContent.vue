<template>
    <div id="advancedCourse">
        <div class="courseTitle center">COURSES FOR PROFICIENCY DIPLOMA CERTIFICATION</div>
        <div class="courseSubTitle center advancedTitle">ADVANCED</div>
        <div id="advancedCourses">
            <div>
                <div>
                    <h3 class="courseSubTitle">Education</h3>
                    <ul>
                        <li>Guidance and Counseling Education</li>
                        <li>Physical & Health Education</li>
                        <li>Educational Management & Planning</li>
                    </ul>
                </div>

                <div>
                    <h3 class="courseSubTitle">Social Sciences </h3>
                    <ul>
                        <li>Sociology and Social Work</li>
                        <li>Psychology</li>
                        <li>Political Science</li>
                        <li>Entrepreneurship Studies</li>
                    </ul>
                </div>
            </div>


            <div>
                <div>
                    <h3 class="courseSubTitle">Science & Engineering</h3>
                    <ul>
                        <li>Computer Science</li>
                        <li>Public Health Science</li>
                        <li>Environmental Health science</li>
                    </ul>
                </div>

                <div>
                    <h3 class="courseSubTitle">Business & Management Sciences</h3>
                    <ul>
                        <li>Economics</li>
                        <li>Accounting</li>
                        <li>Banking & Finance</li>
                        <li>Marketing</li>
                        <li>Human Resources Management</li>
                        <li>Project Management & Planning</li>
                        <li>Business Management</li>
                        <li>Public Administration</li>
                    </ul>
                </div>
            </div>


            <div>
                <div>
                    <h3 class="courseSubTitle">Arts & Humanity</h3>
                    <ul>
                        <li>Theater Arts & Performing Arts</li>
                        <li>Mass Communication</li>
                        <li>Philosophy</li>
                        <li>Religion and Theology</li>
                        <li>Arts Management</li>
                        <li>International Relations and Diplomacy</li>
                        <li>Library and Information Science</li>
                        <li>Tourism and Hospitality Management</li>
                        <li>Peace & Conflict Resolution</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdvancedCoursesContent"
    }
</script>

<style scoped>
    #advancedCourses {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .courseSubTitle {
        color: #1C115C;
        font-weight: bold;
    }

    .center {
        text-align: center;
    }

    .advancedTitle {
        font-size: 20px;
    }

    .courseTitle {
        color: #801D56;
        font-weight: bold;
        margin: 20px 0;
        font-size: 18px;
    }

    ul {
        list-style-type: none;
    }

    #advancedCourse {
        background-image: url("../../assets/advanced-layout.svg");
        padding: 40px 0;
        margin: 50px;
    }

    @media only screen and (max-width: 417px){
        #advancedCourse {
            padding: 40px 25px;
        }

    }

</style>