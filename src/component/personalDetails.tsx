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
import { horizontalScale, verticalScale } from '../constants/metrices';
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native';
import image from '../constants/image';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RadioGroup from 'react-native-radio-buttons-group';

const PersonalDetails = () => {

    const navigation = useNavigation();
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
                <Text style={{ fontFamily: "Lexend-Regular", color: "white", fontSize: 20, width: "75%", textAlign: "center" }}>Personal Details</Text>
            </View>
            <ScrollView style={{ backgroundColor: COLORS.pagebackground, borderWidth: 0, borderColor: "red", height: "90%" }}>
                <View>
                    <Text style={{ paddingLeft: "7%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingTop: "3%" }}>First Name</Text>
                    <TextInput
                        placeholder="Davis"
                        placeholderTextColor={"black"}
                        style={{ width: "89%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                    />
                </View>
                <View>
                    <Text style={{ paddingLeft: "7%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingTop: "3%" }}>Last Name</Text>
                    <TextInput
                        placeholder="Connor"
                        placeholderTextColor={"black"}
                        style={{ width: "89%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                    />
                </View>
                <View>
                    <Text style={{ paddingLeft: "7%", ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingTop: "3%" }}>Email</Text>
                    <TextInput
                        placeholder="info@gmail.com"
                        placeholderTextColor={"black"}
                        style={{ width: "89%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column", width: "34%", paddingLeft: "7%", paddingTop: "3%" }}>
                        <Text style={{ ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12) }}>Country Code</Text>
                        <TextInput
                            placeholder="+91"
                            placeholderTextColor={"black"}
                            style={{ backgroundColor: COLORS.white, right: "4%", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                        />
                    </View>
                    <View style={{ flexDirection: "column", width: "63.7%", paddingTop: "3%" }}>
                        <Text style={{ ...FONTS.lexendregular, color: COLORS.gray, fontSize: RFValue(12), paddingLeft: "8%" }}>Mobile</Text>
                        <TextInput
                            placeholder="9568745258"
                            keyboardType={"phone-pad"}
                            maxLength={10}
                            placeholderTextColor={"black"}
                            style={{ width: "89%", backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 8, ...FONTS.lexendregular, color: COLORS.black, fontSize: RFValue(16), paddingLeft: 14, marginTop: "1%" }}
                        />
                    </View>
                </View>
                <View>
                    {/* <RadioGroup
                        radioButtons={radioButtons}
                        onPress={onPressRadioButton}
                    /> */}
                </View>
                <TouchableOpacity style={{ borderWidth: 1, alignSelf: "center", borderColor: COLORS.gray, marginTop: "10%", width: "60%", borderRadius: 10 }}>
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
    }
})

export default PersonalDetails;