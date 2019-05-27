import generatePage from '../../components/generatePage';
import { Button, Icon } from 'components';

export default generatePage({
  component: 'buttons',
  markdownList: ['basic', 'text', 'outlined', 'circle-fab', 'round', 'icon', 'size'],
  dependencies: {
    Button,
    Icon,
  },
});
