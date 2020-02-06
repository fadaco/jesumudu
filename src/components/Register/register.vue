<template>
    
    <div class="holder">
    <div class="mainRegisterBody">
        <div class="reg">Registration Form</div>
        <div class="formHeader">
            <div><input type="radio" value="pd" v-model="registerForm" name="registerForm">Personal Details
                <div :class="{subHeaderHighlight : registerForm === 'pd'}"></div>
            </div>
            <div><input type="radio" value="ed" v-model="registerForm" name="registerForm">Education
                <div :class="{subHeaderHighlight : registerForm === 'ed'}"></div>
            </div>
            <div><input type="radio" value="oi" v-model="registerForm" name="registerForm">Other Information
              <div :class="{subHeaderHighlight : registerForm === 'oi'}"></div>
            </div>
        </div>

        <div v-if="registerForm === 'pd'" >
            <div class="formContent">
            <div>
                <div>
                    <label>First Name<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.firstName">
                </div>

                <div>
                    <label>Last Name<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.lastName">
                </div>

                <div>
                    <label>Other Name<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.otherName">
                </div>

                <div class="gen">
                    <label class="gender">Gender</label> <br>
                    <div class="check">
                        <!--<label class="container">-->
                            <!--<span class="checkmark"></span>-->
                            <!--<input type="radio" value="female"   name="radio">-->
                            <!--<span>Female</span>-->

                        <!--</label>-->
                        <label class="container">
                            <input type="radio" value="Male"   name="radio">
                            <span class="checkmark"></span>
                            <span>Female</span>
                        </label>
                        <label class="container">
                            <input type="radio" value="Male"   name="radio">
                            <span class="checkmark"></span>
                            <span>Male</span>
                        </label>

                    </div>


                </div>

                <div>
                    <label>Date of Birth</label>
                    <input type="date" v-model="registerFormData.dateOfBirth">
                </div>
            </div>
            <div>
                <div>
                    <label>E-mail<span class="req">*</span></label>
                    <input type="email" v-model="registerFormData.email">
                </div>

                <div>
                    <label>Phone<span class="req">*</span></label>
                    <input type="number" v-model="registerFormData.phoneNo">
                </div>

                <div>
                    <label>Address<span class="req">*</span></label>
                    <textarea v-model="registerFormData.address"></textarea>
                </div>

                <div>
                    <label>State<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.state">
                </div>

                <div>
                    <label>City<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.city">
                </div>
            </div>
            <div>
                <div>
                    <label>Marital Status</label>
                    <select v-model="registerFormData.martialStatus">
                        <option>Single</option>
                        <option>Married</option>
                    </select>
                </div>
                <div>
                    <label>Religion<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.religion">
                </div>

                <div>
                    <label>Nationality<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.nationality">
                </div>

                <div>
                    <label>Native Language<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.nativeLanguage">
                </div>

                <!--<div>-->
                    <!--<label>Religion*</label>-->
                    <!--<input type="text" v-model="registerFormData.religion">-->
                <!--</div>-->

            </div>
            </div>
            <div class="submitContainer">
                <button @click="registerForm = 'ed'">Continue <img  src="../../assets/arr.svg" alt=""></button>
            </div>
        </div>

        <div v-if="registerForm === 'ed'">

            <div class="formContent">
            <div>
                <h3>Application Details</h3>
                <div>
                    <label>Applying For?<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.whyAreYouApplying">
                </div>
                <div>
                    <label>What's your planned major?<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.plannedMajor">
                </div>
                <div>
                    <label>Which Session<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.session">
                </div>
            </div>

            <div>
                <h3>High School Information</h3>
                <div>
                    <label>Secondary School Name<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.secondarySchoolName">
                </div>
                <div>
                    <label>Graduation Year<span class="req">*</span></label>
                    <input type="number" v-model="registerFormData.secondarySchoolGraduationYear">
                </div>
                <div>
                    <label>School Address Name<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.secondarySchoolAddress">
                </div>

                <div class="stateField">
                    <div>
                        <label>City<span class="req">*</span></label>
                        <select v-model="registerFormData.secondarySchoolCity">
                            <option>Lagos</option>
                        </select>
                    </div>
                    <div>
                        <label>State<span class="req">*</span></label>
                        <select v-model="registerFormData.secondarySchoolState">
                            <option>Lagos</option>
                        </select>
                    </div>
                </div>

            </div>

            <div>
                <h3>Undergraduate Information</h3>
                <div>
                    <label>University Attended<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.universityName">
                </div>

                <div>
                    <label>Graduation Year<span class="req">*</span></label>
                    <input type="number" v-model="registerFormData.universityGraduationYear">
                </div>

                <div>
                    <label>Degree Awarded<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.degreeAwarded">
                </div>

                <div>
                    <label>Address<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.universityAddress">
                </div>

                <div class="stateField">
                    <div>
                        <label>City<span class="req">*</span></label>
                        <select v-model="registerFormData.universityCity">

                            <option value="" hidden="hidden">Select City</option>
                            <option>Lagos</option>
                        </select>
                    </div>
                    <div>
                        <label>State<span class="req">*</span></label>
                        <select v-model="registerFormData.universityState">

                            <option value="" hidden="hidden">Select State</option>
                            <option>Lagos</option>
                        </select>
                    </div>
                </div>
            </div>
            </div>

            <div class="submitContainer">
                <button @click="registerForm = 'pd'">Back</button>
                <button @click="registerForm = 'oi'">Continue <img  src="../../assets/arr.svg" alt=""></button>
            </div>

        </div>

        <div v-if="registerForm === 'oi'">
            <div class="formContent">
            <div>
                <h3>Other Information</h3>
                <div>
                    <label>What do you want to study at JESEM?*</label>
                    <input type="text" v-model="registerFormData.courseOfStudy">
                </div>
            </div>

            <div>
                <h3>Emergency Contact</h3>
                <div>
                    <label>Full Name <span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.emergencyContactName">
                </div>
                <div>
                    <label>Relationship?<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.relationship">
                </div>
                <div>
                    <label>Applying For?<span class="req">*</span></label>
                    <input type="text" placeholder="e.g Brother, Sister, Mother" v-model="registerFormData.applyingFor">
                </div>

                <div class="stateField">
                    <div>
                        <label>City<span class="req">*</span></label>
                        <select v-model="registerFormData.emergencyContactCity">
                            <option>Lagos</option>
                        </select>
                    </div>
                    <div>
                        <label>State<span class="req">*</span></label>
                        <select v-model="registerFormData.emergencyContactState">
                            <option>Lagos</option>
                        </select>
                    </div>
                </div>


            </div>

            <div>
                <h3 class="cont">kkkk</h3>

                <div>
                    <label>Country<span class="req">*</span></label>
                    <input type="text" v-model="registerFormData.emergencyContactCountry">
                </div>

                <div>
                    <label>Phone<span class="req">*</span></label>
                    <input type="number" v-model="registerFormData.emergencyContactPhoneNo">
                </div>

                <div>
                    <label>E-mail<span class="req">*</span></label>
                    <input type="email" v-model="registerFormData.emergencyContactEmail">
                </div>
            </div>
            </div>

            <div class="submitContainer">
                <button @click="registerForm = 'ed'">Back</button>
                <button @click="submitForData">Submit <img  src="../../assets/arr.svg" alt=""> </button>
            </div>
        </div>




    </div>
    </div>
