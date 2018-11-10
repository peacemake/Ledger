import React from 'react'
import PropTypes from 'prop-types'
import '../style/App.css'

const Team = ({ name, pointLimit, faction }) => {
    return (
        <div className="TeamListItem">
            {name} - [{faction}]
            <br/>>
            Point limit: {pointLimit}
        </div>
    )
}

Team.propTypes = {
    name: PropTypes.string.isRequired,
    pointLimit: PropTypes.number.isRequired,
    faction: PropTypes.string.isRequired
}

export default Team
