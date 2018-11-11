import React from 'react'
import PropTypes from 'prop-types'
import Unit from './Unit'
import '../style/App.css'

const Team = ({ name, pointLimit, faction, units }) => {

    let currentPoints = 0
    const unitArray = Object.values(units)

    return (
        <div className="Team">
            <div className="TeamHeader">
                {name} - [{faction}]
                <br />
                > Point limit: {pointLimit}
                <br />
                > Current points: {currentPoints}
            </div>
            <div className="TeamUnits">
                {unitArray.map(unit => <Unit key={unit.id} {...unit} />)}
            </div>
        </div>
    )
}

Team.propTypes = {
    name: PropTypes.string.isRequired,
    pointLimit: PropTypes.number.isRequired,
    faction: PropTypes.string.isRequired
}

export default Team