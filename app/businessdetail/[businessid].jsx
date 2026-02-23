import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';

import About from '../../Components/BusinessDetails/About';
import AboutGallery from '../../Components/BusinessDetails/AboutGallery';
import ActionButton from '../../Components/BusinessDetails/ActionButton';
import Intro2 from '../../Components/BusinessDetails/Intro2';
import { db } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';





export default function BusinessDetail() {
    const[loading,setLoading] = useState(true);
    const {businessid} = useLocalSearchParams();
    const[business2,setBusiness]=useState(null);
    

/*  New Codes   */

useEffect(() => {
    const GetBusinessDetailById = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, 'BusinessList', businessid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setBusiness({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
          setBusiness(null);
        }
      } catch (error) {
        console.error("Error fetching document:", error);
        setBusiness(null);
      } finally {
        setLoading(false);
      }
    };

    if (businessid) {
      GetBusinessDetailById();
    }
  }, [businessid]);

/* End of New Code */

    /*
    useEffect(() => {
        GetBusinessDetailById();
    },[]);
    /**
     * Used to get BusinessDetail by Id
     */
/*
    const GetBusinessDetailById=async()=>{
      setBusiness([]);
        setloading(true);
       // const q= query(collection(db,'BusinessList'))
       try{
       const docRef=doc(db,'BusinessList',businessid);
       const docSnap = await getDoc(docRef);
       if(docSnap.exists()){
        console.log("Document data:",docSnap.data());
        setBusiness(docSnap.data());
        console.log('setbix success');
        setloading(false)
       }
       else{
        console.log("No such document!");
        setBusiness(null);
       }
      }catch(error){
        console.log("Error fetching Document",error);
        setBusiness(null);

      }
      finally{
        setloading(false);
      }
    }*/


   if (loading) {
    return (
      <ActivityIndicator
        style={{ marginTop: '70%' }}
        size="large"
        color={Colors.PRIMARY}
      />
    );
  }

  if (!business2) {
    return <Text>No business found.</Text>;
  }

  return (
    <FlatList
    data={[]} // Keep empty if only using header/footer
    ListHeaderComponent={
      <>
        <Intro2 Business={business2} />
        <ActionButton business={business2} />
        <About business={business2} />
        {/* If AboutGallery has its own FlatList, it may still cause issues if vertical */}
        <AboutGallery business={business2} />
      </>
    }
    renderItem={null}
    keyExtractor={(item, index) => index.toString()}
  />
  
  );

}