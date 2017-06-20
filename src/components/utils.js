import React from 'react';

/**
 * Calculate the resulting layout taking in account collapsed widgets
 * The collapsed elements
 * @param layout
 * @param collapsed
 * @param collapsedHeight the relative height of a collapsed element
 * @returns an array of item layouts
 */
export const calculateLayout = (layout, collapsed, collapsedHeight = 1) => {
  return layout.map((item, index) => {
    const key = index.toString();
    if (collapsed[index] === true) {
      return Object.assign({}, item, {i: key, h: collapsedHeight, isResizable: false })
    }
    return Object.assign({}, item, {i: key, isResizable: true });
  })
};