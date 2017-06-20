import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import Widget from './Widget.jsx';
import { calculateLayout } from './utils';
import widgetFactory from '../widgets/factory';

require('../styles/main.less');

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      widgets: [
        {
          'id': 'friday-checker',
          'layout':  { x: 0, y: 0, w: 6, h: 5 },
          'collapsed' : true,
          'data': { }
        },
        {
          'id': 'dublin-bikes',
          'layout':  { x: 0, y: 6, w: 9, h: 5 },
          'collapsed' : false,
          'data': {
            'station': 'Herbert Place',
          }
        }
      ]
    }
  }
  toggleCollapse(index) {
    const widgets = this.state.widgets.slice();
    const widgetInstanceConfig = Object.assign({}, widgets[index]);
    widgetInstanceConfig.collapsed = !widgetInstanceConfig.collapsed;
    widgets[index] = widgetInstanceConfig;
    this.setState({ widgets  });
  }
  onDragStop(updatedLayout) {
    // Copy x and y for all elements
    const widgets = this.state.widgets.map((widget, idx) => {
      const layout = Object.assign(widget.layout, {}, { x: updatedLayout[idx].x, y: updatedLayout[idx].y });
      return Object.assign(widget, {}, { layout });
    });
    this.setState({ widgets });
  }
  onResizeStop(updatedLayout) {
    // Maybe this is not necessary as resize will be restricted if the widget is collapsed
    const widgets = this.state.widgets.map((widget, idx) => {
      const widgetLayout = {
        w: updatedLayout[idx].w,
        h: widget.collapsed ? widget.layout.h : updatedLayout[idx].h,
      };
      const layout = Object.assign(widget.layout, {}, widgetLayout);
      return Object.assign(widget, {}, { layout });
    });
    this.setState({ widgets });
  }
  renderWidgets() {
    const widgets = this.state.widgets;
    const factory = widgetFactory();
    return  widgets.map((widget, index) => {
      const widgetFactory = factory[widget.id];
      const key = index.toString();
      const widgetProps = { config: widgetFactory.config, instance: widget }; // Passed to header and main component
      return (
        <div className='grid-item' key={key}>
          <Widget header={widgetFactory.headerFactory(widgetProps)} isCollapsed={widget.collapsed} onToggle={() => this.toggleCollapse(index)}>
            {widgetFactory.componentFactory(widgetProps)}
          </Widget>
        </div>
      )
    });
  }
  render() {
    const widgets = this.state.widgets;
    const layout = widgets.map((widget) => widget.layout);
    const collapsed = widgets.map((widget) => widget.collapsed);
    const finalLayout = calculateLayout(layout, collapsed);
    return (
      <ReactGridLayout className="layout" layout={finalLayout}
                       onResizeStop={(e) => this.onResizeStop(e)}
                       onDragStop={(e) => this.onDragStop(e)}
                       cols={24} rowHeight={30} width={1200}
                       draggableHandle='.move'>
        {this.renderWidgets()}
      </ReactGridLayout>
    );
  }
}

export default Dashboard;