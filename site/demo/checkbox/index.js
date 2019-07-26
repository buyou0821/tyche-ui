import generatePage from '../../components/generatePage';
import { Checkbox, Row, Col, Icon } from 'components';

export default generatePage({
  component: 'checkbox',
  markdownList: ['basic', 'disabled', 'icon', 'checkboxGroup', 'layout', 'checkAll', '_props'],
  dependencies: {
    Checkbox,
    Row,
    Col,
    Icon,
  },
});
