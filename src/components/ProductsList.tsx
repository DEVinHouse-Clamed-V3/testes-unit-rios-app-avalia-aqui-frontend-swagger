import { View, Text, Image } from 'react-native';
import { productsListStyles } from '../styles/productsListStyles';
import Button from './Button';

type Product = {
    id: number;
    name: string;
    price: string;
    brand: string;
    description: string;
    image: string;
}

type ProductsListProps = {
    item: Product;
    handleAction: Function;
}


export default function ProductsList({ item, handleAction }: ProductsListProps) {

    return (
        <View style={ productsListStyles.container}>
            <Image 
                style={ productsListStyles.image }
                source={{uri: item.image}}
            />

            <View style= { productsListStyles.detailsArea}>
                <Text style={ productsListStyles.name }>
                    { item.name }
                </Text>
                <Text style={ productsListStyles.brand }>
                    { item.brand}
                </Text>
                <Text style={ productsListStyles.description }>
                    { item.description }
                </Text>
                <Text style={ productsListStyles.price }>
                    { item.price }
                </Text> 
                
                <View style={{ marginTop: 10 }}>
                    <Button 
                        title="avaliar" 
                        width={100}
                        bgColor="#E59500"
                        handleAction={() => handleAction(item.id)} 
                        fontSize={14}
                    /> 
                </View>
                            
            </View>
        </View>
    );
}