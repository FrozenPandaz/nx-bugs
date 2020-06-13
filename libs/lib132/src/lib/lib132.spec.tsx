import React from 'react';
import { render } from '@testing-library/react';

import Lib132 from './lib132';

describe(' Lib132', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib132 />);
    expect(baseElement).toBeTruthy();
  });
});
