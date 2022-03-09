import ProfileImage from '../../../../public/img/profile.png';
import { ProfileCardProps, ImageProps } from '.';

export const storyList: { [key: string]: ProfileCardProps } = {
  Right: {
    type: 'right',
    ProfileImage: {
      src: ProfileImage,
      alt: 'profile',
      width: 415,
      height: 370,
    },
    title: 'Profile',
    subtitle: 'プロフィール',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    readmore: 'Read more',
    button: '→',
    url: 'https://google.com',
  },
  Left: {
    type: 'left',
    ProfileImage: {
      src: ProfileImage,
      alt: 'profile',
      width: 415,
      height: 370,
    },
    title: 'Profile',
    subtitle: 'プロフィール',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    readmore: 'Read more',
    button: '→',
    url: 'https://google.com',
  },
};
