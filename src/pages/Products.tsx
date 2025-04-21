import { useEffect, useState } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { productStyles } from '../styles/productStyles';
import api from '../services/api';
import ProductsList from '../components/ProductsList';
import Loading from '../components/Loading';

type Product = {
    id: number;
    name: string;
    price: string;
    brand: string;
    description: string;
    image: string;
}

export default function Products({navigation}: {navigation: any}) {

    const [products, setProducts] = useState<Product[]>([]);

    const [ loading, setLoading ] = useState(true);
    const [ search, setSearch ] = useState('');
    const [ filteredProducts, setFilteredProducts ] = useState<Product[]>([]);

    useEffect(() => {
        function getProducts() {
            api.get('/products')
            .then((response) => {
                    setProducts(response.data)
                }
            )
            .catch((error) => {
                console.log("error: " + error);
                Alert.alert('Erro ao carregar produtos');
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
        }

        getProducts();

    }, []);

    function handleNavigateToEvaluate( id: Product ) {
        console.log(id);
        
        navigation.navigate('Avaliacoes',{
            prodtcId: id,
        });
    }

    return (
        <View style={ productStyles.container }>
            <Text style={ productStyles.title }>
                Lista de Produtos
            </Text>

            {   
                loading ?
                <View style={ productStyles.loading }>
                    <Loading size="large"color='#E59500'/>
                    <Text style={ productStyles.textLoading }>
                        Carregando produtos...
                    </Text>
                </View>
                :
                <FlatList 
                    data={products}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }: { item: Product }) => (
                        <ProductsList 
                            item={item} 
                            handleAction={() => handleNavigateToEvaluate(item.id as unknown as Product)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={ productStyles.text }>
                            Nenhum produto cadastrado
                        </Text>
                    )}
                />
            }
        </View>
    );
}