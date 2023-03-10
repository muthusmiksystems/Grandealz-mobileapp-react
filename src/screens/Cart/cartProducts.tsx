import React, { useState, useEffect } from "react";
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
import { useIsFocused } from "@react-navigation/core";
import { horizontalScale, moderateScale, verticalScale } from "../../constants/metrices";
import { shoppingCart } from "../../constants/icons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FONTS, COLORS } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntIcon from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';
import image from "../../constants/image";
import { ToastAndroid } from 'react-native';
import { DonateHandle } from "../../services/donate"
import { AddtoCartHandle } from "../../services/addtocart";
const CartProducts = ({cartval,changer,setChanger}) => {

    const navigation = useNavigation();
    const [toggle, setToggle] = useState(false);
    const data = ["all", "hello", "everybody", "world"]

    const [donaterep, setDonaterep] = useState()

    const [donateid, setDonateid] = useState('')
    const [cartitem, setCartitem] = useState()

    const isFocused = useIsFocused();
 
   
    useEffect(() => {
        if (isFocused) {
            // console.log("is triggerring",cartval,changer,setChanger)
            setCartitem(cartval.draws)
            setDonateid(cartval._id)
        }
    }, [isFocused,cartval])

    useEffect(() => {
        const DonateProduct = async () => {
            let DonateValue = await DonateHandle(donateid, toggle)
            // console.log("ourDonate console", DonateValue)
            setDonaterep(DonateValue)
        }
        DonateProduct()
    }, [toggle])

    const DonateButton = () => {
        if (toggle === true) {
            ToastAndroid.showWithGravity(
                'Donate Product Removed successfully',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        }
        else{
            ToastAndroid.showWithGravity(
                'Donate Product added successfully',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            ); 
        }
    }


    const increaseItemQty=(productDetails:any)=>{
        
        const quantity=productDetails.qty +1;
        const payload={"draw": productDetails.draw._id,"qty":quantity}
        // console.log("item",payload)
        callToCartitems(payload);
      }

      const decreaseItemQty=(productDetails:any)=>{
        if(productDetails.qty>0){
        const quantity=productDetails.qty-1;
        const payload={"draw": productDetails.draw._id,"qty":quantity}
        // console.log("item",payload)
        callToCartitems(payload);
        }
      }

      const callToCartitems = async (payload:any) => {
        let AddItemtoCart = await AddtoCartHandle(payload)
        if (AddItemtoCart.status === "200") {
            ToastAndroid.showWithGravity(
                AddItemtoCart.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            setChanger(!changer);
        }
        else {
            ToastAndroid.showWithGravity(
                AddItemtoCart.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            // setChanger(!changer);
        }
    }
    //  console.log("jk.....",toggle,"id",donateid,"res///",donaterep)
    return (
        <View style={{ width: "100%", borderRadius: 20, backgroundColor: COLORS.white, margin: "2%", alignSelf: "center" }}>

            {cartitem && cartitem.map((item, index) => {
                return (
                    <>
                        <View style={{ flexDirection: "row", width: "100%", borderRadius: 10, padding: "2%" }}>
                            <View style={{ flexDirection: "column", width: "90%", }}>
                                <View style={{ flexDirection: "row", }}>
                                    <View style={{ width: "35%", backgroundColor: "#F9F9F9" }}>
                                        <Image
                                            source={{ uri: item.draw.product_image }}
                                            resizeMode={"cover"}
                                            style={{ height: 80, width: 90, justifyContent: "center", margin: "10%" }}
                                        />
                                    </View>
                                    <View style={{ width: "70%", marginHorizontal: "3%" }}>
                                        <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendsemibold, }}>{item.draw.product_title}</Text>
                                        <Text style={{ color: COLORS.gray, fontSize: RFValue(13), ...FONTS.lexendregular, }}>{item.draw.draw_sub_title}</Text>
                                        <Text style={{ color: COLORS.element, fontSize: RFValue(13), ...FONTS.lexendregular, }}>{item.draw.product_price}</Text>
                                        <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginTop: "5%" }}> {item.draw.coins_redeem} Coupon
                                            <Text style={{ color: COLORS.gray }}> per unit</Text> </Text>   
                                    </View>

                                </View>
                            </View>
                            <View style={{ flexDirection: "column", width: "15%", alignSelf: "center" }}>
                                <TouchableOpacity onPress={()=>increaseItemQty(item)} ><AntIcon name="plussquare" size={moderateScale(20)} color={COLORS.element} style={{ marginBottom: "10%" }} /></TouchableOpacity>
                                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, marginStart: "15%" }}>{item.qty}</Text>
                                <TouchableOpacity onPress={()=>decreaseItemQty(item)}><AntIcon name="minussquare" size={moderateScale(20)} color={COLORS.element} style={{ marginTop: "10%" }} /></TouchableOpacity>
                            </View>

                        </View>
                        <View style={{ borderBottomColor: "#F1F1F1", borderBottomWidth: 3 }} />
                    </>
                )
            })}
            {(cartitem) ? (
                <View style={{ flexDirection: "row", width: "100%", borderBottomStartRadius: 10, borderBottomEndRadius: 10, backgroundColor: COLORS.element, paddingBottom: RFValue(12) }}>
                    <View style={{ marginTop: RFValue(12), marginLeft: "2.5%" }}>
                        <ToggleSwitch
                            isOn={toggle}
                            onColor="#0a0127"
                            offColor="#FF777F"
                            size="small"
                            onToggle={isOn => { setToggle(!toggle), DonateButton() }}
                        />
                    </View>
                    <Text style={{ color: COLORS.white, fontSize: moderateScale(13), ...FONTS.lexendregular, marginTop: RFValue(12), marginLeft: RFValue(5) }}>Donate Product(s) & Double Your Tickets</Text>
                </View>
            ) : null}
        </View>


    );
}
const styles = StyleSheet.create({
    subdivOne: {
        width: horizontalScale(375),
        height: verticalScale(65),
        backgroundColor: "#0a0127",
        alignItems: "center",
        // justifyContent: 'center',
        flexDirection: "row"
    },
    subdivTwo: {
        height: verticalScale(748),
        alignItems: "center",
        justifyContent: "center",
        // borderWidth:2
    }

})
export default CartProducts;