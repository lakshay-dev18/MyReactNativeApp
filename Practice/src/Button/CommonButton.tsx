import{ViewStyle, TextStyle, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'


type Button={
      title: string;
      backgroundColor?: string;
      textColor?: string;
      onPress?: () => void;
      buttonStyle?: ViewStyle;
      textStyle?: TextStyle;
      padding?: number;
      fontSize?: number

}
export default function CommonButton({title,backgroundColor,textColor,onPress, buttonStyle, textStyle, padding,fontSize}:Button){
    return(
    <TouchableOpacity style= {[styles.AppButton,{backgroundColor},{ padding }, buttonStyle]} onPress={onPress} >
        <Text style={[ { color: textColor }, {fontSize}, textStyle, ]} >
            {title}
      </Text>
    </TouchableOpacity>    

)}
const styles = StyleSheet.create({
    AppButton:{
        width:'80%',
        alignItems: "center",
    }
})