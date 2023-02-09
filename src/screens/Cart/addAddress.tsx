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
    Pressable
} from 'react-native';
import { horizontalScale, verticalScale } from "../../constants/metrices";
import { shoppingCart } from "../../constants/icons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
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


const AddAddress = () => {
    const CheckBoxes = () => {
        const [isSelected, setSelection] = useState(false);
        return (
            <View style={{ flexDirection: "row", left: horizontalScale(17) }}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkBox}
                    tintColors={{ true: "green" }}
                />
            </View>
        )
    }

    const { handleChange, handleSubmit, formErrors, data, formValues } = useForm(validate);
    const [Name, setName] = useState<any>("");
    const [errorName, setErrorName] = useState(null);
    const [phone, setPhone] = useState<any>("");
    const [errorPhone, setErrorPhone] = useState(null);
    const [pincode, setPincode] = useState<any>("");
    const [errorPin, setErrorPin] = useState(null);
    const [address, setAddress] = useState<any>("");
    const [errorAddress, setErrorAddress] = useState(null);
    const [locality, setLocality] = useState<any>("");
    const [errorLocality, setErrorLocality] = useState(null);

    const navigation = useNavigation();


    useEffect(() => {

        console.log(Object.keys(formValues).length, "kk", formErrors)
        if (formErrors && Object.keys(formErrors).length > 0) {
            if (formErrors && formErrors.allerror) {
                setError(formErrors.allerror)
            }
            else if (formErrors && formErrors.Name) {
                //setFirstName(formErrors.firstName)
                setErrorName(formErrors.Name);
                console.log(Name, "name failed", formErrors)

            }
            else if (formErrors && formErrors.phone) {
                console.log("phone failed")
                //setLastName(formErrors.lastName);
                setErrorPhone(formErrors.phone);
            }
            else if (formErrors && formErrors.pincode) {
                //setEmail(formErrors.email);
                setErrorPin(formErrors.pincode);
                console.log("pincode  failed", formErrors.pincode)
            }
            else if (formErrors && formErrors.address) {
                console.log("address failed")
                //setPassword(formErrors.password);
                setErrorAddress(formErrors.address);
            }
            else if (formErrors && formErrors.locality) {
                console.log(" locality failed")
                //setPhone(formErrors.phone);
                setErrorPhone(formErrors.locality);
            }
        }
        // console.log("im the formerror data........",formValues)

    }, [formErrors])


    useEffect(() => {

        if (data && Object.keys(data)) {
            const AddAddress = {
                "name": data.Name,
                "phone": data.phone,
                "pincode": data.pincode,
                "address": data.address,
                "locality_town": data.locality,
                "city": {
                    "name": "string",
                    "countryCode": "string",
                    "stateCode": "string"
                },
                "state": {
                    "name": "string",
                    "isoCode": "string",
                    "countryCode": "string"
                },
                "country": {
                    "name": "string",
                    "isoCode": "string",
                    "flag": "string",
                    "phonecode": "string",
                    "currency": "string"
                },
                "address_type": "Home",
                "is_default_address": false
            }
            console.log("data inside the handle submit", AddAddress);
            //dispatch(AddAddressHandle(AddAddress))
            // .then(unwrapResult)
            // .then((originalPromiseResult) => {
            //     console.log("success samuvel you did itdone", originalPromiseResult);
            //     if (originalPromiseResult.status === "200") {
            //         var data = originalPromiseResult.data.access_token
            //         navigation.navigate("OtpPage", data)
            //     }
            //     else if (originalPromiseResult === "You have already registered") {
            //         console.log("im the error data", originalPromiseResult)
            //         ToastAndroid.showWithGravity(originalPromiseResult),
            //             ToastAndroid.CENTER, ToastAndroid.SHORT
            //     }
            //     else {
            //         console.log(originalPromiseResult, "error")
            //     }
            // })
        }

    }, [data])

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
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(20), width: horizontalScale(290), textAlign: "center" }}>Add New Address</Text>
            </View>
            <ScrollView style={{ height: "80%" }}>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginLeft: "5%", marginTop: "5%" }}>CONTACT DETAILS</Text>
                <View style={{ marginHorizontal: "3%", marginVertical: "2%" }}>
                    <Pressable onPressIn={() => handleBox()}>
                        <TextInput
                            placeholder="Name*"
                            value={Name}
                            maxLength={10}
                            placeholderTextColor={COLORS.gray}
                            onChangeText={e => { handleChange(e, "Name"), setErrorName(""), setName(e) }}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13) }}
                        />
                    </Pressable>
                </View>
                <View>
                    {formErrors.Name || formErrors.allerror ?
                        <Text style={styles.ErrorText}>{errorName}</Text> : null}
                </View>
                <View style={{ marginHorizontal: "3%" }}>
                    <Pressable onPressIn={() => handleBox()}>
                        <TextInput
                            keyboardType={"phone-pad"}
                            placeholder="MobileNo*"
                            value={phone}
                            maxLength={10}
                            onChangeText={e => { handleChange(e, "mobile"), setErrorPhone(""), setPhone(e) }}
                            placeholderTextColor={COLORS.gray}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13) }}
                        />
                    </Pressable>
                </View>
                <View>
                    {formErrors.phone || formErrors.allerror ?
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
                            onChangeText={e => { handleChange(e, "pincode"), setErrorPin(""), setPincode(e) }}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13) }}
                        />
                    </Pressable>
                </View>
                <View>
                    {formErrors.pincode || formErrors.allerror ?
                        <Text style={styles.ErrorText}>{errorPin}</Text> : null}
                </View>
                <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                    <Pressable onPressIn={() => handleBox()}>
                        <TextInput
                            keyboardType={"default"}
                            placeholder="Address (House No, Building, street, Area)*"
                            value={address}
                            placeholderTextColor={COLORS.gray}
                            onChangeText={e => { handleChange(e, "address"), setErrorAddress(""), setAddress(e) }}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(14) }}
                        />
                    </Pressable>
                </View>
                <View>
                    {formErrors.address || formErrors.allerror ?
                        <Text style={styles.ErrorText}>{errorAddress}</Text> : null}
                </View>
                <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                    <Pressable onPressIn={() => handleBox()}>
                        <TextInput
                            keyboardType={"default"}
                            placeholder="Locality / Town*"
                            value={locality}
                            maxLength={40}
                            onChangeText={e => { handleChange(e, "locality"), setErrorLocality(""), setLocality(e) }}
                            placeholderTextColor={COLORS.gray}
                            style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(14) }}
                        />
                    </Pressable>
                </View>
                <View>
                    {formErrors.locality || formErrors.allerror ?
                        <Text style={styles.ErrorText}>{errorLocality}</Text> : null}
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: "2%" }}>
                    <View style={{ flexDirection: "column", width: "48.5%" }}>
                        <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                            <TextInput
                                keyboardType={"default"}
                                placeholder="City / District*"
                                maxLength={10}
                                placeholderTextColor={COLORS.gray}
                                style={{ paddingStart: 15, borderRadius: 8, width: "91%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13) }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: "column", width: "50%" }}>
                        <View style={{ marginHorizontal: "3%", marginBottom: "2%" }}>
                            <TextInput
                                keyboardType={"default"}
                                placeholder="State*"
                                maxLength={10}
                                placeholderTextColor={COLORS.gray}
                                style={{ paddingStart: 15, borderRadius: 8, width: "95%", backgroundColor: COLORS.white, alignSelf: "center", ...FONTS.lexendregular, fontSize: RFValue(13) }}
                            />
                        </View>
                    </View>
                </View>


                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginLeft: "5%", marginTop: "3%" }}>SAVE ADDRESS AS</Text>
                <View style={{ marginVertical: "2%", flexDirection: "row", width: "89%", alignSelf: "center", borderRadius: 10, backgroundColor: COLORS.white }}>
                    <TouchableOpacity style={{ paddingVertical: "5%", marginHorizontal: "5%" }}><Text style={styles.switch}>Home</Text></TouchableOpacity>
                    <TouchableOpacity style={{ paddingVertical: "5%" }}><Text style={styles.switch}>Work</Text></TouchableOpacity>
                </View>

                <View style={{ marginHorizontal: "2%", marginBottom: "2%", padding: "2%", flexDirection: "row", width: "90%", borderRadius: 10, backgroundColor: COLORS.white, alignSelf: "center" }}>
                    <View style={{ marginLeft: "-4%" }}><CheckBoxes /></View>
                    <Text style={{ color: COLORS.gray, fontSize: RFValue(12), ...FONTS.lexendregular, paddingHorizontal: "5%", alignSelf: "center" }}>Make this my default address</Text>
                </View>
            </ScrollView>
            <View style={{ flexDirection: "row", height: "8%", backgroundColor: COLORS.white, paddingVertical: "1%", paddingHorizontal: "2%" }}>

                <TouchableOpacity style={{ flexDirection: "column", width: "90%", marginHorizontal: "5%", marginVertical: "1%", borderRadius: 5, borderWidth: 1, justifyContent: "center", alignItems: "center" }} onPress={e => { handleSubmit(e, "2"), Keyboard.dismiss }} disabled={false}>
                    <Text style={{ color: COLORS.textHeader, fontSize: RFValue(14), ...FONTS.lexendregular }}>Add Address</Text>
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

})
export default AddAddress;