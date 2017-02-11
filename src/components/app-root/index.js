import React, { Component } from 'react'

import { v4 } from 'uuid'

import ProjectList from '../project-list'

const AddProject = (dispatch, name) => dispatch({
    type: "ADD_PROJECT",
    response: {
        id: v4(),
        name
    }
})


class AppRoot extends Component {
    render() {
        const store = this.context.store
        return (
            <div className="container" style={{ marginTop: "80px" }}>
                <h1>Task manager</h1>
                <p className="lead">written by <a href="https://twitter.com/yhaskell">@yhaskell</a> to learn react/redux</p>

                <div>
                    <input ref={input => this.input = input} />
                    <button onClick={() => AddProject(store.dispatch, this.input.value)}></button>
                </div>
                <ProjectList />
            </div>
        )
    }

    static contextTypes = { 
        store: React.PropTypes.object
    }
}

export default AppRoot