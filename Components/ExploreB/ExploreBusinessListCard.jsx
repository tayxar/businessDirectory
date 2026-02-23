import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function ExploreBusinessListCard({categoryList}) {
    const router=useRouter();
  
    return (

  

    <TouchableOpacity
    onPress={()=> 
      //console.log(categoryList?.SCID)
      router.push('/businessdetail2/'+categoryList.name) 
      }
    >
     <View
     style={{

        backgroundColor:"rgba(126, 41, 110, 1)",
        
        borderRadius:10
     }}
     >
       
        <Text
        style={{
            color:"#fff",
            fontFamily:'outfit-bold',
            fontSize:14,
            paddingLeft:20
        }}
        >{categoryList?.name}</Text>
       
        
     </View>
    </TouchableOpacity>
  )
}