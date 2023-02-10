import React from 'react'
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { horizontalScale, verticalScale } from '../../constants/metrices';
import { icons } from '../../constants';
import { RFValue } from 'react-native-responsive-fontsize';

const Playnowquizsubmit = () => {
  return (
    <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: "#f1f1f1" }}>
        <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={Style.maindiv}>
            <View style={{ marginTop: verticalScale(15) }}>
                    <View style={Style.subdiv2}>
                        <Image
                            source={icons.loginwhite}
                            resizeMode='contain'
                            style={{
                                height: verticalScale(160),
                                width: horizontalScale(180),
                                marginTop: -30
                            }}
                        />
                    </View>
                    <View style={Style.subdiv3}>
                            <View style={{alignItems:"center",marginTop:45,height:130,margin:10,width:horizontalScale(310)}}>
                                <View style={{marginTop:1,borderWidth:5,borderColor:"#DADADA",height:verticalScale(140),width:horizontalScale(130),borderRadius:100,backgroundColor:"#2A2141"}}>
                                   <ImageBackground source={icons.conlogo}style={{position:"absolute",width:75,height:75,marginLeft:20,marginTop:15}}></ImageBackground>
                                </View>
                            </View>
                            <View style={{width:horizontalScale(320),height:verticalScale(80)}}>
                                <Text style={{fontSize:RFValue(20),fontFamily: "Lexend-SemiBold",textAlign:"center",lineHeight:30,color:"#303030"}}>Congratulations! Avail your tickets at</Text>
                            </View>
                            <TouchableOpacity>
                            <View style={{alignItems:"center"}}>
                            <View style={{backgroundColor:"#EEEEEE",width:horizontalScale(200),height:verticalScale(55),borderRadius:5}}>
                                <Text style={{textAlign:"center",fontSize:RFValue(25),color:"#D10359",fontFamily: "Lexend-SemiBold",marginTop:5}}>Link</Text>
                            </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignSelf: "center", marginTop: "8%", borderWidth: 1, borderRadius: 8, width: horizontalScale(300), padding: "4%" }}>
                            <Text style={{ textAlign: "center", fontSize: 18, fontFamily: "Lexend-Regular", color: "#0a0127" }}>Close</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
    </SafeAreaView>
  )
}
const Style=StyleSheet.create({
    maindiv: {
        width: horizontalScale(375),
        height: verticalScale(900),
        backgroundColor: "#0a0127",
    },
    subdiv2: {
        margin: 20,
        width: horizontalScale(330),
        height: 70,
        alignItems: "center"
    },
    subdiv3:{
        width: horizontalScale(330),
        height: verticalScale(480),
        marginLeft: 20,
        borderRadius: 15,
        backgroundColor: "#FFFFFF"
    },
    
    
})
export default Playnowquizsubmit;