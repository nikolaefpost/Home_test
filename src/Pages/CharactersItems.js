import React, {useEffect, useState} from 'react';
import AlignItemsList from "../Components/AlignItemsList";
import styles from './charactersItems.module.css'
import {Box, Button, Modal} from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ComboBox from "../Components/ComboBox";
import PaginationRounded from "../Components/Pagination";
import BasicModal from "../Components/Modal";


const CharactersItems = ({setStart}) => {
    const [characters, setCharacters] = useState([])
    const [targetCharacter, setTargetCharacter] = useState({})
    const [pages, setPages] = useState()
    const [paginCount, setPaginCount] = useState(1);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        // localStorage.clear()
        const list = JSON.parse (localStorage.getItem(paginCount))
        if(list){
            setCharacters(list)
            if (!pages) setPages(Number(localStorage.getItem('page')))
            setIsLoaded(true);
        }else {
            fetch('https://rickandmortyapi.com/api/character?page=' + paginCount)
                .then(res => res.json())
                .then((result) => {
                        if(result.info.pages!==pages){
                            setPages(result.info.pages)
                            localStorage.setItem ('page', JSON.stringify(result.info.pages));
                        }

                        setCharacters(result.results)
                        setIsLoaded(true);
                        localStorage.setItem (paginCount, JSON.stringify(result.results));
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }
    }, [paginCount])
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className={styles.main}>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button
                        variant="outlined"
                        color='primary'
                        onClick={() => setStart(false)}
                    ><ArrowLeftIcon>Filled</ArrowLeftIcon>RETURN TO START</Button>

                    <Button variant="outlined">SHOW FAVORITES_ <FavoriteIcon sx={{color: '#ff1744'}}/></Button>
                </Box>
                <Box sx={{my: 5, fontSize: 36, fontWeight: 'bold'}}>List of cartoon characters Rick and Morty</Box>
                <ComboBox
                    list={characters}
                    handleOpen={handleOpen}
                    setTargetCharacter={setTargetCharacter}
                />
                <AlignItemsList
                    list={characters}
                    styles={styles}
                    handleOpen={handleOpen}
                    setTargetCharacter={setTargetCharacter}
                    setCharacters={setCharacters}
                    paginCount={paginCount}
                />
                <PaginationRounded
                    pages={pages}
                    setPaginCount={setPaginCount}
                />
                <BasicModal
                    open={open}
                    handleClose={handleClose}
                    targetCharacter={targetCharacter}
                    styles={styles}
                />
            </div>
        );
    }
};

export default CharactersItems;