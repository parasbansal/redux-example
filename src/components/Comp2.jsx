import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchTodos } from '../actions/todoAction'

export class Comp2 extends Component {
  static propTypes = {
    prop: PropTypes
  }

  componentDidMount(){
    this.props.fetchTodos()
  }

  render() {
    return (
      <div>
        {this.props.todos.map(x => <div>{x.title}</div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos
})

const mapDispatchToProps = {
  fetchTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp2)
