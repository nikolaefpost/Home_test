import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const ComboBox = ({list, handleOpen, setTargetCharacter}) => {
    const labelList = list.map((item)=>{
        return {...item, label: item.name}
    })
    console.log(handleOpen)
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={labelList}
            sx={{ width: 300 }}
            onChange={(event, value)=>{
                if (value){
                    handleOpen()
                    console.log(value)
                    setTargetCharacter(value)
                }
            }}
            renderInput={(params) => <TextField {...params} label="character" />}
        />
    );
};

export default ComboBox;