import classnames from './loader.module.css';

const Loader = () => {
  return (
    <div role='status' aria-busy='true'>
      <div className={classnames.loader}></div>
    </div>
  );
};

export default Loader;
