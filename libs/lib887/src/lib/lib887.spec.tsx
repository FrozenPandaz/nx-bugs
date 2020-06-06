import React from 'react';
import { render } from '@testing-library/react';

import Lib887 from './lib887';

describe(' Lib887', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib887 />);
    expect(baseElement).toBeTruthy();
  });
});