</template>

<script>
    import toastr from 'toastr';
    import {booksRef} from "../../App";

    export default {
        name: "register",
        data: function () {
            return {
                registerForm: 'pd',
                registerFormData: {
                    firstName: '',
                    lastName: '',
                    otherName: '',
                    gender: '',
                    dateOfBirth: '',
                    email: '',
                    phoneNo: '',
                    address: '',
                    state: '',
                    city: '',
                    martialStatus: '',
                    religion: '',
                    nationality: '',
                    nativeLanguage: '',
                    whyAreYouApplying: '',
                    plannedMajor: '',
                    session: '',
                    secondarySchoolName: '',
                    secondarySchoolGraduationYear: '',
                    secondarySchoolAddress: '',
                    secondarySchoolCity: '',
                    secondarySchoolState: '',
                    universityName: '',
                    universityGraduationYear: '',
                    degreeAwarded: '',
                    universityAddress: '',
                    universityCity: '',
                    universityState: '',
                    courseOfStudy: '',
                    emergencyContactName: '',
                    relationship: '',
                    applyingFor: '',
                    emergencyContactCity: '',
                    emergencyContactState: '',
                    emergencyContactCountry: '',
                    emergencyContactPhoneNo: '',
                    emergencyContactEmail: ''
                }
            }
        },
        methods: {
            async submitForData(){
                window.console.log('submitted!!!');
                window.console.log(this.registerFormData);
                await booksRef.push(this.registerFormData);
                await toastr.success('successfully submitted');
            }
        }
    }
</script>

