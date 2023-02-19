import { Row, Spacer } from '@nextui-org/react';

const Rows = ({ components, gap }) => {
  return (
    <>
      {components.map((component, index) => (
        <div key={index}>
          <Row justify="center" align="center">
            {component}
          </Row>
          <Spacer y={gap}></Spacer>
        </div>
      ))}
    </>
  );
};

export default Rows;
