import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex-row'>
      <h1 data-testid='testid'>Hello World</h1>
      <Link href='/grid' className='block m-10' id='gridbtn'>
        Navigate to grid page
      </Link>
      <button id='test button 2'>secondBtn</button>
    </div>
  );
}
