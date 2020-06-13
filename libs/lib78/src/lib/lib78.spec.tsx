import React from 'react';
import { render } from '@testing-library/react';

import Lib78 from './lib78';

describe(' Lib78', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib78 />);
    expect(baseElement).toBeTruthy();
  });
});
