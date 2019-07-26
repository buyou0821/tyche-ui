## Checkbox 组

方便的从数组生成`Checkbox`组。  
注：当使用`Checkbox.Group`时，`Checkbox`的`checked`属性将失效。

<!--start-code-->

```jsx
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

ReactDOM.render(
  <div>
    <Checkbox.Group
      options={plainOptions}
      defaultValue={['Apple']}
      onChange={onChange}
    />
    <Checkbox.Group
      options={options}
      defaultValue={['Pear']}
      onChange={onChange}
    />
    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    />
  </div>,
);
```

<!--end-code-->
