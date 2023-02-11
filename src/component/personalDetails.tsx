import React, { useState, useEffect } from 'react';
import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    TextInput,
    ScrollView,
    ToastAndroid
} from 'react-native';
<<<<<<< Updated upstream
import { useDispatch, useSelector } from 'react-redux'
=======
import { useDispatch } from 'react-redux'
>>>>>>> Stashed changes
import SafeAreaView from 'react-native-safe-area-view';
import { icons, COLORS, FONTS } from '../constants';
import { horizontalScale, moderateScale, verticalScale } from '../constants/metrices';
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import image from '../constants/image';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RadioButton } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
<<<<<<< Updated upstream
import { current, unwrapResult } from '@reduxjs/toolkit';
=======
import { unwrapResult } from '@reduxjs/toolkit';
>>>>>>> Stashed changes
import { countryList } from '../services/countryList';
import { stateList } from '../services/stateList';
import { DatePickerProps } from 'react-native-date-picker';
import moment from 'moment';
import DateTimePicker from "@react-native-community/datetimepicker";
<<<<<<< Updated upstream
import { personalDetailsUpdate } from '../services/personalDetailsUpdate';
import { userDetailsHandler } from '../store/reducers/userDetails';

const PersonalDetails = (props) => {
    console.log("Page props in Personal details..............", props.route.params)
    const userData: any = useSelector<any>(state => state.userDetailsHandle.data.data);
    const userDate = moment(userData.date_of_birth).toISOString();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState(userData.first_name);
    const [lastName, setLastName] = useState(userData.last_name);
    const [email, setEmail] = useState(userData.email);
    const [mblNumber, setMblNumber] = useState(userData.phone);
    const [mblCode, setMblCode] = useState(userData.country_phone_code);
    const [checked, setChecked] = React.useState(userData.gender);
=======

const PersonalDetails = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mblNumber, setMblNumber] = useState('');
    const [mblCode, setMblCode] = useState('');
    const [checked, setChecked] = React.useState('Male');
>>>>>>> Stashed changes
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mblCodeError, setMblCodeError] = useState('');
    const [mblNumberError, setMblNumberError] = useState('');
    const [countryListValue, setCountryListValue] = useState([])
<<<<<<< Updated upstream
    const [countryValue, setCountryValue] = useState<any>(userData.nationality)
=======
    const [countryValue, setCountryValue] = useState<any>('')
>>>>>>> Stashed changes
    const [stateListValue, setStateListValue] = useState([])
    const [stateValue, setStateValue] = useState<any>('')
    const [cityListValue, setCityListValue] = useState([])
    const [cityValue, setCityValue] = useState<any>('')
    const [Gender, setGenderError] = useState("")
    const [countryError, setCountryError] = useState("")
    const [stateError, setStateError] = useState("")
