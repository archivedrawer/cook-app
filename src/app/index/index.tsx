import Ingredients from "@/components/Ingredients";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha</Text>
            <Text style={styles.subtitle}>os produtos</Text>
            <Text style={styles.message}>
                Descubra receitas baseadas nos produtos que escolheu.
            </Text>
            <Ingredients />
        </View>
    );
}
