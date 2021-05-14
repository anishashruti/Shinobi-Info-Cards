import React from "react"
import Cards from "../Cards/Cards"
import "./Desk.css"
import { ShinobiSchema } from "../../types/shinobischema"

interface shinobiprops {
    searchshinobi: ShinobiSchema[];
    onClickCard:(name: string) => void;
}

const Desk = ({ searchshinobi,onClickCard }: shinobiprops) => {
    return (
        <div className="desk-container">
                {searchshinobi.map((shinobi) => {
                    return (
                        <Cards
                            onClickCard={onClickCard}
                            key={shinobi.id}
                            name={shinobi.name}
                            images={shinobi.images?.first}
                        />
                );
            })}
        </div>
    );
};
export default Desk;