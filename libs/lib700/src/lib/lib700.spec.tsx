import React from 'react';
import { render } from '@testing-library/react';

import Lib700 from './lib700';

describe(' Lib700', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib700 />);
    expect(baseElement).toBeTruthy();
  });
});
