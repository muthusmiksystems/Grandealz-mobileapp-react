import React, { useEffect, useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    ImageBackground,
    ScrollView,
    Platform,
    PermissionsAndroid,
    ToastAndroid,
    Modal
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { icons, COLORS, FONTS } from '../../constants';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/metrices';
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import image from '../../constants/image';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontA5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from "react-redux";
// import { Modal } from 'react-native-paper';
// import AnimatedButton from '../../component/Ani';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { CameraOptions, ImageLibraryOptions } from 'react-native-image-picker/lib/typescript/types';
import imageUpload from '../../store/reducers/imageUpload';
import { imageUploadService } from '../../services/imageUploadService';
import { personalDetailsUpdate } from '../../services/personalDetailsUpdate';
import { userDetailsHandler } from '../../store/reducers/userDetails';
import { deleteAccount } from '../../services/deleteAccount';

const User = (props) => {
    // console.log("PAge props.............", props.route.params)
    const userData: any = useSelector<any>(state => state.userDetailsHandle?.data?.data);
    const [modalState, setModalState] = useState(false)
    const [profilePic, setProfilePic] = useState<any>()
    const [profileName, setProfileName] = useState<any>()
    console.log("UseSelector.................", userData)
    const navigation = useNavigation();
    const handleLogout = () => {

        Alert.alert("", "Are you sure you want to logout? ", [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'logout', onPress: () => Removetoken() },
        ]);

        const Removetoken = async () => {
            AsyncStorage.removeItem("loginToken");
            navigation.navigate("login");
        }
    }
    const dispatch = useDispatch();
    // const userData = useSelector<any>(state => state.userData.data);

    useEffect(() => {
        const uploadImage = async () => {
            await imageUploadService(profilePic).then((originalPromiseResult) => {
                console.log("Original............", originalPromiseResult.status)
                if (originalPromiseResult.status == "422") {
                    ToastAndroid.showWithGravity(
                        '422',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    )
                }
                else if (originalPromiseResult.status == "201") {
                    setProfileName(originalPromiseResult.data.file.filename)
                }
                else if (originalPromiseResult == undefined) {
                    ToastAndroid.showWithGravity(
                        'Something went wrong!, Please try again later',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    )
                }
            });
        }
        console.log(profilePic)
        uploadImage();
    }, [profilePic])

    useEffect(() => {
        updateImage()
    }, [profileName])

    const updateImage = async () => {
        const imageData = {
            "first_name": userData?.first_name,
            "last_name": userData?.last_name,
            "date_of_birth": userData?.date_of_birth,
            "gender": userData?.gender,
            "country_phone_code": "string",
            "profile_pic": profileName,
            "country_of_residence": userData?.country_of_residence,
            "nationality": "Indian",
        }
        // console.log("Payload...............", imageData)
        let callingAutobot = await personalDetailsUpdate(imageData).then((originalPromiseResult) => {
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
                    'Image Updated SuccessFully!',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                );
                dispatch(userDetailsHandler());
            }
        })
    }
    const openCamera = async () => {
        setModalState(false)
        if (Platform.OS == 'android' && await checkForPermissions()) {
            console.log("Camera permission given");
            const options: CameraOptions = {
                mediaType: 'photo'
            }
            const result = await launchCamera(options);
            console.log("imgdetails.....................", result);
            if (result.assets) {
                console.log("imgdetails.....................", result.assets[0].fileName);
                const file = {
                    "name": result.assets[0].fileName,
                    "type": result.assets[0].type,
                    "uri": result.assets[0].uri
                }
                setProfilePic(file)
            }


            else {
                ToastAndroid.showWithGravity(
                    "Please try again later!",
                    ToastAndroid.CENTER,
                    ToastAndroid.SHORT
                )
                // Alert.alert("Please try again later!")
                // this.props.navigation.pop();
            }
        }

    }
    const openGallery = async () => {
        setModalState(false)
        if (Platform.OS == 'android' && await checkForPermissions()) {
            console.log("Camera permission given");
            const options: ImageLibraryOptions = {
                mediaType: 'photo'
            }
            const result = await launchImageLibrary(options);


            console.log("imgdetails.....................", result)
            if (result.assets) {
                console.log("imgdetails.....................", result.assets[0].fileName);
                const file = {
                    "name": result.assets[0].fileName,
                    "type": result.assets[0].type,
                    "uri": result.assets[0].uri
                }
                setProfilePic(file)
            }
            else {
                ToastAndroid.showWithGravity(
                    "Please try again later!",
                    ToastAndroid.CENTER,
                    ToastAndroid.SHORT
                )
                // Alert.alert("Please try again later!")
                // this.props.navigation.pop();
            }
        }
    }
    const checkForPermissions = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
                return true;
            } else {
                ToastAndroid.showWithGravity(
                    "Camera and gallery permissions required",
                    ToastAndroid.CENTER,
                    ToastAndroid.SHORT
                )
                console.log("Camera permission denied");
                return false;
            }
        } catch (err) {
            ToastAndroid.showWithGravity(
                "Camera and gallery permissions required",
                ToastAndroid.CENTER,
                ToastAndroid.SHORT
            )
            return false;
            // console.warn(err);
        }
    }

    const deleteAcc = () => {
        Alert.alert("", "Are you sure you want to delete your account?", [
            {
                text: 'Cancel',
                // onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'Delete',
                onPress: () => removeAccount()
            },
        ])

        const removeAccount = async () => {
            await deleteAccount().then((originalPromiseResult) => {
                if (originalPromiseResult === undefined) {
                    ToastAndroid.showWithGravity(
                        'Something went wrong!, Please try again later',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER,
                    );
                }
                else {
                    ToastAndroid.showWithGravity(
                        'Your account deleted successfully',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER,
                    );
                    navigation.replace("login")
                }
            })
        }
    }

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
                <View style={{ alignItems: "center", padding: 24 }}>
                    <View style={{ borderWidth: 1, borderRadius: 8, height: RFValue(100), width: RFValue(100), alignItems: "center" }}>
                        {(userData?.profile_pic) ?
                            <ImageBackground
                                source={{ uri: (userData?.profile_pic) }}
                                resizeMode="cover"
                                imageStyle={{ borderRadius: 7 }}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 10
                                }}>
                                <TouchableOpacity style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', height: "27%", bottom: 0, borderBottomEndRadius: moderateScale(4), borderBottomStartRadius: moderateScale(4), width: "100%", position: 'absolute', alignItems: "center", justifyContent: "center" }}
                                    onPress={() => setModalState(true)}
                                >
                                    <FontA5 name="edit" color="white" size={moderateScale(13)} style={{ margin: "2%" }} />
                                </TouchableOpacity>
                            </ImageBackground> :
                            <ImageBackground
                                source={image.profilepic}
                                resizeMode="cover"
                                imageStyle={{ borderRadius: 7 }}
                                style={{
                                    width: "100%",
                                    height: "100%"
                                }}>
                                <TouchableOpacity style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', height: "27%", bottom: 0, borderBottomEndRadius: moderateScale(4), borderBottomStartRadius: moderateScale(4), width: "100%", position: 'absolute', alignItems: "center", justifyContent: "center" }}
                                    onPress={() => setModalState(true)}
                                >
                                    <FontA5 name="edit" color="white" size={moderateScale(13)} style={{ margin: "2%" }} />
                                </TouchableOpacity>
                            </ImageBackground>
                        }
                    </View>
                    <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(20), color: COLORS.black }}>{(userData) ? userData?.first_name + " " + userData?.last_name : "-"}</Text>
                    <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(13), color: COLORS.black }}>{(userData) ? userData?.email : "-"}</Text>
                </View>
                <View style={styles.viewBox}>
                    <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate("PersonalDetails", props.route.params)}>
                        <Image
                            source={icons.userIcon}
                            resizeMode="contain"
                            style={{
                                width: verticalScale(28),
                                height: horizontalScale(25),
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>Personal Details</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate('WishList')}>
                        <Image
                            source={icons.userHeart}
                            resizeMode="contain"
                            style={{
                                width: verticalScale(28),
                                height: horizontalScale(25),
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>Wishlist</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate('MyOrders')}>
                        <Image
                            source={icons.userBox}
                            resizeMode="contain"
                            style={{
                                width: verticalScale(28),
                                height: horizontalScale(25),
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
                    <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate("PaymentOptions")}>
                        <Image
                            source={icons.userCreditCard}
                            resizeMode="contain"
                            style={{
                                width: verticalScale(28),
                                height: horizontalScale(25),
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>Saved Cards/Payment Options</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate('Address')}>
                        <Image
                            source={icons.userLocation}
                            resizeMode="contain"
                            style={{
                                width: verticalScale(28),
                                height: horizontalScale(25),
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>My Address</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate("ChangePassword")}>
                        <Image
                            source={icons.userChangePassword}
                            resizeMode="contain"
                            style={{
                                width: verticalScale(28),
                                height: horizontalScale(25),
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>Change Password</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate("Coins")}>
                        <Image
                            source={icons.coinDollar}
                            resizeMode="contain"
                            style={{
                                width: verticalScale(28),
                                height: horizontalScale(25),
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
                    <TouchableOpacity style={styles.touchButton} onPress={() => { navigation.navigate("HowItWorks") }}>
                        <Image
                            source={icons.userInfo}
                            resizeMode="contain"
                            style={{
                                width: verticalScale(28),
                                height: horizontalScale(25),
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>How It Works</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />

                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate('OurProducts')}>
                        <Image
                            source={icons.userShirt}
                            resizeMode="contain"
                            style={{
                                width: verticalScale(28),
                                height: horizontalScale(25),
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
                                width: verticalScale(28),
                                height: horizontalScale(25),
                                flexDirection: "column"
                            }}
                        />
                        <Text style={styles.fontSizeStyle}>Our Charity Work</Text>
                        <EntypoIcons name="chevron-right" size={25} style={{ flexDirection: "column" }} color={"black"} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ borderWidth: 1, alignSelf: "center", borderColor: COLORS.gray, marginTop: "10%", width: "65%", borderRadius: 10 }} onPress={() => handleLogout()} >
                    <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(16), textAlign: "center", color: COLORS.black, paddingVertical: "6%" }}>Logout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: moderateScale(20), margin: "3%" }} onPress={() => deleteAcc()}>
                    <Text style={{ ...FONTS.lexendregular, fontSize: RFValue(13), color: COLORS.element, textAlign: "center" }}>Delete my account</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", marginTop: "1%" }}>
                    <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, alignSelf: "center", borderColor: COLORS.white, backgroundColor: COLORS.white, marginStart: "5%", marginEnd: "2%", width: "45%", borderRadius: 10 }}>
                        <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(16), textAlign: "center", color: COLORS.black, paddingVertical: "8%" }}>Call us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, alignSelf: "center", borderColor: COLORS.white, backgroundColor: COLORS.white, marginEnd: "5%", width: "45%", borderRadius: 10 }}>
                        <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(16), textAlign: "center", color: COLORS.black, paddingVertical: "8%" }}>Email us</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", marginVertical: "8%" }}>
                    <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, alignItems: "center", borderColor: COLORS.white, backgroundColor: COLORS.white, marginLeft: "16%", padding: "4%", borderRadius: 10 }}>
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
                    <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, alignSelf: "center", borderColor: COLORS.white, backgroundColor: COLORS.white, marginLeft: "10%", padding: "4%", borderRadius: 10 }}>
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
                    <TouchableOpacity style={{ flexDirection: "column", borderWidth: 1, alignSelf: "center", borderColor: COLORS.white, backgroundColor: COLORS.white, marginLeft: "10%", padding: "4%", borderRadius: 10 }}>
                        <Image
                            source={icons.userWhatsapp}
                            resizeMode="contain"
                            style={{
                                width: verticalScale(30),
                                height: horizontalScale(30),
                                flexDirection: "column"
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingLeft: "5%", paddingBottom: "5%" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("UserAgreement")}><Text style={{ ...FONTS.lexendregular, fontSize: RFValue(14), color: "#616161" }}>User Agreement</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Faq")}><Text style={{ ...FONTS.lexendregular, fontSize: RFValue(14), color: "#616161", paddingVertical: "2%" }}>Frequently Asked Questions</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("PrivacyPolicy")}><Text style={{ ...FONTS.lexendregular, fontSize: RFValue(14), color: "#616161" }}>Privacy Policy</Text></TouchableOpacity>
                </View>
            </ScrollView>
            <Modal
                visible={modalState}
                transparent={true}
                onRequestClose={() => {
                    setModalState(false);
                }}
                animationType="slide"
            // onBackButtonPress={() => setModalState(false)}
            // onBackdropPress={() => setModalState(false)}
            // onDismiss={()=>setModalState(false)}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.MainAlertView, { paddingBottom: 10, padding: 20 }]}>
                        <View style={{ flexDirection: 'row', width: '100%', paddingBottom: 0, alignItems: 'center', justifyContent: 'space-around' }}>

                            <TouchableOpacity onPress={() => openCamera()} style={{ alignItems: 'center' }}>
                                {/* <LinearGradient style={{ borderRadius: 5, alignSelf: 'center', alignItems: 'center', padding: 20 }} start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#0073C7', '#037BB5', '#0684A3', '#0684A3', '#098C91', '#098C91', '#0C957F', '#0C9581', '#0C967B', '#0D9A74']}> */}
                                <Ionicons style={{ color: COLORS.black, fontSize: 25 }} name="camera" />
                                {/* </LinearGradient> */}
                                <Text style={{ paddingTop: 10, fontSize: 16, color: '#000', ...FONTS.lexendregular }}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => openGallery()} style={{ alignItems: 'center' }}>
                                {/* <LinearGradient style={{ borderRadius: 5, alignSelf: 'center', alignItems: 'center', padding: 20 }} start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#0073C7', '#037BB5', '#0684A3', '#0684A3', '#098C91', '#098C91', '#0C957F', '#0C9581', '#0C967B', '#0D9A74']}> */}
                                <Ionicons style={{ color: COLORS.black, fontSize: 25 }} name="images" />
                                {/* </LinearGradient> */}

                                <Text style={{ paddingTop: 10, fontSize: 16, color: '#000', ...FONTS.lexendregular }}>Gallery</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
            </Modal>
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
        paddingVertical: 6,
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
    },
    fontHeadStyle: {
        ...FONTS.lexendsemibold,
        color: COLORS.black,
        fontSize: RFValue(16),
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
    MainAlertView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFF",
        borderRadius: 10,
        width: '100%',
        borderColor: '#fff',
    }, centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    }
})

export default User;