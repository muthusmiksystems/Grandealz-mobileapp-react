import React from 'react';
import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { icons, COLORS, FONTS } from '../../constants';
import { horizontalScale, verticalScale } from '../../constants/metrices';
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native';
import image from '../../constants/image';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const User = () => {

    const navigation = useNavigation();

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
                <View style={{ flexDirection: "column", marginLeft: horizontalScale(60) }}>
                    <Image
                        source={icons.userGrand}
                        resizeMode="contain"
                        style={{
                            width: horizontalScale(150)
                        }}
                    />
                </View>
            </View>
            <ScrollView style={{ backgroundColor: COLORS.pagebackground, borderWidth: 0, borderColor: "red", height: "90%" }}>
                <View style={{ alignItems: "center", borderWidth: 0, padding: 24 }}>
                    <View style={{ borderWidth: 1, borderRadius: 8, height: 110, width: 120, alignItems: "center" }}>
                        <Image
                            source={image.cars}
                            resizeMode="stretch"
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                        />
                    </View>
                    <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(20), color: COLORS.black }}>Connor Davis</Text>
                    <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(14) }}>info@gmail.com</Text>
                </View>
                <View style={styles.viewBox}>
                    <TouchableOpacity style={styles.touchButton} onPress={()=>navigation.navigate("PersonalDetails")}>
                        <Image
                            source={icons.userIcon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>Personal Details</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchButton} onPress={()=>navigation.navigate('WishList')}>
                        <Image
                            source={icons.userHeart}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>Wishlist</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchButton} onPress={()=>navigation.navigate('MyOrders')}>
                        <Image
                            source={icons.userBox}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>My Orders</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                </View>
                <Text style={styles.fontHeadStyle}>Settings</Text>
                <View style={{ borderTopWidth: 4, width: "13%", borderTopColor: COLORS.element, marginLeft: "6%", paddingBottom: "2%" }} />
                <View style={styles.viewBox}>
                    <TouchableOpacity style={styles.touchButton} onPress={()=>navigation.navigate("PaymentOptions")}>
                        <Image
                            source={icons.userCreditCard}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>Saved Cards/Payment Options</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchButton} onPress={()=>navigation.navigate('Address')}>
                        <Image
                            source={icons.userLocation}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>My Address</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchButton} onPress={()=>navigation.navigate("ChangePassword")}>
                        <Image
                            source={icons.userChangePassword}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>Change Password</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchButton} onPress={()=>navigation.navigate("Coins")}>
                        <Image
                            source={icons.coinDollar}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>Coins</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                </View>
                <Text style={styles.fontHeadStyle}>General</Text>
                <View style={{ borderTopWidth: 4, width: "13%", borderTopColor: COLORS.element, marginLeft: "6%", paddingBottom: "2%" }} />
                <View style={styles.viewBox}>
                    <TouchableOpacity style={styles.touchButton} onPress={()=>{navigation.navigate("HowItWorks")}}>
                        <Image
                            source={icons.userInfo}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>How It Works</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchButton} onPress={()=>navigation.navigate('OurProducts')}>
                        <Image
                            source={icons.userShirt}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>Our Products</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchButton}>
                        <Image
                            source={icons.userHeart}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>Our Charity Work</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ borderWidth: 1, alignSelf: "center", borderColor: COLORS.gray, marginTop: "10%", width: "55%", borderRadius: 10 }}>
                    <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(18), textAlign: "center", color: COLORS.black, paddingVertical: "6%" }}>Logout</Text>
                </TouchableOpacity>
                <View style={{ padding: 20 }}>
                    <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(14), color: COLORS.element, textAlign: "center" }}>Delete my account</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: "1%" }}>
                    <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, alignSelf: "center", borderColor: COLORS.white, backgroundColor: COLORS.white, marginHorizontal: "6%", width: "40%", borderRadius: 10 }}>
                        <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(18), textAlign: "center", color: COLORS.black, paddingVertical: "8%" }}>Call us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, alignSelf: "center", borderColor: COLORS.white, backgroundColor: COLORS.white, marginHorizontal: "2%", width: "40%", borderRadius: 10 }}>
                        <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(18), textAlign: "center", color: COLORS.black, paddingVertical: "8%" }}>Email us</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", marginVertical: "8%" }}>
                    <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, alignItems: "center", borderColor: COLORS.white, backgroundColor: COLORS.white, marginLeft: "16%",padding:"4%", borderRadius: 10 }}>
                        <Image
                            source={icons.userInstagram}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                flexDirection: "column"
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, alignSelf: "center", borderColor: COLORS.white, backgroundColor: COLORS.white, marginLeft: "10%",padding:"4%", borderRadius: 10 }}>
                        <Image
                            source={icons.userFacebook}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                flexDirection: "column"
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, alignSelf: "center", borderColor: COLORS.white, backgroundColor: COLORS.white, marginLeft: "10%", padding:"4%", borderRadius: 10 }}>
                        <Image
                            source={icons.userWhatsapp}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                flexDirection: "column"
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{paddingLeft:"5%",paddingBottom:"5%"}}>
                   <TouchableOpacity onPress={()=>navigation.navigate("UserAgreement")}><Text style={{...FONTS.lexendregular,fontSize:RFValue(14),color:"#616161"}}>User Agreement</Text></TouchableOpacity> 
                   <TouchableOpacity onPress={()=>navigation.navigate("Faq")}><Text style={{...FONTS.lexendregular,fontSize:RFValue(14),color:"#616161",paddingVertical:"2%"}}>Frequently Asked Questions</Text></TouchableOpacity> 
                   <TouchableOpacity onPress={()=>navigation.navigate("PrivacyPolicy")}><Text style={{...FONTS.lexendregular,fontSize:RFValue(14),color:"#616161"}}>Privacy Policy</Text></TouchableOpacity> 
                </View>
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

export default User;