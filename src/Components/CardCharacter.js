
import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const CardCharacter = ({targetCharacter}) => {
    console.log(targetCharacter)
    return (
        <Card sx={{  }}>
            <CardMedia
                component="img"
                image={targetCharacter.imageAdd ? targetCharacter.imageAdd : targetCharacter.image}
                alt="character image"
                maxHeight="440"
            />
            <CardContent sx={{ }}>
                <Typography gutterBottom variant="h5" component="div">{targetCharacter.name}</Typography>
                <Typography variant="body2" color="text.secondary">Species: {targetCharacter.species}</Typography>
                <Typography variant="body2" color="text.secondary">Gender: {targetCharacter.gender}</Typography>
                <Typography variant="body2" color="text.secondary">Location: {targetCharacter.location.name}</Typography>
                <Typography variant="body2" color="text.secondary">Episode: {targetCharacter.episode.map((item)=>(
                    <span key={item.slice(40)} variant="body2" color="text.secondary">{item.slice(40)}, </span>
                ))}</Typography>
                <Typography variant="body2" color="text.secondary">Status: {targetCharacter.status}</Typography>
                <Typography variant="body2" color="text.secondary">
                    Created: {new Date(targetCharacter.created).toLocaleString()}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardCharacter;