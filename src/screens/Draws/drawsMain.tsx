import React, { useState, type PropsWithChildren } from 'react';
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
import Winners from './winners';
import UpcomingDraws from './upcomingDraws';
const DrawsMain = () => {
    const [showWinners, setShowWinners] = useState(true);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ marginHorizontal: "2%" }}>
            <View style={{ flexDirection: "row", width: "98%", marginHorizontal: "1%",}}>

                <View style={{ flexDirection: "row", width: "75%", marginHorizontal: "2%", backgroundColor: "white", borderRadius: 10, }}>
                    <TouchableOpacity style={{ backgroundColor:showWinners? COLORS.element: "white", flexDirection: "column", width: "50%", paddingVertical: "5%", borderRadius: 10, justifyContent: "center", alignItems: "center" }} onPress={() => setShowWinners(!showWinners)}>
                        <Text style={{ color:showWinners? "white":COLORS.textHeader , fontSize: RFValue(15), ...FONTS.lexendregular, }}>Winners</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor:!showWinners? COLORS.element: "white", flexDirection: "column", width: "50%", paddingVertical: "5%", borderRadius: 10, justifyContent: "center", alignItems: "center" }} onPress={() => setShowWinners(!showWinners)}>
                        <Text style={{ color: !showWinners? "white":COLORS.textHeader, fontSize: RFValue(15), ...FONTS.lexendregular, }}>Upcoming Draws</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", width: "15%", marginHorizontal: "2%", backgroundColor: "white", borderRadius: 10, }}>
                    <TouchableOpacity style={{ backgroundColor: "white", flexDirection: "column", width: "95%", paddingVertical: "5%", borderRadius: 10, justifyContent: "center", alignItems: "center" }} >
                      <Image
                        source={icons.filter}
                        resizeMode={"contain"}
                        style={{height:30,width:35}}
                      />
                    </TouchableOpacity>
                </View>


            </View>
            <View style={{marginVertical:"5%",position:"relative"}}>
                {showWinners ?
                <View>
                    <Winners/>
                </View> :
                <View>
                    <UpcomingDraws />
                </View>}
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
export default DrawsMain;