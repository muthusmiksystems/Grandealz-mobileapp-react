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
import {useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { horizontalScale, verticalScale } from '../constants/metrices';

const data = [
  {
    id: '1',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet, consectetur",
    to: "1689 sold out 1985"

  },
  {
    id: '2',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet, consectetur",
    to: "1689 sold out 1985"
  },
  {
    id: '3',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet, consectetur",
    to: "1689 sold out 1985"
  },
  {
    id: '4',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet, consectetur",
    to: "1689 sold out 1985"
  },

];
const ClosingSoon = () => {
  const navigation=useNavigation();
  return (
    <SafeAreaView >
      <View style={{ paddingVertical: "2%" }}>
        <FlatList
          horizontal={true}
          data={data}
          // ItemSeparatorComponent={() => (
          //   <View style={{ width: 5 }} />
          // )}
          contentContainerStyle={{ margin: 10}}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{ padding: '1%' }}>
              <TouchableOpacity style={{borderRadius: 9, borderTopWidth: 4, borderTopColor: "#E70736", backgroundColor: "white", height:RFValue(145),width:RFValue(128)}} onPress={()=>navigation.navigate("PriceDetails")}>
                <View style={{ alignItems: 'center', borderTopEndRadius: 8, borderTopStartRadius: 8 }}>
                  <View style={{ flexDirection: 'column',marginTop:RFValue(15)}}>
                    <Image
                      source={item.imag}
                      style={{
                        height:verticalScale(50),
                        width:horizontalScale(86),
                        borderWidth: 1,
                      }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop:RFValue(20), padding:5 }}>
                  <Text style={{ fontSize:RFValue(10) ,color:COLORS.black,...FONTS.lexendregular,lineHeight:11.25,}}>{item.from}</Text>
                </View>
                <View>
                  <Text style={{ fontSize: RFValue(9), textAlign: "center",color:COLORS.black,...FONTS.lexendregular }}>{item.to}</Text>
                </View>
                <View style={{marginLeft:"15%",width:"70%",height:"4%",borderColor:"#F1F1F1",borderWidth:1,margin:2,borderRadius:12,backgroundColor:"#F1F1F1"}}>
                  <Text style={{backgroundColor:"#EC092D",width:"80%",borderRadius:12}}></Text>
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
export default ClosingSoon;