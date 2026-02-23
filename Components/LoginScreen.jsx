import { Colors } from '@/constants/Colors';
import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from "expo-web-browser";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();


const {startOAuthFlow} = useOAuth({strategy:"oauth_google"});
const onPress = React.useCallback(async () => {
  try{

    const {createdSessionId,signIn,signUp,setActive} =
    await startOAuthFlow();

    if(createdSessionId){
      setActive({session:createdSessionId});
    }
    else{

    }
  }
  catch(err){
    console.error("OAuth error",err);
  }
  finally{
    WebBrowser.coolDownAsync().catch((err) =>{
      console.warn('coolDownAsync failed',err);
    })
    ;
  }
},[]);

  return (
    <View>
      <View style={{

        display:'flex',
        alignItems:'center',
        marginTop:100
      }}>
      
      <Image source={require('./../assets/images/login.png')}
      style={{
        width : 220,
        height : 450,
        borderRadius : 20,
        borderWidth:2,
        borderColor:'#000'
      }}

      />
      </View>

      <View style={{backgroundColor:'#fff', padding:20, marginTop:-20}}
      >
        <Text style={{fontFamily:'outfit-bold',fontSize:30, textAlign:'center'}}> မန္တလေး  
        <Text style={{color:Colors.PRIMARY}} > 
          &nbsp; Business Guide 
        </Text>
        &nbsp; Application
        </Text>

       <TouchableOpacity style={{ 
        backgroundColor: Colors.PRIMARY,
        padding:16,
        borderRadius:99,
        marginTop:20

       }} onPress={onPress} >

        <Text style={{

          textAlign:'center',
          color:'#fff',
          fontFamily:'outfit-bold'

        }}>စတင်မည်</Text>
       </TouchableOpacity>
      </View>
    </View>
  )
}