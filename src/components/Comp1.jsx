import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchItems } from '../actions/itemAction';

export class Comp1 extends Component {
  static propTypes = {
    prop: PropTypes
  }

  componentDidMount(){
    this.props.fetchItems();
  }

  render() {
    return (
      <div>
        {this.props.items.map(item => <div>{item.title}</div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items.items
})

const mapDispatchToProps = {
  fetchItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp1)
