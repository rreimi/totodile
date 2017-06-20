import React from 'react';
import { iify } from './utils'
/*
 This should be de universal window for a widget
 Takes care of minimization
 Takes care of header?

 All the widgets extends this widget and override what is needed??
 */

/*
Copyright http://isitfridayyet.net/
 */


export default class FridayChecker extends React.Component {
  render() {
    return (
      <div className="friday-checker-widget">
        <h1>{iify()}</h1>
      </div>);
  }
}

module.exports = FridayChecker;