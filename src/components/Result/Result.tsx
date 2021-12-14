import { useStyles } from './Result.style'

type ResultProps = {
    value: number,
}

const Result = (props: ResultProps) => { 
    const styles = useStyles() 
    return (
        <h1 className={styles.result}>{props.value}</h1>
    )
}

export default Result;