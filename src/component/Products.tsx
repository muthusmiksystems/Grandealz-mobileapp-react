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
import { COLORS,FONTS } from '../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: '1',
        imag: image.inputcash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"

    },
    {
        id: '2',
        imag: image.inputcash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
    {
        id: '3',
        imag: image.inputcash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
    {
        id: '4',
        imag: image.inputcash,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },

];
const Product = () => {
    const navigation=useNavigation();
    return (
        <SafeAreaView >
            <View >
                <FlatList
                    data={data}
                    contentContainerStyle={{}}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{ padding: '5%' }}>
                            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 9, borderTopWidth: 4, borderTopColor: "red", backgroundColor: "white" }}>
                                <View style={{ alignItems: 'center', borderTopEndRadius: 8, borderTopStartRadius: 8 }}>
                                    <View style={{ flexDirection: 'column', padding: 10 }}>
                                        <Image
                                            source={item.imag}
                                            style={{
                                                marginTop:"15%",
                                                height: 150,
                                                borderWidth: 1,
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{ margin: 5, padding: 10 }}>
                                    <Text style={{ fontSize: 30, color: "red",...FONTS.lexendregular, }}>Win</Text>
                                    <Text style={{ fontSize: 16, color: "black" ,...FONTS.lexendsemibold,}}>One Campaign ,Two Winners </Text>
                                    <Text style={{ fontSize: 14, color: "black",...FONTS.lexendregular, }}>Buy Resso set for : <Text style={{ color: "red" }}>₹1500</Text> </Text>

                                    <TouchableOpacity onPress={()=>navigation.navigate("MyOrders")} style={{ padding: "5%", borderWidth: 1, margin: 10}}>

                                  

                                        <Text style={{ textAlign: "center", color: "black", fontSize: 18 }}>Add to Cart</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", marginVertical: "2%" }}>
                                    <View style={{ flexDirection: "column", marginLeft: 15 }}>
                                        <Image
                                            source={image.calander}
                                            style={{
                                                borderWidth: 1,
                                            }}
                                        />
                                    </View>

                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={{ fontSize: RFValue(10) ,marginLeft:6,...FONTS.lexendregular,color:COLORS.black }}>
                                            Max Draw Date :September 05,2023 {"\n"}
                                            Or Earlier if the Campaign is Sold Out
                                        </Text>

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
export default Product;