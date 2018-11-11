import React from 'react'
import PropTypes from 'prop-types'
import '../style/App.css'

const TeamListItem = ({ onSelect,  name, pointLimit, faction, edit }) => {
    return (
        <div onClick={onSelect} className={edit ? "TeamListItemSelected" : "TeamListItem" }>
            {name} - [{faction}]
            <br />
            > Point limit: {pointLimit}
            <br />
            > Edit: {edit}
        </div>
    )
}

TeamListItem.propTypes = {
    onSelect: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    pointLimit: PropTypes.number.isRequired,
    faction: PropTypes.string.isRequired,
    edit: PropTypes.bool.isRequired
}

export default TeamListItem