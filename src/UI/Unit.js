import React from 'react'
import PropTypes from 'prop-types'
import '../style/App.css'

const Unit = ({ name, spec, unitType, equipment, skills }) => {
    return (
        <div className="Unit">
            {name} - [{spec}]
            <br/>
            {unitType}
            <br/>

        </div>
    )
}

Unit.propTypes = {
    name: PropTypes.string.isRequired
}

export default Unit