<<<<<<< Updated upstream
    const [countryResidenceValue, setCountryResidenceValue] = useState<any>(userData.country_of_residence)
    const [countryResidenceError, setCountryResidenceError] = useState('')
    const [date, setDate] = useState(moment(userData.date_of_birth).toISOString())
    const [dateShow, setDateShow] = useState(false);
    const [dateError, setDateError] = useState("");

    console.log("userData ..;;;;;;;;;;;;;;;;;;;;;", userData)
    const getCountryList = async () => {
        let listCountries = await countryList().then((originalPromiseResult) => {
            console.log("Personal Details Country....", originalPromiseResult);
            // const value = originalPromiseResult
            setCountryListValue(originalPromiseResult);
            console.log("listCoun", originalPromiseResult[56].name)
        })
    }
    const getStateList = async (data: any) => {
        let listCountries = await stateList(data).then((originalPromiseResult) => {
            console.log("Personal Details State....", originalPromiseResult);
            // const value = originalPromiseResult
            setStateListValue(originalPromiseResult);
            console.log("listCoun", originalPromiseResult)
        })
    }

    useEffect(() => {
        getCountryList();
    }, [])

    useEffect(() => {
        if (countryValue) {
            getStateList(countryValue);
        }
        // else { Alert.alert("Select any nationality") }

    }, [countryValue])

    useEffect(() => {
        if (countryValue) {
            if (stateValue) {
                getStateList(countryValue);
            }
            //  else { Alert.alert("Select any state") }
        }
        // else { Alert.alert("Select any country") }

    }, [cityValue])

    const validateFunction = () => {
        console.log("values", firstName, lastName, email, mblNumber, mblCode, checked, countryResidenceValue, countryValue, stateValue, date);
        //firstName
        let errorCount = 0;
        if (firstName.length <= 3 || firstName === undefined) {
            setFirstNameError('FirstName is mandatory')
            errorCount++;
        }
        // else {
        //     setFirstNameError('')
        // }
        //lastName
        if (lastName.length <= 3 || lastName === undefined) {
            setLastNameError('LastName is mandatory')
            errorCount++;
        }
        // else {
        //     setLastNameError('')
        // }
        //email
        // if (email.length === 0 || email === undefined) {
        //     setEmailError('Email id is mandatory')
        // }
        // else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        //     setEmailError('Invalid email format')
        // }
        // else {
        //     setEmailError('')
        // }
        // //mblCode
        // if (mblCode.length == 0) {
        //     setMblCodeError("Code is required")
        // }
        // else {
        //     setMblCodeError('')
        // }
        // //Mbl number
        // if (mblNumber.length == 0) {
        //     // console.log("mbl................", mblNumber.length);
        //     setMblNumberError('Mobile number is required')
        // }
        // else {
        //     setMblNumberError('')
        // }
        //Gender
        if (checked.length == 0) {
            setGenderError('Please select your gender')
            errorCount++;
        }
        // else {
        //     setGenderError('')
        // }
        //Nationality
        if (countryValue.length == 0) {
            setCountryError('Nationality is required')
            errorCount++;
        }
        // else {
        //     setCountryError('')
        // }
        //State
        // if (stateValue.length == 0) {
        //     setStateError('State is required')
        //     errorCount++;
        // }
        // else {
        //     setStateError('')
        // }
        //Country of residence
        if (countryResidenceValue.length == 0) {
            setCountryResidenceError('Country of residence is required')
            errorCount++;
        }
        // else {
        //     setCountryResidenceError('')
        // }
        //Date of birth
        if (date.length == 0) {
            setDateError('Date of birth is required')
            errorCount++;
        }
        // else {
        //     setDateError('')
        // }
        if (errorCount === 0) {
            setDateError(""), setCountryResidenceError(""), setStateError(""), setCountryError(""), setGenderError(""), setLastNameError(""), setFirstNameError("");
            return true;
        }
        else {
            return false;
        }
    }

    const uploadpersonalDetails = async () => {
        const validateLetter = validateFunction();
        console.log("Retrun.............", validateLetter);
        if (validateLetter) {
            const payload = {
                "first_name": firstName,
                "last_name": lastName,
                "date_of_birth": moment(date).format('YYYY-MM-DD'),
                "gender": checked,
                "country_phone_code": "string",
                "profile_pic": "1675750141561-38402481.jpeg",
                "country_of_residence": countryResidenceValue,
                "nationality": "Indian",
                //   "state":"TamilNadu"
            }
            console.log("payload for update.............", payload)
            let callingAutobot = await personalDetailsUpdate(payload).then((originalPromiseResult) => {
                console.log("Personal Details Country....", originalPromiseResult);
                if (originalPromiseResult === undefined) {
                    ToastAndroid.showWithGravity(
                        'Something went wrong!, Please try again later',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER,
                    );
                }
                else {
                    ToastAndroid.showWithGravity(
                        'Updated SuccessFully!',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER,
                    );
                    dispatch(userDetailsHandler());
                }
            })
        }
        else {

        }

    }

    const selectedDateFunction = (event, selectedDate) => {
        const currentDate = selectedDate ? selectedDate : date;
        // console.log("rgerfefefge", currentDate)
        setDate(currentDate);
        setDateShow(false);
    }
    const themeForList = {
        color: COLORS.black,
        fontFamily: "Lexend-Regular",
    }

