import Header from "../components/camera/header/Header";
import ImagePicker from "../components/camera/ImagePicker/ImagePicker";
import { ScrollView, View, Text, Image, FlatList } from "react-native";
import { useState } from "react";

const CameraScreen = () => {
    const [photosList, setPhotosList] = useState([{
        "assetId": null,
        "base64": null,
        "duration": null,
        "exif": null,
        "fileName": "4ea71a1b-a924-4e03-a510-cd5735829ace.jpeg",
        "fileSize": 717933,
        "height": 3686,
        "mimeType": "image/jpeg",
        "rotation": null,
        "type": "image",
        "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Ffirst-react-native-ca5f4a5a-ea14-43a7-bffd-9a5738ff46ed/ImagePicker/4ea71a1b-a924-4e03-a510-cd5735829ace.jpeg",
        "width": 2764
    }
    ]);

    const onPhotoCreatedCb = (createdPhoto) => {
        createdPhoto = createdPhoto.assets[0];
        setPhotosList(() => photosList.concat(createdPhoto))
        console.log('Zdjęć ' + photosList.length, createdPhoto)
    }
    return (
        <View>
            <Header></Header>
            <ImagePicker onPhotoCreated={onPhotoCreatedCb}></ImagePicker>
            <Text style={{ margin: 8 }}>Liczba zdjęć: {photosList.length}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <FlatList

                    data={photosList}
                    numColumns={2}
                    renderItem={({ item }) => {
                        console.log('RENDER ', item)
                        return (
                            <Image
                                style={{ backgroundColor: 'yellow', width: 150, height: 150, margin: 8 }}
                                source={{ uri: item.uri, width: 150, height: 150 }}
                            />
                        );
                    }
                    }
                    keyExtractor={({ index }) => index}
                />
            </View>
        </View>
    );
}

export default CameraScreen;