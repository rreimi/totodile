import React from 'react';

/**
 * A generic widget header
 */
class WidgetHeader extends React.Component {
  render() {
    return (
      <span>
        {this.props.config.name || 'Widget'}
      </span>);
  }
}

module.exports = WidgetHeader;