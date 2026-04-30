import { collection, getDocs, limit, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { db } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';
import PopularBusinessCard from './PopularBusinessCard';

export default function PopularBusiness({refreshing}) {

    const[businessList,setBusinessList] = useState([]);

 useEffect(() => {
        GetBusinessList();
    }, []);

    useEffect( ()=>{
      if(refreshing){
        GetBusinessList();
}
    }
        
        ,[refreshing]);

    const GetBusinessList=async()=>{
        setBusinessList([]);
        const q = query(collection(db,'BusinessList'),limit(10));
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((doc) =>{
           // console.log(doc.data());
            setBusinessList(prev=>[...prev,{id:doc.id,... doc.data()}])
        }

        )

    }

  return (

    <View>
      <View style={{
      paddingTop:10,display:'flex',flexDirection:'row', justifyContent:'space-between'
      
              }}>
            <Text style={{
              paddingleft:20,
              marginTop:10,
              fontSize:17,
              fontFamily:'outfit-bold',
              
      
      
            }}>လုပ်ငန်းများ
            
            </Text>
      <Text style={{
      color: Colors.PRIMARY, fontFamily:'outfit-medium'
      
      }}>View All </Text>
      </View>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={businessList}
      renderItem={({item,index})=>(
           
        
        <PopularBusinessCard
        business={item}
        key={index}
       />

      )}
      >

      </FlatList>
      
    </View>
  )
}