import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Keyboard,
    Image, TextInput,
    TouchableOpacity,
    Pressable,
    Alert,
} from 'react-native';
import Toast from 'react-native-simple-toast';

import { horizontalScale, moderateScale, verticalScale } from "../../constants/metrices";
import { shoppingCart } from "../../constants/icons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from 'react-native-element-dropdown';
import { FONTS, COLORS } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import image from "../../constants/image";
import AntIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import { RadioButton } from "react-native-paper";
import icons from "../../constants/icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CheckBox from "@react-native-community/checkbox";
import PaymentGate from "./payPage";
import useForm from "./address_validation/useForm";
import validate from "./address_validation/validate";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { addressEditHandler } from "../../store/reducers/addressedit";
import { countryList } from "../../services/countryList";
import { stateList } from "../../services/stateList";
import { cityList } from "../../services/cityList";
import { AddAddressHandle } from "../../services/addaddress";
import { addressListHandler } from "../../store/reducers/addresslist";
import { EditAddressHandle } from "../../services/editAddress";


const EditAddress = ({ route }) => {
    const typeUser = route.params.type;
    const edit = route.params.data;
    const [isSelected, setSelection] = useState(false);
    const CheckBoxes = () => {

        return (
            <View style={{ flexDirection: "row", left: horizontalScale(17) }}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkBox}
                    tintColors={{ true: "red" }}
                />
            </View>
        )
    }
    //const userData: any = useSelector<any>(state => state.userDetailsHandle.data.data);
    const dispatch = useDispatch();

    //const { handleChange, handleSubmit, formErrors, data, formValues } = useForm(validate);
    const [Name, setName] = useState<any>("");
    const [error, setError] = useState("");
    const [city, setCity] = useState<any>("");
    const [errorCity, setErrorCity] = useState(null);
    const [stateses, setStateses] = useState<any>("");
    const [errorStateses, setErrorStateses] = useState(null);

    const [errorName, setErrorName] = useState('');
    const [phone, setPhone] = useState<any>("");
    const [errorPhone, setErrorPhone] = useState('');
    const [pincode, setPincode] = useState<any>("");
    const [errorPin, setErrorPin] = useState('');
    const [address, setAddress] = useState<any>("");
    const [errorAddress, setErrorAddress] = useState('');
    const [locality, setLocality] = useState<any>("");
    const [errorLocality, setErrorLocality] = useState('');
    const [addressType, setAddressType] = useState();

    const [stateIso, setStateIso] = useState(null);
    const [country, setCountry] = useState<any>("");
    const [cityError, setCityError] = useState('');
    const [countryListValue, setCountryListValue] = useState([])
    const [countryValue, setCountryValue] = useState<any>({
        "currency": "INR", "flag": "????", "isoCode": "IN", "name": "India", "phonecode": "91"
    })
    const [stateListValue, setStateListValue] = useState([])
    const [stateValue, setStateValue] = useState<any>(null)
    const [cityListValue, setCityListValue] = useState([])
    const [cityValue, setCityValue] = useState<any>(null)
    const [countryError, setCountryError] = useState("")
    const [stateError, setStateError] = useState("")
    const [cityData, setCityData] = useState();
    const [stateData, setStateData] = useState();
    const [countrycode, setCountryCode] = useState("")
    const [countryData, setCountryData] = useState();
    const [optionHo, setOptionHo] = useState(false)
    const [optionWo, setOptionWo] = useState(false)
    const [addressError, setAddressError] = useState();
    const navigation = useNavigation();

    const addresslist = useSelector((state) => state.AddressHandle.data);

    const getaddressList = async () => {
        let eacall = await EditAddressHandle(edit).then((address) => {
            setName(address.name)
            setPhone(address.phone)
            setPincode(address.pincode)
            setAddress(address.address)
            setLocality(address.locality_town)
            setCity(address.city.name)
            setCityData(address.city)
            setStateData(address.state)
            setStateses(address.state.name)
            setCountry(address.country.name)
            setSelection(address.is_default_address)
            setCountryValue(address.country)
            setStateValue(address.state)
            setAddressType(address.address_type === "Home" ? 0 : 1)
            console.log(address, "address to edit in this page ")

        })
    }
    useEffect(() => {
        if (addresslist.length === 2) {
            setOptionHo(true)
            setOptionWo(true)
        }
        if (address) {
            if (address.address_type === "Home") {
                setOptionHo(true)

            }
            if (address.address_type === "Work") {
                setOptionWo(true)
            }
        }
        getaddressList()
    }, [])

    const validateFunction = () => {
        //firstName
        let errorCount = 0;
        if (Name.length < 3) {
            setErrorName('Please enter maximum 15 characters for Name (Minimum can be 2) as someone has name like Jo (alphabets only)')
            errorCount++;
        }
        if (Name.length < 1) {
            setErrorName('Please enter Name')
            errorCount++;
        }
        if (address.length <= 1) {
            setErrorAddress('Please enter Address')
            errorCount++;
        }

        if (address.length >= 60) {
            setErrorAddress('Please enter maximum 60 characters for Address')
            errorCount++;
        }
        if (pincode.length < 6) {
            setErrorPin('Please enter Pincode')
            errorCount++;
        }
        if (locality.length > 20) {
            setErrorLocality("Please enter maximum 20 characters for Locality/Town")
            errorCount++;
        }
        if (locality.length <= 2) {
            setErrorLocality('Please enter Locality')
            errorCount++;
        }

        if (phone.length < 10) {
            setErrorPhone('Please enter at least 10 digits for Mobile Number')
            errorCount++;
        }
        if (phone.length < 1) {
            setErrorPhone("Please enter Mobile No")
            errorCount++;
        }
        if (addressType === undefined) {
            setAddressError("Select address type")
            errorCount++;
        }
        if (errorCount === 0) {
            setErrorAddress(""), setErrorName(""), setErrorLocality(""), setErrorPhone(""), setErrorPin("");
            return true;
        }
        if (errorCount > 0) {
            if (Name.length > 3) {
                setErrorName('');
            }
            if (address.length > 1) {
                setErrorAddress('');
            }
            if (pincode.length > 5) {
                setErrorPin('');
            }
            if (locality.length > 2) {
                setErrorLocality('');
            }
            if (phone.length > 9) {
                setErrorPhone('');
            }
            if (addressType != undefined) {
                setAddressError('');
            }
        }
        else {
            return false;
        }

    }
    const handleSubmit = async () => {
        const validateLetter = validateFunction();
        console.log("Retrun.............", validateLetter);
        if (validateLetter) {
            const payload = {
                "name": Name,
                "phone": phone,
                "pincode": pincode,
                "address": address,
                "locality_town": locality,
                "city": {
                    "name": cityData.name,
                    "stateCode": cityData.stateCode,
                    "countryCode": cityData.countryCode
                },
                "state": {
                    "name": stateData.name,
                    "isoCode": stateData.isoCode,
                    "countryCode": stateData.countryCode
                },
                "country": {
                    "currency": "INR", "flag": "????", "isoCode": "IN", "name": "India", "phonecode": "91"
                },
                "address_type": addressType == 0 ? "Home" : "Work",
                "is_default_address": isSelected
            }
            const edaddresses = {
                "id": edit,
                "payload": payload
            }
            dispatch(addressEditHandler(edaddresses))
                .then(unwrapResult)
                .then((originalPromiseResult) => {
                    console.log("success samuvel you did itdone", originalPromiseResult);
                    if (originalPromiseResult.message === "saved successfully") {
                        Toast.show('Successfully added', Toast.LONG, { backgroundColor: 'red' });

                        dispatch(addressListHandler());
                        navigation.navigate("Address", { type: typeUser });
                    }
                    else {
                        Toast.show('Something went wrong!', Toast.LONG, { backgroundColor: 'red' });
                    }
                })
        }
    }

    //useEffect(() => {

    //getCountryList();
    // const india = [{ "currency": "INR", "flag": "????", "isoCode": "IN", "name": "India", "phonecode": "91" }];
    // setCountryListValue(india)
    //}, [stateValue])
    // const getCountryList = async () => {
    //     let listCountries = await countryList().then((originalPromiseResult) => {
    //         //console.log("Personal Details Country....", originalPromiseResult);
    //         // const value = originalPromiseResult
    //         //setCountryListValue(originalPromiseResult);
    //         //console.log("listCoun", originalPromiseResult[56].name)
    //     })
    // }
    const getStateList = async () => {
        const data = "IN";
        console.log("get satet value ..................", data);
        let listState = await stateList(data).then((originalPromiseResult) => {
            console.log(stateValue, "Personal Details State222222222....", originalPromiseResult);
            setStateListValue(originalPromiseResult);
        })
    }
    const getCityList = async (data: any) => {
        let listCity = await cityList(data).then((originalPromiseResult) => {
            //console.log("Personal Details City....", originalPromiseResult);
            setCityListValue(originalPromiseResult);
        })
    }
    // useEffect(() => {
    //     if (countryValue) {
    //         getStateList(countryValue);
    //     }
    //     console.log("im inside the country value page ",stateListValue);
    // }, [countryValue])

    const themeForList = {
        color: COLORS.black,
        fontFamily: "Lexend-Regular",
    }
    useEffect(() => {
        getStateList()
        if (stateValue) {
            console.log("im inside the State ", stateValue);
            console.log("samuuuuuuuuuuuuu", stateValue.countryCode, "county data", stateValue.isoCode)
            const data = { countryValue, stateIso }
            getCityList(data);
            console.log("city listing in useeffect", data);

        }
        // else { Alert.alert("Select any state") }
    }, [stateData])

    const handleBox = () => {
        if (errorName) {
            setName(""), setErrorName("");
        }
        else if (errorPhone) {
            setPhone(""), setErrorPhone("");
        }
        else if (errorPin) {
            setPincode(""), setErrorPin("");
        }
        else if (errorAddress) {
            setAddress(""), setErrorAddress("");
        }
        else if (errorLocality) {
            setLocality(""), setErrorLocality("");
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#F1F1F", height: "100%" }}>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={styles.subdivOne}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(14) }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(20), width: horizontalScale(290), textAlign: "center" }}>Edit Address</Text>
            </View>
            <ScrollView style={{ height: "100%" }} contentContainerStyle={{ paddingBottom: "5%" }}>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginLeft: "5%", marginTop: "5%" }}>CONTACT DETAILS</Text>
                <View style={{ marginHorizontal: "3%", marginVertical: "2%" }}>
                    <Pressable onPressIn={() => handleBox()}>
                        <TextInput
                            placeholder="Name*"
                            value={Name}
                            maxLength={15}
                            placeholderTextColor={COLORS.gray}
                            onChangeText={(text: String) => setName(text)}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13), color: "black" }}
                        />
                    </Pressable>
                </View>
                {errorName ?
                    <View style={{ height: "3%" }}>
                        {errorName ?
                            <Text style={styles.ErrorText}>{errorName}</Text> : null}
                    </View> :
                    null
                }
                <View style={{ marginHorizontal: "3%", marginVertical: "1%" }}>
                    <Pressable onPressIn={() => handleBox()}>
                        <TextInput
                            keyboardType={"phone-pad"}
                            placeholder="MobileNo*"
                            value={phone}
                            maxLength={10}
                            onChangeText={(text: String) => setPhone(text)}
                            placeholderTextColor={COLORS.gray}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13), color: "black" }}
                        />
                    </Pressable>
                </View>
                {errorPhone ?
                    <View style={{ height: "3%" }}>
                        {errorPhone ?
                            <Text style={styles.ErrorText}>{errorPhone}</Text> : null}
                    </View> : null}
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginLeft: "5%", marginTop: "3%" }}>ADDRESS</Text>
                <View style={{ marginHorizontal: "3%", marginVertical: "2%" }}>
                    <Pressable onPressIn={() => handleBox()}>
                        <TextInput
                            keyboardType={"phone-pad"}
                            placeholder="Pin Code*"
                            value={pincode}
                            maxLength={6}
                            placeholderTextColor={COLORS.gray}
                            onChangeText={(text: String) => setPincode(text)}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13), color: "black" }}
                        />
                    </Pressable>
                </View>
                {errorPin ?
                    <View style={{ height: "3%" }}>
                        <Text style={styles.ErrorText}>{errorPin}</Text>
                    </View> : null}
                <View style={{ marginHorizontal: "3%", marginVertical: "1%" }}>
                    <Pressable onPressIn={() => handleBox()}>
                        <TextInput
                            keyboardType={"default"}
                            multiline={true}
                            numberOfLines={4}
                            placeholder="Address (House No, Building, street, Area)*"
                            value={address}
                            placeholderTextColor={COLORS.gray}
                            onChangeText={(text: String) => setAddress(text)}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(14), color: "black" }}
                        />
                    </Pressable>
                </View>
                {errorAddress ?
                    <View style={{ height: "3%" }}>
                        {errorAddress ?
                            <Text style={styles.ErrorText}>{errorAddress}</Text> : null}
                    </View>
                    : null}
                <View style={{ marginHorizontal: "3%", marginVertical: "2%" }}>
                    <Pressable onPressIn={() => handleBox()}>
                        <TextInput
                            keyboardType={"default"}
                            placeholder="Locality / Town*"
                            value={locality}
                            maxLength={40}
                            onChangeText={(text: String) => setLocality(text)}
                            placeholderTextColor={COLORS.gray}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(14), color: "black" }}
                        />
                    </Pressable>
                </View>
                {errorLocality ?
                    <View style={{ height: "3%" }}>
                        {errorLocality ?
                            <Text style={styles.ErrorText}>{errorLocality}</Text> : null}
                    </View> : null}
                <View style={{ flexDirection: "row", marginHorizontal: "3%", marginVertical: "1%", width: "95%", alignItems: 'center' }}>
                    <View style={{ flexDirection: "column", width: "46%", marginLeft: "2.5%" }}>
                        <View>
                            <Dropdown
                                style={{ width: "100%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, padding: "2%", marginTop: "1%", paddingHorizontal: 14 }}
                                placeholderStyle={styles.dropText}
                                selectedTextStyle={styles.dropText}
                                disable={true}
                                data={countryListValue}
                                maxHeight={350}
                                itemTextStyle={themeForList}
                                placeholder={(country) ? country : "Country"}
                                labelField="name"
                                valueField="isoCode"
                                onChange={item => { setCountryValue(item.isoCode), setCountryData(item) }}
                            />
                        </View>
                        {countryError ?
                            <View style={{ height: "3%" }}>
                                {countryError ?
                                    <Text style={styles.ErrorText}>{countryError}</Text> : null}
                            </View> : null}
                    </View>
                    <View style={{ flexDirection: "column", width: "49%" }}>
                        <View style={{ marginHorizontal: "3%", marginBottom: "1%" }}>
                            <Dropdown
                                style={{ width: "100%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, padding: "2%", marginTop: "1%", paddingHorizontal: 14 }}
                                placeholderStyle={styles.dropText}
                                selectedTextStyle={styles.dropText}
                                data={stateListValue}
                                maxHeight={350}
                                itemTextStyle={themeForList}
                                labelField="name"
                                valueField="name"
                                onChange={item => { setStateses(item.name), setStateIso(item.isoCode), setStateData(item) }}
                                placeholder={(stateses) ? stateses : "State*"}
                            />
                        </View>
                        {stateError ?
                            <View style={{ height: "3%" }}>
                                {stateError ?
                                    <Text style={styles.ErrorText}>{stateError}</Text> : null}
                            </View> : null}
                    </View>
                </View>
                <View style={{ marginHorizontal: "1%", marginVertical: "1%" }}>
                    <Dropdown
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, padding: "2%", marginTop: "1%", paddingHorizontal: 14 }}
                        placeholderStyle={styles.dropText}
                        selectedTextStyle={styles.dropText}
                        data={cityListValue}
                        maxHeight={350}
                        itemTextStyle={themeForList}
                        placeholder={(city) ? city : "Select City"}
                        labelField="name"
                        valueField="name"
                        onChange={item => { setCityValue(item.name), setCityData(item) }}
                    />
                </View>
                {cityError ?
                    <View >
                        {cityError ?
                            <Text style={styles.ErrorText}>{cityError}</Text> : null}
                    </View>
                    : null}
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginLeft: "5%", marginTop: "3%" }}>SAVE ADDRESS AS</Text>
                <View style={{ marginVertical: "2%", flexDirection: "row", width: "89%", alignSelf: "center", borderRadius: 10, backgroundColor: COLORS.white }}>

                    <TouchableOpacity disabled={optionHo} style={{ paddingVertical: "5%", marginHorizontal: "5%", }} onPress={() => setAddressType(0)}>
                        <Text style={{ ...styles.switch, backgroundColor: (addressType == 0) ? COLORS.element : "white", color: (addressType == 0) ? COLORS.white : COLORS.gray, borderColor: (addressType == 0) ? COLORS.element : COLORS.gray }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={optionWo} style={{ paddingVertical: "5%", }} onPress={() => setAddressType(1)}>
                        <Text style={{ ...styles.switch, backgroundColor: (addressType == 1) ? COLORS.element : "white", color: (addressType == 1) ? COLORS.white : COLORS.gray, borderColor: (addressType == 1) ? COLORS.element : COLORS.gray }}>Work</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: "1%" }}>
                    {addressError ?
                        <Text style={styles.ErrorText}>{addressError}</Text> : null}
                </View>
                <View style={{ marginHorizontal: "2%", marginBottom: "2%", padding: "2%", flexDirection: "row", width: "90%", borderRadius: 10, backgroundColor: COLORS.white, alignSelf: "center" }}>
                    <View style={{ marginLeft: "-4%" }}><CheckBoxes /></View>
                    <Text style={{ color: COLORS.gray, fontSize: RFValue(12), ...FONTS.lexendregular, paddingHorizontal: "5%", alignSelf: "center" }}>Make this my default address</Text>
                </View>
            </ScrollView>
            <View style={{ flexDirection: "row", height: "8%", backgroundColor: COLORS.white, paddingVertical: "1%", paddingHorizontal: "2%" }}>

                <TouchableOpacity style={{ flexDirection: "column", width: "90%", marginHorizontal: "5%", marginVertical: "1%", borderRadius: 5, borderWidth: 1, justifyContent: "center", alignItems: "center" }} onPress={e => { handleSubmit(), Keyboard.dismiss }} disabled={false}>
                    <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular }}>Save Address</Text>
                </TouchableOpacity>

            </View>


        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    subdivOne: {
        width: horizontalScale(375),
        height: verticalScale(80),
        backgroundColor: "#0a0127",
        alignItems: "center",
        // justifyContent: 'center',
        flexDirection: "row",


    },
    switch: {
        color: COLORS.gray,
        textAlign: "center",
        fontSize: RFValue(11),
        ...FONTS.lexendregular,
        borderRadius: 4,
        borderWidth: 1,
        paddingVertical: "1%",
        paddingHorizontal: "4%"
    },
    subdivTwo: {
        height: verticalScale(748),
        alignItems: "center",
        justifyContent: "center",
        // borderWidth:2
    },
    checkBox: {
        alignSelf: "center",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "black",
        color: COLORS.element
    },
    ErrorText: {
        marginStart: "7%",
        color: "red",
        ...FONTS.lexendregular,
        fontSize: RFValue(10),
        textAlign: "left",

    },
    dropText: {
        ...FONTS.lexendregular,
        color: COLORS.black,
        fontSize: moderateScale(16)
    },
})
export default EditAddress;
