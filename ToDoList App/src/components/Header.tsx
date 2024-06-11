import React from 'react'
import ListAltIcon from '@mui/icons-material/ListAlt';
import "../styles/Header.css"
const Header = () => {
  return (
    <div className="NavBar">
        <div className="Nav-title">
            <ListAltIcon style={{ fontSize: 40 }} />
            <h2>ToDoList</h2>
        </div>
    </div>
  )
}

export default Header