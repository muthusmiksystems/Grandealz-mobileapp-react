import React from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { horizontalScale, verticalScale } from "../constants/metrices";
import icons, { shoppingCart } from "../constants/icons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS } from "../constants";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Coins = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={styles.subdivOne}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(14) }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: 20, width: "79%", textAlign: "center" }}>Coins</Text>
            </View>
            <View>
                <View style={{ height: "36%", backgroundColor: "#FFCACE", alignItems: "center" }}>
                    <View style={{ height: "90%", width: "83%", top: "15%", }}>
                        <View style={{ flexDirection: "column", width: horizontalScale(20), right: horizontalScale(60), alignSelf: "center", backgroundColor: "#FFCACE", height: verticalScale(25), borderBottomEndRadius: 55, borderBottomStartRadius: 55, zIndex: 100, top: "10%" }} />

                        <View style={{ backgroundColor: '#0a0127', padding: "5%", flexDirection: "row", borderRadius: 10, borderWidth: 1 }}>

                            <View style={{ width: "20%", justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={icons.rupee}
                                    style={{ height: RFValue(48), width: RFValue(48) }}
                                />
                            </View>
                            <View style={{ width: "70%", justifyContent: "center", alignItems: "center", }}>
                                <Text style={styles.fontSizeStyle}>50 Coins</Text>
                            </View>
                            <View style={{ width: "10%", height: "99%", left: "35%", bottom: "1%",}}>
                                <View style={{ flexDirection: "column", width: horizontalScale(10), alignSelf: "center", backgroundColor: "#FFCACE", height: verticalScale(14), borderTopStartRadius: 55, borderBottomStartRadius: 55, }} />
                                <View style={{ flexDirection: "column", width: horizontalScale(10), alignSelf: "center", backgroundColor: "#FFCACE", height: verticalScale(14), borderTopStartRadius: 55, borderBottomStartRadius: 55, }} />
                                <View style={{ flexDirection: "column", width: horizontalScale(10), alignSelf: "center", backgroundColor: "#FFCACE", height: verticalScale(14), borderTopStartRadius: 55, borderBottomStartRadius: 55, }} />

                                <View style={{ flexDirection: "column", width: horizontalScale(10), alignSelf: "center", backgroundColor: '#F1F1F1', height: verticalScale(14), borderTopStartRadius: 55, borderBottomStartRadius: 55, }} />
                                <View style={{ flexDirection: "column", width: horizontalScale(10), alignSelf: "center", backgroundColor: '#F1F1F1', height: verticalScale(14), borderTopStartRadius: 55, borderBottomStartRadius: 55, }} />
                                <View style={{ flexDirection: "column", width: horizontalScale(10), alignSelf: "center", backgroundColor: '#F1F1F1', height: verticalScale(14), borderTopStartRadius: 55, borderBottomStartRadius: 55, }} />
                                <View style={{ flexDirection: "column", width: horizontalScale(10), alignSelf: "center", backgroundColor: '#F1F1F1', height: verticalScale(11), borderTopStartRadius: 55, borderBottomStartRadius: 55, }} />

                            </View>
                        </View>
                        <View style={{ flexDirection: "column", width: horizontalScale(20), right: horizontalScale(60), alignSelf: "center", backgroundColor: '#F1F1F1', height: verticalScale(25), borderTopEndRadius: 55, borderTopStartRadius: 55, zIndex: 100, bottom: "10%" }} />
                    </View>
                </View>
            </View>
            <View style={{bottom:"10%"}}>
                <View style={{ marginLeft: 40 }}>
                    <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(15), color: COLORS.black }}>Transaction History</Text>
                </View>
                <View style={{ paddingHorizontal: "10%", marginTop: "3%" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <Image
                                source={icons.rupee}
                                style={{ height: RFValue(30), width: RFValue(30) }}
                            />
                        </View>
                        <View style={{ flexDirection: "column", right: 18 }}>
                            <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(11), color: COLORS.black }}>Lorem Ipsum is simply dummy</Text>
                            <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(10), color: COLORS.black }}>Credited on 20 Oct 2022</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(13), color: "green" }}>+ 10</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: "#DBDBDB", margin: "5%" }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <Image
                                source={icons.rupee}
                                style={{ height: RFValue(30), width: RFValue(30) }}
                            />
                        </View>
                        <View style={{ flexDirection: "column", right: 18 }}>
                            <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(11), color: COLORS.black }}>Lorem Ipsum is simply dummy</Text>
                            <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(10), color: COLORS.black }}>Credited on 20 Oct 2022</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(13), color: "green" }}>+ 10</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: "#DBDBDB", margin: "5%" }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <Image
                                source={icons.rupee}
                                style={{ height: RFValue(30), width: RFValue(30) }}
                            />
                        </View>
                        <View style={{ flexDirection: "column", right: 18 }}>
                            <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(11), color: COLORS.black }}>Lorem Ipsum is simply dummy</Text>
                            <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(10), color: COLORS.black }}>Credited on 20 Oct 2022</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(13), color: "red" }}>- 10</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: "#DBDBDB", margin: "5%" }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <Image
                                source={icons.rupee}
                                style={{ height: RFValue(30), width: RFValue(30) }}
                            />
                        </View>
                        <View style={{ flexDirection: "column", right: 18 }}>
                            <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(11), color: COLORS.black }}>Lorem Ipsum is simply dummy</Text>
                            <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(10), color: COLORS.black }}>Credited on 20 Oct 2022</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(13),  color: "green" }}>+ 10</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: "#DBDBDB", margin: "5%" }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <Image
                                source={icons.rupee}
                                style={{ height: RFValue(30), width: RFValue(30) }}
                            />
                        </View>
                        <View style={{ flexDirection: "column", right: 18 }}>
                            <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(11), color: COLORS.black }}>Lorem Ipsum is simply dummy</Text>
                            <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(10), color: COLORS.black }}>Credited on 20 Oct 2022</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(13),  color: "green" }}>+ 10</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: "#DBDBDB", margin: "5%" }} />
                </View>
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
        flexDirection: "row"
    },
    subdivTwo: {
        height: verticalScale(748),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.pagebackground
    },
    fontSizeStyle: {
        ...FONTS.lexendsemibold,
        color: COLORS.white,
        fontSize: RFValue(30),
        width: "90%",
        left: "12%"
    },

})
export default Coins;