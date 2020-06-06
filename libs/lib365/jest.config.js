module.exports = {
  name: 'lib365',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$':  'ts-jest' 
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/lib365'
};
