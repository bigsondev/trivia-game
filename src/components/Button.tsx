import { Button as MUIButton, ButtonProps } from '@material-ui/core';

export const Button = (props: ButtonProps) => (
  <MUIButton variant="contained" fullWidth {...props} />
);
