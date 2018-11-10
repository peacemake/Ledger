import React from 'react'
import PropTypes from 'prop-types'

const AddTeamForm = ({ onNewTeam = f => f }) => {

    let name, pointLimit, faction

    const submit = e => {
        e.preventDefault()
        onNewTeam(name.value, pointLimit.value, faction.value)
        name.value = ''
        pointLimit.value = ''
        faction.value = ''        
        name.focus()
    }

    return (
        <form className="addTeam" onSubmit={submit}>
            <input ref={input => name = input}
                type="text"
                placeholder="Team name" required />
            <input ref={input => pointLimit = input}
                type="text"
                placeholder="Point limit" required />
            <input ref={input => faction = input}
                type="text"
                placeholder="Team faction" required />
            <button>ADD</button>
        </form>
    )

}

AddTeamForm.propTypes = {
    onNewTeam: PropTypes.func
}

export default AddTeamForm