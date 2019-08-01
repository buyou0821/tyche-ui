import generatePage from '../../components/generatePage';
import { Button, message } from 'components';

export default generatePage({
  component: 'message',
  markdownList: ['basic', 'type', 'duration', 'loading', '_props'],
  dependencies: {
    Button,
    message,
  },
});
