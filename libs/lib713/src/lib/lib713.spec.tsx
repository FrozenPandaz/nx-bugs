import React from 'react';
import { render } from '@testing-library/react';

import Lib713 from './lib713';

describe(' Lib713', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib713 />);
    expect(baseElement).toBeTruthy();
  });
});
