import React from 'react';
import List from '@mui/material/List'
import {Avatar, Box, Divider, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const listStyle = {
   columnCount: 4,
}

const AlignItemsList = ({list, styles, handleOpen, setTargetCharacter, setCharacters, paginCount}) => {
    console.log(list)
    return (
        <List sx={{ width: '100%', maxWidth: '100vw', my: 5 }} style={listStyle}>{list.map((item)=>(
            <div key={item.id} onClick={()=>{
                handleOpen()
                setTargetCharacter(item)
            }}>
            <ListItem alignItems="flex-start" >
                <ListItemAvatar>
                    <Avatar alt="Ava character" src={item.image} />
                </ListItemAvatar>
                <ListItemText
                    primary={item.name}
                    secondary={item.status}
                />
                <Box onClick={(e)=>{
                    e.stopPropagation()
                    setCharacters((pre)=>{
                        const supplList = pre.map((j)=>{
                            if(j.id===item.id){
                                return j.isFavorite ? {...j, isFavorite: false} : {...j, isFavorite: true};
                            } else return j
                        })
                        localStorage.setItem (paginCount, JSON.stringify(supplList))
                        return supplList
                    })

                }}>
                    {item.isFavorite ? <FavoriteIcon sx={{color: '#ff1744'}}/>: <FavoriteBorderIcon sx={{color: '#ff1744'}}/>}
                </Box>

            </ListItem>
            <Divider variant="inset" component="li" />
            </div>
        ))}
        </List>

    );
};

export default AlignItemsList;