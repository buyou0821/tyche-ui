import generatePage from '../../components/generatePage';
import { Portal, Button } from 'components';

export default generatePage({
  component: 'portal',
  markdownList: ['purePortal', 'portal', '_props'],
  dependencies: {
    Portal,
    Button,
  },
});
