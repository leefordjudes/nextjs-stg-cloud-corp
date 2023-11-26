import Image from 'next/image';
import homeImg from 'public/home.jpg';

export default function HomePage() {
  return (
    <div>
      Home Page
      {/* <div className='absolute -z-10 inset-0'>
        <Image
          src={homeImg}
          alt='car factory'
          fill
          style={{ objectFit: 'cover' }}
        />
      </div> */}
      <div className='flex flex-row'>
        <Image src={homeImg} alt='car factory' width={600} height={500} />
        <div>Buy our product</div>
      </div>
    </div>
  );
}
