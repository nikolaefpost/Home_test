import morty from '../Images/morty.svg';
import title from '../Images/title.png';
import rick from '../Images/rick.svg'
import start from '../Images/start.png'
import '../App.css';
import {Box, Button, Grid} from "@mui/material";
import styles from './start.module.css'
import {useHistory} from "react-router-dom";
import {CHARACTERS_ROUTE} from "../Utils/consts";

function App({setStart}) {
    const history = useHistory();
    localStorage.clear()
    return (
        <Box
            className="App"
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 1,
                gridTemplateRows: 'auto',
                gridTemplateAreas: `"title title title ."
                                    ". . . rick"
                                    ". start start rick"
                                    "morty . . rick"
                                    "morty . . ."`,
            }}
        >
            <Box sx={{ gridArea: 'title', textAlign: 'center' }}><img src={title} className="App-logo" alt="logo" /></Box>
            <Box sx={{ gridArea: 'rick', textAlign: 'center' }}><div className={styles.rick}><img src={rick}  alt="logo" /></div></Box>
            <Box sx={{ gridArea: 'morty', textAlign: 'center' }}><img src={morty} className={styles.morty} alt="logo" /></Box>
            <Box sx={{ gridArea: 'start', textAlign: 'center' }}>
                <Button variant="contained" color="success" onClick={()=> history.push(CHARACTERS_ROUTE)}>
                    <img src={start}  alt="logo" />
                </Button>
            </Box>
            {/*<Box sx={{ gridArea: 'footer', bgcolor: 'warning.main' }}>Footer</Box>*/}
        </Box>
    );
}

export default App;
