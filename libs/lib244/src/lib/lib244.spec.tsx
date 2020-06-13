import React from 'react';
import { render } from '@testing-library/react';

import Lib244 from './lib244';

describe(' Lib244', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib244 />);
    expect(baseElement).toBeTruthy();
  });
});
