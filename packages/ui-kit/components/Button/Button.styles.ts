import { cva } from 'class-variance-authority';
import { styled } from 'nativewind';
import { Text, TouchableOpacity } from 'react-native';

// Button.styles.ts
//

export const buttonStyles = cva(`
  min-w-[160px] py-1.5 px-2 rounded-lg
  bg-[#FCB07E] border-[#FCB07E] border-2
`);

export const textStyles = cva(`
  text-[#333E53] text-xl text-center
  font-bold
`);

export const styles = cva(`${buttonStyles()} ${textStyles()}`);

export const ButtonView = styled(TouchableOpacity, buttonStyles());
export const ButtonText = styled(Text, textStyles());
