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
import { FONTS } from '../../constants';
import icons from '../../constants/icons';
import image from '../../constants/image';
const DataPage = () => {
  return (
    <ScrollView >
      <View style={{height:"100%"}}>
        <StatusBar
          animated={true}
          backgroundColor={"#0a0127"}
        />
        <View
          style={{
            backgroundColor: "#0a0127",

          }}>
          <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={icons.stsicon}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 50,
                  marginLeft: "5%"
                }}
              />
            </View>
            <View style={{ flexDirection: "column" }}>

              <Image
                source={icons.user}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 30,
                  marginTop: "2%"
                }}
              />

            </View>
          </View>
        </View>
        <View >
          <View style={{ padding: "3%",flex:0.4}}>
           
            <Banner/>
          </View>
          <View style={{ padding:"1%"}}>
            <Text style={{fontSize:20,marginLeft:"4%", ...FONTS.lexendregular,}}>Closing Soon</Text>
            <View>
                <ClosingSoon/>
            </View>
            <View >
              <Product/>
            </View>
            <View>
            <View style={{padding:5,backgroundColor:"red",height:150,}}>
              <Text style={{color:"white",marginLeft:25,...FONTS.lexendregular}}>
                  SOLD OUT
              </Text>
              <Text style={{color:"white",marginLeft:25,...FONTS.lexendregular}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              
            </View>
              <Carsold/>
            </View>
          </View>
        </View>
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