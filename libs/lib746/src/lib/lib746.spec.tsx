import React from 'react';
import { render } from '@testing-library/react';

import Lib746 from './lib746';

describe(' Lib746', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib746 />);
    expect(baseElement).toBeTruthy();
  });
});
