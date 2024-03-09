import { Image, Pressable, Text } from "react-native";
import { styles } from "./styles";

export default function Ingredient() {
    return (
        <Pressable style={styles.container}>
            <Image style={styles.image} />
            <Text style={styles.title}>Maçã</Text>
        </Pressable>
    );
}
