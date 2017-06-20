import React from 'react';

let factory = null;

const WIDGET_LISTS = [
  'friday-checker',
  'dublin-bikes',
];

const widgetFactory = () => {
  if (factory !== null) { return factory }

  const GenericHeaderFactory = React.createFactory(require('./generic/WidgetHeader.jsx'));
  const GenericWidgetErrorFactory = React.createFactory(require('./generic/WidgetError.jsx'));

  factory = {};

  WIDGET_LISTS.map((widgetId) => {
    const config = require(`./${widgetId}/config`);
    const widgetCreator = { config };

    widgetCreator.headerFactory = GenericHeaderFactory;

    if (config.headerComponent) {
      try {
        widgetCreator.headerFactory = React.createFactory(require(`./${widgetId}/${config.headerComponent}.jsx`));
      } catch (e) {
        console.error('Could not load widget header component for ' + widgetId);
      }
    }

    // Create component factory
    try {
      widgetCreator.componentFactory = React.createFactory(require(`./${widgetId}/${config.mainComponent}.jsx`));
    } catch (e) {
      console.error('Could not load widget main component for ' + widgetId);
      widgetCreator.componentFactory = GenericWidgetErrorFactory;
    }
    factory[widgetId] = widgetCreator;
  });
  return factory;
};

export default widgetFactory;
