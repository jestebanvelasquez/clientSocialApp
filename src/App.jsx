import React from 'react'
import  ThemeApp  from './theme/themeApp'
import { RoutesApp } from './router/RoutesApp'
import { NavBar } from './pages'


const App = () => {
    return (
        <div className='app'>
            <ThemeApp>
                <RoutesApp/>
            </ThemeApp>
        </div>
    )
}

export default App;
