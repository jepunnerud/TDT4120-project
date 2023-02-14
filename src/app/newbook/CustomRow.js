import { Row, Spacer } from '@nextui-org/react';

const CustomRow = (component1, component2) => {
  return (
    <>
      <Row justify="center" align="center">
        {component1}
        {component2}
      </Row>
      <Spacer y={2}></Spacer>
    </>
  );
};

export default CustomRow;
