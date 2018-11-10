import React from 'react';
import { NewTeam, Teams } from './containers'
import './style/App.css'

var imageName = require('./content/logo.png')


const App = () => (
    <div className="app">
        <div className="head">
        <img height='30px' src={imageName} alt="kill team logo" />
            &nbsp;Ledger - Create your team
        </div>
        <NewTeam className="newTeamForm" />
        <div className="menu" id="left">
            <Teams />
        </div>
        <div className="content" id="right">

        </div>
    </div>
)

export default App