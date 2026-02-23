import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';


export default function Intro({Business}) {


    const router = useRouter();

  return (
    
    
    <View
    
    >
<View
style={{
    position:'absolute',
    zIndex:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingTop:'40',
    padding:'20'

}}

>
     <TouchableOpacity
     onPress={()=> router.back()}
     ><Ionicons name="arrow-back-circle" size={40} color="white" /></TouchableOpacity>

<Ionicons name="heart" size={40} color="white" />

</View>

         <Image source={{uri:Business?.imageUrl}}
      
      style={{
        width:'100%',
        height:320,
        
      }}
      
      />

      <View style={{
        
        padding:'10',
        marginTop:-30,
        backgroundColor:"#fff",
        borderRadius:25
        
        }}>
        <Text
        style={{

            fontSize: 20,
            
            fontFamily: 'outfit-bold'

        }}
        >{Business.name}</Text>


         <Text
        style={{

            fontSize: 18,
            fontFamily: 'outfit'

        }}
        >{Business.address}</Text>
      </View>
      
    </View>
  )
}