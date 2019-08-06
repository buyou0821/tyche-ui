import generatePage from '../../components/generatePage';
import { Switch, Button } from 'components';

export default generatePage({
  component: 'Switch',
  markdownList: ['basic', 'disabled', 'color', '_props'],
  dependencies: {
    Switch,
    Button,
  },
});
