import React from 'react';
import { render } from '@testing-library/react';

import Lib966 from './lib966';

describe(' Lib966', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib966 />);
    expect(baseElement).toBeTruthy();
  });
});
