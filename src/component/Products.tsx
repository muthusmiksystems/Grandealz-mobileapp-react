import React, { type PropsWithChildren, useState, useEffect } from 'react';
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
import Toast from 'react-native-simple-toast';
import { AddtoCartHandle } from "../services/addtocart";
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { productDrawHandler } from '../store/reducers/productdraw';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Product = ({ addedCart, changer, change }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [close, setClose] = useState<any>();
    const [drawid, setDrawid] = useState(null);

    const percentage = 66;
    const DataInfo = useSelector(state => state.productDrawHandle.data)

    // console.log("datavvv..of....", addedCart)


    useEffect(() => {
        if (drawid) {
            const AddtoCartitems = async () => {
                const payload = { "draw": drawid, "qty": 1 }
                let AddItemtoCart = await AddtoCartHandle(payload)
                if (AddItemtoCart.status === "200") {
                    changer(!change)
                }
                else {
                    Toast.show(AddItemtoCart.message, Toast.LONG, { backgroundColor: 'red' });
                }
            }
            AddtoCartitems()
        }
    }, [drawid])

    const handleSearch = (value: any) => {
        navigation.navigate("PriceDetails", value)
    }

    return (
        <SafeAreaView >
            {DataInfo ?
                <View>
                    <FlatList
                        data={DataInfo}
                        contentContainerStyle={{ paddingBottom: 80 }}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={{ height: verticalScale(426), marginBottom: 10, alignItems: 'center', borderTopEndRadius: 5, borderTopStartRadius: 5, borderTopWidth: 2, borderTopColor: "red", backgroundColor: "white", borderBottomEndRadius: 8, borderBottomStartRadius: 8 }}>
                                <View style={{ alignSelf: "flex-end", marginRight: "5%", marginTop: 10 }}>
                                    <AnimatedCircularProgress
                                        size={60}
                                        width={4}
                                        fill={item.total_no_of_sold_out_tickets / item.total_no_of_tickets * 100}
                                        tintColor={COLORS.element}
                                        // onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor={COLORS.lightGray}>
                                        {
                                            (fill) => (
                                                <>
                                                    <View>
                                                        <Text style={{ color: "#E70736", ...FONTS.lexendregular, fontSize: RFValue(10), textAlign: "center" }}>{item.total_no_of_sold_out_tickets}
                                                            <Text style={{ ...FONTS.lexendsemibold, alignSelf: "center", color: "black", fontSize: RFValue(8), }}>{" "}Sold</Text></Text>
                                                    </View>
                                                    <View style={{ backgroundColor: "#7F7E76B2", width: "80%", borderWidth: 1, borderColor: "#7F7E76B2" }} />
                                                    <View>
                                                        <Text style={{ ...FONTS.lexendregular, color: " rgba(127, 126, 118, 0.7)", fontSize: RFValue(8) }}>OUT OF</Text>
                                                        <Text style={{ color: "#E70736", ...FONTS.lexendregular, fontSize: RFValue(10), textAlign: "center" }}>{item.total_no_of_tickets}</Text>
                                                    </View>
                                                </>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>
                                <TouchableOpacity disabled={item.total_no_of_sold_out_tickets / item.total_no_of_tickets != 1 ? false : true} style={{ flexDirection: 'column', paddingTop: 6, width: "100%" }} onPress={() => handleSearch(item)}>
                                    <View style={{ height: verticalScale(130), width: "84%", alignSelf: "center" }}>
                                        <Image
                                            source={{ uri: item.draw_image }}
                                            resizeMode="contain"
                                            style={{
                                                height: "100%",
                                                width: "100%"
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity disabled={item.total_no_of_sold_out_tickets / item.total_no_of_tickets != 1 ? false : true} style={{ padding: 10, height: verticalScale(90), flexDirection: "row" }} onPress={() => handleSearch(item)}>
                                    <View style={{ flexDirection: "column", width: "65%", height: "100%" }}>
                                        <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(24), color: "#E70736" }}>Win</Text>
                                        <Text style={{ fontSize: RFValue(13), color: "black", ...FONTS.lexendsemibold, }}>{item.draw_title} </Text>
                                        <Text style={{ fontSize: RFValue(12), color: "black", ...FONTS.lexendregular, }}>Buy {item.draw_sub_title} : <Text style={{ color: "red" }}>₹{item.product_price}</Text> </Text>
                                    </View>
                                    <View style={{ marginLeft: "5%", alignSelf: "flex-end", justifyContent: "center", borderWidth: 1, borderRadius: 6, borderColor: "#afb3b0" }}>
                                        <Image
                                            source={{ uri: item.product_image }}
                                            resizeMode="contain"
                                            style={{
                                                height: verticalScale(66),
                                                width: horizontalScale(66),
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                {item.total_no_of_sold_out_tickets / item.total_no_of_tickets != 1 ?
                                    <>
                                        {!(addedCart.includes(`${item._id}`)) ?
                                            <TouchableOpacity style={{ padding: "3%", borderWidth: 1, width: "80%", borderRadius: 8, marginTop: 5 }} onPress={() => setDrawid(item._id)}>
                                                <Text style={{ textAlign: "center", color: "black", fontSize: RFValue(15), ...FONTS.lexendsemibold }}>Add to Cart</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ padding: "3%", borderWidth: 1, width: "80%", borderRadius: 8, backgroundColor: "white", marginTop: 5 }} onPressIn={() => { navigation.navigate("Tabs", { screen: "Cart" }) }}>
                                                <Text style={{ textAlign: "center", color: "black", fontSize: RFValue(15), ...FONTS.lexendsemibold }}>Go To Cart</Text>
                                            </TouchableOpacity>
                                        }
                                    </>
                                    :
                                    <TouchableOpacity disabled={true} style={{ padding: "4%", borderWidth: 1, width: "80%", borderRadius: 8, marginTop: 5 }} onPress={() => setDrawid(item._id)}>
                                        <Text style={{ textAlign: "center", color: "black", fontSize: RFValue(15), ...FONTS.lexendsemibold }}>Add to Cart</Text>
                                    </TouchableOpacity>
                                }
                                <View style={{ flexDirection: "row", paddingVertical: "5%" }}>
                                    <View style={{ flexDirection: "column", marginLeft: 15, width: horizontalScale(50), height: verticalScale(42) }}>
                                        <Image
                                            source={image.calander}
                                            resizeMode="contain"
                                            style={{
                                                width: "100%",
                                                height: "100%"
                                            }} />
                                    </View>
                                    <View style={{ flexDirection: "column", alignSelf: "center" }}>
                                        <Text style={{ ...FONTS.lexendsemibold, fontSize: RFValue(12), marginLeft: 6, ...FONTS.lexendsemibold, color: COLORS.black }}>
                                            Max Draw Date: {moment(item.max_draw_date).format('MMMM DD YYYY')}
                                        </Text>
                                        <Text style={{ fontSize: RFValue(10), marginLeft: 6, ...FONTS.lexendregular, color: "gray", width: horizontalScale(280) }}>
                                            {(item.max_draw_date_description).substring(0, 100)}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
                : null}
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
export default Product;
