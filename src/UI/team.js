import React from 'react'
import PropTypes from 'prop-types'
import Unit from './Unit'
import intersection from 'lodash/intersection'
import '../style/App.css'

const Team = ({ team, units }) => {

    if (team !== undefined) {
        const unitArray = [...Object.keys(units)]
        const unitIdArray = unitArray.map(Number);
        const members = intersection(unitIdArray, team.units)

        const unitList = [...Object.values(units)]

        return (
            <div className="Team">
                <h3>{team.name} members:</h3>
                <div className="TeamUnits">
                    {unitList.map(unit => <Unit key={unit.id} {...unit} />)}
                </div>
            </div>
        )
    } else {
        return (
            < div className="Team" > No team data.</div >
        )
    }
}

Team.propTypes = {
    team: PropTypes.object,
    units: PropTypes.object.isRequired
}

export default Team