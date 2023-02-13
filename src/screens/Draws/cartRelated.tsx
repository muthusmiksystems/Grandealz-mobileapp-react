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
import { ToastAndroid } from 'react-native';
import { AddtoCartHandle } from "../../services/addtocart";
const data = [
    {
        id: '1',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"

    },
    {
        id: '2',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
    {
        id: '3',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
    {
        id: '4',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
    {
        id: '5',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
    {
        id: '6',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
    {
        id: '7',
        imag: image.cash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
];




const CartRelated = ({cartdts,changer,setChanger}) => {

    const navigation = useNavigation();

    const isFocused = useIsFocused();
    const [similarproduct, setSimilarproduct] = useState();
    const [drawid, setDrawid] = useState();
    const[cartList,setCartList]=useState(cartdts);
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
        console.log("DrawData on cart Draw.............", drawdatalist)
        setSimilarproduct(drawdatalist)
    }
    const AddtoCartitems = async () => {
        const payload={"draw": drawid,"qty":1}
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
            setChanger(!changer);
        }
    }
    const cartIdList=()=>{
        var AlreadyInCart: any[] = [];
        let data = cartdts?.draws;
        // console.log("dtaaaa.....................", data.length)
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
            {/* <View style={{borderWidth:2}}> */}
            <FlatList
                horizontal={true}
                data={similarproduct?.data}
                showsHorizontalScrollIndicator={false}
                // contentContainerStyle={{ marginLeft: "4%" }}
                ItemSeparatorComponent={() => (
                    <View style={{ width: 15 }} />
                )}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: COLORS.white, borderRadius: 14, width: RFValue(154), height: RFValue(246), padding: RFValue(15) }}>
                        <TouchableOpacity>
                            {/* <View style={{}}>

                            </View> */}
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
                        <View style={{}}>
                            <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendsemibold, paddingBottom: "2%", marginTop: RFValue(5) }}>{item.currency} {item.product_price} Cash</Text>
                            <Text style={{ color: "#616161", fontSize: RFValue(13), ...FONTS.lexendregular, paddingBottom: "2%" }}>{item.product_title}</Text>
                            <Text style={{ color: COLORS.element, fontSize: RFValue(13), ...FONTS.lexendregular, }}>₹{item.product_price}</Text>
                        </View>
                        {!(cartList.includes(`${item._id}`)) ?
                            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 5, marginTop: RFValue(5), width: RFValue(113), alignSelf: "center", height: RFValue(26) }} onPress={() => { setDrawid(item._id), AddtoCartitems() }}>
                                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(13), ...FONTS.lexendregular, }}>Add</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 5, marginTop: RFValue(5), width: RFValue(113), alignSelf: "center", height: RFValue(26), backgroundColor: COLORS.black }} >
                                <Text style={{ color: COLORS.white, fontSize: RFValue(13), ...FONTS.lexendregular, }}>Added</Text>
                            </TouchableOpacity>}
                    </View>
                )}
            />
            {/* </View> */}
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