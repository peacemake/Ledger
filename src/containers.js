import { connect } from 'react-redux'
import AddTeamForm from './UI/AddTeamForm'
import TeamList from './UI/TeamList'
import { addTeam, editTeam } from './store/actions'

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
        dispatch =>
        ({
            onSelect(id) {
                dispatch(editTeam(id))
            }
        })
)(TeamList)