=======

    const [dateShow, setDateShow] = useState(false);
    // const [radioButtons, setRadioButtons] = useState([
    //     {
    //         id: '1', // acts as primary key, should be unique and non-empty string
    //         label: 'Option 1',
    //         value: 'option1'
    //     },
    //     {
    //         id: '2',
    //         label: 'Option 2',
    //         value: 'option2'
    //     }
    // ]);

    // function onPressRadioButton(radioButtonsArray) {
    //     setRadioButtons(radioButtonsArray);
    // }
    const getCountryList = async () => {
        let listCountries = await countryList().then((originalPromiseResult) => {
            console.log("Personal Details Country....", originalPromiseResult);
            // const value = originalPromiseResult
            setCountryListValue(originalPromiseResult);
            console.log("listCoun", originalPromiseResult[56].name)
        })
    }
    const getStateList = async (data: any) => {
        let listCountries = await stateList(data).then((originalPromiseResult) => {
            console.log("Personal Details State....", originalPromiseResult);
            // const value = originalPromiseResult
            setStateListValue(originalPromiseResult);
            console.log("listCoun", originalPromiseResult)
        })
    }

    useEffect(() => {
        getCountryList();
    }, [])
    useEffect(() => {
        if (countryValue) {
            getStateList(countryValue);
        }
        else { Alert.alert("Select any nationality") }

    }, [countryValue])
    useEffect(() => {
        if (countryValue) {
            if (stateValue) {
                getStateList(countryValue);
            } else { Alert.alert("Select any state") }
        }
        else { Alert.alert("Select any country") }

    }, [cityValue])

    const validateFunction = () => {
        console.log("values", firstName, lastName, email, mblNumber, mblCode, checked, countryValue, stateValue);
        //firstName
        if (firstName.length <= 3 || firstName === undefined) {
            setFirstNameError('FirstName is mandatory')
        }
        else {
            setFirstNameError('')
        }
        //lastName
        if (lastName.length <= 3 || lastName === undefined) {
            setLastNameError('LastName is mandatory')
        }
        else {
            setLastNameError('')
        }
        //email
        if (email.length === 0 || email === undefined) {
            setEmailError('Email id is mandatory')
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
            setEmailError('Invalid email format')
        }
        else {
            setEmailError('')
        }
        //mblCode
        if (mblCode.length == 0) {
            setMblCodeError("Code is required")
        }
        else {
            setMblCodeError('')
        }
        //Mbl number
        if (mblNumber.length == 0) {
            // console.log("mbl................", mblNumber.length);
            setMblNumberError('Mobile number is required')
        }
        else {
            setMblNumberError('')
        }
        //Gender
        if (checked.length == 0) {
            setGenderError('Please select your gender')
        }
        else {
            setGenderError('')
        }
        //Nationality
        if (countryValue.length == 0) {
            setCountryError('Nationality is required')
        }
        else {
            setCountryError('')
        }
        //State
        if (stateValue.length == 0) {
            setStateError('State is required')
        }
        else {
            setStateError('')
        }
    }

>>>>>>> Stashed changes
    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor={"#0a0127"}
            />
            <View style={styles.subdivOne}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(18), flexDirection: "column" }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
<<<<<<< Updated upstream
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(20), width: "75%", textAlign: "center" }}>Personal Details</Text>
=======
                <Text style={{ fontFamily: "Lexend-Regular", color: "white", fontSize: RFValue(20), width: "75%", textAlign: "center" }}>Personal Details</Text>
>>>>>>> Stashed changes
            </View>
            <ScrollView style={{ backgroundColor: COLORS.pagebackground, height: "90%" }}>
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingTop: "3%" }}>First Name</Text>
                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor={"black"}
                        onChangeText={(text: String) => setFirstName(text)}
                        value={firstName}
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                    />
                </View>
