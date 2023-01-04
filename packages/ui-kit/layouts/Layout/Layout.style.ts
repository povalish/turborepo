import { cva } from 'class-variance-authority';
import { styled } from 'nativewind';
import { Text, View } from 'react-native';

export const containerStyles = cva(`
  w-screen h-screen 
  bg-[#6FD0F3]
  flex flex-col items-center justify-center
  px-4
`);

export const textStyles = cva(`
  text-[#333E53] text-3xl text-center
  font-bold
`);

export const styles = cva(`${containerStyles()} ${textStyles()}`);

export const LayoutView = styled(View, containerStyles());
export const LayoutText = styled(Text, textStyles());
