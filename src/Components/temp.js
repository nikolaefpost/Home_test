import React from 'react';
export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }
y
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input
                        type="tel"
                        value={this.state.value}
                        onChange={this.handleChange}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                    />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}