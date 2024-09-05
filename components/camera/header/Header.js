import { View, Text } from "react-native";
import React from "react";

const Header = () => {
    return (
        <View style={{backgroundColor: '#f47521', height: 154, alignItems: 'center'}}>
            <Text style={{fontWeight: 600, fontSize: 16, marginTop: 50, marginBottom: 25, color: '#fff', alignSelf: 'center'}}>Zrób zdjęcie</Text>
        </View>
    );
}

export default Header;