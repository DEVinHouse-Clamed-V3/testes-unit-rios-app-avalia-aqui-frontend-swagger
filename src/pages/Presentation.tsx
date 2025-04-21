import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { presentationStyles } from '../styles/presentationStyles';
import Button from '../components/Button';

export default function Presentation({navigation}: any) {

    function handleNavigateToProducts() {
        navigation.navigate('Lista de Produtos');
    }
    return (
        <SafeAreaView style={ presentationStyles.container }>
            <StatusBar  style="light" />

            <View style={ presentationStyles.imageArea}>
                <Image 
                    style={ presentationStyles.image }
                    source={ require('../assets/product1.png') }
                />

                <Image 
                    style={ presentationStyles.image }
                    source={ require('../assets/product2.png') }
                />

                <Image 
                    style={ presentationStyles. imageLandscape }
                    source={ require('../assets/product3.png') }
                />
            </View>

            <View style={ presentationStyles.textArea }>
                <Text style={ presentationStyles.title }>
                    Avalia Aqui
                </Text>

                <Text  style={ presentationStyles.subtitle }>
                    Escolha o produto qu você deseja avaliar
                    e compartilhe sua experiência com outros consumidores
                </Text>
            </View>

            <View  style={ presentationStyles.buttonArea }>
                <Button 
                    title="Entrar"
                    width={160 }
                    handleAction={handleNavigateToProducts}
                    bgColor="#E59500"
                />
            </View>

        </SafeAreaView>
    );
}