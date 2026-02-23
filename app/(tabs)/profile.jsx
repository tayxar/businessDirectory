import { Text, View } from 'react-native'
import MenuList from '../../Components/Profile/MenuList'
import UserIntro from '../../Components/Profile/UserIntro'

export default function profile() {
  return (
    <View style={{
      padding:30
    }}>
      <Text
      style={{fontFamily:'outfit-bold',fontSize:35}}
      >profile</Text>
      {/* User Intro */}
<UserIntro></UserIntro>
      {/* Menu List */}

      <MenuList></MenuList>
    </View>
  )
}