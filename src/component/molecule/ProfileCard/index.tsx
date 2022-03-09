import Image from 'next/image';
import React from 'react';
import ProfileImage from '~/img/profile.png';

export interface ImageProps {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

export interface ProfileCardProps {
  type: 'left' | 'right';
  ProfileImage: ImageProps;
  title: string;
  subtitle: string;
  text: string;
  readmore: string;
  button: string;
  url: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  type,
  ProfileImage,
  title,
  subtitle,
  text,
  readmore,
  button,
  url,
}) =>
  type === 'right' ? (
    <div className='bg-dark-gray-700'>
      <div className='flex  justify-center items-center'>
        <div className='bg-yellow-700' data-testid='pc-image-color'>
          <div className='my-4 -mr-4 ml-4' data-testid='pc-image'>
            <Image {...ProfileImage} alt={ProfileImage.alt} />
          </div>
        </div>

        <div className=' py-8 px-4 -ml-9 w-96 bg-white'>
          <h2
            data-testid='pc-title'
            className='text-2xl font-bold tracking-widest text-yellow-700 '
          >
            {title}
          </h2>
          <h3
            className='text-base font-semibold tracking-wider text-yellow-700'
            data-testid='pc-subtitle'
          >
            {subtitle}
          </h3>
          <p className='my-8 text-sm tracking-wider' data-testid='pc-text'>
            {text}
          </p>
          <div className='flex items-center'>
            <p className='text-lg tracking-widest text-yellow-700' data-testid='pc-readmore'>
              {readmore}
            </p>
            <button className='ml-4 btn-base' data-testid='pc-button'>
              <a href={url} data-testid='pc-button-link'>
                {button}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : type === 'left' ? (
    <div className='bg-dark-gray-700'>
      <div className='flex  justify-center items-center'>
        <div className='z-10 py-8 px-4 -mr-9 w-96 bg-white'>
          <h2 className='text-2xl font-bold tracking-widest text-yellow-700' data-testid='pc-title'>
            {title}
          </h2>
          <h3
            className='text-base font-semibold tracking-wider text-yellow-700'
            data-testid='pc-subtitle'
          >
            {subtitle}
          </h3>
          <p className='my-8 text-sm tracking-wider' data-testid='pc-text'>
            {text}
          </p>
          <div className='flex items-center'>
            <p className='text-lg tracking-widest text-yellow-700'>{readmore}</p>
            <button className='ml-4 btn-base'>
              <a href={url}>{button}</a>
            </button>
          </div>
        </div>
        <Image
          src={ProfileImage.src}
          alt={ProfileImage.alt}
          height={ProfileImage.width}
          width={ProfileImage.width}
          className=' py-6 pr-8 bg-yellow-700'
        />
      </div>
    </div>
  ) : (
    <></>
  );
