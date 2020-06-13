import React from 'react';
import { render } from '@testing-library/react';

import Lib135 from './lib135';

describe(' Lib135', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib135 />);
    expect(baseElement).toBeTruthy();
  });
});