<<<<<<< Updated upstream
                <View style={{ paddingLeft: 19, height:"2%" }}>
=======
                <View style={{ paddingLeft: 19, height: "1.8%" }}>
>>>>>>> Stashed changes
                    {firstNameError ? <Text style={styles.errorText}>{firstNameError}</Text> : null}
                </View>
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12) }}>Last Name</Text>
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor={"black"}
                        onChangeText={(text: String) => setLastName(text)}
                        value={lastName}
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                    />
                </View>
<<<<<<< Updated upstream
                <View style={{ paddingLeft: 19, height:"2%" }}>
                    {lastNameError ? <Text style={styles.errorText}>{lastNameError}</Text> : null}
                </View>

                {/* <View>
=======
                <View style={{ paddingLeft: 19, height: "1.8%" }}>
                    {lastNameError ? <Text style={styles.errorText}>{lastNameError}</Text> : null}
                </View>
                <View>
>>>>>>> Stashed changes
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12) }}>Email</Text>
                    <TextInput
                        placeholder="Email id"
                        placeholderTextColor={"black"}
                        onChangeText={(text: String) => setEmail(text)}
                        value={email}
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                    />
                </View>
<<<<<<< Updated upstream
                <View style={{ paddingLeft: 19, height:"2%" }}>
=======
                <View style={{ paddingLeft: 19, height: "1.8%" }}>
>>>>>>> Stashed changes
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column", width: "34%", paddingLeft: "5%" }}>
                        <Text style={{ ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12) }}>Country Code</Text>
                        <TextInput
<<<<<<< Updated upstream
                            placeholder="CC"
=======
                            placeholder="+91"
>>>>>>> Stashed changes
                            keyboardType={"phone-pad"}
                            placeholderTextColor={"black"}
                            onChangeText={(text: String) => { setMblCode(text) }}
                            value={mblCode}
                            style={{ backgroundColor: COLORS.white, right: "2.5%", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                        />
                    </View>
<<<<<<< Updated upstream
=======
                    {/* <View style={{ paddingLeft: 19, height: "2%",flexDirection:"column" }}>
                        {firstNameError ? <Text style={styles.errorText}>{firstNameError}</Text> : null}
                    </View> */}
