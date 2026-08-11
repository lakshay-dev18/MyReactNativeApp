import {TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle} from "react-native";

type CommonButtonProps = {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  onPress?: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  padding?: number;
  fontSize?: number;
};

function CommonButton({
  title,
  backgroundColor,
  onPress,
  textColor,
  buttonStyle,
  textStyle,
  padding,
  fontSize,
}: CommonButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.CommonButton,
        { backgroundColor },
        { padding },
        buttonStyle,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          { color: textColor },
          {fontSize},
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  CommonButton: {
    width: "100%",
    alignItems: "center",
  },
});

export default CommonButton;