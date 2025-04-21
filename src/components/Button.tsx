import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from '../styles/buttonStyles';
import Loading from './Loading';

type ButtonProps = {
    title: string;
    width?: string | number;
    handleAction: Function;
    bgColor: string;
    fontSize?: number;
    loading?: boolean;
}

export default function Button({ title, width, handleAction, bgColor, fontSize, loading } : ButtonProps) {
    return (
        <TouchableOpacity
        style={[ buttonStyles.button, 
            { backgroundColor: bgColor, width: 
                typeof width === 'string' ? parseInt(width) : 
                width }]} 
        onPress={() => handleAction()}>
            <Text style={[ buttonStyles.textButton, { fontSize: fontSize } ]}>
                { loading ? <Loading size="small" color='#333' /> : title}
            </Text>
        </TouchableOpacity>
    );
}   