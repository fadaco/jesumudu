<template>
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
                    <label>First Name*</label>
                    <input type="text" v-model="registerFormData.firstName">
                </div>

                <div>
                    <label>Last Name*</label>
                    <input type="text" v-model="registerFormData.lastName">
                </div>

                <div>
                    <label>Other Name*</label>
                    <input type="text" v-model="registerFormData.otherName">
                </div>

                <div class="gen">
                    <label class="gender">Gender</label>
                    <label class="container">Female
                        <input type="radio" value="female"   name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">Male
                        <input type="radio" value="Male"   name="radio">
                        <span class="checkmark"></span>
                    </label>

                </div>

                <div>
                    <label>Date of Birth</label>
                    <input type="date" v-model="registerFormData.dateOfBirth">
                </div>
            </div>
            <div>
                <div>
                    <label>E-mail*</label>
                    <input type="email" v-model="registerFormData.email">
                </div>

                <div>
                    <label>Phone*</label>
                    <input type="number" v-model="registerFormData.phoneNo">
                </div>

                <div>
                    <label>Address*</label>
                    <textarea v-model="registerFormData.address"></textarea>
                </div>

                <div>
                    <label>State*</label>
                    <input type="text" v-model="registerFormData.state">
                </div>

                <div>
                    <label>City*</label>
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
                    <label>Religion*</label>
                    <input type="text" v-model="registerFormData.religion">
                </div>

                <div>
                    <label>Nationality*</label>
                    <input type="text" v-model="registerFormData.nationality">
                </div>

                <div>
                    <label>Native Language*</label>
                    <input type="text" v-model="registerFormData.nativeLanguage">
                </div>

                <!--<div>-->
                    <!--<label>Religion*</label>-->
                    <!--<input type="text" v-model="registerFormData.religion">-->
                <!--</div>-->

            </div>
            </div>
            <div class="submitContainer">
                <button @click="registerForm = 'ed'">Continue</button>
            </div>
        </div>

        <div v-if="registerForm === 'ed'">

            <div class="formContent">
            <div>
                <h3>Application Details</h3>
                <div>
                    <label>Applying For?*</label>
                    <input type="text" v-model="registerFormData.whyAreYouApplying">
                </div>
                <div>
                    <label>What's your planned majors?*</label>
                    <input type="text" v-model="registerFormData.plannedMajor">
                </div>
                <div>
                    <label>Which Session*</label>
                    <input type="text" v-model="registerFormData.session">
                </div>
            </div>

            <div>
                <h3>High School Information</h3>
                <div>
                    <label>Secondary School Name*</label>
                    <input type="text" v-model="registerFormData.secondarySchoolName">
                </div>
                <div>
                    <label>Graduation Year*</label>
                    <input type="number" v-model="registerFormData.secondarySchoolGraduationYear">
                </div>
                <div>
                    <label>School Address Name*</label>
                    <input type="text" v-model="registerFormData.secondarySchoolAddress">
                </div>

                <div class="stateField">
                    <div>
                        <label>City*</label>
                        <select v-model="registerFormData.secondarySchoolCity">
                            <option>Lagos</option>
                        </select>
                    </div>
                    <div>
                        <label>State*</label>
                        <select v-model="registerFormData.secondarySchoolState">
                            <option>Lagos</option>
                        </select>
                    </div>
                </div>

            </div>

            <div>
                <h3>Undergraduate Information</h3>
                <div>
                    <label>University Attended*</label>
                    <input type="text" v-model="registerFormData.universityName">
                </div>

                <div>
                    <label>Graduation Year*</label>
                    <input type="number" v-model="registerFormData.universityGraduationYear">
                </div>

                <div>
                    <label>Degree Awarded*</label>
                    <input type="text" v-model="registerFormData.degreeAwarded">
                </div>

                <div>
                    <label>Address*</label>
                    <input type="text" v-model="registerFormData.universityAddress">
                </div>

                <div class="stateField">
                    <div>
                        <label>City*</label>
                        <select v-model="registerFormData.universityCity">

                            <option value="" hidden="hidden">Select City</option>
                            <option>Lagos</option>
                        </select>
                    </div>
                    <div>
                        <label>State*</label>
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
                <button @click="registerForm = 'oi'">Continue</button>
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
                    <label>Full Name*</label>
                    <input type="text" v-model="registerFormData.emergencyContactName">
                </div>
                <div>
                    <label>Relationship?*</label>
                    <input type="text" v-model="registerFormData.relationship">
                </div>
                <div>
                    <label>Applying For?*</label>
                    <input type="text" placeholder="e.g Brother, Sister, Mother" v-model="registerFormData.applyingFor">
                </div>

                <div class="stateField">
                    <div>
                        <label>City*</label>
                        <select v-model="registerFormData.emergencyContactCity">
                            <option>Lagos</option>
                        </select>
                    </div>
                    <div>
                        <label>State*</label>
                        <select v-model="registerFormData.emergencyContactState">
                            <option>Lagos</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label>Country*</label>
                    <input type="text" v-model="registerFormData.emergencyContactCountry">
                </div>
            </div>

            <div>
                <!--<h3 class="cont">kkkk</h3>-->
                <div>
                    <label>Phone*</label>
                    <input type="number" v-model="registerFormData.emergencyContactPhoneNo">
                </div>

                <div>
                    <label>E-mail*</label>
                    <input type="email" v-model="registerFormData.emergencyContactEmail">
                </div>
            </div>
            </div>

            <div class="submitContainer">
                <button @click="registerForm = 'ed'">Back</button>
                <button @click="submitForData">Submit</button>
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

    .formHeader {
        display: flex;
        justify-content: space-between;
        background: #f9f9f9;
        padding-top: 9px;
        padding-right: 9px;
        padding-left: 9px;
        margin: 15px;
    }

    .formContent {
        display: flex;
        justify-content: space-evenly;
    }

    .formContent > div {
        width: 32%;
    }

    .formContent > div > div {
        height: 73px;
    }

    .mainRegisterBody {
        width: 70%;
        margin: 0 auto;
    }

    .formHeader {
        font-size: 13px;
    }

    input[name="registerForm"] {
        margin-right: 20px;
    }

    input[type="text"], select, textarea, input[type="email"], input[type="date"],
    input[type="number"] {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 10px;
        height: 35px;
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
        padding: 11px 40px;
        font-size: 14px;
        border-radius: 3px;
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
        margin-top: 4px;
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