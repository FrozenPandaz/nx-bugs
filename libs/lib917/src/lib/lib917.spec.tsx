import React from 'react';
import { render } from '@testing-library/react';

import Lib917 from './lib917';

describe(' Lib917', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib917 />);
    expect(baseElement).toBeTruthy();
  });
});
