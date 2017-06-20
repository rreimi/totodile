import React from 'react';
import { iify } from './utils'

/*
 This should be de universal window for a widget
 Takes care of minimization
 Takes care of header?

 All the widgets extends this widget and override what is needed??
 */

class FridayCheckerMin extends React.Component {
  render() {
    // console.log(this.props.config);
    // console.log(this.props.instance);
    const isCollapsed = this.props.instance.collapsed;
    // console.log('render is called here');
    return (
      <span className="friday-checker-widget-min">
        {'**Is it friday yet'} { isCollapsed ? <b>{': '}{iify()}</b> : null }
      </span>);
  }
}

module.exports = FridayCheckerMin;