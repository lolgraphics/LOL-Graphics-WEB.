import { ReactElement } from 'react';
import MUIButton, {ButtonProps} from '@mui/material/Button';

interface CustomButtonProps extends ButtonProps {
  label: string;
}

export default function Button({label, ...props} : Readonly<CustomButtonProps>) : ReactElement<CustomButtonProps>{
    return <MUIButton {...props}>
      	{label}
    </MUIButton>;
}
