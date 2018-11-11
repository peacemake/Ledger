import C from './constants'
import { v4 } from 'uuid'

export const addTeam = (name, pointLimit, faction) =>
({
    type: C.ADD_TEAM,
    id: v4(),
    name,
    pointLimit,
    faction,
    units: [],
    edit: false
})

export const addUnit = (name, unitType, teamId) =>
({
    type: C.ADD_UNIT,
    teamId: teamId,
    id: v4(),
    spec: "none",
    name,
    unitType,
    equipment: [],
    skills: [],
    edit: false
})

export const editTeam = (id) =>
({
    type: C.EDIT_TEAM,
    teamId: id,
    edit: false
})

export const editUnit = (id) =>
({
    type: C.EDIT_UNIT,
    unitId: id,
    edit: true
})

export const addEquipment = (data, unitId) =>
({
    type: C.ADD_EQUIPMENT,
    unitId: unitId,
    data

})

export const addSkill = (data, unitId) =>
({
    type: C.ADD_SKILL,
    unitId: unitId,
    data

})

export const addSpec = (data, unitId) =>
({
    type: C.ADD_SPEC,
    unitId: unitId,
    data

})