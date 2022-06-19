import React from 'react'

function Header({handleDarkMode, isDarkMode}){
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={handleDarkMode}>
            {isDarkMode ? "Dark" : "Light"} Mode
            </button>
      </header> 
    )
}

export default Header