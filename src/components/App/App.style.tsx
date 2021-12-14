import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
    container: {
        background: "#152266",
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        fontSize: '1.25rem',
        fontFamily: 'Popins, sans-serif',
    },
    title: { 
        color: "#F9F9FC"
    },
    inputGroup: {
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
})