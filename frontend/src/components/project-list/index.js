import React from 'react'
import { connect } from 'react-redux'


const ProjectList = (props) => {
 return   (
    <ul>
        { props.projects.map(project => <li key={project.id}>{project.name}</li>) }
    </ul>   
)
}

export default connect((state) => ({ 
    projects: Object.keys(state.projects).map(id => state.projects[id])
}))(ProjectList)
