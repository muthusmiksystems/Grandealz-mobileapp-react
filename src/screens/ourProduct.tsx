import React from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from "../constants/metrices";
import { love } from "../constants/icons"
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import icons from "../constants/icons"
import image from "../constants/image";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, FONTS } from "../constants";
import OrderList from "./Myorders/orderList";
import WishlistData from "./wishListData";
const Data = [
    {
        id: '1',
        imag: image.pencilorg,
        name: "Pencil",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
        id: '2',
        imag: image.pencilorg,
        name: "Pencil",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'

    },
    {
        id: '3',
        imag: image.bottel,
        name: "Bottel",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
        id: '4',
        imag: image.tshirt,
        name: "T-Shirt",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'

    },
    {
        id: '5',
        imag: image.cap,
        name: "Cap",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'

    },
    {
        id: '6',
        imag: image.pencilorg,
        name: "Pencil",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
        id: '7',
        imag: image.bottel,
        name: "Bottel",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'

    },
    {
        id: '8',
        imag: image.tshirt,
        name: "T-Shirt",
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
];
const OurProducts = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ backgroundColor: "#F1F1F", height: "100%" }}>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={styles.subdivOne}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(18), flexDirection: "column" }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-Regular", color: "white", fontSize: RFValue(20), width: "75%", textAlign: "center" }}>Our Products</Text>

            </View>
            <ScrollView style={{}}>
                <View >
                    <FlatList
                        data={Data}
                        scrollEnabled={true}
                        numColumns={2}
                        contentContainerStyle={{ padding:"4%",marginTop:RFValue(5)}}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={{ backgroundColor: "white",borderRadius:8,marginBottom:horizontalScale(14),marginLeft:verticalScale(14),width:horizontalScale(155),height:verticalScale(190) }} onPress={() => { navigation.navigate("DetailedProduct", { item }) }}>
                                <View style={{padding:RFValue(10)}}>
                                    <View style={{backgroundColor: "#F1F1F1",alignItems:"center",width: horizontalScale(135),padding:RFValue(18),height: verticalScale(135) }}>
                                        <Image
                                            source={item.imag}
                                            resizeMode="stretch"
                                            style={{width: horizontalScale(99), height: verticalScale(99) }}
                                        />
                                    </View>
                                <Text style={{ textAlign: "center",fontSize:RFValue(13), ...FONTS.lexendsemibold, color: COLORS.black,marginTop:RFValue(-8)}}>{`\n`}{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
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
        // borderWidth:2
    }

})
export default OurProducts;