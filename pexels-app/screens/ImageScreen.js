import { View, Image, StyleSheet, Text, Pressable, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar } from "react-native-elements";
import * as WebBrowser from 'expo-web-browser';
import ImageList from "../components/ImageList";
import { getImages } from "../api/pexels";



const ImageScreen = ({ route }) => {
  const { image } = route.params;

  const [photos, setPhotos] = useState([]);

  const loadImages = async () => {
    const res = await getImages();
    setPhotos(res.data.photos);
  };

  useEffect(() => {
    loadImages();
  }, []);

const handlePress = async()=>
await WebBrowser.openBrowserAsync(image.photographer_url);


  return (
    <View style={styles.photographerHeader}>
      <Image source={{ uri: image.src.medium, height: 350 }} />
      <View style={{
        display: "flex",
        paddingVertical: 18,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        width: '100%'
      }}>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
          <Avatar
            title={image.photographer
              .split(" ")
              .map((string) => string[0])
              .join("")
              .toUpperCase()}
            containerStyle={{ backgroundColor: "#5ce1e6" }}
            rounded
          />
          <Pressable onPress={()=> handlePress()}>
            <Text style={styles.textPhotographer} >{image.photographer}</Text>
          </Pressable>
        </View>
        <Button title="Descargar" buttonStyle={{ backgroundColor: '#5ce1e6'}}/>
      </View>
      <View>
        <ImageList photos={photos}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  photographerHeader:{
    backgroundColor: "#1a1a1a",
    flex: 1,
    flexDirection: "column",
    padding: 10
  },
  textPhotographer: {
    color: "#fff",
    fontWeight: "bold",
    marginStart: 5,
    fontSize: 18
  }
});

export default ImageScreen;
