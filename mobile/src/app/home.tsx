import { Text, View, Alert } from "react-native";
import { useEffect } from "react";

import { api } from "@/services/api";

export default function Home() {
  
  async function fetchCategories() {
    try {
      //Rotas -Endpoints 
      const { data } = await api.get("/categories")
      console.log(data)


    } catch (error) {
      console.log(error)
      Alert.alert("Categorias", "Não foi possivel carregar as cetegorias.")
    }

  }
  
  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <View style={{flex: 1}}> 
      <Text>HOME</Text>
    </View>
  )


}