import React from 'react';

export default class DublinBikes extends React.Component {
  render() {
    const instance = this.props.instance;
    return (
      <div className="dublin-bikes-widget">
        <p>Dublin bikes widget (Dummy)</p>
        <h2>{ instance.data.station || 'No Station'}</h2>
        <p>
          If time less than 12 pm <b>No slots available</b><br/>
          Otherwise <b>No bikes available</b>
        </p>
      </div>);
  }
}

module.exports = DublinBikes;
