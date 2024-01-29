import {Component} from "react";
import {IconButton} from "@mui/material";
import {Add, Remove} from "@mui/icons-material";

class AwardPedestal extends Component {
    render() {
        return (
            <div style={{
                marginTop: 'auto',
                background: this.props.color,
                width: '20%',
                height: this.props.getHeight()
            }}>
                <IconButton onClick={this.props.remove}>
                    <Remove></Remove>
                </IconButton>
                <h2>{this.props.count}</h2>
                <IconButton onClick={this.props.add}>
                    <Add></Add>
                </IconButton>
            </div>
        )
    }
}

export default AwardPedestal;