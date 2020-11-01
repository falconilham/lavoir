import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register/Register'
import Building from './PickBuilding'
import Vendor from './Vendor/Vendor'
import Login from './Login'
import Menu from './Menu'
import Transaction from './Transaction'
import { useSelector } from 'react-redux'
const Stack = createStackNavigator();

const mainApp = [
    {
        name: 'Menu',
        component: Menu,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Register',
        component: Register,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Building',
        component: Building,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Vendor',
        component: Vendor,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Transaction',
        component: Transaction,
        options: {
            headerShown: false,
        },
    },

];

let login = [
    {
        name: 'Login',
        component: Login,
        options: {
            headerShown: false,
        },
    },
]

function Router() {
    let { email } = useSelector((state) => state?.state?.accountInfo)
    let isLogin = email && email.length > 0
    return (
        <Stack.Navigator>
            {(isLogin ? mainApp : login).map((item, i) => {
                return (
                    <Stack.Screen
                        key={i}
                        name={item.name}
                        component={item.component}
                        options={item.options}
                    />
                );
            })}
        </Stack.Navigator>
    )

}

export default Router