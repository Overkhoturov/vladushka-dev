import { FC } from "react";
import cn from 'classnames';

type Props = {
  text: string;
  variant?: 'outlined' | 'basic';
}
const Tag: FC<Props> = ({variant = 'basic', text}) => (
  <div className={cn({
    "py-1 px-6 rounded-[100px] font-medium leading-6": true,
    "border-solid border border-foreground": variant === 'outlined',
    "bg-white": variant === 'basic'
  })}>
    {text}
  </div>
)

export default Tag;
