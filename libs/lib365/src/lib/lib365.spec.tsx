import React from 'react';
import { render } from '@testing-library/react';

import Lib365 from './lib365';

describe(' Lib365', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib365 />);
    expect(baseElement).toBeTruthy();
  });
});
