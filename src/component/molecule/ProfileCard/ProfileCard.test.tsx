import { render } from '@testing-library/react';

import { storyList } from './data';
import { ProfileCard } from '.';

describe('compoent/molecule/ProfileCard', () => {
  describe('Right', () => {
    it('画像が表示されること', () => {
      const { getByTestId } = render(<ProfileCard {...storyList.Right} />);
      expect(getByTestId('pc-image')).toBeInTheDocument();
    });
    it('画像に背景が表示されること', () => {
      const { getByTestId } = render(<ProfileCard {...storyList.Right} />);
      expect(getByTestId('pc-image-color')).toHaveClass('bg-yellow-700');
      expect(getByTestId('pc-image')).toHaveClass('my-4 -mr-4 ml-4');
    });
    it('タイトルが表示されること', () => {
      const { getByTestId } = render(<ProfileCard {...storyList.Right} />);
      expect(getByTestId('pc-title')).toHaveTextContent(storyList.Right.title);
    });
    it('サブタイトルが表示されること', () => {
      const { getByTestId } = render(<ProfileCard {...storyList.Right} />);
      expect(getByTestId('pc-subtitle')).toHaveTextContent(storyList.Right.subtitle);
    });
    it('テキストが表示されること', () => {
      const { getByTestId } = render(<ProfileCard {...storyList.Right} />);
      expect(getByTestId('pc-text')).toHaveTextContent(storyList.Right.text);
    });
    it('Read more が表示されること', () => {
      const { getByTestId } = render(<ProfileCard {...storyList.Right} />);
      expect(getByTestId('pc-readmore')).toHaveTextContent(storyList.Right.readmore);
    });
    it('ボタンが表示されること', () => {
      const { getByTestId } = render(<ProfileCard {...storyList.Right} />);
      expect(getByTestId('pc-button')).toHaveTextContent(storyList.Right.button);
    });
    it('ボタンのリンク先があること', () => {
      const { getByTestId } = render(<ProfileCard {...storyList.Right} />);
      expect(getByTestId('pc-button-link')).toHaveAttribute('href', storyList.Right.url);
    });
  });
});
