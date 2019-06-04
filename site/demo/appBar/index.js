import generatePage from '../../components/generatePage';
import { Button, Icon, AppBar } from 'components';

export default generatePage({
  component: 'appBar',
  markdownList: ['default', 'basic', '_props'],
  dependencies: {
    Button,
    Icon,
    AppBar,
  },
});
