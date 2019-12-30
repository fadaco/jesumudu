<template>
    <div class="mainRegisterBody">
        <div>Registration Form</div>
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
                    <input type="text">
                </div>

                <div>
                    <label>Last Name*</label>
                    <input type="text">
                </div>

                <div>
                    <label>Other Name*</label>
                    <input type="text">
                </div>

                <div>
                    <label>Gender</label>
                    <input type="radio" name="gender">Female
                    <input type="radio" name="gender">Male
                </div>

                <div>
                    <label>Date of Birth</label>
                    <input type="date">
                </div>
            </div>
            <div>
                <div>
                    <label>E-mail*</label>
                    <input type="email">
                </div>

                <div>
                    <label>Phone*</label>
                    <input type="number">
                </div>

                <div>
                    <label>Address*</label>
                    <textarea></textarea>
                </div>

                <div>
                    <label>State*</label>
                    <input type="text">
                </div>

                <div>
                    <label>City*</label>
                    <input type="text">
                </div>
            </div>
            <div>
                <div>
                    <label>Marital Status</label>
                    <select>
                        <option>Single</option>
                        <option>Married</option>
                    </select>
                </div>
                <div>
                    <label>Religion*</label>
                    <input type="text">
                </div>

                <div>
                    <label>Nationality*</label>
                    <input type="text">
                </div>

                <div>
                    <label>Native Language*</label>
                    <input type="text">
                </div>

                <div>
                    <label>Religion*</label>
                    <input type="text">
                </div>
            </div>
            </div>
            <div class="submitContainer">
                <button>Cancel</button>
                <button>Continue</button>
            </div>
        </div>

        <div v-if="registerForm === 'ed'">

            <div class="formContent">
            <div>
                <h3>Application Details</h3>
                <div>
                    <label>Applying For?*</label>
                    <input type="text">
                </div>
                <div>
                    <label>What's your planned majors?*</label>
                    <input type="text">
                </div>
                <div>
                    <label>Which Session*</label>
                    <input type="text">
                </div>
            </div>

            <div>
                <h3>High School Information</h3>
                <div>
                    <label>Secondary School Name*</label>
                    <input type="text">
                </div>
                <div>
                    <label>Graduation Year*</label>
                    <input type="number">
                </div>
                <div>
                    <label>School Address Name*</label>
                    <input type="text">
                </div>

                <div class="stateField">
                    <div>
                        <label>City*</label>
                        <select>
                            <option>Lagos</option>
                        </select>
                    </div>
                    <div>
                        <label>State*</label>
                        <select>
                            <option>Lagos</option>
                        </select>
                    </div>
                </div>

            </div>

            <div>
                <h3>Undergraduate Information</h3>
                <div>
                    <label>University Attended*</label>
                    <input type="text">
                </div>

                <div>
                    <label>Graduation Year*</label>
                    <input type="number">
                </div>

                <div>
                    <label>Degree Awarded*</label>
                    <input type="text">
                </div>

                <div>
                    <label>Address*</label>
                    <input type="text">
                </div>

                <div class="stateField">
                    <div>
                        <label>City*</label>
                        <select>
                            <option>Lagos</option>
                        </select>
                    </div>
                    <div>
                        <label>State*</label>
                        <select>
                            <option>Lagos</option>
                        </select>
                    </div>
                </div>
            </div>
            </div>

            <div class="submitContainer">
                <button>Cancel</button>
                <button>Continue</button>
            </div>

        </div>

        <div v-if="registerForm === 'oi'">
            <div class="formContent">
            <div>
                <h3>Other Information</h3>
                <div>
                    <label>What do you want to study at JESEM?*</label>
                    <input type="text">
                </div>
            </div>

            <div>
                <h3>Emergency Contact</h3>
                <div>
                    <label>Full Name*</label>
                    <input type="text">
                </div>
                <div>
                    <label>Relationship?*</label>
                    <input type="text">
                </div>
                <div>
                    <label>Applying For?*</label>
                    <input type="text" placeholder="e.g Brother, Sister, Mother">
                </div>

                <div class="stateField">
                    <div>
                        <label>City*</label>
                        <select>
                            <option>Lagos</option>
                        </select>
                    </div>
                    <div>
                        <label>State*</label>
                        <select>
                            <option>Lagos</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label>Country*</label>
                    <input type="text">
                </div>
            </div>

            <div>
                <h3 class="cont">kkkk</h3>
                <div>
                    <label>Phone*</label>
                    <input type="number">
                </div>

                <div>
                    <label>E-mail*</label>
                    <input type="email">
                </div>
            </div>
            </div>

            <div class="submitContainer">
                <button>Cancel</button>
                <button>Submit</button>
            </div>
        </div>




    </div>
</template>

<script>
    export default {
        name: "register",
        data: function () {
            return {
                registerForm: 'pd'
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

</style>