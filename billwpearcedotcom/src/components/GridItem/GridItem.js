import './GridItem.scss';


const GridItem = ({ children, isMiddle }) => {

  const gridItemClassName = `GridItem ${isMiddle ? 'isMiddle' : ''}`;

  return <div className={gridItemClassName}>{children}</div>;
};

export default GridItem;