>>>>>>> Stashed changes
                    <View style={{ flexDirection: "column", width: "65%" }}>
                        <Text style={{ ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingLeft: "7%" }}>Mobile</Text>
                        <TextInput
                            placeholder="Mobile Number"
                            keyboardType={"phone-pad"}
                            maxLength={10}
                            placeholderTextColor={"black"}
                            onChangeText={(text: String) => setMblNumber(text)}
                            value={mblNumber}
                            style={{ width: "89%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                        />
                    </View>
                    {/* <View style={{ paddingLeft: 19, height: "2%" }}>
                        {firstNameError ? <Text style={styles.errorText}>{firstNameError}</Text> : null}
                    </View> */}
                </View>
                <View style={{ flexDirection: "row", height: "2%" }}>
                    <View style={{ flexDirection: "column", width: "34%", marginStart: "5%" }}>
                        {mblCodeError ? <Text style={styles.errorText}>{mblCodeError}</Text> : null}
                    </View>
                    <View style={{ flexDirection: "column", width: "65%" }}>
                        {mblNumberError ? <Text style={styles.errorText}>{mblNumberError}</Text> : null}
                    </View>
<<<<<<< Updated upstream
                </View> */}
=======
                </View>
>>>>>>> Stashed changes
                <View style={{ flexDirection: "row", alignItems: "center", width: "91%", padding: "2%", marginTop: "1%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular }}>
                    <RadioButton
                        value="M"
                        status={checked === 'M' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('M')}
                        uncheckedColor={COLORS.lightGray}
                        color={COLORS.element}
                    />
                    <Text style={{ ...FONTS.lexendregular, color: COLORS.black, fontSize: moderateScale(16), paddingRight: "8%" }}>Male</Text>
                    <RadioButton
                        value="F"
                        status={checked === 'F' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('F')}
                        uncheckedColor={COLORS.lightGray}
                        color={COLORS.element}
                    />
                    <Text style={{ ...FONTS.lexendregular, color: COLORS.black, fontSize: moderateScale(16) }}>Female</Text>
                </View>
<<<<<<< Updated upstream
                <View style={{ paddingLeft: 19, height:"2%" }}>
                    {Gender ? <Text style={styles.errorText}>{Gender}</Text> : null}
=======
                <View style={{ paddingLeft: 19, height: "1.8%" }}>
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
>>>>>>> Stashed changes
                </View>
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12) }}>Nationality</Text>
                    <Dropdown
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, padding: "2%", marginTop: "1%", paddingHorizontal: 14 }}
<<<<<<< Updated upstream
                        placeholderStyle={styles.dropText}
                        selectedTextStyle={styles.dropText}
                        data={countryListValue}
                        maxHeight={350}
                        itemTextStyle={themeForList}
                        labelField="name"
                        valueField="isoCode"
                        onChange={item => { setCountryValue(item.isoCode), console.log("dbdgbdfbdg..........", item.isoCode) }}
                        placeholder={(userData.nationality) ? userData.nationality : "Select Nationality"}
                    />
                </View>
                <View style={{ paddingLeft: 19, height:"2%" }}>
                    {countryError ? <Text style={styles.errorText}>{countryError}</Text> : null}
                </View>
                {/* <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12) }}>State</Text>
                    <Dropdown
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, padding: "2%", marginTop: "1%", paddingHorizontal: 14 }}
                        placeholderStyle={styles.dropText}
                        selectedTextStyle={styles.dropText}
                        // inputSearchStyle={styles.inputSearchStyle}
                        // iconStyle={styles.iconStyle}
                        data={stateListValue}
                        // search
                        maxHeight={350}
                        itemTextStyle={themeForList}
                        labelField="name"
                        valueField="name"
                        onChange={item => { setStateValue(item.name), console.log("dbdgbdfbdg..........", item.isoCode) }}
                        placeholder={(stateValue) ? stateValue : "Select State"}
                    // searchPlaceholder="Search..."
                    // value={value}
                    // onFocus={() => setIsFocus(true)}
                    // onBlur={() => setIsFocus(false)}
                    // onChange={item => {
                    //     setValue(item.value);
                    //     setIsFocus(false);
                    // }}
                    // renderLeftIcon={() => (
                    //     <AntDesign
                    //         style={styles.icon}
                    //         color={isFocus ? 'blue' : 'black'}
                    //         name="Safety"
                    //         size={20}
                    //     />
                    // )}
                    />
                </View>
                <View style={{ paddingLeft: 19, height:"2%" }}>
                    {stateError ? <Text style={styles.errorText}>{stateError}</Text> : null}
                </View> */}
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12) }}>Country of residence</Text>
=======
                        placeholderStyle={styles.dropText}
                        selectedTextStyle={styles.dropText}
                        data={countryListValue}
                        maxHeight={300}
                        labelField="name"
                        valueField="isoCode"
                        onChange={item => { setCountryValue(item.isoCode), console.log("dbdgbdfbdg..........", item.isoCode) }}
                        placeholder={"India"}
                    />
                </View>
                <View style={{ paddingLeft: 19, height: "1.8%" }}>
                    {countryError ? <Text style={styles.errorText}>{countryError}</Text> : null}
                </View>
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12) }}>State</Text>
>>>>>>> Stashed changes
                    <Dropdown
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, padding: "2%", marginTop: "1%", paddingHorizontal: 14 }}
                        placeholderStyle={styles.dropText}
                        selectedTextStyle={styles.dropText}
