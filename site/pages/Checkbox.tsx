import React from 'react';
import { Checkbox } from 'components';

// interface OptionType {
//   label: string;
//   value: string;
//   disabled?: boolean;
// }

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const App = () => {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (checkedList: string[]) => {
    console.log(checkedList);
    setCheckedList(checkedList);
    setIndeterminate(!!checkedList.length && checkedList.length < plainOptions.length);
    setCheckAll(checkedList.length === plainOptions.length);
  };

  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div>
      <Checkbox indeterminate={false} checked>
        {checkAll}
      </Checkbox>
      <div style={{ borderBottom: '1px solid #E9E9E9' }}>
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
          Check all
        </Checkbox>
      </div>
      <br />
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </div>
  );
};

export default App;

// export default () => {
//   const [val, setVal] = useState([1, 2]);
//   const [val1, setVal1] = useState(['Apple']);
//   const options: Array<OptionType | string> = [
//     'Apple',
//     { label: 'Banana', value: 'Banana' },
//     { label: 'Orange', value: 'Orange', disabled: true },
//   ];
//   return (
//     <div style={{ padding: 20 }}>
//       <Checkbox>checkbox</Checkbox>
//       <Checkbox checked indeterminate disabled>
//         checkbox
//       </Checkbox>
//       <Checkbox
//         color="danger"
//         checked
//         icon={<Icon material="favorite_border" />}
//         checkedIcon={<Icon material="favorite" />}
//       >
//         checkbox
//       </Checkbox>
//       <Checkbox
//         icon={<Icon material="visibility_off" />}
//         checkedIcon={<Icon material="visibility" />}
//       >
//         checkbox
//       </Checkbox>
//       <br />
//       <Checkbox.Group value={val} color="success" onChange={(vals: number[]) => setVal(vals)}>
//         <Checkbox value={1} color="danger">
//           1
//         </Checkbox>
//         <Checkbox value={2}>2</Checkbox>
//         <Checkbox value={3}>3</Checkbox>
//       </Checkbox.Group>
//       <Checkbox.Group
//         options={options}
//         value={val1}
//         onChange={(vals: string[]) => {
//           setVal1(vals);
//         }}
//       />
//     </div>
//   );
// };
