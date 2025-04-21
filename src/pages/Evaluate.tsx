import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import api from '../services/api';

import { SelectList } from 'react-native-dropdown-select-list'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { FontAwesome } from '@expo/vector-icons';

import { evaluateStyles } from '../styles/evaluateStyles';
import { productStyles } from '../styles/productStyles';
import { globalStyles } from '../styles/globalStyles';
import Button from '../components/Button';

type Evaluate = {
    id: number;
    productId: string;
    name: string;
    email: string;
    feedback: string;
    experience: string;
    recommend: boolean;
}

export default function Evaluate({route} : {route: any}) {
    // pegando parametros da rota
    const { productId } = route.params;
    
    const [ name, setName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ feedback, setFeedback ] = useState<string>('');
    const [ experience, setExperience ] = useState<string>('');
    const [ recommend, setRecommend ] = useState<boolean>(false);

    const [ loading, setLoading ] = useState(false);

    const [ selected, setSelected ] = useState<string>('');

    const data = [ 
        { key: '1', value: 'Ruim' }, 
        { key: '2', value: 'Regular' }, 
        { key: '3', value: 'Bom' }, 
        { key: '4', value: 'Muito bom' }, 
        { key: '5', value: 'Excelente' }
    ]

    function handleSubmit() {
        //validando campos do formulario
        if (!name || !email || !feedback || !experience) {
            return alert('Preencha todos os campos');
        }

        //enviando dados para a API
        api.post<Evaluate>('/evaluations',{
            productId: productId,
            name: name,
            email: email,
            feedback: feedback,
            experience: experience,
            recommend: recommend
        })
        .then(response => {
            setLoading(false);
            setEmail('');
            setName('');
            setFeedback('');
            setExperience('');
            setRecommend(false);
            setSelected('');
            alert('Feedback enviado com sucesso!');
        })
        .catch(error => {
            alert('Erro ao enviar feedback!');
        }).finally(() => {
            setLoading(false);
        });
    }


    return (
        <View style={ productStyles.container }>
            <View>
                <Text style={ globalStyles.title }>
                    Nos dê seu feedback
                </Text>

                <Text style={ [ globalStyles.subtitle,
                    {
                        marginBottom: 40
                    }]
                 }>
                    Sua opinião é importante para nós.
                    Por favor, compartilhe a sua experiência.
                </Text>
            </View>

            <View style={ evaluateStyles.inputArea }>
                <TextInput
                    style={ evaluateStyles.input } 
                    value={name}
                    onChangeText={setName}
                    placeholder="Seu nome..."
                />
            </View>

            <View style={ evaluateStyles.inputArea }>
                <TextInput 
                    style={ evaluateStyles.input } 
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Seu email..."
                />
            </View>

            <View style={ evaluateStyles.inputArea }>
                <TextInput 
                    style={ evaluateStyles.input } 
                    multiline
                    numberOfLines={3}
                    maxLength={40}
                    value={feedback}
                    onChangeText={setFeedback}
                    placeholder="Seu feedback..."
                />
            </View>

            <View>
                <Text style={[ globalStyles.subtitle, 
                    {
                        fontWeight: "bold", 
                        textAlign: "left",
                        color: "#333",
                        fontSize: 18,
                        marginBottom: 10
                    }] 
                }>
                    Compartilhe sua experiência
                </Text>

                <SelectList 
                    onSelect={() => setExperience(selected)}
                    setSelected={setSelected} 
                    data={data}  
                    arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />} 
                    searchicon={<FontAwesome name="search" size={12} color={'black'} />} 
                    search={false} 
                    boxStyles={{
                        borderRadius:8,
                        borderColor:'#666',
                        borderWidth:1,
                        backgroundColor:'#f5f5f5',
                        marginBottom: 20,
                    }} //override default styles
                    defaultOption={{ key:'0', value:'Selecione uma opção ...' }}   //default selected option
                />
            </View>

            <View style={ evaluateStyles.checkboxArea }>
                <BouncyCheckbox
                    size={20}
                    fillColor="#666"
                    unFillColor="#FFFFFF"
                    text="Recomendaria para outras pessoas?"
                    iconStyle={{ borderColor: "#666" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{ 
                        color: "#666", 
                        textDecorationLine: "none", 
                        fontSize: 16
                     }}
                    onPress={(recommend: boolean) => {setRecommend(!recommend)}}
                />
            </View>

            <Button
                fontSize={16} 
                title="Enviar feedback" 
                width={360}
                bgColor="#E59500"
                handleAction={() => handleSubmit()}
                loading={loading} 
            />
        </View>
    );
}