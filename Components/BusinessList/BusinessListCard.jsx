import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
export default function BusinessListCard({Business}) {
  const router = useRouter();
  return (
    <TouchableOpacity
    style={{
        padding:10,
        margin:10,
        borderRadius:15,
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'row',
        gap:10,
    }}

    onPress={()=> router.push('businessdetail/'+ Business.id)}

    >
      <Image source={{uri:Business.imageUrl}}
      
      style={{
        width:120,
        height:120,
        borderRadius:15
      }}
      
      />

      <View>
        <Text
        style={{
            fontFamily:'outfit-bold',
            fontSize:20,
            
            
        }}
        >{Business.name}</Text>
        <Text
         style={{
            fontFamily:'outfit',
            fontSize:10,
            color:Colors.GRAY,
            flex:1
        }}
        >{Business.address} </Text>


        <View style={{display:'flex', flexDirection:'row', gap:5}}>
                <Image source={require('./../../assets/images/star.png')} 
                style={{
                  width:15,
                  height:15
                }}
        
                />
                <Text style={{fontFamily:'outift', fontSize:13}}> 5</Text>
              </View>
      </View>
    </TouchableOpacity>


  )
}