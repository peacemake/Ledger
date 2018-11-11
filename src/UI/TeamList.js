import React from 'react';
import TeamListItem from './TeamListItem'
import PropTypes from 'prop-types'

const TeamList = ({ teams, onSelect = f => f }) => {

    if(teams !== undefined) {
        const teamArray = Object.values(teams)

        return (
            <div className="TeamList">
                {teamArray.map(team => <TeamListItem onSelect={() => onSelect(team.id)} key={team.id} {...team} />)}
            </div>
        )
    } else {
        return (
            <div className="TeamList">
                No teams found. Create one?
            </div>
        )
    }
    
}
TeamList.propTypes = {
    teams: PropTypes.object,
    onSelect: PropTypes.func
}

export default TeamList
