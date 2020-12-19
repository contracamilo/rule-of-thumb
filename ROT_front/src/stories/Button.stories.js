import React from 'react';
import Btn from '../components/Button/index';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/Button',
  component: Btn,
};

const Template = (args) => <Btn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  color: 'primary',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  color: 'primary',
  label: 'Button',
};
