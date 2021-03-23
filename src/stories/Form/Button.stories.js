import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../Components/Form/Button';

export default {
  title: 'Form/Button',
  componets: Button,
};

const Template = (args) => <Button {...args} />;

export const Habilitado = Template.bind({});
Habilitado.args = {
  disabled: false,
  children: 'Enviar',
  onClick: action('clicked'),
};

export const Desabilitado = Template.bind({});
Desabilitado.args = {
  disabled: true,
  children: 'Enviando...',
};