<<<<<<< Updated upstream
                        data={countryListValue}
                        maxHeight={350}
                        itemTextStyle={themeForList}
                        labelField="name"
                        valueField="name"
                        onChange={item => { setCountryResidenceValue(item.name), console.log("dbdgbdfbdg..........", item.isoCode) }}
                        placeholder={(props.route) ? countryResidenceValue : "Select country of residence"}
                    />
                </View>
                <View style={{ paddingLeft: 19, height:"2%" }}>
                    {countryResidenceError ? <Text style={styles.errorText}>{countryResidenceError}</Text> : null}
=======
                        // inputSearchStyle={styles.inputSearchStyle}
                        // iconStyle={styles.iconStyle}
                        data={stateListValue}
                        // search
                        maxHeight={300}
                        labelField="name"
                        valueField="countryCode"
                        onChange={item => { setStateValue(item.isoCode), console.log("dbdgbdfbdg..........", item.isoCode) }}
                        placeholder={"State"}
                    // searchPlaceholder="Search..."
                    // value={value}
                    // onFocus={() => setIsFocus(true)}
                    // onBlur={() => setIsFocus(false)}
                    // onChange={item => {
                    //     setValue(item.value);
                    //     setIsFocus(false);
                    // }}
                    // renderLeftIcon={() => (
                    //     <AntDesign
                    //         style={styles.icon}
                    //         color={isFocus ? 'blue' : 'black'}
                    //         name="Safety"
                    //         size={20}
                    //     />
                    // )}
                    />
                </View>
                <View style={{ paddingLeft: 19, height: "1.8%" }}>
                    {stateError ? <Text style={styles.errorText}>{stateError}</Text> : null}
                </View>
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12) }}>Country of residence</Text>
                    <Dropdown
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, padding: "2%", marginTop: "1%", paddingHorizontal: 14 }}
                        placeholderStyle={styles.dropText}
                        selectedTextStyle={styles.dropText}
                        data={countryListValue}
                        maxHeight={300}
                        labelField="name"
                        valueField="isoCode"
                        onChange={item => { setCountryValue(item.isoCode), console.log("dbdgbdfbdg..........", item.isoCode) }}
                        placeholder={"India"}
                    // style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, padding: "2%", marginTop: "1%", paddingHorizontal: 14 }}
                    // placeholderStyle={styles.dropText}
                    // selectedTextStyle={styles.dropText}
                    // // inputSearchStyle={styles.inputSearchStyle}
                    // // iconStyle={styles.iconStyle}
                    // // data={Nation}
                    // // search
                    // maxHeight={300}
                    // labelField="label"
                    // valueField="value"
                    // placeholder={"India"}
                    // searchPlaceholder="Search..."
                    // value={value}
                    // onFocus={() => setIsFocus(true)}
                    // onBlur={() => setIsFocus(false)}
                    // onChange={item => {
                    //     setValue(item.value);
                    //     setIsFocus(false);
                    // }}
                    // renderLeftIcon={() => (
                    //     <AntDesign
                    //         style={styles.icon}
                    //         color={isFocus ? 'blue' : 'black'}
                    //         name="Safety"
                    //         size={20}
                    //     />
                    // )}
                    />
>>>>>>> Stashed changes
                </View>
                <View style={{ paddingLeft: 19, height: "1.8%" }}>
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                </View>
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12) }}>Date of birth</Text>
<<<<<<< Updated upstream
                    <TouchableOpacity style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", justifyContent: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%", height: 50 }}
                        onPress={() => setDateShow(true)}
                    >
                        <Text style={styles.dropText}>{(date) ? moment(date).format('YYYY-MM-DD') : "Date of birth"}</Text>
                        {/* {console.log("Date/...........",new Date(),"ddfdfd..........",userDate)} */}
                    </TouchableOpacity>
                    {dateShow ?
                        <DateTimePicker
                            value={new Date(date)}
                            mode="date"
                            display="default"
                            onChange={selectedDateFunction}
                            // minimumDate={new Date()}
                            maximumDate={new Date()}
                        />
                        : null}
                </View>
                <View style={{ paddingLeft: 19, height:"2%" }}>
                    {dateError ? <Text style={styles.errorText}>{dateError}</Text> : null}
