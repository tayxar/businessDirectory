import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function CategoryItem({category,onCategoryPress}) {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category) }>
    <View>
    <View>
        <View style={{

            padding:15,
            borderRadius:99,
            marginRight:15,
            backgroundColor:Colors.ICON_BG
        }}>
      <Image source={{uri:category.icon}}
      style={{width:23, height:23}}
      
      />
      
</View>

<Text
style={{
  fontSize:10,
  fontFamily:'outfit',
  textAlign:'center',
 
  alignContent:'center'
}}
>{category.name}</Text>


      
      
    </View>
    </View>
    </TouchableOpacity>
  )
}