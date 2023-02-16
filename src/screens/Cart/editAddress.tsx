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
    ToastAndroid
} from 'react-native';
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
    const typeUser=route.params.type;
    const edit = route.params.data;

    console.log("data..............",route.params.type);
    
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
    const [addressType, setAddressType] = useState(0);

    const [stateIso, setStateIso] = useState(null);
    const [country, setCountry] = useState<any>("");
    const [cityError, setCityError] = useState('');
    const [countryListValue, setCountryListValue] = useState([])
    const [countryValue, setCountryValue] = useState<any>(null)
    const [stateListValue, setStateListValue] = useState([])
    const [stateValue, setStateValue] = useState<any>(null)
    const [cityListValue, setCityListValue] = useState([])
    const [cityValue, setCityValue] = useState<any>(null)
    const [countryError, setCountryError] = useState("")
    const [stateError, setStateError] = useState("")
    const [cityData, setCityData] = useState();
    const [stateData, setStateData] = useState();
    const [countryData, setCountryData] = useState();

    const navigation = useNavigation();

    const getaddressList = async () => {
        let eacall = await EditAddressHandle(edit).then((address) => {
            setName(address.name)
            setPhone(address.phone)
            setPincode(address.pincode)
            setAddress(address.address)
            setLocality(address.locality_town)
            setCity(address.city.name)
            setStateses(address.state.name)
            setCountry(address.country.name)
            setSelection(address.is_default_address)
            setAddressType(address.address_type==="Home"? 0 : 1)
            console.log(address, "address to edit in this page ")
            //console.log("Personal Details Country....", originalPromiseResult);
            // const value = originalPromiseResult
        })
    }
    const validateFunction = () => {
        console.log(cityValue,"values",stateValue,"samuel", Name, address, phone, locality, pincode,countryValue,stateValue,cityValue);
       
        //firstName
        let errorCount = 0;
        if (Name.length <= 3 || Name === undefined) {
            setErrorName('Name is Required')
            errorCount++;
        }
       
        if (address.length <= 3 || address === undefined) {
            setErrorAddress('address is required')
            errorCount++;
            console.log(errorCount,"serambhdvhidv")
        }
       
        if (pincode.length < 5) {
            setErrorPin('please enter  valid pincode')
            errorCount++;
        }
       
        if (locality.length <=5) {
            setErrorLocality('Please enter Locality')
            errorCount++;
        }
        
        if (phone.length < 10) {
            setErrorPhone('please enter valid Number')
            errorCount++;
        }
        if (countryValue ===null) {
            setCountryError('country is required')
            errorCount++;
        }
        if (cityValue === null) {
            setCityError('City is required')
            errorCount++;
        }
        if (stateValue === null) {
            setStateError('State is required')
        }
        
        if (errorCount === 0) {
            setErrorAddress(""), setErrorName(""), setErrorLocality(""), setErrorPhone(""), setErrorPin("");
            return true;
        }
        if (errorCount > 0){
            if (Name.length > 3 ) {
                setErrorName('');
            }
            if (address.length > 3 ) {
                setErrorAddress('');
            }
            if (pincode.length > 5 ) {
                setErrorPin('');
            }
            if (locality.length > 5 ) {
                setErrorLocality('');
            }
            if (phone.length > 9 ) {
                setErrorPhone('');
            }
            if (countryValue != null ) {
                setCountryError('');
            }
            if (cityValue !=null ) {
                setCityError('');
            }
            if (stateValue !=null ) {
                setStateError('');
            }
        }
        else {
            return false;
        }
        console.log("errorcount ",errorCount)
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
                    "name": countryData.name,
                    "isoCode": countryData.isoCode,
                    "flag": countryData.flag,
                    "phonecode": countryData.phonecode,
                    "currency": countryData.currency
                },
                "address_type": addressType==0?"Home":"Work",
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
                        ToastAndroid.showWithGravity(
                            'Successfully added',
                            ToastAndroid.SHORT,
                            ToastAndroid.CENTER,
                        );
                        dispatch(addressListHandler());
                        navigation.navigate("Address",{type:typeUser});
                    }
                    else {
                        ToastAndroid.showWithGravity(
                            'Something went wrong!',
                            ToastAndroid.SHORT,
                            ToastAndroid.CENTER,
                        );
                    }
                })
                console.log(edaddresses, "Personal Details Country....");
            //     if (calling === "Success") {
            //         ToastAndroid.showWithGravity(
            //             'Successfully added',
            //             ToastAndroid.SHORT,
            //             ToastAndroid.CENTER,
            //         );
            //         dispatch(addressListHandler());
            //         navigation.navigate("Address");
            //     }
            //     else {
            //         ToastAndroid.showWithGravity(
            //             'Something went wrong!',
            //             ToastAndroid.SHORT,
            //             ToastAndroid.CENTER,
            //         );
            //     }
        }
    }
    
    useEffect(() => {
        getaddressList()
        getCountryList();
        const india=[{"currency": "INR", "flag": "????", "isoCode": "IN", "name": "India", "phonecode": "91"}];
    setCountryListValue(india)
    }, [])
    const getCountryList = async () => {
        let listCountries = await countryList().then((originalPromiseResult) => {
            //console.log("Personal Details Country....", originalPromiseResult);
            // const value = originalPromiseResult
            //setCountryListValue(originalPromiseResult);
            console.log("listCoun", originalPromiseResult[56].name)
        })
    }
    const getStateList = async (data: any) => {
        let listCountries = await stateList(data).then((originalPromiseResult) => {
            //console.log("Personal Details State....", originalPromiseResult);
            // const value = originalPromiseResult
            setStateListValue(originalPromiseResult);
            console.log("listCoun", originalPromiseResult)
        })
    }
    const getCityList = async (data: any) => {
        let listCity = await cityList(data).then((originalPromiseResult) => {
            console.log("Personal Details City....", originalPromiseResult);
            // const value = originalPromiseResult
            setCityListValue(originalPromiseResult);
            console.log("listCity", originalPromiseResult)
        })
    }
    useEffect(() => {
        if (countryValue) {
            getStateList(countryValue);
        }
    }, [countryValue])

    const themeForList = {
        color: COLORS.black,
        fontFamily: "Lexend-Regular",
    }
    useEffect(() => {
        if (countryValue) {
            if (stateValue) {
                console.log("samuuuuuuuuuuuuu", countryValue, "county data", stateIso)
                const data = { countryValue, stateIso }
                getCityList(data);
            }
            //  else { Alert.alert("Select any state") }
        }
        // else { Alert.alert("Select any country") }

    }, [stateValue])

    const handleBox = () => {
        if (errorName) {
            setName(""),
                setName(""), setErrorName("");
        }
        else if (errorPhone) {
            setPhone("")
            setPhone(""), setErrorPhone("");
        }
        else if (errorPin) {
            setPincode("")
            setPincode(""), setErrorPin("");
        }
        else if (errorAddress) {
            setAddress("")
            setAddress(""), setErrorAddress("");
        }
        else if (errorLocality) {
            setLocality("")
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
            <ScrollView style={{ height: "80%" }}>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginLeft: "5%", marginTop: "5%" }}>CONTACT DETAILS</Text>
                <View style={{ marginHorizontal: "3%", marginVertical: "2%" }}>
                    <Pressable onPressIn={() => handleBox()}>
                        <TextInput
                            placeholder="Name*"
                            value={Name}
                            maxLength={15}
                            placeholderTextColor={COLORS.gray}
                            onChangeText={(text: String) => setName(text)}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13),color:"black" }}
                        />
                    </Pressable>
                </View>
                <View>
                    {errorName ?
                        <Text style={styles.ErrorText}>{errorName}</Text> : null}
                </View>
                <View style={{ marginHorizontal: "3%" }}>
                    <Pressable onPressIn={() => handleBox()}>
                        <TextInput
                            keyboardType={"phone-pad"}
                            placeholder="MobileNo*"
                            value={phone}
                            maxLength={10}
                            onChangeText={(text: String) => setPhone(text)}
                            placeholderTextColor={COLORS.gray}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13),color:"black" }}
                        />
                    </Pressable>
                </View>
                <View>
                    {errorPhone ?
                        <Text style={styles.ErrorText}>{errorPhone}</Text> : null}
                </View>
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
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13),color:"black" }}
                        />
                    </Pressable>
                </View>
                <View>
                    {errorPin ?
                        <Text style={styles.ErrorText}>{errorPin}</Text> : null}
                </View>
                <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                    <Pressable onPressIn={() => handleBox()}>
                        <TextInput
                            keyboardType={"default"}
                            placeholder="Address (House No, Building, street, Area)*"
                            value={address}
                            placeholderTextColor={COLORS.gray}
                            onChangeText={(text: String) => setAddress(text)}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(14),color:"black" }}
                        />
                    </Pressable>
                </View>
                <View>
                    {errorAddress ?
                        <Text style={styles.ErrorText}>{errorAddress}</Text> : null}
                </View>
                <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                    <Pressable onPressIn={() => handleBox()}>
                        <TextInput
                            keyboardType={"default"}
                            placeholder="Locality / Town*"
                            value={locality}
                            maxLength={40}
                            onChangeText={(text: String) => setLocality(text)}
                            placeholderTextColor={COLORS.gray}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(14),color:"black" }}
                        />
                    </Pressable>
                </View>
                <View>
                    {errorLocality ?
                        <Text style={styles.ErrorText}>{errorLocality}</Text> : null}
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: "2%" }}>
                    <View style={{ flexDirection: "column", width: "48.5%" }}>
                        <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                            <Dropdown
                                style={{ width: "92%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, padding: "2%", marginTop: "1%", paddingHorizontal: 14 }}
                                placeholderStyle={styles.dropText}
                                selectedTextStyle={styles.dropText}
                                data={countryListValue}
                                maxHeight={350}
                                itemTextStyle={themeForList}
                                placeholder={/* (country) ? country :*/ "Country"}
                                labelField="name"
                                valueField="isoCode"
                                onChange={item => { setCountryValue(item.isoCode), console.log("dbdgbdfbdg..........", item), setCountryData(item) }}
                            />
                        </View>
                        <View>
                            {countryError ?
                                <Text style={styles.ErrorText}>{countryError}</Text> : null}
                        </View>
                    </View>
                    <View style={{ flexDirection: "column", width: "50%" }}>
                        <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                            <Dropdown
                                style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, padding: "2%", marginTop: "1%", paddingHorizontal: 14 }}
                                placeholderStyle={styles.dropText}
                                selectedTextStyle={styles.dropText}
                                data={stateListValue}
                                maxHeight={350}
                                itemTextStyle={themeForList}
                                labelField="name"
                                valueField="name"
                                onChange={item => { setStateValue(item.name), setStateIso(item.isoCode), console.log("dbdgbdfbdg..........", item), setStateData(item) }}
                                placeholder={/* (stateses) ? stateses : */ "State*"}
                            />
                        </View>
                        <View>
                            {stateError ?
                                <Text style={styles.ErrorText}>{stateError}</Text> : null}
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: "1%", marginBottom: "2%", marginTop: "2%" }}>
                    <Dropdown
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, padding: "2%", marginTop: "1%", paddingHorizontal: 14 }}
                        placeholderStyle={styles.dropText}
                        selectedTextStyle={styles.dropText}
                        data={cityListValue}
                        maxHeight={350}
                        itemTextStyle={themeForList}
                        placeholder={/* (city) ? city : */ "Select City"}
                        labelField="name"
                        valueField="name"
                        onChange={item => { setCityValue(item.name), console.log("dbdgbdfbdg..........", item), setCityData(item) }}
                    />
                </View>

                <View>
                    {cityError ?
                        <Text style={styles.ErrorText}>{cityError}</Text> : null}
                </View>

                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginLeft: "5%", marginTop: "3%" }}>SAVE ADDRESS AS</Text>
                <View style={{ marginVertical: "2%", flexDirection: "row", width: "89%", alignSelf: "center", borderRadius: 10, backgroundColor: COLORS.white }}>
                    <TouchableOpacity style={{ paddingVertical: "5%", marginHorizontal: "5%", }} onPress={()=>setAddressType(0)}>
                        <Text style={{...styles.switch,backgroundColor:(addressType==0)?COLORS.element:"white",color:(addressType==0)?COLORS.white:COLORS.gray}}>Home</Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={{ paddingVertical: "5%", }} onPress={()=>setAddressType(1)}>
                        <Text style={{...styles.switch,backgroundColor:(addressType==1)?COLORS.element:"white",color:(addressType==1)?COLORS.white:COLORS.gray}}>Work</Text>
                        </TouchableOpacity>
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
        borderColor: COLORS.gray,
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
    },
    ErrorText: {
        color: "red",
        ...FONTS.lexendregular,
        fontSize: RFValue(10),
        textAlign: "center",
        width: horizontalScale(100)
    },
    dropText: {
        ...FONTS.lexendregular,
        color: COLORS.black,
        fontSize: moderateScale(16)
    },
})
export default EditAddress;