=======
                    <TextInput
                        placeholder="Mobile Number"
                        keyboardType={"phone-pad"}
                        maxLength={10}
                        placeholderTextColor={"black"}
                        // onFocus={() => setDateShow(true)}
                        onChangeText={(text: String) => setMblNumber(text)}
                        // value={selectedDate ? moment(selectedDate.toString()).format('DD-MM-YYYY') == 'Invalid date' ? '' : moment(selectedDate.toString()).format('DD-MM-YYYY') : ''}
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                    />
                    {dateShow ?
                        <DateTimePicker
                            value={new Date()}
                            mode="date"
                            display="default"
                        // onChange={this.setDate}
                        //   minimumDate={minDate}
                        //   maximumDate={maxDate}
                        />
                        : null}
                </View>
                <View style={{ paddingLeft: 19, height: "1.8%" }}>
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
>>>>>>> Stashed changes
                </View>
                {/* <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingTop: "3%" }}>Date of birth</Text>
                    <Dropdown
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, padding: "2%", marginTop: "1%", paddingHorizontal: 14 }}
                        placeholderStyle={styles.dropText}
                        selectedTextStyle={styles.dropText}
                        // inputSearchStyle={styles.inputSearchStyle}
                        // iconStyle={styles.iconStyle}
                        // data={Nation}
                        // search
                        maxHeight={200}
                        labelField="label"
                        valueField="value"
                        placeholder={"MM/DD/YYYY"}
                    // searchPlaceholder="Search..."
                    // value={value}
                    // onFocus={() => setIsFocus(true)}
                    // onBlur={() => setIsFocus(false)}
                    // onChange={item => {
                    //     setValue(item.value);
                    //     setIsFocus(false);
                    // }}
                    // renderLeftIcon={() => (
                    //     <AntDesign
                    //         style={styles.icon}
                    //         color={isFocus ? 'blue' : 'black'}
                    //         name="Safety"
                    //         size={20}
                    //     />
                    // )}
                    />
                </View> */}
                <TouchableOpacity style={{ borderWidth: 1, alignSelf: "center", borderColor: COLORS.gray, marginVertical: verticalScale(30), width: "60%", borderRadius: 10 }}
<<<<<<< Updated upstream
                    onPress={() => uploadpersonalDetails()}
=======
                    onPress={() => validateFunction()}
>>>>>>> Stashed changes
                >
                    <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(18), textAlign: "center", color: COLORS.black, paddingVertical: "6%" }}>Save</Text>
                </TouchableOpacity>
                <View style={{ paddingBottom: "30%" }} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    subdivOne: {
        width: horizontalScale(375),
        height: verticalScale(80),
        backgroundColor: "#0a0127",
        alignItems: "center",
        // justifyContent: 'center',
        flexDirection: "row"
    },
    touchButton: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: "center"
    },
    fontSizeStyle: {
        ...FONTS.lexendregular,
        color: COLORS.black,
        fontSize: RFValue(14),
        width: "82%",
        left: "30%"
    },
    viewBox: {
        width: "89%",
        backgroundColor: COLORS.white,
        alignSelf: "center",
        borderRadius: 10,
        padding: 5
    },
    fontHeadStyle: {
        ...FONTS.lexendsemibold,
        color: COLORS.black,
        fontSize: RFValue(18),
        width: "82%",
        left: "6%",
        marginTop: "3%"
    },
    divider: {
        borderTopColor: COLORS.lightGray,
        width: "118%",
        right: "10%",
        borderTopWidth: 2
    },
    dropText: {
        ...FONTS.lexendregular,
        color: COLORS.black,
        fontSize: moderateScale(16)
    },
    errorText: {
        ...FONTS.lexendregular,
        color: COLORS.element,
<<<<<<< Updated upstream
        fontSize: moderateScale(10)
=======
        fontSize: moderateScale(12)
>>>>>>> Stashed changes
    }
})

export default PersonalDetails;