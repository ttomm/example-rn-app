import { Text, View, Pressable } from "react-native";
import { useState } from "react";

const ListItem = ({ listItemInfo }) => {
    const [visible, setVisible] = useState(false);
    const pressItemHandler = () => {
        setVisible(!visible);
    }

    return (
        <Pressable onPress={pressItemHandler} android_ripple={{color: '#e5e5e5'}} style={({pressed}) => pressed && {color: '#e5e5e5'}}>
            <View
                style={{ paddingHorizontal: 20, paddingVertical: 15, borderBottomColor: '#ddd', borderBottomWidth: 1 }}>

                <Text style={{ fontSize: 14 }}>{listItemInfo.item.registration_number}</Text>
                <View>
                    {
                        visible &&
                        <Text style={{ fontSize: 12, color: '#999' }}>{listItemInfo.item.name}</Text>
                    }
                </View>
            </View>
        </Pressable>
    );
}

export default ListItem;