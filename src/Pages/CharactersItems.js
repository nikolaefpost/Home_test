import React, {useEffect, useState} from 'react';
import AlignItemsList from "../Components/AlignItemsList";
import styles from './charactersItems.module.css'
import {Box, Button, Modal} from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ComboBox from "../Components/ComboBox";
import PaginationRounded from "../Components/Pagination";
import BasicModal from "../Components/Modal";
import {useHistory} from "react-router-dom";
import {CHARACTERS_ROUTE, FAVORITE_ROUTE, START_ROUTE} from "../Utils/consts";


const CharactersItems = () => {

    const [characters, setCharacters] = useState([])
    const [charactersFav, setCharactersFav] = useState(JSON.parse (localStorage.getItem('favorite'))||[])
    const [like, setLike] = useState([])
    const [targetCharacter, setTargetCharacter] = useState({})
    const [pages, setPages] = useState()
    const [paginCount, setPaginCount] = useState(1);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(characters)
    const history = useHistory();
    useEffect(()=>{
        localStorage.setItem ('favorite', JSON.stringify(charactersFav))
    }, [charactersFav])

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
                        // if(result.info.pages!==pages){
                        //
                        // }
                        setPages(result.info.pages)
                        localStorage.setItem ('page', JSON.stringify(result.info.pages));

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
                        onClick={()=> history.push(START_ROUTE)}
                    ><ArrowLeftIcon>Filled</ArrowLeftIcon>RETURN TO START</Button>

                    <Button
                        variant="outlined"
                        onClick={()=> history.push(FAVORITE_ROUTE)}
                    >SHOW FAVORITES_ <FavoriteIcon sx={{color: '#ff1744'}}/></Button>
                </Box>
                <Box sx={{my: 5, fontSize: 36, fontWeight: 'bold'}}>List of Cartoon Characters Rick and Morty</Box>
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
                    setCharactersFav={setCharactersFav}
                    listStyle = {{columnCount: 4}}
                    sx= {{ width: '100%', maxWidth: '100vw', my: 5 }}
                    box = {true}
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