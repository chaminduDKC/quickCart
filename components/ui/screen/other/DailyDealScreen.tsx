import {View, Text, StyleSheet} from 'react-native';
export default function DailyDealScreen(){
    return(
        <View style={styles.container}>
            <Text>Daily deals</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})