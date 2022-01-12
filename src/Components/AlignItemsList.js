import React from 'react';
import List from '@mui/material/List'
import {Avatar, Box, Button, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';



const AlignItemsList = ({
                            list,
                            foto,
                            handleOpen,
                            setTargetCharacter,
                            setCharacters,
                            paginCount,
                            setCharactersFav,
                            handleOpenImg,
                            setId,
                            listStyle,
                            sx,
                            box
                        }) => {
    return (
        <List sx={sx} style={listStyle}>{list.map((item) => (
            <Box
                key={item.id}
                sx={{bgcolor: '#eeeeee', marginTop: 1, '&:first-of-type': {marginTop: 0}, boxShadow: 3}}
                onClick={() => {
                    handleOpen()
                    setTargetCharacter(item)
                }}
            >
                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar alt="Ava character" src={item.imageAdd ? item.imageAdd : item.image}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                        secondary={item.status}
                    />
                    {foto && <Button
                        variant="outlined"
                        color='primary'
                        sx={{mx: 2}}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleOpenImg();
                            setId(item.id);
                        }}
                    >add foto</Button>}
                    {box &&
                        <Box
                            sx={{ display: 'flex', justifyContent: 'flex-end'}}
                        >
                            <Box onClick={(e) => {
                                e.stopPropagation()
                                const favorites = JSON.parse(localStorage.getItem('favorite'));
                                const target = favorites?.find((i) => i.id === item.id)
                                setCharactersFav((pre) => target ? pre.filter((k) => k.id !== item.id) : [...pre, item])
                                setCharacters((pre) => {
                                    const supplList = pre.map((j) => {
                                        if (j.id === item.id) {
                                            return !j.isLike ? {...j, isLike: true, isDisLike: false} :
                                                {...j, isLike: false};
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
                                setCharactersFav((pre) => pre.filter((k) => k.id !== item.id))
                                setCharacters((pre) => {
                                    const supplList = pre.map((j) => {
                                        if (j.id === item.id) {
                                            return !j.isDisLike ? {...j, isDisLike: true, isLike: false} :
                                                {...j, isDisLike: false};
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

                </ListItem>
            </Box>
        ))}
        </List>

    );
};

export default AlignItemsList;