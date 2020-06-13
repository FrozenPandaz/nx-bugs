import React from 'react';
import { render } from '@testing-library/react';

import Lib423 from './lib423';

describe(' Lib423', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib423 />);
    expect(baseElement).toBeTruthy();
  });
});
