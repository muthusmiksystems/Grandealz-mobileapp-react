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
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../constants';
import { horizontalScale } from '../constants/metrices';


const data = [
    {
        id: '1',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"

    },
    {
        id: '2',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
    {
        id: '3',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
    {
        id: '4',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 sold out 1985"
    },
];
const Carsold = () => {
    return (
        <SafeAreaView >
            <View style={{bottom:80}} >
                <FlatList
                    data={data}
                    contentContainerStyle={{}}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{ paddingTop:"5%",paddingHorizontal:"6%" }}>
                            <TouchableOpacity style={{  borderRadius: 9,backgroundColor: "white" }}>
                                <View style={{ alignItems: 'center', borderTopEndRadius: 8, borderTopStartRadius: 8 ,flexDirection: 'column', padding: 10}}>
                                        <Image
                                            source={item.imag}
                                            style={{

                                                height: 150,
                                                borderWidth: 1,
                                            }}
                                        />
                                </View>
                                <View style={{ marginLeft:horizontalScale(15), padding: 10 }}>
                                    <Text style={{  ...FONTS.lexendsemibold,fontSize: RFValue(13),fontWeight:"600", color: "black" }}>Campaign:- range Rover V8 GCC </Text>
                                    <Text style={{ ...FONTS.lexendregular,fontSize:RFValue(13),fontWeight:"300", color: "black" }}>EL-00990</Text>
                                    <Text style={{ ...FONTS.lexendregular,fontSize: RFValue(13),fontWeight:"400", color: "#E70736" }}>Draw date to be announced</Text>
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
export default Carsold;