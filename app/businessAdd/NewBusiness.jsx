import { useNavigation } from 'expo-router';

import * as ImagePicker from 'expo-image-picker';

import { collection, doc, getDocs, orderBy, query, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Colors } from '../../constants/Colors';
import { db, storage } from './../../configs/FirebaseConfig';




export default function NewBusiness() {

const navigation = useNavigation();
const [image,setImage] = useState(null);
const [image2,setImage2] = useState(null);
const [image3,setImage3] = useState(null);
const [categoryList,setCategoryList] = useState([]);

const[name,setName] = useState('');
const[about,setAbout] = useState('');
const[address,setAddress] = useState('');
const[website,setWebsite] = useState('');
const[category,setCategory] = useState('');
const[contact1,setContact1] = useState('');
const[contact2,setContact2] = useState('');
const[contact3,setContact3] = useState('');
const[imageUrl,setImageUrl] = useState('');
const[imageUrl2,setImageUrl2] = useState('');
const[imageUrl3,setImageUrl3] = useState('');

const[loading,setLoading] = useState(false);


const onAddNewBusiness = async () => {
  console.log("enter into onAdd New Business");
  setLoading(true);

  try {
    const uploads = [];

    if (image) {
      const resp = await fetch(image);
      const blob = await resp.blob();
      const fileName = Date.now().toString() + "1.jpg";
      const imageRef = ref(storage, "BusinessDirectoryApp/" + fileName);
      await uploadBytes(imageRef, blob);
      uploads.push(getDownloadURL(imageRef));
    } else {
      uploads.push(Promise.resolve("")); // empty if not provided
    }

    if (image2) {
      const resp2 = await fetch(image2);
      const blob2 = await resp2.blob();
      const fileName2 = Date.now().toString() + "2.jpg";
      const imageRef2 = ref(storage, "BusinessDirectoryApp/" + fileName2);
      await uploadBytes(imageRef2, blob2);
      uploads.push(getDownloadURL(imageRef2));
    } else {
      uploads.push(Promise.resolve(""));
    }

    if (image3) {
      const resp3 = await fetch(image3);
      const blob3 = await resp3.blob();
      const fileName3 = Date.now().toString() + "3.jpg";
      const imageRef3 = ref(storage, "BusinessDirectoryApp/" + fileName3);
      await uploadBytes(imageRef3, blob3);
      uploads.push(getDownloadURL(imageRef3));
    } else {
      uploads.push(Promise.resolve(""));
    }

    // Wait for all download URLs
    const [downloadUrl1, downloadUrl2, downloadUrl3] = await Promise.all(uploads);

    // Save to Firestore
    await saveBusinessDetails(downloadUrl1, downloadUrl2, downloadUrl3);

  } catch (error) {
    console.error("Upload failed:", error);
    ToastAndroid.show("Image upload failed", ToastAndroid.LONG);
  } finally {
    setLoading(false);
  }
};
/*
const onAddNewBusiness=async()=>{
  console.log("enter into onAdd New Business");
  setLoading(true);
  const fileName=Date.now().toString()+"1.jpg";
  const fileName2=Date.now().toString()+"2.jpg";
  const fileName3=Date.now().toString()+"3.jpg";
  const resp=await fetch(image);
  const resp2=await fetch(image2);
  const resp3=await fetch(image3);
  const blob = await resp.blob();
  const blob2 = await resp2.blob();
  const blob3 = await resp3.blob();
  const imageRef=ref(storage,'BusinessDirectoryApp/' + fileName);
  const imageRef2=ref(storage,'BusinessDirectoryApp/' + fileName2);
  const imageRef3=ref(storage,'BusinessDirectoryApp/' + fileName3);
  uploadBytes(imageRef,blob).then((snapShot)=>{
    console.log("File1Uploaded");
  }).then(resp=>{
    getDownloadURL(imageRef).then(async(downloadUrl)=>{
     // console.log(downloadUrl);
      setImageUrl(downloadUrl);
    })
  })

  uploadBytes(imageRef2,blob2).then((snapShot)=>{
    console.log("File2Uploaded");
  }).then(resp=>{
    getDownloadURL(imageRef2).then(async(downloadUrl)=>{
      //console.log(downloadUrl);
      setImageUrl2(downloadUrl);
    })
  })

  uploadBytes(imageRef3,blob3).then((snapShot)=>{
    console.log("File3Uploaded");
  }).then(resp=>{
    getDownloadURL(imageRef3).then(async(downloadUrl)=>{
     // console.log(downloadUrl);
      setImageUrl3(downloadUrl);
    })
  })

  saveBusinessDetails();

}
*/

useEffect(()=>{
    navigation.setOptions({
        HeaderTitle:'Add New Business',
        
        headerShown:true,
        }
    )
    GetCategoryList();
}
,[])


useEffect(() => {
  (async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  })();
}, []);


