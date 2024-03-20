import {helloWorld} from './app';

const test = () => {
  const result = helloWorld('Jack') === 'Hello World' ? true : false;
  return result;
};

const checkOut = () => {
  if (test()) {
    console.log('Great');
  } else {
    console.log('Oops!');
  }
};
