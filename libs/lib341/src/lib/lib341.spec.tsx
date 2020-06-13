import React from 'react';
import { render } from '@testing-library/react';

import Lib341 from './lib341';

describe(' Lib341', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib341 />);
    expect(baseElement).toBeTruthy();
  });
});
