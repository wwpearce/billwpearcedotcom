import './Screen.scss';

const Screen = ({
  backgroundColor,
  layoutType,
  className,
  id,
  children,
}) => {
  const containerStyle = {
    backgroundColor: backgroundColor || '#ffffff',
    minHeight: '100vh',
    height: 'auto',
    width: '100%',
    display: 'flex',
    justifyContent: layoutType === 'center' ? 'center' : 'flex-start',
    alignItems: layoutType === 'center' ? 'center' : 'flex-start',
  };

  const screenClassName = `Screen ${className}`;

  return (
    <div className={screenClassName} id={id} style={containerStyle}>
      {children}
    </div>
  );
};

export default Screen;
