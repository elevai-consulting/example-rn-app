import { StyleSheet } from 'react-native';

const BASE_FONT_SIZE = 12;
const H1_FONT_SIZE = 1.5 * BASE_FONT_SIZE;
const RESULT_SIZE = 1.5 * BASE_FONT_SIZE;

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: H1_FONT_SIZE,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    marginBottom: 50,
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  fieldLabel: {
    flex: 1,
    marginRight: 20,
  },
  fieldLabelText: {
    fontWeight: 'bold',
  },
  fieldInput: {
    width: 200,
  },
  result: {
    marginTop: 50,
    width: '100%',
  },
  resultText: {
    fontSize: RESULT_SIZE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