const onImagePick=async()=>{
  console.log('click');
  let result = await ImagePicker.launchImageLibraryAsync({
  mediaTypes: ['images'], 
 // ✅ correct for SDK 54
  allowsEditing: true,
  aspect: [4, 3],
  quality: 1,
});

    setImage(result?.assets[0].uri);
    console.log(result);
  
}

const onImagePick2=async()=>{
  console.log('click');
  let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], 
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setImage2(result?.assets[0].uri);
    console.log(result);
  
}

const onImagePick3 = async () => {
  console.log('click');
 let result3 = await ImagePicker.launchImageLibraryAsync({
  mediaTypes: ['images'], 

  allowsEditing: true,
  aspect: [4, 3],
  quality: 1,
});


  if (!result3.canceled) {
    setImage3(result3.assets[0].uri);
    console.log(result3);
  }
};


const GetCategoryList=async()=>{
  setCategoryList([]);
  const q= query(collection(db,'SubCategory'),orderBy('alphabet'));
  const snapShot= await getDocs(q);

  snapShot.forEach((doc)=>{

 //  console.log(doc.data());
   setCategoryList(prev=>[...prev,{
    label:(doc.data()).name,
    value:(doc.data()).name
   }])
    
  })
}

const saveBusinessDetails = async (url1, url2, url3) => {
  console.log("enter into save businessdetail method!");
  await setDoc(
    doc(db, "BusinessList", Date.now().toString()),
    {
      name,
      SubCategory: category,
      about,
      address,
      category: "",
      contact: contact1,
      contact2,
      contact3,
      imageUrl: url1,
      imageUrl2: url2,
      imageUrl3: url3,
      website,
    }
  );
  ToastAndroid.show("Business Added successfully", ToastAndroid.LONG);
};

