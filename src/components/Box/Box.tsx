import React from 'react'
import "./Box.css"
import Result from "../Result/Result"
import SearchBox from "../Searchbox/Searchbox"
import Desk from "../Desk/Desk"
import { ShinobiSchema } from "../../types/shinobischema"

interface shinobiprops{
    searchshinobi: ShinobiSchema[];
    selectedshinobi: ShinobiSchema | undefined;
    handleInputChange: (value: string) => void;
    onClickCard:(name: string) => void;
}

const Box = ( {searchshinobi,handleInputChange,onClickCard,selectedshinobi }:shinobiprops) => {
    return (
        <div className="box-container">
            <div className="box-left-container">
                <SearchBox handleInputChange={handleInputChange}/>
                <Desk onClickCard={onClickCard} searchshinobi={searchshinobi}/>

            </div>
            <div className="box-right-container">
                <Result selectedshinobi={selectedshinobi}/>
            </div>
            
        </div>
    )
}
export default Box;