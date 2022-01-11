import React from 'react';


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
            console.log(event.target.result)
            fClose()
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload file:
                    <input type="file" ref={this.fileInput} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

