import React from 'react'
import PropTypes from 'prop-types'
import '../style/App.css'

const Unit = ({ name, pointLimit, faction }) => {
    return (
        <div className="Unit">
            {name} - [{faction}]
            <br/>
            > Point limit: {pointLimit}
        </div>
    )
}

Unit.propTypes = {
    name: PropTypes.string.isRequired,
    pointLimit: PropTypes.number.isRequired,
    faction: PropTypes.string.isRequired
}

export default Unit