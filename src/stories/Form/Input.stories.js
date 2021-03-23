import React from 'react';
import Input from '../../Components/Form/Input';

export default {
  title: 'Form/Input',
  componets: Input,
};

const Template = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  error: '',
  label: 'Nome',
  type: 'text',
};
export const Erro = Template.bind({});
Erro.args = {
  error: 'Falha ao enviar',
  label: 'Nome',
  type: 'text',
};
