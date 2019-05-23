import generatePage from '../../components/generatePage';
import { Button, Icon } from 'components/index';

export default generatePage({
  component: 'button',
  markdownList: ['basic', 'text', 'outlined', 'circle-fab', 'round', 'icon', 'size'],
  dependencies: {
    Button,
    Icon,
  },
});
