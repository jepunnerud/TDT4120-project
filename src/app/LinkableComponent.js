import Link from 'next/link';
import './globals.css';

const LinkableComponent = ({ link, component }) => {
  return (
    <Link href={link} passHref className="Link">
      {component}
    </Link>
  );
};

export default LinkableComponent;
