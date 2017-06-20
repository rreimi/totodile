import React from 'react';

/*
This should be de universal window for a widget
// TODO Takes care of minimization
// TODO Takes care of header?

// TODO Takes care of configuration updates, a callback is send to the children....
// TODO This will handle the id of the widget under the hood, so inner components don't need to know who they are

All the widgets extends this widget and override what is needed??
*/

require('../styles/widget.less');

export default class Widget extends React.Component {
  render() {
    return (
      <div className="widget-specific-instance widget-container">
        <div className="widget-header">
          { this.props.header }
          <button role="button" onClick={this.props.onToggle}>min</button>
          <button role="button" className="move">move</button>
        </div>
        <div className="widget-content">
          {this.props.children}
        </div>
      </div>);
  }
}

Widget.propTypes = {
  // collapsedHeader: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
}