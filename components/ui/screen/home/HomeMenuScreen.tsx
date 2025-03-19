import {View, Text, StyleSheet, Alert} from 'react-native';
import {List, Menu} from 'react-native-paper';
import {COLORS} from "@/constants/ColorPalette";
export default function HomeMenuScreen({navigation}:any){
    return(
        <View style={styles.container}>
            <View style={styles.icon}>
                <List.Item
                    style={styles.menuItem}
                    title="My Orders"
                    left={props => <List.Icon {...props} icon="cart-check" />}
                    onPress={() => {navigation.navigate('MyOrders')}}
                />
            </View>

            <Menu.Item leadingIcon="cog" onPress={() => {navigation.navigate('Settings')}} title="Settings" />
            <Menu.Item leadingIcon="gift-outline" onPress={() => {navigation.navigate('Vouchers')}} title="Vouchers" />
            <Menu.Item leadingIcon="calendar-today" onPress={() => {navigation.navigate('DailyDeals')}} title="Daily Deals" />
            <Menu.Item leadingIcon="bell-badge-outline" onPress={() => {navigation.navigate('Notifications')}} title="Notifications" />
            <Menu.Item leadingIcon="history" onPress={() => {navigation.navigate('LatestProducts')}} title="Latest Products" />
            <Menu.Item leadingIcon="face-man-profile" onPress={() => {navigation.navigate('Profile')}} title="Profile" />
            <Menu.Item leadingIcon="face-agent" onPress={() => {navigation.navigate('CustomerCare')}} title="Customer Care" />
            <Menu.Item leadingIcon="logout" onPress={() => {Alert.alert('Logged out')}} title="Logout" />




        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.light,
        width:'100%',
        paddingTop:20
    },
    menuItem:{
        width:'100%'
    },
    icon:{
      width:'100%',
    }
})