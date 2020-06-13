import React from 'react';
import { render } from '@testing-library/react';

import Lib52 from './lib52';

describe(' Lib52', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib52 />);
    expect(baseElement).toBeTruthy();
  });
});
