import C from '../constants'

export const team = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_TEAM:
            return {
                id: action.id,
                name: action.name,
                scenario: action.scenario,
                pointLimit: action.pointLimit,
                faction: action.faction,
                members: []
            }
        case C.ADD_UNIT:
            return {

            }
        case C.ADD_EQUIPMENT:
            return {

            }
        case C.ADD_SPEC:
            return {

            }
        case C.ADD_SKILL:
            return {

            }
        default:
            return state
    }
}

export const units = (state = [], action) => {
    switch (action.type) {
        case C.ADD_UNIT:
            return {
                id: action.id,
                type: action.spec,
                name: action.name,
                unitType: action.unitType,
                equipment: [],
                skills: []
            }
        default:
            return state
    }
}

export const unit = (state = "", action) => {
    switch (action.type) {
        case C.ADD_EQUIPMENT:
            return {

            }
        case C.ADD_SPEC:
            return {

            }
        case C.ADD_SKILL:
            return {

            }
        default:
            return state
    }
}