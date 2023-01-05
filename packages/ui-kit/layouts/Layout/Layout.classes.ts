import { cva } from 'class-variance-authority';

// Layout.classes.ts
//

export const containerClasses = cva(`
  w-screen h-screen 
  bg-[#6FD0F3]
  flex flex-col items-center justify-center
  px-4
`);

export const textClasses = cva(`
  text-[#333E53] text-3xl text-center
  font-bold
`);

export const classes = cva(`${containerClasses()} ${textClasses()}`);
