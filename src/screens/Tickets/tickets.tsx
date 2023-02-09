import React,{useEffect,useState} from "react";
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
import { verticalScale,horizontalScale } from "../../constants/metrices";
import { shoppingCart } from "../../constants/icons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import TicketDetails from "../../component/ticketDetails";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "../../constants";
import { activeTicketGet } from "../../services/ticket";
import { Button } from "react-native-paper";

const Tickets = () => {

    const navigation=useNavigation();

    
        const [Ticketlistdata, setTicketlistdata] = useState<any>();

        const [show,setShow] = useState(false)
    
        useEffect(() => {
          const soon = async () => {
            let TicketList= await activeTicketGet()
            setTicketlistdata(TicketList)
          }
          soon();
        }, [])


       


    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#0a0127"
            />
            <View style={styles.subdivOne}>
                <Text style={{ fontFamily: "Lexend-SemiBold", color: "white", fontSize: RFValue(20),textAlign:"center" }}>Active Tickets</Text>
            </View>
            <View style={styles.subdivTwo}>
                <TicketDetails Ticketdata={Ticketlistdata}/>
            </View>
            <View>
                <Text>You can view active coupons here after you make your purchase</Text>
                <Button>Start Shopping</Button>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    subdivOne: {
        width: horizontalScale(375),
        height: verticalScale(80),
        backgroundColor: "#0a0127",
        justifyContent: 'center',
    },
    subdivTwo: {
        backgroundColor:COLORS.lightGray    
    }

})
export default Tickets;