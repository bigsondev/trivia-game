import { Paper as MUIPaper, PaperProps, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  paperHolder: {
    height: '100%',
    padding: '1rem',
    position: 'relative',
  },
});

export const Paper = (props: PaperProps) => {
  const { paperHolder } = useStyles();

  return <MUIPaper className={paperHolder} {...props} />;
};
