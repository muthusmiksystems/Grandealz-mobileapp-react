import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import Banner from '../../component/banner';
import Carsold from '../../component/Carsold';
import ClosingSoon from '../../component/closingdata';
import Product from '../../component/Products';
import { COLORS, FONTS } from '../../constants';
import icons from '../../constants/icons';
import image from '../../constants/image';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { horizontalScale, verticalScale } from '../../constants/metrices';
const DataPage = () => {
  const navigation = useNavigation();
  return (
    <ScrollView >
      <StatusBar
          animated={true}
          backgroundColor={"#0a0127"}
        />
      <View style={{ height: "100%"}}>
        <View
          style={{
            backgroundColor: "#0a0127",
            height: verticalScale(80),
            justifyContent:"center"
          }}>
          <View style={{ flexDirection: 'row', justifyContent: "space-between",marginTop:"4%"}}>
            <View style={{ flexDirection: "column"}}>
              <Image
                source={icons.stsicon}
                resizeMode="contain"
                style={{
                  width:horizontalScale (140),
                  height: verticalScale(35),
                  marginLeft: "8%"
                }}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity onPress={() => navigation.navigate('User')}>
                <Image
                  source={icons.user}
                  resizeMode="contain"
                  style={{
                    width: horizontalScale(35),
                    height:  verticalScale(40) ,
                    margin: "3%",
                    bottom:horizontalScale(7)
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
          <View style={{ padding: "3%", flex: 0.4 }}>
            <Banner />
          </View>
          
            <Text style={{ ...FONTS.lexendsemibold,fontSize:RFValue(18), marginLeft: "4%", ...FONTS.lexendsemibold, color:"black" }}>Closing Soon</Text>
            <View style={{ marginLeft: "4%",width:horizontalScale(40),borderWidth:1,backgroundColor:"#E70736",borderColor:"#E70736"}}/>
            <View>
              <ClosingSoon />
            </View>
            
              <Product />
            
            
              <View style={{ padding: 5, backgroundColor: "#D10359", height: 150, }}>
                <Text style={{ color: "white", marginLeft: 25, ...FONTS.lexendregular, color: COLORS.white, fontSize: RFValue(18) }}>
                  SOLD OUT
                </Text>
                <View style={{ marginLeft: "7%", width: "10%", height: "2%", borderColor: "white", backgroundColor: "black" }} />
                <Text style={{ color: "white", marginLeft: 25, ...FONTS.lexendregular, color: COLORS.white,marginTop:"1%" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
              </View>
              <Carsold />
            
         
        
      </View>
    </ScrollView>
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
    alignContent: "center",
    ...FONTS.lexendregular
  },

})
export default DataPage;