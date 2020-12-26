import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected.Mui-focusVisible, & .MuiPaginationItem-page.Mui-selected, & .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-focusVisible': {
      backgroundColor: '#fa7584',
    },
    '& .MuiPaginationItem-root': {
      color: '#fff',
    },
  },
});

export default useStyles;
