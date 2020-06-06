module.exports = {
  name: 'lib20',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$':  'ts-jest' 
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/lib20'
};
