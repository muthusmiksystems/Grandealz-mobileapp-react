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
import image from '../../constants/image';
import icons from '../../constants/icons';
import { COLORS, FONTS } from '../../constants';
import { RFValue } from 'react-native-responsive-fontsize';
const data = [
    {
        id: '1',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"

    },
    {
        id: '2',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
    {
        id: '3',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
    {
        id: '4',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
    {
        id: '5',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },
    {
        id: '6',
        imag: image.whitecar,
        from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
        to: "1689 soul out 1985"
    },

];
const UpcomingDraws = () => {
    return (

        <FlatList
            data={data}
            contentContainerStyle={{ width: "100%" }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View style={{ padding: '2%',paddingBottom:"5%" }}>
                    <TouchableOpacity style={{ borderRadius: 9, backgroundColor: "white",paddingVertical:"3%" }}>

                        <View style={{  width: "100%" }}>
                            <Image
                                source={image.drawsCar}
                                resizeMode={"contain"}
                                style={{ height: RFValue(150), width: RFValue(310), margin: "4%" }}
                            />
                        </View>
                        <View style={{ marginLeft:"6%", paddingBottom: 10 }}>

                            <Text style={{ fontSize: RFValue(16), color: COLORS.textHeader, ...FONTS.lexendsemibold, padding: "1%" }}>Campaign:- range Rover V8 GCC</Text>

                            <Text style={{ fontSize: RFValue(16), color: COLORS.textHeader, ...FONTS.lexendregular, marginHorizontal: "1%", paddingBottom: "1%" }}>EL-00990</Text>
                            <Text style={{ fontSize: RFValue(14), color: COLORS.element2, marginHorizontal: "1%", ...FONTS.lexendregular }}>Draw date to be announced</Text>

                        </View>



                    </TouchableOpacity>
                </View>
            )}
        />
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
export default UpcomingDraws;