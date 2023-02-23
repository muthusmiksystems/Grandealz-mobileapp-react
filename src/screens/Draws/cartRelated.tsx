import React, { type PropsWithChildren, useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    FlatList,
    useColorScheme,
    View,
    TouchableOpacity,
} from 'react-native';
import image from '../../constants/image';
import icons from '../../constants/icons';
import { COLORS, FONTS } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/metrices';
import { CartDrawlistHandle } from "../../services/cartdrawslist";
import { useIsFocused } from "@react-navigation/core";
import Toast from 'react-native-simple-toast';
import { AddtoCartHandle } from "../../services/addtocart";

const CartRelated = ({ cartdts, changer, setChanger }) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [similarproduct, setSimilarproduct] = useState();
    const [drawid, setDrawid] = useState();
    const [count, setCount] = useState("");
    const [cartList, setCartList] = useState(cartdts);

    console.log("similar prod...................", similarproduct)
    console.log("cart prod...................", cartList)

    useEffect(() => {
        if (isFocused) {
            cartIdList();
        }
    }, [cartdts])

    useEffect(() => {
        if (isFocused) {
            CartDrawlist();
            cartIdList();
        }
    }, [isFocused])

    const CartDrawlist = async () => {
        let drawdatalist = await CartDrawlistHandle()
        var Alreadysoldout: any = [];
        (drawdatalist.data).forEach((element: any) => {
            if (element.total_no_of_sold_out_tickets / element.total_no_of_tickets != 1) {
                Alreadysoldout.push(element);
            }
        })
        setSimilarproduct(Alreadysoldout)
    }
    useEffect(() => {
        console.log("use effect for cartlist")

    }, [cartList])

    useEffect(() => {
        if (drawid) {
            const AddtoCartitems = async () => {
                const payload = { "draw": drawid, "qty": 1 }
                let AddItemtoCart = await AddtoCartHandle(payload)
                if (AddItemtoCart.status === "200") {
                    setChanger(!changer);
                }
                else {
                    Toast.show(AddItemtoCart.message, Toast.LONG, { backgroundColor: 'red' });
                    setChanger(!changer);
                }
            }
            AddtoCartitems()
        }
    }, [drawid])
    console.log(count, "counting")
    const cartIdList = () => {
        var AlreadyInCart: any[] = [];
        let data = cartdts?.draws;
        if (data) {
            (data).forEach((element: any) => {
                var Data = (element.draw._id);
                AlreadyInCart.push(Data);
            })
        }
        setCartList(AlreadyInCart);
    }

    return (
                <View>
                    <View style={{ marginVertical: "5%" }}>
                        <Text style={{ color: "#616161", fontSize: RFValue(14), ...FONTS.lexendregular, }}>People Have also bought this together</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        data={similarproduct}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => (
                            <View style={{ width: 15 }} />
                        )}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <>
                                {!(cartList.includes(`${item._id}`)) ?
                                    <View style={{ height: RFValue(360) }}>
                                        <View style={{ backgroundColor: COLORS.white, borderRadius: 14, width: RFValue(154), height: "100%", padding: RFValue(15) }}>
                                            <TouchableOpacity>
                                                <View style={{ backgroundColor: "#F9F9F9", padding: "2%" }}>
                                                    <Image
                                                        source={{ uri: item.product_image }}
                                                        resizeMode={'contain'}
                                                        style={{
                                                            height: RFValue(95),
                                                            width: RFValue(95),
                                                            margin: 10
                                                        }}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{ height: "25%" }}>
                                                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendsemibold, paddingBottom: "2%", marginTop: RFValue(5) }}>{item.currency} {item.product_price} Cash</Text>
                                                <Text style={{ color: "#616161", fontSize: RFValue(13), ...FONTS.lexendregular, paddingBottom: "2%" }}>{item.product_title}</Text>
                                                <Text style={{ color: COLORS.element, fontSize: RFValue(13), ...FONTS.lexendregular, }}>₹{item.product_price}</Text>
                                            </View>

                                            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 5, marginTop: "40%", width: RFValue(113), alignSelf: "center", height: "10%" }} onPress={() => { setDrawid(item._id), setCount(count + 1) }}>
                                                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, }}>Add</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    : null}
                            </>
                        )}
                    />
                </View>
    )
}
const styles = StyleSheet.create({

    container: {
        alignContent: "center"
    },
    view1: {
        alignContent: "center"
    },
    text1: {
        alignContent: "center"
    },

})
export default CartRelated;