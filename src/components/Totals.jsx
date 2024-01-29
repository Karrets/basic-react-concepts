import {Component} from "react";

class Totals extends Component {
    aggregate = () => {
        return this.props.array.reduce((part, item) =>
            part + this.props.sumsOf.reduce((sum, prop) => sum + item[prop], 0), 0
        );
    }

    render() {
        return (
            <div>
                <h1 className="worldTotal">World Medals: {this.aggregate()}</h1>
            </div>
        )
    }
}

export default Totals;