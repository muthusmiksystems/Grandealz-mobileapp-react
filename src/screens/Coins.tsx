import React from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { horizontalScale, verticalScale } from "../constants/metrices";
import icons, { shoppingCart } from "../constants/icons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS } from "../constants";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Coins = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={styles.subdivOne}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: horizontalScale(14) }}>
                    <EntypoIcons name="chevron-left" size={30} style={{ flexDirection: "column" }} color={"white"} />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-Regular", color: "white", fontSize: 20, width: "79%", textAlign: "center" }}>Coins</Text>
            </View>
            <View style={{height:"30%",backgroundColor:"#FFCACE",alignItems:"center"}}>
                <View style={{height:"90%",width:"80%",top:"15%",}}>
                 <View style={{ flexDirection: "column", width: horizontalScale(20), right: horizontalScale(60), alignSelf: "center", backgroundColor:"#FFCACE", height: verticalScale(25), borderBottomEndRadius: 55,borderBottomStartRadius: 55,zIndex: 100,top:"10%"}} />
                 
          <View style={{backgroundColor:'#0a0127',padding:"5%",flexDirection:"row",borderRadius:10,}}>
       
                <View style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
                    <Image
                        source={icons.rupee}
                        style={{height:RFValue(35),width:RFValue(35)}}
                        />
                </View>
                <View style={{width:"70%",justifyContent:"center",alignItems:"center",}}>
                <Text style={styles.fontSizeStyle}>50 Coins</Text>
                </View>
                <View style={{width:"10%",height:"100%",left:"32%",bottom:"1%",}}>
                <View style={{ flexDirection: "column", width: horizontalScale(10),  alignSelf: "center", backgroundColor:"#FFCACE", height: verticalScale(15), borderTopStartRadius: 55,borderBottomStartRadius: 55, }} />
                <View style={{ flexDirection: "column", width: horizontalScale(10),  alignSelf: "center", backgroundColor:"#FFCACE", height: verticalScale(15), borderTopStartRadius: 55,borderBottomStartRadius: 55, }} />
                <View style={{ flexDirection: "column", width: horizontalScale(10),  alignSelf: "center", backgroundColor:"#FFCACE", height: verticalScale(15), borderTopStartRadius: 55,borderBottomStartRadius: 55, }} />
               
                <View style={{ flexDirection: "column", width: horizontalScale(10),  alignSelf: "center", backgroundColor:'#F1F1F1', height: verticalScale(15), borderTopStartRadius: 55,borderBottomStartRadius: 55, }} />
                <View style={{ flexDirection: "column", width: horizontalScale(10),  alignSelf: "center", backgroundColor:'#F1F1F1', height: verticalScale(15), borderTopStartRadius: 55,borderBottomStartRadius: 55, }} />
                <View style={{ flexDirection: "column", width: horizontalScale(10),  alignSelf: "center", backgroundColor:'#F1F1F1', height: verticalScale(15), borderTopStartRadius: 55,borderBottomStartRadius: 55, }} />

                </View>
          </View>
          <View style={{ flexDirection: "column", width: horizontalScale(20), right: horizontalScale(60), alignSelf: "center", backgroundColor:'#F1F1F1', height: verticalScale(25), borderTopEndRadius: 55,borderTopStartRadius: 55,zIndex: 100,bottom:"10%"}} />
          </View>
            </View>
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
        backgroundColor: COLORS.pagebackground
    },
    fontSizeStyle: {
        ...FONTS.lexendsemibold,
        color: COLORS.white,
        fontSize: RFValue(25),
        width: "82%",
        left: "30%"
    },

})
export default Coins;