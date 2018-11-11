import React from 'react'
import PropTypes from 'prop-types'

const AddTeamForm = ({ onNewTeam = f => f }) => {

    let name, pointLimit, faction

    const submit = e => {
        e.preventDefault()
        onNewTeam(name.value, pointLimit.value, faction.value)
        name.value = ''
        pointLimit.value = 0
        faction.value = ''        
        name.focus()
    }

    return (
        <form className="newTeamForm" onSubmit={submit}>
            <input ref={input => name = input}
                type="text"
                placeholder="Team name" required />
            <input ref={input => pointLimit = input}
                type="number"
                placeholder="Point limit" required />
            <select ref={input => faction = input} required>
                <option value="Adeptus Astartes">Adeptus Astartes</option>
                <option value="Astra Militarum">Astra Militarum</option>
                <option value="Adeptus Mechanicus">Adeptus Mechanicus</option>
            </select>
            <br/>
            <button>ADD</button>
        </form>
    )

}

AddTeamForm.propTypes = {
    onNewTeam: PropTypes.func
}

export default AddTeamForm