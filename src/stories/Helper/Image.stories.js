import React from 'react';
import Image from '../../Components/Helper/Image';

export default {
  title: 'Form/Image',
  componets: Image,
};

const fotoLinkedin = `https://media-exp1.licdn.com/dms/image/C5616AQFEUjZiAt62qA/profile-displaybackgroundimage-shrink_350_1400/0/1614908085345?e=1622073600&v=beta&t=iFU-0CF7skwIQhICdV-wp3S4euIl0-Ym1xGCivYArBk`;

const Template = (args) => <Image {...args} />;

export const Carregando = Template.bind({});
Carregando.args = {
  exemplo: true,
};

export const Carregada = Template.bind({});
Carregada.args = {
  src: fotoLinkedin,
  alt: 'Imagem dog',
};
