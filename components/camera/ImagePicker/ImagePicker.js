import { launchCameraAsync } from "expo-image-picker";
import { Pressable, View } from "react-native";
import { Icon } from "react-native-paper";
import React from "react";

const ImagePicker = ({ onPhotoCreated }) => {
    const takeImageHandler = async () => {
        const image = await launchCameraAsync({
            allowsEditing: true,
            ratio: [16, 9],
            quality: 0.5
        });

        if (image.canceled !== null && image.assets !== null) {
            onPhotoCreated(image);
        }
    }

    return (
        <View style={{backgroundColor: '#efefef', paddingVertical: 6, alignItems: 'center', marginBottom: 12}}>
            <Pressable onPress={takeImageHandler} android_ripple={{color: '#e5e5e5'}} style={({pressed}) => pressed && {color: '#e5e5e5'}}>
                <View style={{ borderColor: '#77a', borderRadius: 4, borderWidth: 1, paddingHorizontal: 10}}>
                <Icon size={36} source={'camera'} color={'#555'} />
                </View>
            </Pressable>
        </View>
    )
}

export default ImagePicker;