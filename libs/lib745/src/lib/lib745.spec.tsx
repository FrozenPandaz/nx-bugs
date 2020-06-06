import React from 'react';
import { render } from '@testing-library/react';

import Lib745 from './lib745';

describe(' Lib745', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib745 />);
    expect(baseElement).toBeTruthy();
  });
});
