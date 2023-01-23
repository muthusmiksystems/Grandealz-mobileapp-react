import React, { useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { icons, COLORS, FONTS } from '../constants';
import { horizontalScale, moderateScale, verticalScale } from '../constants/metrices';
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native';
import image from '../constants/image';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RadioButton } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';

const Nation=[
    {label:'India',value:'India'},
    {label:'USA',value:'India'},
    {label:'USSR',value:'India'},
    {label:'Australia',value:'India'},
    {label:'Mexico',value:'India'},
    {label:'Europe',value:'India'},
    {label:'Africa',value:'India'},
    // {label:'Ind',value:'India'},
    // {label:'India',value:'India'},

]

const PersonalDetails = () => {

    const navigation = useNavigation();
    const [checked, setChecked] = React.useState('Male');
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
                <Text style={{ fontFamily: "Lexend-Regular", color: "white", fontSize: RFValue(24), width: "75%", textAlign: "center" }}>Personal Details</Text>
            </View>
            <ScrollView style={{ backgroundColor: COLORS.pagebackground, height: "90%" }}>
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingTop: "3%" }}>First Name</Text>
                    <TextInput
                        placeholder="Davis"
                        placeholderTextColor={"black"}
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                    />
                </View>
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingTop: "3%" }}>Last Name</Text>
                    <TextInput
                        placeholder="Connor"
                        placeholderTextColor={"black"}
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                    />
                </View>
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingTop: "3%" }}>Email</Text>
                    <TextInput
                        placeholder="info@gmail.com"
                        placeholderTextColor={"black"}
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column", width: "34%", paddingLeft: "5%", paddingTop: "3%" }}>
                        <Text style={{ ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12) }}>Country Code</Text>
                        <TextInput
                            placeholder="+91"
                            placeholderTextColor={"black"}
                            style={{ backgroundColor: COLORS.white, right: "2.5%", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                        />
                    </View>
                    <View style={{ flexDirection: "column", width: "65%", paddingTop: "3%" }}>
                        <Text style={{ ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingLeft: "7%" }}>Mobile</Text>
                        <TextInput
                            placeholder="9568745258"
                            keyboardType={"phone-pad"}
                            maxLength={10}
                            placeholderTextColor={"black"}
                            style={{ width: "89%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", width: "91%", padding: "2%", marginTop: "5%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular }}>
                    <RadioButton
                        value="Male"
                        status={checked === 'Male' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Male')}
                        uncheckedColor={COLORS.lightGray}
                        color={COLORS.element}
                    />
                    <Text style={{ ...FONTS.lexendregular, color: COLORS.black, fontSize: moderateScale(16), paddingRight: "8%" }}>Male</Text>
                    {/* </View> */}
                    <RadioButton
                        value="Female"
                        status={checked === 'Female' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Female')}
                        uncheckedColor={COLORS.lightGray}
                        color={COLORS.element}
                    />
                    <Text style={{ ...FONTS.lexendregular, color: COLORS.black, fontSize: moderateScale(16) }}>Female</Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingTop: "3%" }}>Nationality</Text>
                    <Dropdown
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8,padding:"2%", marginTop: "1%",paddingHorizontal:14 }}
                        placeholderStyle={styles.dropText}
                        selectedTextStyle={styles.dropText}
                        // inputSearchStyle={styles.inputSearchStyle}
                        // iconStyle={styles.iconStyle}
                        data={Nation}
                        // search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={"India"}
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
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingTop: "3%" }}>State</Text>
                    <Dropdown
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8,padding:"2%", marginTop: "1%",paddingHorizontal:14 }}
                        placeholderStyle={styles.dropText}
                        selectedTextStyle={styles.dropText}
                        // inputSearchStyle={styles.inputSearchStyle}
                        // iconStyle={styles.iconStyle}
                        data={Nation}
                        // search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={"TamilNadu"}
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
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingTop: "3%" }}>Country of residence</Text>
                    <Dropdown
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8,padding:"2%", marginTop: "1%",paddingHorizontal:14 }}
                        placeholderStyle={styles.dropText}
                        selectedTextStyle={styles.dropText}
                        // inputSearchStyle={styles.inputSearchStyle}
                        // iconStyle={styles.iconStyle}
                        data={Nation}
                        // search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={"India"}
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
                <View>
                    <Text style={{ paddingLeft: "5%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingTop: "3%" }}>Date of birth</Text>
                    <Dropdown
                        style={{ width: "91%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8,padding:"2%", marginTop: "1%",paddingHorizontal:14 }}
                        placeholderStyle={styles.dropText}
                        selectedTextStyle={styles.dropText}
                        // inputSearchStyle={styles.inputSearchStyle}
                        // iconStyle={styles.iconStyle}
                        data={Nation}
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
                </View>
                <TouchableOpacity style={{ borderWidth: 1, alignSelf: "center", borderColor: COLORS.gray, marginVertical:verticalScale(30), width: "60%", borderRadius: 10 }}>
                    <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(18), textAlign: "center", color: COLORS.black, paddingVertical: "6%" }}>Save</Text>
                </TouchableOpacity>
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
    dropText:{
        ...FONTS.lexendregular, 
        color: COLORS.black, 
        fontSize: moderateScale(16)
    }
})

export default PersonalDetails;