import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import './stories.css';
import Button from './Button';
import Modal from './Modal';
import Slider from './Slider';
import GoogleAddressInput from './GoogleAddressInput';
import MessageBox from './MessageBox';
import Loader from './Loader';

storiesOf('Components', module)
  .add('Modal', () => (
      <Modal />
  ))
  .add('GoogleAddressInput', () => (
      <GoogleAddressInput />
  ))
   .add('MessageBox', () => (
      <MessageBox />
  ))
  .add('Loader', () => (
      <Loader />
  ));
