import morty from '../Images/morty.svg';
import title from '../Images/title.png';
import rick from '../Images/rick.svg'
import start from '../Images/start.png'
import signIn from '../Images/signIn.png'
import {Box, Button, Grid} from "@mui/material";
import styles from './start.module.css'
import {useHistory} from "react-router-dom";
import {CHARACTERS_ROUTE, SIGNIN_ROUTE} from "../Utils/consts";
import {useState} from "react";

function App() {
    const history = useHistory();
    const [hover, setHover] = useState(false)
    // localStorage.clear()
    return (
        <Box
            className={styles.app}
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 1,
                gridTemplateRows: 'auto',
                gridTemplateAreas: `"title title title signin"
                                    ". . . rick"
                                    ". start start rick"
                                    "morty . . rick"
                                    "morty . . ."`,
            }}
        >
            <Box sx={{ gridArea: 'signin', textAlign: 'center' }}>
                <Button variant="text"  onClick={()=> history.push(SIGNIN_ROUTE)}>
                    <img src={signIn}  alt="logo" />
                </Button>
            </Box>
            <Box sx={{ gridArea: 'title', textAlign: 'center' }}><img src={title} className={styles.app_logo} alt="logo" /></Box>
            <Box sx={{ gridArea: 'rick', textAlign: 'center' }}><div className={hover ? styles.rick_hover:styles.rick}><img src={rick}  alt="logo" /></div></Box>
            <Box sx={{ gridArea: 'morty', textAlign: 'center' }}><img src={morty} className={styles.morty}  alt="logo" /></Box>
            <Box sx={{ gridArea: 'start', textAlign: 'center' }}>
                <Button
                    variant="text"
                    onClick={()=> history.push(CHARACTERS_ROUTE)}
                    onMouseOver={()=>setHover(true)}
                    onMouseOut={()=>setHover(false)}
                >
                    <img src={start}  alt="logo" />
                </Button>
            </Box>
        </Box>
    );
}

export default App;
