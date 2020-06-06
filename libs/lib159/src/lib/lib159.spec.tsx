import React from 'react';
import { render } from '@testing-library/react';

import Lib159 from './lib159';

describe(' Lib159', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib159 />);
    expect(baseElement).toBeTruthy();
  });
});
