import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { createStore } from 'redux'
import rootReducer from './store/reducers'
import { saveState } from './helpers/localStorage'

const store = createStore(rootReducer)

window.React = React
window.store = store

store.subscribe(() => {
    saveState(store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)