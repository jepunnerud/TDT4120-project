import { Row, Spacer } from '@nextui-org/react';

const Rows = ({ components, gap }) => {
  return (
    <>
      {components.map((component) => (
        <>
          <Row justify="center" align="center">
            {component}
          </Row>
          <Spacer y={gap}></Spacer>
        </>
      ))}
    </>
  );
};

export default Rows;
