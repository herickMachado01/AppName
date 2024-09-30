import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const card_cidade = (nome, uf)=>{
    return(
        <View style={card}>
            <Text style={styles.cidade}>(nome)</Text> 
           <> - </>  
             <Text style={styles.uf}>(uf)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
      width: '100%',
      padding:10,
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#444'
    },
    cidade:{
        Fontsize:18,
        color:'#ff0202',
        fontWeight:'900'
    },
    uf:{
        Fontsize:18,
        color:'#0206ff',
        fontWeight:'900' 
    }

  });
   