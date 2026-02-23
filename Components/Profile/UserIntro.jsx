import { Image, Text, View } from 'react-native'

export default function UserIntro() {
  return (
    <View
    style={{
        display:'flex',justifyContent:'center',alignItems:'center',marginTop:30
    }}>
      <Image  source={require('../../assets/images/favicon.png')}
      style={{
        width:70,height:70
      }}
      />
      <Text style={{fontFamily:'outfit-bold',fontSize:20}}> Mandalay Business Guide</Text>
    </View>
  )
}