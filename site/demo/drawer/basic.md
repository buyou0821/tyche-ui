## Drawer 抽屉

<!--start-code-->

```js
const Drawers = () => {
  const [leftVisible, setLeftVisible] = React.useState(false);
  const [rightVisible, setRightVisible] = React.useState(false);
  const [topVisible, setTopVisible] = React.useState(false);
  const [bottomVisible, setBottomVisible] = React.useState(false);

  return (
    <div>
      <Button
        color="primary"
        onClick={() => {
          setLeftVisible(!leftVisible);
        }}
      >
        Left
      </Button>
      <Drawer
        visible={leftVisible}
        onClose={() => {
          setLeftVisible(false);
        }}
      >
        Left
      </Drawer>

      <Button
        color="primary"
        onClick={() => {
          setRightVisible(!rightVisible);
        }}
      >
        Right
      </Button>
      <Drawer
        placement="right"
        visible={rightVisible}
        onClose={() => {
          setRightVisible(false);
        }}
      >
        Right
      </Drawer>

      <Button
        color="primary"
        onClick={() => {
          setTopVisible(!topVisible);
        }}
      >
        Top
      </Button>
      <Drawer
        placement="top"
        visible={topVisible}
        onClose={() => {
          setTopVisible(false);
        }}
      >
        Top
      </Drawer>

      <Button
        color="primary"
        onClick={() => {
          setBottomVisible(!bottomVisible);
        }}
      >
        Bottom
      </Button>
      <Drawer
        placement="bottom"
        visible={bottomVisible}
        onClose={() => {
          setBottomVisible(false);
        }}
      >
        Bottom
      </Drawer>
    </div>
  );
};
ReactDOM.render(<Drawers />);
```

<!--end-code-->
