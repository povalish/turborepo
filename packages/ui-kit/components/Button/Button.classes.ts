import { cva } from 'class-variance-authority';

// Button.classes.ts
//

export const buttonClasses = cva(`
  min-w-[160px] py-1.5 px-2 rounded-lg
  bg-[#FCB07E] border-[#FCB07E] border-2
`);

export const textClasses = cva(`
  text-[#333E53] text-xl text-center
  font-bold
`);

export const classes = cva(`${buttonClasses()} ${textClasses()}`);
