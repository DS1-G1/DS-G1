import React from "react";
import * as S from './styled'

export type Props = {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  icon: JSX.Element
  hover: string
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
    icon,
  }) => { 

  return (
    <S.Wrapper 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width,
       
        }
      }
    >
      {!!icon && icon }
    {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
}

export default Button;