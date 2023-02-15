'use client';

import { useRouter } from 'next/navigation';

function Book() {
  const router = useRouter();
  const { bookid } = router.query;

  return (
    <>
      <h1>Prop: {bookid}</h1>
    </>
  );
}

export default Book;
