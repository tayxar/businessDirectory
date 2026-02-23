import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { deleteDoc, doc } from 'firebase/firestore';
import { Alert, Image, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { db } from './../../configs/FirebaseConfig';

export default function Intro2({Business}) {


    const router = useRouter();
    const onDelete = () => {

      Alert.alert('Do you really want to delete?','Do you really want to delete?',[
        {
          text:'cancel',
          style: 'cancel',
        },
        {
          text:'delete',
          style: 'destructive',
          onPress:()=>deleteBusiness()
        }
      ])
    }

    const deleteBusiness=async()=>{
   //   console.log("Delete Business" + Business?.id);
   await deleteDoc(doc(db,'BusinessList',Business?.id));
      router.back();
    //  console.log("Full Business Object:", Business);
       ToastAndroid.show('Business Deleted!', ToastAndroid.SHORT);
    }

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
    
    padding:'30'

}}

>
     <TouchableOpacity
     onPress={()=> router.back()}
     ><Ionicons name="arrow-back-circle" size={40} color="white" /></TouchableOpacity>



</View>

         <Image source={{uri:Business?.imageUrl}}
      
      style={{
        width:'100%',
        height:260,
        marginTop:5
        
      }}
      
      />
 
 
      <View style={{
        
        padding:'10',
        marginTop:-20,
        backgroundColor:"#fff",
        borderRadius:25,
        borderTopRightRadius:25,
        borderTopLeftRadius:25
        
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
            fontFamily: 'outfit',
           

        }}
        >{Business.address}
        
        </Text>
<TouchableOpacity onPress={()=> onDelete()}>
        <Ionicons name="trash" size={24} color="black" />
        </TouchableOpacity>
        </View>
      </View>
      
    
  )
}