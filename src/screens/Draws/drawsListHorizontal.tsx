import React, { type PropsWithChildren,useState,useEffect } from 'react';
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
import moment from 'moment';
import image from '../../constants/image';
import icons from '../../constants/icons';
import { COLORS,FONTS } from '../../constants';
import {useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { horizontalScale,verticalScale } from '../../constants/metrices';
import { drawGetCall } from '../../services/register';

const DrawsHeader = () => {
  const navigation=useNavigation();
  const [close, setClose] = useState<any>();
  //drawGetCall
  useEffect(() => {
    //console.log("data..............");
    const soon = async () => {
      let closingData = await drawGetCall()
      
      let result = closingData.data;
      
      var a: any[] = [];
      result.map((e: { total_no_of_sold_out_tickets: number; total_no_of_tickets: number; }) => {
        var data = (e.total_no_of_sold_out_tickets * 100 / e.total_no_of_tickets);
        //console.log("samuvel sham.......",data);
        if (data < 100) {
          a.push(e)
        }
        //console.log(a, "data to maping")
        setClose(a)
      })
      
    }
    soon();

  }, [])

  return (
    <SafeAreaView >
      <View style={{ }}>
        <FlatList
          horizontal={true}
          data={close}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginVertical: "4%",marginLeft:"2%",paddingRight:"75%"  }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity style={{ backgroundColor: "white",marginHorizontal:"1%" }} onPress={()=>navigation.navigate("PriceDetails",item)}>
                    <Image
                      source={{uri: item.draw_image}}
                      resizeMode="contain"
                      style={{
                        height:RFValue(80),
                        width:RFValue(80),
                      }}
                    />
              </TouchableOpacity>
              <View style={{justifyContent:"center",alignItems:"center",padding:"2%"}}>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(10), ...FONTS.lexendregular,}}>{moment(item.draw_date).format('Do MMM,YYYY')}</Text>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(10), ...FONTS.lexendregular,}}>06:00 PM</Text>
              </View>
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
export default DrawsHeader;