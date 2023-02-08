
import React, { useState, type PropsWithChildren, useEffect } from 'react';

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

import image from '../constants/image';
import icons from '../constants/icons';
import { COLORS, FONTS } from '../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { horizontalScale, verticalScale } from '../constants/metrices';
import { RemovewishlistHandle } from '../services/deletewishlist';
import { ToastAndroid } from 'react-native';
import { wishlistHandle } from "../services/wishlist";
import { useFocusEffect } from "@react-navigation/native";


const data = [
    {
        id: '1',
        imag: image.pencil,
        name: "Pencil",
        desc: "Blanco Set",
        price: "₹100.00",
        count: "1 Ticket",
        delvery: "Closing in 15 : 54 : 48"

    },
    {
        id: '2',
        imag: image.pencil,
        name: "Pencil",
        desc: "Blanco Set",
        price: "₹100.00",
        count: "1 Ticket",
        delvery: "Closing in 15 : 54 : 48"

    },
    {
        id: '3',
        imag: image.pencil,
        name: "Pencil",
        desc: "Blanco Set",
        price: "₹100.00",
        count: "1 Ticket",
        delvery: "Closing in 15 : 54 : 48"

    },
    {
        id: '5',
        imag: image.pencil,
        name: "Pencil",
        desc: "Blanco Set",
        price: "₹100.00",
        count: "1 Ticket",
        delvery: "Closing in 15 : 54 : 48"

    },
    {
        id: '5',
        imag: image.pencil,
        name: "Pencil",
        desc: "Blanco Set",
        price: "₹100.00",
        count: "1 Ticket",
        delvery: "Closing in 15 : 54 : 48"

    },


];

const WishlistData = (Wishlist,changed,statusChange,setStatusChange) => {

    // const {Wishlist,setStatus,status}=props;
    const [productid, setProductid] = useState()
    // console.log("props:",Wishlist,status)
    const [removeres, setRemoveres] = useState()

    const RemoveItem = (data:any) => {
        setProductid(data)
        ToastAndroid.showWithGravity(
            'Removed successfully',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
     
    }

    useEffect(() => {
        const RemoveWishlist = async () => {
            let Removeitems = await RemovewishlistHandle(productid)
            setRemoveres(Removeitems)

        }
        RemoveWishlist()
    }, [productid])

    

    const navigation = useNavigation();
    // console.log("again......", Wishlist.Wishlist)

    return (
        <SafeAreaView >
            <View style={{ padding: "4%" }}>
                <FlatList
                    data={Wishlist.Wishlist}
                    contentContainerStyle={{}}
                    keyExtractor={item => item.draw._id}
                    renderItem={({ item }) => (
                        <View style={{ width: "100%", marginBottom: "4%", borderRadius: 10, backgroundColor: "white" }}>
                            <TouchableOpacity>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "row", width: "70%", paddingVertical: "5%", paddingLeft: "3%" }}>
                                        <View style={{ flexDirection: "column", backgroundColor: COLORS.pagebackground, padding: "4%", width: "45%", alignItems: "center" }}>
                                            <Image

                                                source={{ uri: item.draw.product_image }}
                                                resizeMode="contain"
                                                style={{ height: verticalScale(100), width: horizontalScale(80) }}

                                            />
                                        </View>
                                        <View style={{ flexDirection: "column", justifyContent: "center", width: "60%", paddingLeft: "4%" }}>
                                            <Text style={{ color: COLORS.black, ...FONTS.lexendsemibold, fontSize: RFValue(13) }}>{item.draw.product_title}</Text>
                                            <Text style={{ color: COLORS.gray, ...FONTS.lexendregular, fontSize: RFValue(13) }}>{(item.draw.product_description).substring(0, 45)}</Text>
                                            <Text style={{ color: COLORS.element, ...FONTS.lexendregular, fontSize: RFValue(13) }}>₹{item.draw.product_price}</Text>

                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "column", width: "30%", borderColor: "green", justifyContent: "space-between" }}>
                                        <TouchableOpacity onPress={() => RemoveItem(item._id)}>
                                            <View style={{ width: "30%", backgroundColor: COLORS.element, alignSelf: "flex-end", flexDirection: "row", borderTopEndRadius: 10, borderBottomStartRadius: 10 }}>
                                                <Text style={{ width: "100%", paddingVertical: "8%", textAlign: "center", ...FONTS.lexendregular, fontSize: RFValue(16), color: COLORS.white }}>-</Text>
                                            </View>
                                        </TouchableOpacity>
                                        {/* <View style={{ width: "30%", backgroundColor: COLORS.element, alignSelf: "flex-end" }}>
                                            <Text style={{ padding: "4%", textAlign: "center" }}>l,l,l</Text>
                                        </View> */}
                                        <TouchableOpacity style={{ width: "102%", backgroundColor: COLORS.element, alignSelf: "flex-end", flexDirection: "row", borderBottomEndRadius: 10, borderTopStartRadius: 10 }} >
                                            <Text style={{ width: "100%", textAlign: "center", paddingVertical: "8%", ...FONTS.lexendregular, color: COLORS.white }}>ADD TO CART</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        // <View style={{}}>
                        //     <TouchableOpacity style={{ elevation: 1, borderRadius: 9, backgroundColor: "white", width: "100%" }}>
                        //         <View style={{ flexDirection: "row", backgroundColor: "#fff", borderRadius: 10 }} >
                        //             <View style={{ flexDirection: 'column', margin: 5,backgroundColor:COLORS.lightGray, alignItems: 'center', width: "30%",height:"80%" }}>
                        //                 <Image
                        //                     source={item.imag}
                        //                     resizeMode={"contain"}
                        //                     style={{
                        //                         // width:"100%",
                        //                         // height:"100%"
                        //                     }}
                        //                 />
                        //             </View>
                        //             <View style={{ marginVertical: 5, paddingVertical: 10, flexDirection: "column", width: "35%" }}>
                        //                 <Text style={{ fontSize: 16, ...FONTS.lexendsemibold, color: COLORS.black }}>{item.name} </Text>
                        //                 <Text style={{ fontSize: 14, ...FONTS.lexendregular, color: COLORS.black }}>{item.desc}  </Text>
                        //                 <Text style={{ fontSize: 14, ...FONTS.lexendregular, color: "red" }}>{item.price}</Text>

                        //                 <Text style={{ fontSize: 11, ...FONTS.lexendregular, color: COLORS.black }}>{`\n`}{item.delvery}  </Text>
                        //             </View>
                        //             <View style={{ flexDirection: "column", width: "33%", justifyContent: "space-between" }}>
                        //                 <View style={{ marginRight: "2%", backgroundColor: "#E70736", width: "30%", justifyContent: "flex-end", alignSelf: "flex-end", borderTopEndRadius: 12, borderBottomLeftRadius: 12 }}>
                        //                     <Text style={{ fontSize: RFValue(20), color: "white", bottom: 7, marginStart: "35%" }}>_</Text>
                        //                 </View>
                        //                 <View style={{ justifyContent: "center", alignItems: "center", borderTopLeftRadius: 12, width: horizontalScale(100), height: verticalScale(20), borderBottomEndRadius: 10, backgroundColor: "#E70736" }}>
                        //                     <Text style={{ ...FONTS.lexendregular, color: COLORS.white, fontSize: RFValue(10), paddingHorizontal: "5%", paddingVertical: "2%" }}>ADD TO CART</Text>
                        //                 </View>

                        //             </View>
                        //         </View>
                        //     </TouchableOpacity>
                        // </View>
                    )}
                />
            </View>
        </SafeAreaView>
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
export default WishlistData;