import { useFonts } from "expo-font";
import { Stack } from 'expo-router';
import * as SecureStore from "expo-secure-store";

const tokenCache ={

  async getToken(key: string){
try{
  return SecureStore.getItemAsync(key);
}
catch(err){
  return null;
}}
  ,


 async saveToken(key: string, value:string){

    try{
      return SecureStore.setItemAsync(key,value);
    }
    catch(err){
      return;
    }
      }

 
    };




export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
useFonts({
 'outfit' :require('./../assets/fonts/NotoSansMyanmar-Regular.ttf'),
 'outfit-medium' :require('./../assets/fonts/NotoSansMyanmar-Medium.ttf'),
 'outfit-bold' :require('./../assets/fonts/NotoSansMyanmar-Bold.ttf')
}

)

  return (

    <Stack screenOptions={{headerShown: false}}>
  <Stack.Screen name="(tabs)"  />
 
</Stack>

  /*
    <ClerkProvider  tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        

<Stack screenOptions={{headerShown: false}}>
  <Stack.Screen name="(tabs)"  />
 
</Stack>

</SignedIn>

<SignedOut>

  
  <LoginScreen></LoginScreen>
  </SignedOut>

</ClerkProvider>*/



  );
}
