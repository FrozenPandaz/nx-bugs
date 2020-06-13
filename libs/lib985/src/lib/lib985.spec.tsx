import React from 'react';
import { render } from '@testing-library/react';

import Lib985 from './lib985';

describe(' Lib985', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib985 />);
    expect(baseElement).toBeTruthy();
  });
});
