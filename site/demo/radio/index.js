import generatePage from '../../components/generatePage';
import { Radio, Row } from 'components';

export default generatePage({
  component: 'radio',
  markdownList: ['basic', 'radioGroup', 'disabled', 'color', 'layout', 'equal', '_props'],
  dependencies: {
    Radio,
    Row,
  },
});
