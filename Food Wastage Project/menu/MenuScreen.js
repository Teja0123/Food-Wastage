import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image, FlatList , Dimensions, ColorChange,   } from "react-native";
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
 import Wednesday from './wed';
import Icon1 from "react-native-vector-icons/Ionicons"
import Monday from "./Monday"
import Tuesday from "./Tuesday"
import Thursday from './thus';
import Friday from './fri';
import Saturday from './sat';
import Sunday from './sun';
export default function MenuScreen(){

const Drawer = createDrawerNavigator();


    return(
        <Drawer.Navigator
         screenOptions={({route}) =>({
            drawerPosition:"top",
            drawerActiveBackgroundColor:"#a0a0fc",
            drawerInactiveBackgroundColor:"#fff",
         drawerIcon:({focused,color}) => {
                   let IconName ;
                   if(route.name == 'Bounce'){
                     IconName = focused ? 'disc' : 'disc-outline'
                   }
                   else if(route.name == 'LeftToRight'){
                     IconName = focused ? "play-forward-circle" : "play-forward-circle-outline"
                   }
                //    else if(route.name == 'Profile'){
                //      IconName = focused ? "person" : 'person-outline'
                //    }
         
                   return <Icon1 name={IconName} color={color} size={28} />
                 },
                 drawerStyle:{
                    width:250,

                 },
                 drawerLabelStyle:{
                    fontSize:20
                 },
                 
            

         })}
        
        >
            <Drawer.Screen name="Monday"   component={Monday}  />
            <Drawer.Screen  name="Tuesday" component={Tuesday}/>
            <Drawer.Screen  name="Wednesday" component={Wednesday}/>
            <Drawer.Screen  name="Thursday" component={Thursday}/>
            <Drawer.Screen  name="Friday" component={Tuesday}/>
            <Drawer.Screen  name="Saturday" component={Saturday}/>
            <Drawer.Screen  name="Sunday" component={Sunday}/>


        </Drawer.Navigator>
    )

}