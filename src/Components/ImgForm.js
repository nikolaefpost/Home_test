import React from 'react';
import {Box, Button, Input} from '@mui/material';
import Typography from "@mui/material/Typography";


export default class ImgForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        const fAdd = this.props.setImg
        const fClose = this.props.handleClose
        let fReader = new FileReader();
        fReader.readAsDataURL(this.fileInput.current.files[0]);
        fReader.onloadend = function(event){
            fAdd(event.target.result)
            console.log(typeof event.target.result)
            fClose()
        }
    }

    render() {
        return (
            <>
                <Typography component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}
                >
                    <Box sx={{fontSize: 'h6.fontSize'}}>Select the file for the avatar of the character</Box>
                    <Input sx={{mt: 2}} type='file' inputRef={this.fileInput} />
                    <Button variant="contained" component="span" sx={{mt: 1}} onClick={this.handleSubmit}>
                        Upload
                    </Button>
                </Typography>

        </>


        );
    }
}

