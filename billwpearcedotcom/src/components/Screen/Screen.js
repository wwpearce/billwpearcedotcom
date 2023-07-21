import './Screen.scss';

const Screen = ({ backgroundColor, layoutType, className, id, children }) => {
  const containerStyle = {
    backgroundColor: backgroundColor || '#ffffff',
    minHeight: '101vh',
    height: 'auto',
    width: '100vw',
    display: 'flex',
    justifyContent: layoutType === 'center' ? 'center' : 'flex-start',
    alignItems: layoutType === 'center' ? 'center' : 'flex-start',
  };

  const screenClassName = `screen ${className}`;

  return (
    <div className={screenClassName} id = {id} style={containerStyle}>
      {children}
    </div>
  );
};

export default Screen;
