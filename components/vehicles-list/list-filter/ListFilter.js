import debounce from "../../../services/utils/debounce";
import styles from "./list-filter.stylesheet";
import { TextInput, View } from "react-native";

const ListFilter = (props) => {
    const changeTextHandler = (text) => {
        debounce(props.setSearchParam(text), 2000);
    };

    return (
        <View style={{backgroundColor:'#f47521', width: '100%'}}>
            <TextInput
                style={styles.textInput}
                placeholder={'nr rejestracyjny...'}
                placeholderTextColor={'#999'}
                onChangeText={changeTextHandler}
            />
        </View>
    );
}

export default ListFilter;