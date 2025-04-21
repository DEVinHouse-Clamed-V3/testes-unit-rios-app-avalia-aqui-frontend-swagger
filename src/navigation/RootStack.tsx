import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Presentation from "../pages/Presentation";
import Products from "../pages/Products";
import Evaluate from "../pages/Evaluate";

const Stack = createNativeStackNavigator();

export default function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Presentation" 
                component={Presentation}
                options={{
                    header: () => <></>
                }} 
            />

            <Stack.Screen 
                name="Lista de Produtos" 
                component={Products}
                options={{
                    title: "Produtos",
                    headerStyle: {
                        backgroundColor: '#333'
                    },
                    headerTintColor: '#FFF',
                }}
            />

            <Stack.Screen 
                name="Avaliacoes" 
                component={Evaluate}
                options={{
                    title: "Avaliar",
                    headerStyle: {
                        backgroundColor: '#333'
                    },
                    headerTintColor: '#FFF',
                }}
            />
        </Stack.Navigator>
    );
}