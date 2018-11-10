import { connect } from 'react-redux'
import AddTeamForm from './UI/AddTeamForm'
import TeamList from './UI/TeamList'
import { addTeam } from './store/actions'

export const NewTeam = connect(
    null,
    dispatch =>
        ({
            onNewTeam(name, pointLimit, faction) {
                dispatch(addTeam(name,pointLimit, faction))
            }
        })
)(AddTeamForm)

export const Teams = connect(
    state =>
        ({
            teams: state.teams
        }),
        null
)(TeamList)