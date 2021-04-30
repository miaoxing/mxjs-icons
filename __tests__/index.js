import React from 'react';
import Icon from '..';
import {render} from '@testing-library/react';

describe('Icon', () => {
  test('basic', () => {
    const result = render(<Icon type="text"/>);
    expect(result.container).toMatchSnapshot();
  });
});
