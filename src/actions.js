import C from './constants'
import { v4 } from 'uuid'

export const addTeam = (name, scenario, pointLimit, faction) =>
({
    type: C.ADD_TEAM,
    id: v4(),
    name,
    scenario,
    pointLimit,
    faction,
    members: []
})

export const addUnit = (name, unitType) =>
({
    type: C.ADD_UNIT,
    id: v4(),
    spec: "none",
    name,
    unitType,
    equipment: [],
    skills: []

})