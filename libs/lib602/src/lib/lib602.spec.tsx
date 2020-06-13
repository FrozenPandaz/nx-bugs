import React from 'react';
import { render } from '@testing-library/react';

import Lib602 from './lib602';

describe(' Lib602', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib602 />);
    expect(baseElement).toBeTruthy();
  });
});
