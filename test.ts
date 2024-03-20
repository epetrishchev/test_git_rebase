import {helloWorld} from './app';

const test = () => {
  return helloWorld('Jack') === 'Hello World' ? true : false;
};

const checkOut = () => {
  if (test()) {
    console.log('Great');
  } else {
    console.log('Oops!');
  }
};
