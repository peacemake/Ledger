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
        <div className="menu">
            <Teams />
            <NewTeam className="newTeamForm" />
        </div>
        <div className="content">
            
        </div>
    </div>
)

export default App