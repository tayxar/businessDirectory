import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  return (
   <Tabs screenOptions={{headerShown:false,
    tabBarActiveTintColor: Colors.PRIMARY
   }}
   
   >
    <Tabs.Screen name='Home'
    options={{
        tabBarLable: 'Home',
        tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color} />
    }}
    />
    <Tabs.Screen name='Explore'
     options={{
        tabBarLable: 'Explore',
        tabBarIcon: ({color}) => <Ionicons name="search" size={24} color={color} />
    }}
    
    />
    <Tabs.Screen name='profile'
     options={{
        tabBarLable: 'profile',
        tabBarIcon: ({color}) => <Ionicons name="people-circle" size={24} color={color} />
    }}/>
   </Tabs>
  )
}