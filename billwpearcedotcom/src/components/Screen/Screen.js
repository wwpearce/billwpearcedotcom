import './Screen.scss';

const Screen = ({ className, id, children }) => {
  const screenClassName = `Screen ${className}`;

  return (
    <div className={screenClassName} id={id}>
      {children}
    </div>
  );
};

export default Screen;
