import React, {useState} from 'react';
import styles from './charactersItems.module.css'
import {Box, Button} from "@mui/material";
import {CHARACTERS_ROUTE, FAVORITE_ROUTE, START_ROUTE} from "../Utils/consts";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useHistory} from "react-router-dom";
import AlignItemsList from "../Components/AlignItemsList";
import BasicModal from "../Components/Modal";

const FavoriteCharacters = () => {
    const favorites = JSON.parse (localStorage.getItem ('favorite'));
    const [targetCharacter, setTargetCharacter] = useState({})
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(favorites)
    const history = useHistory();
    return (
        <div className={styles.main}>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}
            >
                <Button
                    variant="outlined"
                    color='primary'
                    onClick={()=> history.push(CHARACTERS_ROUTE)}
                ><ArrowLeftIcon>Filled</ArrowLeftIcon>RETURN TO CHARACTERS</Button>

                {/*<Button variant="outlined">SHOW FAVORITES_ <FavoriteIcon sx={{color: '#ff1744'}}/></Button>*/}
            </Box>
            <Box sx={{my: 5, fontSize: 36, fontWeight: 'bold'}}>List of Favorite Cartoon Characters Rick and Morty</Box>
            <AlignItemsList
                list={favorites}
                styles={styles}
                listStyle = {{columnCount: 1}}
                sx={{ width: '100%', maxWidth: '600px', my: 5 }}
                handleOpen={handleOpen}
                setTargetCharacter={setTargetCharacter}
                // setCharacters={setCharacters}
                // paginCount={paginCount}
                // setCharactersFav={setCharactersFav}
            />
            <BasicModal
                open={open}
                handleClose={handleClose}
                targetCharacter={targetCharacter}
                styles={styles}
            />
        </div>
    );
};

export default FavoriteCharacters;