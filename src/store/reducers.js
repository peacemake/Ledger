import C from './constants'
import stateFile from '../data/teams.json'
import { combineReducers } from 'redux'
import { loadState } from '../helpers/localStorage'

let localState = loadState();
let initialState = (localState !== undefined ? localState : stateFile)

const teams = (state = initialState.teams, action) => {
    switch (action.type) {
        case C.ADD_TEAM:
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    name: action.name,
                    pointLimit: action.pointLimit,
                    faction: action.faction,
                    units: []
                }
            }
        case C.ADD_UNIT:
            return state.map(team =>
                (team.id === action.teamId)
                    ? [...team.units, action.data]
                    : team
            )
        default:
            return state
    }
}

const units = (state = initialState.units, action) => {
    switch (action.type) {
        case C.ADD_UNIT:
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    type: action.spec,
                    name: action.name,
                    unitType: action.unitType,
                    equipment: [],
                    skills: []
                }
            }
        case C.ADD_EQUIPMENT:
            return state.map(unit =>
                (unit.id === action.unitId)
                    ? [...unit.equipment, action.data]
                    : unit
            )
        case C.ADD_SPEC:
            return ((state.id === action.unitId) ?
                {
                    ...state,
                    spec: action.data
                } :
                state
            )
        case C.ADD_SKILL:
            return state.map(unit =>
                (unit.id === action.unitId)
                    ? [...unit.skill, action.data]
                    : unit
            )
        default:
            return state
    }
}

const rootReducer = combineReducers({teams: teams, units: units})

export default rootReducer