/*
const saveBusinessDetails = async () => {
  console.log("enter into save businessdetail method!");
  await setDoc(
    doc(db, 'BusinessList', Date.now().toString()), 
    {
      name: name,
      SubCategory: category,
      about: about,
      address: address,
      category: '',
      contact:contact1,
      contact2:contact2,
      contact3:contact3,
      imageUrl: imageUrl,
      imageUrl2:imageUrl2,
      imageUrl3:imageUrl3,
      website:website

    }
  );
  setLoading(false);
  ToastAndroid.show('Business Added successfully',ToastAndroid.LONG);
};

*/
  return (
    <ScrollView style={{padding:20}}>
      <Text 
      style={{
        fontFamily:'outfit-bold',
        fontSize:25
      }}
      >Add New Business</Text>
      <Text style={{
        fontFamily:'outfit',
        color:Colors.GRAY
      }}>
        Fill al details in order to add new business
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

      <TouchableOpacity style={{
        marginTop:20
      }}
      onPress={()=>onImagePick()}
      >
      {!image? <Image source={require('../../assets/images/placeHolder.png')} 
      style={{
        width:100,
        height:100
      }}
      />:
       <Image source={{uri:image}} 
      style={{
        width:100,
        height:100,
        borderRadius:15
      }}
      />

    }

      </TouchableOpacity>
      <TouchableOpacity style={{
        marginTop:20
      }}
      onPress={()=>onImagePick2()}
      >
      {!image2? <Image source={require('../../assets/images/placeHolder.png')} 
      style={{
        width:100,
        height:100
      }}
      />:
       <Image source={{uri:image2}} 
      style={{
        width:100,
        height:100,
        borderRadius:15
      }}
      />

    }

      </TouchableOpacity>
      <TouchableOpacity style={{
        marginTop:20
      }}
      onPress={()=>onImagePick3()}
      >
      {!image3? <Image source={require('../../assets/images/placeHolder.png')} 
      style={{
        width:100,
        height:100
      }}
      />:
       <Image source={{uri:image3}} 
      style={{
        width:100,
        height:100,
        borderRadius:15
      }}
      />

    }

      </TouchableOpacity>
      </View>

      <View>
        <TextInput placeholder='Name'
        onChangeText={(v)=>setName(v)}
         style={{
          padding:8,
          borderWidth:1,
          borderRadius:5,
          fontSize:17,
          backgroundColor:'#fff',
          marginTop:10,
          borderColor:Colors.PRIMARY,
          fontFamily:'outfit'
         }}
        />
        <TextInput placeholder='Address'

        onChangeText={(v)=>setAddress(v)}
         style={{
          padding:8,
          borderWidth:1,
          borderRadius:5,
          fontSize:17,
          backgroundColor:'#fff',
          marginTop:10,
          borderColor:Colors.PRIMARY,
          fontFamily:'outfit'
         }}
        />
         <TextInput placeholder='contact 1'
         onChangeText={(v)=>setContact1(v)}
         style={{
          padding:8,
          borderWidth:1,
          borderRadius:5,
          fontSize:17,
          backgroundColor:'#fff',
          marginTop:10,
          borderColor:Colors.PRIMARY,
          fontFamily:'outfit'
         }}
        />
         <TextInput placeholder='contact 2'
         onChangeText={(v)=>setContact2(v)}
         style={{
          padding:8,
          borderWidth:1,
          borderRadius:5,
          fontSize:17,
          backgroundColor:'#fff',
          marginTop:10,
          borderColor:Colors.PRIMARY,
          fontFamily:'outfit'
         }}
        />
         <TextInput placeholder='contact 3'
         onChangeText={(v)=>setContact3(v)}
         style={{
          padding:8,
          borderWidth:1,
          borderRadius:5,
          fontSize:17,
          backgroundColor:'#fff',
          marginTop:10,
          borderColor:Colors.PRIMARY,
          fontFamily:'outfit'
         }}
        />
        <TextInput placeholder='website'
        onChangeText={(v)=>setWebsite(v)}
         style={{
          padding:8,
          borderWidth:1,
          borderRadius:5,
          fontSize:17,
          backgroundColor:'#fff',
          marginTop:10,
          borderColor:Colors.PRIMARY,
          fontFamily:'outfit'
         }}
        />
        <TextInput placeholder='about'
        onChangeText={(v)=>setAbout(v)}
        multiline
        numberOfLines={5}
         style={{
          padding:8,
          borderWidth:1,
          borderRadius:5,
          fontSize:17,
          backgroundColor:'#fff',
          marginTop:10,
          borderColor:Colors.PRIMARY,
          fontFamily:'outfit',
          height:100,
         }}
        />

        

      </View>
      <View
       style={{
           padding:8,
          borderWidth:1,
          borderRadius:5,
          fontSize:12,
          backgroundColor:'#fff',
          marginTop:10,
          borderColor:Colors.PRIMARY,
          fontFamily:'outfit',
         }}>
         <RNPickerSelect
        
      onValueChange={(value) => setCategory(value)}
      items={categoryList}
    />
      </View>

     <TouchableOpacity
     style={{
      padding:10,
      backgroundColor:Colors.PRIMARY,
      borderRadius:5,
      marginTop:20,
      marginBottom:60
     }}
     onPress={()=>onAddNewBusiness()}
     >
      <Text
      style={{
        textAlign:'center',
        fontFamily:'outfit',
        color:'#fff'
      }}
      >Add New Business</Text>
     </TouchableOpacity>

    </ScrollView>
  )
}