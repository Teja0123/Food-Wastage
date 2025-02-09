import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image, FlatList , Dimensions, TouchableOpacity  } from "react-native";
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import Modal  from 'react-native-modal';
import Svg, {Path} from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
function DashboardScreen({navigation}){
 const {width, height} = Dimensions.get("screen");
 const [display, setdisplay] = useState(false);
 const [logout, setlogout] = useState(false);
 const Courses=[
    {
      id:1,
      course:"BreakFast",
      num:'P',
      enrolled:"Present",
      img:require("./assets/courses.jpg"),

    },
    {
      id:2,
      course:"Lunch",
      num:'P',
      enrolled:"Present",
      img:require("./assets/coding profiles.jpg"),
    },
    {
      id:3,
      course:"Snacks",
      num:'P',
      enrolled:"Present",
      img:require("./assets/jpath.jpg"),
    },
    
    {
      id:4,
      course:"Dinner",
      num:'P',
      enrolled:"Present",
      img:require("./assets/vcard.jpg"),
    },
  
  ]

  const Fun2=()=>{
    {navigation.navigate("Login")};
  }
    return(
        

        <SafeAreaView>
           
            <View style={{width:width,height:height}}>
                <View style={style.profilep}>
                <View style={{height:"80%",width:"100%"}}>
                  <View style={{width:"100%",height:"30%",justifyContent:"space-between",display:"flex",flexDirection:"row"}}>
                  
          
          <Modal
            isVisible={display}
            onBackdropPress={() => setdisplay(false)} 
            animationIn="zoomIn"
            animationOut="zoomOut"
          >
            <View style={{width:width,height:height,justifyContent:"center",alignItems:"center",marginLeft:-20}}>
            <View style=
            {{width:300,height:200,backgroundColor:"white",justifyContent:"center",alignItems:"center",borderRadius:10,display:"flex",rowGap:10,shadowColor:"black",elevation:10}}>
              <View style={{width:290,height:80}}>
               <Image style={{width:"100%",height:"100%"}} source={require("./assets/foodwastage.jpg")} />
              </View>
              {/* <Text style={{fontSize:18}}>Support Details</Text> */}
              <Text style={{fontSize:15}}>📞 +91 9391821599</Text>
              <Text >📧 FWTM@gmail.com</Text>
            </View>
            </View>
          </Modal>
          <View
            style={{
              width: "10%",
              height: "80%",
              marginLeft: 10,
              marginTop: 20,
            
            }}
          >
            <TouchableOpacity onPress={() =>setdisplay(true)}>
              <Image source={require("./assets/fg1.jpg")} style={{ width: "100%", height: "100%" }}/>
            </TouchableOpacity>
          </View>
          <Modal isVisible={logout}
          onBackdropPress={() => setlogout(false)}
          animationIn="zoomIn"
          animationOut="zoomOut">
            <View style={{width:width,height:height,justifyContent:"center",alignItems:"center",marginLeft:-20}}>
            <View style={{width:250,borderWidth:1,height:150,backgroundColor:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:10,display:"flex",rowGap:10,shadowColor:"black",elevation:10}}>
              <View style={{marginTop:-10}}><Text style={{fontSize:15,fontWeight:"bold"}}>Do you want to Logout ?</Text></View>
              <View style={{marginTop:10,display:"flex",flexDirection:"row",columnGap:20}}>
              <TouchableOpacity onPress={Fun2}>
                <Button style={{width:70,height:40,borderWidth:1,borderColor:"black",justifyContent:"center",alignItems:"center",borderRadius:10}}><Text style={{color:"green"}}>YES</Text></Button>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setlogout(false)}>
              <Button style={{width:70,height:40,borderWidth:1,borderColor:"black",justifyContent:"center",alignItems:"center",borderRadius:10}}><Text style={{color:"green"}}>NO</Text></Button>
              </TouchableOpacity>
              </View>
            </View>
            </View>
          </Modal>
          <TouchableOpacity onPress={()=>setlogout(true)}>
                <View style={{marginRight:15,marginTop:20}} >
                    <Icon2 name="logout" size={30} color="white" /> 
                  </View>
          </TouchableOpacity>

                   
                  </View>
                  <View style={{width:"100%",height:"80%",color:"white",marginTop:20,justifyContent:"space-evenly",alignItems:"center",display:"flex",flexDirection:"row"
                  }}>
                    <View style={style.profilei}>
                    <Image source={require("./assets/myphoto.png")} style={{width:"100%",height:"100%"}}/>
                    </View>
                    <View style={style.ptext}>
                     <Text style={{marginTop:10,fontSize:20,fontWeight:790}}>
                     K Naga Venkata Teja
                     </Text>
                     <Text style={{marginTop:5}}>22A91A1275</Text>
                      <Text style={{marginTop:5}}>22a91a1275@aec.edu.in</Text>
                      <Text style={{marginTop:5}}>50:5A:6B:7C:11
                     </Text>

                    </View>
                  </View>
                </View>
                
                <View style={{width:"100%",height:"20%"}}>
                <Svg height="200" width="100%" viewBox="0 0 1440 320" style={style.svg}>
                    <Path
                        fill="#007bff"
                        d="M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,96C672,107,768,181,864,208C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    />
                </Svg>
                
                
                </View>
                </View>
                
                
                <View style={{width:"100%",height:"75%", marginTop:70,display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                <FlatList data={Courses} scrollEnabled={false}  numColumns={2} renderItem={({item})=>
                  <View style={style.eachcard}>
                    
                    {
                      (item.id===2||item.id===6)?<View style={{width:100,height:49 ,display:"flex",marginTop:0,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:20,color:"#007bff"}}>
                       {item.course}
                     </Text>
                    </View> 
                    :
                    <View style={{width:90,height:25,display:"flex",marginTop:10,justifyContent:"center",alignItems:"center"}}>
                     <Text style={{fontSize:20,color:"#007bff"}}>
                       {item.course}
                     </Text>
                    </View>
                }
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between", }}>
                      <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <View style={{width:70,height:30,justifyContent:"center",alignItems:"center"}}>
                      
                      
                      
                      <Text style={{fontSize:25,color:"#007bff"}}>
                      {item.num}
                    </Text>
                
                      </View >
                      <View style={{width:80,height:18,justifyContent:"center",alignItems:"center"}}>
                        {
                          (item.id===5)?
                          <Text style={{fontSize:15,color:"#007bff"}}>{item.enrolled}</Text>:
                      <Text style={{fontSize:10,color:"#007bff"}}>{item.enrolled}</Text>
                        }
                      </View>
                      </View>
                      <View style={{width:50,height:50,marginRight:10, backgroundColor:"#007bff", borderRadius:50, borderColor:"aqua", borderWidth:4}}>
                      {/* <Image source={item.img} style={{height:"100%",width:"100%"}}/>  */}
                      <Text style={{textAlign:"center",display:"flex", alignItems:"center", justifyContent:"center",paddingTop:10, color:"white"}}>100%</Text>

                      </View>
                    </View>
                  </View>
                }/>
                </View>
              
                
              </View>
              </SafeAreaView>
        
    )
}
const style = StyleSheet.create({
    profilep:{
        width:"100%",
        height:"25%",
        backgroundColor:"#007bff",
        
    
      },
      svg: {
        position: "absolute",
        top:-20,
        // backgroundColor:"#16923c"
    },
    profilei:{
      width:100,
      height:100,
      borderRadius:75,
      overflow:"hidden",
      // borderWidth:2,
      // borderColor:"black",
      color:"white"
    
    },
    ptext:{
      marginLeft:10,
      width:200,
      height:150,
      textAlign:"center",
      
      // borderWidth:1,
      // borderColor:"black",
      overflow:"hidden",
      textAlignVertical:"center",
    },
    eachcard: {
      width: 170,
      height: 120,
      // borderColor: "black",
      // borderWidth: 1,
      borderRadius: 10,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      elevation: 5,
      backgroundColor: "white",
      margin: 10,
      display:"flex",
    
      
      // justifyContent: "center",
      rowGap: 10
    },
})

export default DashboardScreen