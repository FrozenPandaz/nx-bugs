import React from 'react';
import { render } from '@testing-library/react';

import Lib678 from './lib678';

describe(' Lib678', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib678 />);
    expect(baseElement).toBeTruthy();
  });
});
