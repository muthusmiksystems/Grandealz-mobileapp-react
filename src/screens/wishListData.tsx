import React, { type PropsWithChildren } from 'react';
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


];
const WishlistData = () => {
    const navigation = useNavigation();
    console.log("again......")
    return (
        <SafeAreaView >
            <View  style={{padding:"4%"}}>
                <FlatList
                    data={data}
                    contentContainerStyle={{}}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{margin:"5%"  }}>
                            <TouchableOpacity style={{ elevation: 1, borderRadius: 9, backgroundColor: "white", width: "100%" }}>
                                <View style={{ flexDirection: "row", backgroundColor: "#fff", borderRadius: 10 }} >
                                    
                                        <View style={{ flexDirection: 'column', margin: 5,alignItems: 'center', padding: 10, marginVertical: 5, width: "30%"  }}>
                                            <Image
                                                source={item.imag}
                                                style={{
                                                    borderWidth: 1,
                                                }}
                                            />
                                        </View>
                                    
                                    <View style={{ marginVertical: 5, paddingVertical: 10,flexDirection:"column",width:"35%" }}>
                                        <Text style={{ fontSize: 16, ...FONTS.lexendsemibold, color: COLORS.black }}>{item.name} </Text>
                                        <Text style={{ fontSize: 14, ...FONTS.lexendregular, color: COLORS.black }}>{item.desc}  </Text>
                                        <Text style={{ fontSize: 14, ...FONTS.lexendregular, color: "red" }}>{item.price}</Text>

                                        <Text style={{ fontSize: 11, ...FONTS.lexendregular, color: COLORS.black }}>{`\n`}{item.delvery}  </Text>
                                    </View>
                                    <View style={{ flexDirection: "column",width:"33%",justifyContent:"space-between" }}>
                                            <View style={{marginRight:"2%",backgroundColor: "#E70736",width:"30%",justifyContent:"flex-end",alignSelf:"flex-end",borderTopEndRadius: 12, borderBottomLeftRadius: 12 }}>
                                                <Text style={{  fontSize: RFValue(20), color: "white", bottom: 7,marginStart:"35%" }}>_</Text>
                                            </View>
<<<<<<< HEAD
                                            <View style={{ justifyContent:"center",alignItems:"center", borderTopLeftRadius: 12, width:horizontalScale(100),height:verticalScale(20),borderBottomEndRadius: 10, backgroundColor: "#E70736" }}>
                                                <Text style={{ ...FONTS.lexendregular, color: COLORS.white, fontSize: RFValue(10),paddingHorizontal:"5%",paddingVertical:"2%" }}>ADD TO CART</Text>
=======
                                            <View style={{ justifyContent:"center",alignItems:"center", borderTopLeftRadius: 12, width:horizontalScale(100),height:verticalScale(20),marginStart:"8%",borderBottomEndRadius: 10, backgroundColor: "#E70736" }}>
                                                <Text style={{ ...FONTS.lexendregular, color: COLORS.white, fontSize: RFValue(10),paddingHorizontal:"5%", }}>ADD TO CART</Text>
>>>>>>> 8965dfed7e070b5267f8228abb4d90a863beb9ff
                                            </View>
                                        
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
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