<style scoped>

    .holder {
        background-color:#F8F8F8;
        height: 100%;
    }

    button img {
        width: 18%;
        margin-left: 4px;
    }

    .reg {
        font-weight: 800;
        color: #251871;
        font-size: 22px;
    }

    .check {
        background-color:rgba(242,242,242,1);
        padding: 10px;
        border-radius: 3px;
    }

    .container {
        margin-right: 20px;
    }

    .req {
        color: red;
    }

    .formHeader {
        display: flex;
        justify-content: space-between;
        background: #f9f9f9;
        padding-top: 12px;
        padding-right: 9px;
        padding-left: 9px;
        margin: 15px;
    }

    .formContent {
        display: flex;
        justify-content: space-evenly;
    }

    .formContent > div {
        width: 30%;
    }

    .formContent > div > div {
        height: 80px;
    }

    .mainRegisterBody {
        width: 75%;
        padding: 2% 5%;
        margin: 0 auto;
        background-color: #fff;
    }

    .formHeader {
        font-size: 13px;
        font-weight: 700;
        color: #251871;
    }

    input[name="registerForm"] {
        margin-right: 20px;
    }

    input[type="text"], select, textarea, input[type="email"], input[type="date"],
    input[type="number"] {
        width: 100%;
        border: 1px solid rgba(204,204,204,0.5);
        border-radius: 3px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 10px;
        height: 40px;
        padding: 5px;
    }


    input[type="text"]:focus, select:focus, textarea:focus, input[type="email"]:focus, input[type="date"]:focus,
    input[type="number"]:focus {
        outline: none;
        border: 1px solid #251871;
    }

    label {
        font-size: 13px;
    }

    .hide {
        display: none;
    }

    .stateField {
        display: flex;
    }

    .cont {
        opacity: 0;
    }

    .submitContainer {
        float: right;
    }

    .submitContainer > button:nth-child(1) {
        background: #bcbcbc;
        border: 0;
    }

    .submitContainer > button:nth-child(1):hover {
        border: 1px solid #bcbcbc;
        background: transparent;
        color: #bcbcbc;
    }
    .submitContainer > button {
        color: #ffffff;
        margin: 0 13px;
        padding: 12px 30px;
        font-size: 14px;
        border-radius: 2px;
        cursor: pointer;
    }

    .submitContainer > button:nth-child(2):hover {
        border: 1px solid #5340bc;
        background: transparent;
        color: #5340bc;
    }

    .submitContainer > button:nth-child(2) {
        background: #5340bc;
        border: 0;
    }

    .subHeaderHighlight {
        height: 3px;
        background: #614fc1;
        margin-top: 11px;
    }

    .container {
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 15px;
        font-weight: 600;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        margin: 0 10px;
    }

    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;

    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #fff;
        border: 1px solid #dadada;
        border-radius: 50%;
        vertical-align: center;
    }

    .container:hover input ~ .checkmark {
        background-color: #fff;
    }

    .container input:checked ~ .checkmark {
        background-color: #5340bc;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .container input:checked ~ .checkmark:after {
        display: flex;
    }

    .container .checkmark:after {
        top: 6px;
        left: 6px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
    }


    @media only screen and (max-width: 417px) {

        .formContent {
            display: flex;
            flex-wrap: wrap;
        }
        .formContent >div {
            width: 100%;
        }

        .mainRegisterBody {
            width: 85%;
        }

        .formHeader {
            display: -moz-box !important;
            font-size: 11px;
            padding: 0px;
            margin: 25px 3px;
        }

        .formHeader input[type='radio']{
            margin-right: 5px;
        }

        input[type="text"], select, textarea, input[type="email"], input[type="date"],
        input[type="number"] {

            padding: 10px;
            font-size: 16px;
            height: 35pt;
        }

        .formContent > div > div {
            height: 85px;
        }

        .stateField > div {
            width: 100%;
        }

        .stateField {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin: 0 0 80px 0;
        }

        .submitContainer > button {
            width: 45%;
            margin: 0;
            padding: 18px 41px;
            font-size: 16px;
            font-weight: bold;
        }

        .submitContainer {
            display: flex;
            justify-content: space-between;
            float: none;
            margin: 20px 0;

        }

        .reg {
            text-align: center;
            font-weight: bold;
            margin: 30px 0 0 0;
            font-size: 25px;
        }

        .gender label {
          ;
        }

        /*.gender input {*/
            /*margin: 0 10px;*/
            /*!*width: 50px;*!*/
            /*!*border: 0;*!*/
        /*}*/


        .gender {
            font-weight: 600;
            margin: 0 20px 0 0;
            font-size: 16px;
        }



        .container {
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 16px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            margin: 0 10px;
        }

        .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }

        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #eee;
            border-radius: 50%;
        }

        .container:hover input ~ .checkmark {
            background-color: #ccc;
        }

        .container input:checked ~ .checkmark {
            background-color: #5340bc;
        }

        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }

        .container input:checked ~ .checkmark:after {
            display: flex;
        }

        .container .checkmark:after {
            top: 9px;
            left: 9px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
        }
        .gen {
            margin: 10px 0;
        }


    }

</style>