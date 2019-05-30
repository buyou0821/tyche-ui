import generatePage from '../../components/generatePage';
import { Row, Col } from 'components';

export default generatePage({
  component: 'grid',
  markdownList: [
    'basic',
    'gutter',
    'offset',
    'pull-push',
    'justify',
    'align',
    'order',
    'responsive',
    'responsive-others',
    '_props',
  ],
  dependencies: {
    Row,
    Col,
  },
});
