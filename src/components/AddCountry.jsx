import {Component} from "react";
import {Button, Paper, TextField} from "@mui/material";

class AddCountry extends Component {
    state = {
        newName: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addCountryHandler(this.state.newName);

        this.setState({newName: ""});
    }

    render() {
        return (
            <Paper elevation={1} className="AddCountry">
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        value={this.state.newName}
                        onChange={(e) => this.setState({newName: e.target.value})}
                        className="CountryInput"
                        size="small"
                        label="Country"
                        variant="outlined">
                    </TextField>
                    <Button onClick={this.handleSubmit} variant="outlined">Add</Button>
                </form>
            </Paper>
        );
    }
}

export default AddCountry;