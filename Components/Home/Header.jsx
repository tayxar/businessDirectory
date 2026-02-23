import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Colors } from '../../constants/Colors';


export default function  Header() {

  //  const {user}=useUser();
  const[search,setsearch] = useState();
  const router = useRouter();

  return (
    <View 
    style ={{

        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
        
    }}
    >
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
      }}>
      {/*   <Image source={{uri:user?.imageUrl}} 
        
        style={{
            width:45,
            height: 45,
            borderRadius:99

        }}
        
        />
        */}
        <View>
            <Text
            style={{ color:"#fff"}}
            >Welcome</Text>
            <Text
            style={{

                fontSize :19, fontFamily:'outfit', color:'#fff'

            }}
            >
              {/*user?.fullName*/}
              Mandalay Business Guide
            </Text>
        </View>
      </View>
      
      <View style={{

        display : 'flex',
        flexDirection : 'row',
        gap : 10,
        alignItems : 'center',
        backgroundColor : '#fff',
        padding : 10,
        marginVertical : 10,
        marginTop: 15,
        borderRadius: 8
      }}>
        {/* Search Bar */}

   
  {/* 1. Search Icon */}
  <Ionicons 
    name="search" 
    size={24} 
    color="black" 
    onPress={() => search && router.push('/searchlist/' + search)} 
  />

  {/* 2. TextInput with Keyboard Submit Support */}
  <TextInput 
    placeholder='Search...'
    onChangeText={(v) => setsearch(v)}
    style={{
      fontFamily: 'outfit',
      fontSize: 16,
      flex: 1 // Ensures the input takes up the remaining space
    }}
    // Allows searching by pressing Enter/Return on the keyboard
    onSubmitEditing={() => search && router.push('/searchlist/' + search)}
    returnKeyType="search" 
  />

      </View>
    </View>
  )
}