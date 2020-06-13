import React from 'react';
import { render } from '@testing-library/react';

import Lib292 from './lib292';

describe(' Lib292', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib292 />);
    expect(baseElement).toBeTruthy();
  });
});
