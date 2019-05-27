import generatePage from '../../components/generatePage';
import { Portal, Button } from 'components';

export default generatePage({
  component: 'portal',
  markdownList: ['basic', '_props'],
  dependencies: {
    Portal,
    Button,
  },
});
