import React, { useState } from 'react';
import { Input, Icon } from 'components';

export default () => {
  const [inputVal, setInputVal] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <Input />
      <Input errorMessage="请输入密码" />
      <Input label="prefix" prefix="$" />
      <Input label="labelFloat" labelFloat />
      <Input label="labelFloat prefix" labelFloat prefix="KG" />
      <Input label="labelFloat prefix suffix" labelFloat prefix="KG" suffix="元" />
      <Input
        type="password"
        placeholder="请输入姓名"
        label="labelFloat prefix suffix password"
        labelFloat
        prefix="KG"
        suffix="元"
      />
      <Input label="placeholder" placeholder="请输入姓名" />
      <Input
        label="iconInput"
        icon={<Icon material="person" />}
        labelFloat
        placeholder="请输入姓名"
      />
      <Input label="iconInput" icon={<Icon material="person" />} placeholder="请输入姓名" />
      <Input disabled label="disabled" icon={<Icon material="person" />} placeholder="请输入姓名" />
      <Input disabled errorMessage="请输入密码" label="disabled" icon={<Icon material="person" />} placeholder="请输入姓名" />
      <Input labelFloat errorMessage="请输入密码" label="error" icon={<Icon material="person" />} placeholder="请输入姓名" />
      <Input
        label="event"
        errorMessage="请输入"
        maxLength={10}
        onFocus={() => {
          console.log('focus');
        }}
        onBlur={() => {
          console.log('blur');
        }}
      />
      <Input
        label="event"
        maxLength={10}
        showCount
        value={inputVal}
        onChange={e => {
          setInputVal(e.target.value);
        }}
      />
      <Input label="onKeyDown" onKeyDown={() => {
        console.log(1);
      }} />
      <Input
        icon={<Icon material="person" />}
        placeholder="请输入"
        type="textarea"
      />
      <Input
        label="textarea"
        labelFloat
        autoSize
        icon={<Icon material="person" />}
        placeholder="请输入"
        type="textarea"
      />
    </div>
  );
};
