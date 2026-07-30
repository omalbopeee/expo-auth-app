import {View,Text,Button} from "react-native";
import {useNavigation} from "@react-navigation/core";


const HomeScreen = () => {
    const navigation = useNavigation();
    return(
        <View>
            <Text>Home Screen</Text>
            <Button title = "Go To Details"  onPress = {() => navigation.navigate('Details',{itemId:42})}/>
        </View>
    );
};

export default HomeScreen;