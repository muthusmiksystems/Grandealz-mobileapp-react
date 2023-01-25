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
import { horizontalScale, verticalScale } from '../../constants/metrices';
const DrawsMain = () => {
    const [showWinners, setShowWinners] = useState(true);
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row", width: "94%",alignSelf:"center",height:verticalScale(52) }}>

                <View style={{ flexDirection: "row", width: "80%", marginHorizontal: "1%", backgroundColor: "white", borderRadius: 10, }}>
                    <TouchableOpacity style={{ backgroundColor: showWinners ? COLORS.element : "white", flexDirection: "column", width: "50%",borderRadius: 10, justifyContent: "center", alignItems: "center" }} onPress={() => setShowWinners(!showWinners)}>
                        <Text style={{ color: showWinners ? "white" : COLORS.textHeader, fontSize: RFValue(15), ...FONTS.lexendregular, }}>Winners</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: !showWinners ? COLORS.element : "white", flexDirection: "column", width: "50%", borderRadius: 10, justifyContent: "center", alignItems: "center" }} onPress={() => setShowWinners(!showWinners)}>
                        <Text style={{ color: !showWinners ? "white" : COLORS.textHeader, fontSize: RFValue(15), ...FONTS.lexendregular, }}>Upcoming Draws</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", width: "16%", marginHorizontal: "1%", backgroundColor: "white", borderRadius: 10,alignItems:"center",padding:"2.8%" }}>
                    <TouchableOpacity>
                        <Image
                            source={icons.filter}
                            resizeMode={"contain"}
                            style={{ height: 30, width: 35 }}
                        />
                    </TouchableOpacity>
                </View>


            </View>
            <View style={{ marginVertical: "1%", position: "relative",paddingBottom:"10%" }}>
                {showWinners ?
                    <View>
                        <Winners />
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