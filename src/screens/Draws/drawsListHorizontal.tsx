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
import { COLORS,FONTS } from '../../constants';
import {useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

const data = [
  {
    id: '1',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 soul out 1985"

  },
  {
    id: '2',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 soul out 1985"
  },
  {
    id: '3',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 soul out 1985"
  },
  {
    id: '4',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 soul out 1985"
  },
  {
    id: '5',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 soul out 1985"
  },
  {
    id: '6',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 soul out 1985"
  },
  {
    id: '7',
    imag: image.cash,
    from: "Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum doolr",
    to: "1689 soul out 1985"
  },
];
const DrawsHeader = () => {
  const navigation=useNavigation();
  return (
    <SafeAreaView >
      <View style={{ }}>
        <FlatList
          horizontal={true}
          data={data}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ margin: "2%",  }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View >
              <TouchableOpacity style={{ backgroundColor: "white",marginHorizontal:RFValue(3) }} onPress={()=>navigation.navigate("PriceDetails")}>
                    <Image
                      source={image.draws}
                      resizeMode={'contain'}
                      style={{
                        height:RFValue(90),
                        width:RFValue(90),
                      }}
                    />
              </TouchableOpacity>
              <View style={{justifyContent:"center",alignItems:"center",padding:"2%"}}>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(12), ...FONTS.lexendregular,}}>8th July 2022</Text>
                <Text style={{ color: COLORS.textHeader, fontSize: RFValue(12), ...FONTS.lexendregular,}}>06:00 PM</Text>
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