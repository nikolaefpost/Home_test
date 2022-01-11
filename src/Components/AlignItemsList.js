import React from 'react';
import List from '@mui/material/List'
import {Avatar, Box, Divider, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const AlignItemsList = ({
                            list,
                            styles,
                            handleOpen,
                            setTargetCharacter,
                            setCharacters,
                            paginCount,
                            setCharactersFav,
                            listStyle,
                            sx,
                            box
                        }) => {
    console.log(list)
    return (
        <List sx={sx} style={listStyle}>{list.map((item) => (
            <Box
                key={item.id}
                sx={{bgcolor: '#eeeeee', marginTop: 1, '&:first-child': {marginTop: 0}, boxShadow: 3}}
                onClick={() => {
                    handleOpen()
                    setTargetCharacter(item)
                }}
            >
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Ava character" src={item.image}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                        secondary={item.status}
                    />
                    {box &&
                        <Box>
                            <Box onClick={(e) => {
                                e.stopPropagation()
                                const favorites = JSON.parse(localStorage.getItem('favorite'));
                                const target = favorites?.find((i) => i.id === item.id)
                                setCharactersFav((pre) => target ? pre.filter((k) => k.id !== item.id) : [...pre, item])

                                setCharacters((pre) => {
                                    const supplList = pre.map((j) => {
                                        if (j.id === item.id) {
                                            return j.isFavorite ? {...j, isFavorite: false} : {...j, isFavorite: true};
                                        } else return j
                                    })
                                    localStorage.setItem(paginCount, JSON.stringify(supplList))
                                    return supplList
                                })
                            }}
                                 sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}
                            >
                                {item.isFavorite ? <FavoriteIcon sx={{color: '#ff1744'}}/> :
                                    <FavoriteBorderIcon sx={{color: '#ff1744'}}/>}
                            </Box>

                        </Box>
                    }

                </ListItem>
                {box &&
                    <Box sx={{marginTop: 1, display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                        <Box onClick={(e) => {
                            e.stopPropagation()
                            setCharacters((pre) => {
                                const supplList = pre.map((j) => {
                                    if (j.id === item.id) {
                                        return !j.isLike ? {...j, isLike: true, isDisLike: false} : {
                                            ...j,
                                            isLike: false
                                        };
                                    } else return j
                                })
                                localStorage.setItem(paginCount, JSON.stringify(supplList))
                                return supplList
                            })
                        }
                        }>
                            {item.isLike ? <ThumbUpIcon fontSize='small'/> : <ThumbUpOutlinedIcon fontSize='small'/>}
                        </Box>
                        <Box sx={{mx: 2}} onClick={(e) => {
                            e.stopPropagation()
                            setCharacters((pre) => {
                                const supplList = pre.map((j) => {
                                    if (j.id === item.id) {
                                        return !j.isDisLike ? {...j, isDisLike: true, isLike: false} : {
                                            ...j,
                                            isDisLike: false
                                        };
                                    } else return j
                                })
                                localStorage.setItem(paginCount, JSON.stringify(supplList))
                                return supplList
                            })
                        }
                        }>
                            {item.isDisLike ? <ThumbDownIcon fontSize='small'/> :
                                <ThumbDownOutlinedIcon fontSize='small'/>}
                        </Box>

                    </Box>}
                {/*<Divider variant="inset" component="li" />*/}
            </Box>
        ))}
        </List>

    );
};

export default AlignItemsList;