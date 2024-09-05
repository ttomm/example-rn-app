import React from 'react';
import VehiclesList from "./components/vehicles-list/VehiclesList";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text } from "react-native";
import CameraScreen from "./screens/Camera";

export default function App() {
    const Tab = createMaterialBottomTabNavigator();

    return (
        <>
        <StatusBar style='light'/>
        <Provider>

            <NavigationContainer >
                <Tab.Navigator>
                    <Tab.Screen
                        name="Pojazdy"
                        component={VehiclesList}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="car" color={color} size={26} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Zrób zdjęcie"
                        component={CameraScreen}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="camera" color={color} size={26} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
        </>
    );
}
