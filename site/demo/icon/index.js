import generatePage from '../../components/generatePage';
import { Icon } from 'components';

export default generatePage({
  component: 'icon',
  markdownList: ['basic', 'material', 'iconfont', '_props'],
  dependencies: {
    Icon,
  },
});
