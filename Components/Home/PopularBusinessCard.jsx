import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function PopularBusinessCard({business}) {
  const router = useRouter();
  
  return (
    <TouchableOpacity
      onPress={() => router.push("/businessdetail/"+business?.id)}

    style={{

        marginLeft:20,
        padding:10,
        backgroundColor:'#fff',
        borderRadius:15

    }}
    >


      <Image source={{uri:business.imageUrl}} 
      style={{
        width:200,height:130, borderRadius:15
      }}
      
      />
      <View style={{marginTop:7,gap:5}}>
        <Text style={{
          fontFamily:'outfit-bold',fontSize:10
        }}>
          {business.name}
        </Text>

        <Text style={{
          fontFamily:'outfit-bold',fontSize:9, color:Colors.GRAY, flexWrap: 'wrap',
    width: 150 
        }}
        
        >
          {business.address}
        </Text>
      </View>
      <View
      style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}
      >

        <View style={{display:'flex', flexDirection:'row', gap:5}}>
        <Image source={require('./../../assets/images/star.png')} 
        style={{
          width:15,
          height:15
        }}

        />
        <Text style={{fontFamily:'outift', fontSize:13}}> 5</Text>
      </View>


      <Text
      
      style={{
        fontFamily:'outfit',backgroundColor:Colors.PRIMARY, color:'#fff',padding:2,fontSize:9, borderRadius:10
      }}

      >{business.SubCategory}</Text>

      

      </View>
      

    </TouchableOpacity>
  )
}