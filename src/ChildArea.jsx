import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
};

export const ChildArea = memo((props) => {
  const { open, onClose } = props;
  console.log("ChildAreaがレンダリングされた");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClose}>非表示</button>
        </div>
      ) : null}
    </>
  );
});
