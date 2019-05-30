import generatePage from '../../components/generatePage';
import { Layout } from 'components';

export default generatePage({
  component: 'layout',
  markdownList: ['basic', '_props'],
  dependencies: {
    Layout,
  },
});
