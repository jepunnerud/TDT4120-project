import { Dropdown } from '@nextui-org/react';
import { useState, useMemo } from 'react';

export default function App() {
  const [selected, setSelected] = useState(new Set(['Genre']));

  const selectedValue = useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button
        css={{
          tt: 'capitalize',
          backgroundColor: '#22b573',
          position: 'fixed',
          right: 100,
          width: '17%',
        }}
      >
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        css={{ color: '#22b573' }}
      >
        <Dropdown.Item key="Fantasy">Fantasy</Dropdown.Item>
        <Dropdown.Item key="Comedy">Comedy</Dropdown.Item>
        <Dropdown.Item key="Anime">Anime</Dropdown.Item>
        <Dropdown.Item key="Comic">Comic</Dropdown.Item>
        <Dropdown.Item key="Science">Science</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
