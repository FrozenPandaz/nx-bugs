import React from 'react';
import { render } from '@testing-library/react';

import Lib158 from './lib158';

describe(' Lib158', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib158 />);
    expect(baseElement).toBeTruthy();
  });
});
