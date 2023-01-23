import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  // CheckBox,
  useColorScheme,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  // Button
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { horizontalScale, verticalScale } from "../constants/metrices";
// import InputBox from 'react-native-floating-label-inputbox';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { loginicon } from "../constants/icons";





const Landing = (props: Props) => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [animationLoaded, setAnimationLoaded] = useState(false);


  useEffect(() => {

    setTimeout(() => {
      setAuthLoaded(true);
      setAnimationLoaded(true);
    }, 2000);
  }, []);
  useEffect(() => {
    if (authLoaded && animationLoaded) {

      props.navigation.replace('login');
    }
  }, [authLoaded, animationLoaded, props.navigation]);
  return (
    <View style={styles.root}>
      <Image
        source={loginicon}
        resizeMode="contain"
        style={{
          width: '50%',
          height: '18%',
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0127'
  },
});
export default Landing;