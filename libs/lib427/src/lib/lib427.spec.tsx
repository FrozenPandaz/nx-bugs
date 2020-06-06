import React from 'react';
import { render } from '@testing-library/react';

import Lib427 from './lib427';

describe(' Lib427', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib427 />);
    expect(baseElement).toBeTruthy();
  });
});
