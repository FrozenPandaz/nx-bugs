import React from 'react';
import { render } from '@testing-library/react';

import Lib481 from './lib481';

describe(' Lib481', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib481 />);
    expect(baseElement).toBeTruthy();
  });
});
