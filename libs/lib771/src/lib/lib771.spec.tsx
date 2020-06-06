import React from 'react';
import { render } from '@testing-library/react';

import Lib771 from './lib771';

describe(' Lib771', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib771 />);
    expect(baseElement).toBeTruthy();
  });
});
