import React from 'react';
import { render } from '@testing-library/react';

import Lib693 from './lib693';

describe(' Lib693', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib693 />);
    expect(baseElement).toBeTruthy();
  });
});
