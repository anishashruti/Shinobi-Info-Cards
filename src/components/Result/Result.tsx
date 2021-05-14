import React from "react"
import "./Result.css"
import { ShinobiSchema } from "../../types/shinobischema"
interface SearchResultProps {
    selectedshinobi: ShinobiSchema | undefined;
}

const Result = ({selectedshinobi}:SearchResultProps) => {
    const { name, clan, Rank, Missions, Jitsu, Affiliation,images } = selectedshinobi || {};
    return (
        <div className="Searchbox-container">
            {
                selectedshinobi ? (
                    <div>
                        <img
                            className="img"
                            alt={name}
                            src={images?.second}
                        />
                        {/* img */}
                        <p>Name: { name }</p>
                        <p>Clan: {clan}</p>
                        <p>Rank: {Rank}</p>
                        <p>Special jitsu: { Jitsu}</p>
                        <p>Affiliation: {Affiliation}</p>
                    </div>
                )
                    :
                    (
                        <p>Welcome</p>
                    )
            }
        </div>
    )
}
export default Result;