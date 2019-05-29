import generatePage from '../../components/generatePage';
import { Modal, Button } from 'components';

export default generatePage({
  component: 'modal',
  markdownList: [
    'basic',
    'footer',
    'confirm',
    'confirm-props',
    'confirm-destroyAll',
    'confirm-update',
    '_props',
  ],
  dependencies: {
    Button,
    Modal,
  },
});
