import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className='absolute top-5 left-5'>
        <div className='flex items-center'>
          <Link href='https://qnt.one'>
            <Image
              src='/logo.png'
              alt='Logo'
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
      <div className='absolute top-5 right-5 flex gap-2 font-extralight'>
        <Link href='https://github.com/qnton/url-shrtnr'>Github</Link>
        <Link href='https://qnt.one'>Website</Link>
      </div>
    </>
  );
}
