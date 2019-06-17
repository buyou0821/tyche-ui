import generatePage from '../../components/generatePage';
import { Input, Icon, Row, Col } from 'components';

export default generatePage({
  component: 'input',
  markdownList: ['basic', 'fix', 'icon', 'error', 'count', 'textarea', '_props'],
  dependencies: {
    Input,
    Icon,
    Row,
    Col,
  },
});
