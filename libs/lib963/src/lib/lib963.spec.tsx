import React from 'react';
import { render } from '@testing-library/react';

import Lib963 from './lib963';

describe(' Lib963', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib963 />);
    expect(baseElement).toBeTruthy();
  });
});
