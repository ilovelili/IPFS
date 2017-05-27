import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Nav } from 'react-bootstrap'

import NavItem from './nav-item'

const tabs = [{
  title: 'home',
  icon: 'dot-circle-o'
}, {
  title: 'connections',
  icon: 'globe'
}, {
  title: 'config',
  icon: 'cog'
}]

export default class Navigation extends Component {
  static displayName = 'Nav';

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    const items = tabs.map((tab, idx) => {
      const url = tab.url ? tab.url : ('/' + tab.title)
      const title = tab.title.substring(0, 1).toUpperCase() + tab.title.substring(1)
      return (
        <NavItem
          key={idx}
          title={title}
          url={url}
          icon={tab.icon}
        />
      )
    })

    return (
      <Row>
        <Nav id='side' className='nav-sidebar'>
          {items}
        </Nav>
      </Row>
    )
  }
}
