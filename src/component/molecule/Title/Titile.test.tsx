import { render } from '@testing-library/react';
import { storyList } from './data';

import { Title } from '.';

describe('compoent/molecule/Title', () => {
  describe('Default', () => {
    it('タイトルが表示されること', () => {
      const { getByTestId } = render(<Title {...storyList.Default} />);
      expect(getByTestId('title-title')).toHaveTextContent(storyList.Default.title);
    });
    it('サブタイトルが表示されること', () => {
      const { getByTestId } = render(<Title {...storyList.Default} />);
      expect(getByTestId('title-subtitle')).toHaveTextContent(storyList.Default.subtitle);
    });
  });
});
