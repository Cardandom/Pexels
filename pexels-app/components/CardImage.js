import React from 'react'
import { Image, Pressable,StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CardImage = ({image}) => {

  const navigation = useNavigation();

  return (
    <Pressable
    style={styles.CardImage}
    onPress={() => navigation.navigate("ImageScreen", {image})}
    >
      <Image
      source={{
        uri:image.src.tiny
        ? image.src.tiny
        : "https://images.pexels.com/photos/14823950/pexels-photo-14823950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }}
      style={{height: 180, width:'100%'}}
      />
    </Pressable>
    
  )
}

const styles = StyleSheet.create({
    CardImage : {
        display: 'flex',
        width: '49.5%',
        margin: 4,
        justifyContent: 'space-between',
        backgroundColor: '#2c292c',
        borderWidth: 0,
        borderRadius: 5
    }
})

export default CardImage