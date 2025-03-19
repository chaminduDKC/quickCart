import {Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, Alert} from "react-native";
import {COLORS} from "@/constants/ColorPalette";
import {Icon, TextInput} from "react-native-paper";
import {useState} from "react";


const logo = require('../../../../assets/images/logo/logo.png')
export default function LoginScreen({navigation}:any){
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image source={logo} resizeMode={'contain'} style={styles.logo} />
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.formGroup}>
                    <TextInput
                        label={'Root Email'}
                        textContentType={'emailAddress'}
                        value={email}
                        mode={'outlined'}
                        onChangeText={text=> setEmail(text)}
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        label={'Password'}
                        mode={'outlined'}
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={text=> setPassword(text)}
                        right={<TextInput.Icon onPress={()=>{
                            setShowPassword(!showPassword)
                        }} size={30} icon={showPassword ? 'eye' : 'eye-off'} />}
                    />
                </View>
                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.login}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.separateText}>OR</Text>


                <View style={styles.socialLoginWrapper}>
                    <TouchableOpacity style={styles.iconOuter}>
                        <Icon size={40} source={'google'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconOuter}>
                        <Icon size={40} source={'github'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconOuter}>
                        <Icon size={40} source={'facebook'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconOuter}>
                        <Icon size={40} source={'twitter'} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={()=> {navigation.navigate('SignUp')} } style={styles.registerWithEmail}>
                    <Text style={styles.loginText}>Register with email</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    iconOuter:{
        backgroundColor:COLORS.darkGray,
        borderRadius:30,
        padding:5
    },
    socialLoginWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    loginText:{
        color:COLORS.light,
        fontSize:20
    },
    separateText:{
        textAlign:'center',
        marginTop:10,

    },
    registerWithEmail:{
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:5,
        backgroundColor:COLORS.blue,
        height:50,
        marginTop:20,
        fontSize:20
    },
    login:{
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:5,
        backgroundColor:COLORS.blue,
        height:50,
        marginTop:10
    },
    forgotPasswordText:{
        color:COLORS.blue,
        textDecorationLine:'underline'
    },
    forgotPassword:{
        alignItems:'flex-end',
        marginTop:5
    },
    formGroup:{
        marginTop:10
    },
    container:{
        flex:1,
        backgroundColor:COLORS.light,
        width:'100%',
        height:'100%',
        padding:20
    },
    logo:{
        height:50,
        width:50,
        borderRadius:50,
    },
    logoWrapper:{
        marginTop:70,
        height:50,
        width:'100%',
        alignItems: 'center',
    },
    inputWrapper:{

    }

})