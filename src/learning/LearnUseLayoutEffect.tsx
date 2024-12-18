import { useEffect, useLayoutEffect } from 'react';

const LearnUseLayoutEffect = () => {
  useEffect(() => {
    console.log('Vert');
  }, []);

  console.log('Bleu');

  useLayoutEffect(() => {
    console.log('Rouge');
  }, []);

  return <div>LearnUseLayoutEffect</div>;
};

export default LearnUseLayoutEffect;
