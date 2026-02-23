import { useRouter } from 'expo-router';
import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

import { db } from '../../configs/FirebaseConfig';


export default function Slider() {


   const router = useRouter();
const[sliderList,setSliderList] = useState([]);
useEffect(()=>{
GetSliderList();

},[]);

const GetSliderList = async() => {
setSliderList([]);
    const q = query(collection(db,'Slider'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) =>{
       // console.log(doc.data());
        setSliderList(prev=>[...prev,doc.data()]);
    }

    )
}

  return (
    <View>
      <Text style={{

        fontFamily:'outfit-bold',
        fontSize:17,
        paddingLeft:20,
        paddingTop:10,
        marginBottom:5

      }}>
        #ကြေငြာများ
      </Text>


      
            

      <FlatList

      
      data = {sliderList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingLeft:20}}
      renderItem={ ({item,index})=>(
        <Pressable onPress={() => router.push("/businessdetail/"+item.businessid)}>

        <Image source={{uri:item.imageurl}} 
        
        style={{
            width: 220,
            height:150 ,
            borderRadius:15,
            marginRight:15

        }}
        
        />
        </Pressable>
        


      )} 
      />


      

    </View>
  )
}
