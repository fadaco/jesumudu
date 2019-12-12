<template>
    <div id="intermediateCourse">
        <div class="courseTitle center">COURSES FOR PROFICIENCY DIPLOMA CERTIFICATION</div>
        <div class="courseSubTitle center intermediateTitle">Intermediate</div>
        <div id="intermediateCourses">
            <div>
                <div>
                    <h3 class="courseSubTitle">PUBLIC ADMINISTRATION</h3>
                    <ul>
                        <li>Policy and Applied Social Research</li>
                        <li>Politics and Public Policy</li>
                        <li>Public Administration/ Public Service Management</li>
                        <li>Public Service Management</li>
                    </ul>
                </div>

                <div>
                    <h3 class="courseSubTitle">EDUCATION</h3>
                    <ul>
                        <li>Early Childhood Education</li>
                        <li>Education Leadership and Management</li>
                        <li>Education Planning and Management</li>
                        <li>Guidance and Counselling</li>
                        <li>Indigenous Education</li>
                        <li>Special Education</li>
                    </ul>
                </div>
            </div>

            <div>
                <div>
                    <h3 class="courseSubTitle">BUSINESS ADMINISTRATION</h3>
                    <ul>
                    <li>Accounting and Finance</li>
                    <li>Business Administration</li>
                    <li>Communication Technology Management</li>
                    <li>E-Commerce Business Management</li>
                    <li>Entrepreneurship Management</li>
                    <li>Fashion Management</li>
                    <li>General Management</li>
                    <li>Marketing Management</li>
                    </ul>
                </div>
                <div>
                    <h3 class="courseSubTitle">Sciences</h3>
                    <ul>
                        <li>Accounting and Finance</li>
                        <li>Advanced Professional Accounting</li>
                        <li>Agribusiness Management</li>
                        <li>Banking and Finance</li>
                        <li>Computer Science</li>
                        <li>Economics</li>
                        <li>Human Resource Management</li>
                        <li>Management and Business Administration</li>
                        <li>Project Management</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IntermediateCourseContent"
    }
</script>

<style scoped>
    #intermediateCourses {
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

    .intermediateTitle {
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

    #intermediateCourse {
        background-image: url("../../assets/intermediateLayout.svg");
        padding: 40px 0;
        margin: 50px;
    }

</style>