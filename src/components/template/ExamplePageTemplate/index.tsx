import { FC } from 'react';
import Presenter from './Presenter';

const ExamplePageTemplate: FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <Presenter handleClick={handleClick} />;
};

export default ExamplePageTemplate;
