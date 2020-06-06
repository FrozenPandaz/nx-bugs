import React from 'react';
import { render } from '@testing-library/react';

import Lib171 from './lib171';

describe(' Lib171', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib171 />);
    expect(baseElement).toBeTruthy();
  });
});
