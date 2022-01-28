import React, {useState} from 'react';
import styles from './charactersItems.module.css'
import {Box, Button} from "@mui/material";
import {CHARACTERS_ROUTE} from "../Utils/consts";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import {useHistory} from "react-router-dom";
import AlignItemsList from "../Components/AlignItemsList";
import BasicModal from "../Components/Modal";
import FilterableProductTable from "../Components/temp";
const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

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
            </Box>
            <Box sx={{my: 5, fontSize: 36, fontWeight: 'bold'}}>List of Favorite Cartoon Characters Rick and Morty</Box>
            <AlignItemsList
                list={favorites}
                styles={styles}
                listStyle = {{columnCount: 1}}
                sx={{ width: '100%', maxWidth: '600px', my: 5 }}
                handleOpen={handleOpen}
                setTargetCharacter={setTargetCharacter}
            />
            <BasicModal
                open={open}
                handleClose={handleClose}
                targetCharacter={targetCharacter}
                styles={styles}
            />
            <FilterableProductTable
                products={PRODUCTS}
            />
        </div>
    );
};

export default FavoriteCharacters;