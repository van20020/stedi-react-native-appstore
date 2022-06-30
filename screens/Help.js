// import React from 'react';
// import { StyleSheet, Text, View, Image, Linking } from 'react-native';
// import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
// import Bar  from './Bar.js';
// import { Separator } from 'native-base';



// const _header =(item) =>{
//     return(
//         <Separator bordered style={{alignItems:'center'}}>
//           <Text>{item.title}</Text>
//         </Separator>
//     );
// }

// const _body =(item) =>{
//     return (
//         <View style={{padding:10}}>
//           <Text style={{textAlign:'center'}}>{item.body}</Text>
//         </View>
//     );
// }

// const Help = () =>{
//   const [list, setList] = useState([]);
//   setList(
//     [
//       {
//         id:1,
//         title: 'Getting Started',
//         body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
//       },
//       {
//         id:2,
//         title: 'Components',
//         body: 'AccordionList,Collapse,CollapseHeader & CollapseBody'
//       }
//       ],

//   )
//   return(
//     <View>
//       <Bar/>
// <Collapse>
//     <CollapseHeader>
//       <View>
//         <Text>Click here</Text>
//       </View>
//     </CollapseHeader>
//     <CollapseBody>
//       <Text>Ta daa!</Text>
//     </CollapseBody>
// </Collapse>
// <AccordionList
//         list={state.list}
//         header={_header}
//         body={_body}
//         keyExtractor={item => item.key}
//       />
//   </View>

//   );
// }

// export default Help;

{/* const styles = StyleSheet.create({
  text:{
   marginLeft:15,
   marginRight:15,
   fontSize: 18,
    height: 44,
  }
}) */}



import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";



const Help = (props) =>{
return(
<View>
    <Collapse >
      <CollapseHeader >
        <View>
          <Text style={styles.text}>Contact us</Text>
        </View>
      </CollapseHeader>
      <CollapseBody>
        <Collapse>
          <CollapseHeader>
          <Text style={styles.text2}>Phone: 333 333 333</Text>
          <Text style={styles.text2}>Email: testing@hotmail.com</Text>
          </CollapseHeader>
          <CollapseBody>
          </CollapseBody>
        </Collapse>
      </CollapseBody>
    </Collapse>
    <Collapse >
      <CollapseHeader >
        <View>
          <Text style={styles.text}>Contact us</Text>
        </View>
      </CollapseHeader>
      <CollapseBody>
        <Collapse>
          <CollapseHeader>
          <Text style={styles.text2}>Phone: 333 333 333</Text>
          <Text style={styles.text2}>Email: testing@hotmail.com</Text>
          </CollapseHeader>
          <CollapseBody >
          </CollapseBody>
        </Collapse>
      </CollapseBody>
    </Collapse>
  </View>
)}
export default Help;
 const styles = StyleSheet.create({
  text:{
  marginLeft:15,
   marginRight:15,
   marginTop:15,
   fontSize: 18,
  //  fontWeight: 'bold',
    height: 44,
  },
  text2:{
    marginLeft:15,
   marginRight:15,
   fontSize: 17,
  }
}) 