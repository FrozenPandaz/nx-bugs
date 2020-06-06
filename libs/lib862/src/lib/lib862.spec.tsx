import React from 'react';
import { render } from '@testing-library/react';

import Lib862 from './lib862';

describe(' Lib862', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib862 />);
    expect(baseElement).toBeTruthy();
  });
});
