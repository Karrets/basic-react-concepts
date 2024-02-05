import './App.scss';
import CountryPanel from "./components/CountryPanel";
import {Component} from "react";
import Totals from "./components/Totals";
import AddCountry from "./components/AddCountry";

class App extends Component {
    state = {
        countries: [
            {id: 1, name: 'United States', gold: 2, silver: 1, bronze: 1},
            {id: 2, name: 'China', gold: 3, silver: 0, bronze: 2},
            {id: 3, name: 'Germany', gold: 0, silver: 1, bronze: 2},
        ]
    }

    add = (id, type) => {
        let mutable = [...this.state.countries];
        let index = mutable.findIndex(i => i.id === id)
        mutable[index][type]++;

        this.setState({countries: mutable})
    }

    remove = (id, type) => {
        let mutable = [...this.state.countries];
        let index = mutable.findIndex(i => i.id === id)
        mutable[index][type]--;

        if(mutable[index][type] < 0)
            mutable[index][type] = 0;

        this.setState({countries: mutable})
    }

    addCountry = (name) => {
        let mutable = [...this.state.countries];

        mutable.push({id: Math.random() * 10e100, name: name, gold: 0, silver: 0, bronze: 0})

        this.setState({countries: mutable})
    }

    removeCountry = (id) => {
        let mutable = [...this.state.countries];
        let removed = mutable.findIndex((c) => c.id === id);

        if(removed > -1) mutable.splice(removed, 1);

        this.setState({countries: mutable})
    }

    render() {
        return (
            <div className="CountryContainer">

                <Totals
                    array={this.state.countries}
                    sumsOf={['gold', 'silver', 'bronze']}>
                </Totals>

                <AddCountry addCountryHandler={this.addCountry}></AddCountry>

                {this.state.countries.map((c) =>
                    <CountryPanel
                        key={c.id}
                        id={c.id}
                        name={c.name}
                        add={this.add}
                        remove={this.remove}
                        handleDelete={this.removeCountry}
                        gold={c.gold}
                        silver={c.silver}
                        bronze={c.bronze}>
                    </CountryPanel>
                )}
            </div>
        );
    }
}

export default App;
