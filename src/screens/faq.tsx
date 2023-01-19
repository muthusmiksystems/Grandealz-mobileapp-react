import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    Image,
    FlatList,
    useColorScheme,
    View,
    TouchableOpacity,
} from 'react-native';
import image from '../constants/image';
import icons from '../constants/icons';
import { COLORS, FONTS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { horizontalScale, moderateScale, verticalScale } from '../constants/metrices';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBox from "@react-native-community/checkbox";

const Faq = () => {
    const navigation = useNavigation();
    const Content = () => {
        return (
          <View style={{ flexDirection: "row", marginHorizontal:"4%" }}>
           <Text style={{ color: COLORS.gray, fontSize: RFValue(16),}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
           </Text>
          
          </View>
        )
      }
      const Title = () => {
        return (
         <View>
            <Text style={{ fontFamily: "Lexend-SemiBold", color:COLORS.textHeader, fontSize: RFValue(16), margin: "3%" }}>Lorem Ipsum is simply</Text>
          </View>
        )
      }
    
    return (
        <>
            <View style={styles.subdivOne}>
                <TouchableOpacity
                    style={{ margin: "5.5%" }}
                    onPress={()=>navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,

                        }}
                    />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Lexend-Regular", color: "white", fontSize: RFValue(22), marginStart: "15%" }}>FAQ's</Text>
            </View>
            <Text style={{ fontFamily: "Lexend-SemiBold", color:COLORS.textHeader, fontSize: RFValue(16), margin: "3%" }}>About us</Text>
            <Content/>
            <Title/>
            <Content/>
            <Title/>
            <Content/>
            <Title/>
            <Content/>
            <Title/>
            <Content/>
            <Title/>
            <Content/>
        </>
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
    }, subdivOne: {
        width: horizontalScale(375),
        height: "10%",
        backgroundColor: "#0a0127",
        alignItems: "center",
        // justifyContent: 'center',
        flexDirection: "row",


    },
    subdivTwo: {
        height: verticalScale(748),
        alignItems: "center",
        justifyContent: "center",
        // borderWidth:2
    },
    checkBox: {
        alignSelf: "center",
        flexDirection: "column",
      }
    })
export default Faq;