import React from 'react';
import Team from './Team'
import PropTypes from 'prop-types'

const TeamList = ({ teams }) => {

    const teamArray = Object.values(teams)

    return (
        <div className="TeamList">
            {teamArray.map(team =>
                <Team
                    key={team.id}
                    {...team}
                />)}
        </div>
    )
}
TeamList.propTypes = {
    teams: PropTypes.object
}

export default TeamList
