import React from 'react'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    return (
<Link to="/client/add" className="btn-floating btn-large waves-effect waves-light green">
<i class="material-icons">add</i> 
</Link>
    )
}
