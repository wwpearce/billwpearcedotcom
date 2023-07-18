import './Screen.scss';

const Screen = ({ backgroundColor, layoutType, className, children }) => {
  const containerStyle = {
    backgroundColor: backgroundColor || '#ffffff',
    height: '110vh',
    width: '100vw',
    display: 'flex',
    justifyContent: layoutType === 'center' ? 'center' : 'flex-start',
    alignItems: layoutType === 'center' ? 'center' : 'flex-start',
  };

  const screenClassName = `screen ${className}`;

  return (
    <div className={screenClassName} style={containerStyle}>
      {children}
    </div>
  );
};

export default Screen;
