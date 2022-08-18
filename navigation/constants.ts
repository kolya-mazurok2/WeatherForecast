import React from 'react';
import Current from '../screens/Current/Current';
import Days5Hours3 from '../screens/Days5Hours3/Days5Hours3';

export interface Screen {
  name: string;
  component: React.ComponentType<any>;
}

export const screens: Screen[] = [
  {
    name: 'Current',
    component: Current
  },
  {
    name: '5 day / 3 hour',
    component: Days5Hours3
  }
];
