import React from 'react';
import { render } from '@testing-library/react';

import Lib498 from './lib498';

describe(' Lib498', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib498 />);
    expect(baseElement).toBeTruthy();
  });
});
