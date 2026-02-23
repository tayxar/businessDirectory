import { useLocalSearchParams, useNavigation } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import BusinessListCard from '../../Components/BusinessList/BusinessListCard';
import { db } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';




export default function SearchListByName() {
 
    const navigation = useNavigation();
    const {search} = useLocalSearchParams();
    const [businessList,setBusinessList] = useState();
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle:search
        });
       getBusinessList()
        
    },[]);
    /**
     * Used to get business list rby category
     */

    
  const getBusinessList=async()=>{
console.log(search+"Hellooooo");
setBusinessList([]);

setLoading(true)
 const q = query(
  collection(db, 'BusinessList'),
  where("name", ">=", search),
  where("name", "<=", search + "\uf8ff")
);
   
 //const q = query(collection(db,'BusinessList'),limit(10));
   
 const querySnapShot = await getDocs(q);

         querySnapShot.forEach((doc) =>{
           console.log(doc.data());
            setBusinessList(prev=>[...prev,{id:doc?.id,... doc.data()}])
            
        }
    
    )
    setLoading(false);

}
/*
const GetBusinessList=async()=>{
        setBusinessList([]);
        const q = query(collection(db,'BusinessList'),limit(10));
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((doc) =>{
            console.log(doc.data());
            setBusinessList(prev=>[...prev,doc.data()])
        }

        )

    }

  */

         
       

    

    return (
    <View>
    
{businessList?.length>0&&loading==false?
   <FlatList
      data={businessList}
      onRefresh={getBusinessList}
      refreshing={loading}
      renderItem={({item,index})=>(

        <BusinessListCard

Business = {item}
key={index}
/>

      )}
      >
        </FlatList>
        :
        loading?<ActivityIndicator
        
        style={{
          marginTop:'60%'
        }}

        size={'large'}
        color={Colors.PRIMARY}
        />:
        <Text
        
        style={{
            fontFamily:'outfit-bold',
            fontSize:20,
            textAlign:'center',
            marginTop:'20%',
            color:Colors.GRAY
        }}
        
        >No Business Found</Text>}

    </View>
  )
}