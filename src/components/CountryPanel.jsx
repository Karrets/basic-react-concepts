import {Component} from "react";
import {IconButton, Paper} from "@mui/material";
import AwardPedestal from "./AwardPedestal";
import {Delete} from "@mui/icons-material";

class CountryPanel extends Component {
    state = {
        pedestals: [
            {id: 0, color: '#afafaf', bias: 2, type: "silver"},
            {id: 1, color: '#d0aa51', bias: 3, type: "gold"},
            {id: 2, color: '#a17250', bias: 1, type: "bronze"},
        ]
    }

    getHeight = (count, bias) => {
        let total = 3 +
            this.props.gold +
            this.props.silver +
            this.props.bronze;

        let percentage = ((count + bias) / total) * 100

        return `${percentage}%`
    }

    aggregate = () => {
        return this.props.gold +
            this.props.silver +
            this.props.bronze;
    }

    render() {
        return (
            <Paper
                className="CountryPanel"
                elevation={1}>
                <Paper
                    className={"CountryHeader"}
                    elevation={4}>
                    <div className="container">
                        <h1>{this.props.name}</h1>
                        <p>Award Total: {this.aggregate()}</p>
                    </div>

                    <IconButton className={"Delete"} onClick={() => this.props.handleDelete(this.props.id)}>
                        <Delete></Delete>
                    </IconButton>
                </Paper>

                <div className='PedestalContainer'>
                    {this.state.pedestals.map((p) =>
                        <AwardPedestal
                            key={p.id}
                            remove={() => this.props.remove(this.props.id, p.type)}
                            add={() => this.props.add(this.props.id, p.type)}
                            count={this.props[p.type]}
                            color={p.color}
                            getHeight={() => this.getHeight(this.props[p.type], p.bias)}>
                        </AwardPedestal>
                    )}
                </div>
            </Paper>
        )
    }
}

export default CountryPanel;