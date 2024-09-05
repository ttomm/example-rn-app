import Header from "../components/camera/header/Header";
import ImagePicker from "../components/camera/ImagePicker/ImagePicker";
import { View, Text, Image, FlatList } from "react-native";
import { useState } from "react";
import Checkbox from 'expo-checkbox';

const CameraScreen = () => {
    const [photosList, setPhotosList] = useState([ ]);

    const onPhotoCreatedCb = (createdPhoto) => {
        createdPhoto = createdPhoto.assets[0];
        setPhotosList(() => photosList.concat(createdPhoto));
    }

    function toggleSelect(fileName) {
        console.log('Zaznaczone:', fileName)
        setPhotosList(() => photosList.map(p => {
            if (p.fileName === fileName) {
                p['selected'] = !p['selected'];
            }
            return p;
        }))
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
                            <View>
                                <Image
                                    style={{ backgroundColor: 'yellow', width: 150, height: 150, margin: 8 }}
                                    source={{ uri: item.uri, width: 150, height: 150 }}
                                />
                                <Checkbox
                                    value={item.selected}
                                    onValueChange={() => toggleSelect(item.fileName)}

                                />
                            </View>
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