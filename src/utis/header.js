import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    icon: {
        marginRight: theme.spacing(6),
        marginLeft: theme.spacing(4),
    },
    displayBlock: {
        display: "block"
    },
    displayNone: {
        display: "none"
    },

    avatar: {
        marginLeft: theme.spacing(4),
    }

    
}));