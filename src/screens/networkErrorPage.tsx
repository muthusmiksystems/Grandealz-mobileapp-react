import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    Pressable,
    FlatList,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import { icons, COLORS, FONTS } from '../constants';
import { RFValue } from 'react-native-responsive-fontsize';

const NetworkError = () => {
    const navigation = useNavigation();
    // const isFocused = useIsFocused();
    // useEffect(()=>{
    const unsubscribe = () => {
        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                navigation.goBack();
            }
            else {
                Alert.alert("","Please Check your network connection!");
            }
        })
    }

    return (
        <KeyboardAvoidingView style={styles.mainContainer}>
            <Image source={icons.networkGif} resizeMode="contain" style={{ height: 200, width: 200 }} />
            <View style={{ width: "80%", margin: "5%", alignItems: "center" }}>
                <Text style={{ color: COLORS.black, fontSize: RFValue(16), ...FONTS.lexendregular, textAlign: "center" }}>Something Went Wrong {"\n"}Please Check your internet connection</Text>
            </View>
            <TouchableOpacity onPressIn={() => unsubscribe()} >
                <Text style={{ ...FONTS.lexendregular, color: "red", textDecorationLine: "underline" }}>Reload...</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 0
    }

});
export default NetworkError;