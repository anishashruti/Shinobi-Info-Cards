import React from 'react';
import './App.css';
import Box from '../Box/Box';
import { data } from "../../data/Shinobiinfo";
import { ShinobiSchema } from "../../types/shinobischema"
import { ShinobiImagesSchema } from "../../types/shinobischema"
import { UnpatchedShinobiSchema } from "../../types/shinobischema"

interface AppState {
    search:string,
    all: any,
    searchshinobi: any,
    selectedshinobi: any,
}   

class App extends React.Component<any, AppState>{
    state = {
        search:"",
        all: [],
        searchshinobi: [],
        selectedshinobi: undefined,
    };
    patchdata = (shinobies: UnpatchedShinobiSchema[]) => {
        const shinobidata = shinobies.map((shinobi) => {
            let parsedimg: ShinobiImagesSchema = {
                first: undefined,
                second: undefined
            };
            try {
                parsedimg = shinobi.images && JSON.parse(shinobi.images);
            } catch (e) {
                console.log("Exception while parsing sprites: ", e);
            }
            const shinobidata: ShinobiSchema = {
                ...shinobi,
                images: parsedimg,
            };
            return shinobidata;
        });
        return shinobidata;
    };
    componentDidMount() {
        const shinobidata: ShinobiSchema[] = this.patchdata(
            data
        );
        // Update the state with patched pokemons
        this.setState({
            all: shinobidata,
            searchshinobi: shinobidata,
        });
    }
    handleInputChange = (value: string) => {
        const search = value;

        const { all } = this.state;

        const searchshinobi = all.filter(
            (shinobi: ShinobiSchema) => {
                return (
                    shinobi.name &&
                    shinobi.name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                );
            }
        );

        this.setState({ search, searchshinobi });
    };
    onClickCard = (name: string) => {
        const { all } = this.state;
        console.log(name);
        // Find the selected pokemon from allPokemons
        const selectedshinobi = all.find(
            (shinobi: ShinobiSchema) => shinobi.name === name
        );

        // Update the state
        this.setState({ selectedshinobi });
    };
    handleClick = (name: string) => {
        const { all } = this.state;

        // Find the selected pokemon from allPokemons
        const selectedshinobi = all.find(
            (shinobi: ShinobiSchema) => shinobi.name === name
        );

        // Update the state
        this.setState({ selectedshinobi });
    };
    render() {
        return (<div className="app-container">
            <h1>Kabuto's Shinobi Info Card</h1>
            <Box
            searchshinobi={this.state.searchshinobi}
            handleInputChange={this.handleInputChange}
                onClickCard={this.onClickCard}
                selectedshinobi={this.state.selectedshinobi}
            />
        </div>
        );
    }
}

export default App;