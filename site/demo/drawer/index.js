import generatePage from '../../components/generatePage';
import { Button, Drawer } from 'components';

export default generatePage({
  component: 'drawer',
  markdownList: ['basic', '_props'],
  dependencies: {
    Button,
    Drawer,
  },
});
