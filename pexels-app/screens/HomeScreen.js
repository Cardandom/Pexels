import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {Input, Button} from "react-native-elements";

import { getImages } from "../api/pexels";
import ImageList from "../components/ImageList";

const HomeScreen = ({ openSearch }) => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const loadImages = async (searchTerm) => {
    const res = await getImages(searchTerm);
    setPhotos(res.data.photos);
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleSearch = async()=> {
    await loadImages(searchTerm)
  }
  return (
    <>
    {openSearch && (
      <View style={styles.searchSection}>
        <Input 
        leftIcon={{type:"feather", name: "search", color: "#fff"}}
        placeholder="Buscar"
        style={styles.input}
        inputContainerStyle={styles.searchInput}
        onChangeText={(value)=> setSearchTerm(value)}
        />
        <Button title="Buscar"
        buttonStyle={styles.buttonSearch}
        onPress={()=> handleSearch()}
        />
      </View>
    )}
      <View style={styles.container}>
        <Text style={styles.totalResultText}>1000 resultados</Text>
        <ImageList photos={photos} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
  },
  totalResultText: {
    color: "#fff",
    textAlign: "right",
    width: "100%",
    paddingTop: 10
  },
  searchSection: {
    backgroundColor: "#1a1a1a",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 80,
    flex: 1/5,
    flexDirection: "row",
    alignItems: "center"
  },
  searchInput:{
    backgroundColor:"#2c292c",
    borderBottomWidth: 0,
    paddingLeft: 10,
    color: "white"
  },
  input: {
    color: "white"
  },
  buttonSearch: {
    backgroundColor: "#5ce1e6",
    marginBottom: 27
  }
});

export default HomeScreen;
