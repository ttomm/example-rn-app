import { DriverApiClient } from "../../services/clients/driver-api.client";
import debounce from "../../services/utils/debounce";
import { ActivityIndicator, FlatList, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import styles from './vehicle-list.stylesheet';
import ListItem from "./list-item/ListItem";
import ListFilter from "./list-filter/ListFilter";

const VehiclesList = () => {
    const driverApiClient = new DriverApiClient();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParam, setSearchParam] = useState('');
    const [vehiclesList, setVehiclesList] = useState([]);

    useEffect(() => {
        setLoading(true);
        driverApiClient.getVehiclesList(searchParam)
            .then(response => {
                setLoading(false);
                return response;
            })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Błąd!!! ' + response.status)
                }

                return response;
            })
            .then(response => response.json())
            .then(response => response.data)
            .then(data => {
                data = Array.isArray(data) ? data : [];
                setVehiclesList(() => data);
            })
            .catch(err => setError(err))
        // return () => {
        //
        // };
    }, [searchParam]);

    if (error) {
        return (
            <View style={styles.container}>
                <Text>{error.message}</Text>
            </View>
        );
    }

    // if (loading) {
    //     return (
    //         <View style={{
    //             flex: 1,
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             backgroundColor: '#eee',
    //             alignSelf: 'stretch'
    //         }}>
    //             <ActivityIndicator size="large" color="#0000ff"/>
    //         </View>
    //     );
    // }

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 600, fontSize: 16, marginTop: 50, marginBottom: 25, color: '#fff' }}>Lista pojazdów z API</Text>
            <ListFilter setSearchParam={setSearchParam}/>

            {
                loading
                    ? (
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#eee',
                            alignSelf: 'stretch'
                        }}>
                            <ActivityIndicator size="large" color="#0000ff"/>
                        </View>
                    )
                    : (
                        <FlatList
                            style={styles.vehiclesList}
                            ListEmptyComponent={
                                <Text>Brak elementów do wyświetlenia</Text>
                            }
                            // ItemSeparatorComponent={
                            //     // Platform.OS !== 'android' &&
                            //     (({highlighted}) => (
                            //         <View
                            //             style={[style.separator, highlighted && {marginLeft: 0}]}
                            //         />
                            //     ))
                            // }
                            data={vehiclesList}
                            keyExtractor={listItem => listItem.id}
                            alwaysBounceVertical={true}
                            renderItem={(listItemInfo) => <ListItem listItemInfo={listItemInfo}/>}
                            // ListFooterComponent={
                            //     <Text>Tyle...</Text>
                            // }
                        />
                    )
            }
        </View>
    );
}

export default VehiclesList;