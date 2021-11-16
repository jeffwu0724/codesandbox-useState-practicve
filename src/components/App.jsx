import React from "react";

function App() {
  //1. 先创建一个state,在userState里面初始化第一个元素count，
  //第二个元素是用来控制count的function
  const [count, setCount] = React.useState(0);

  //3.每一个function，我们利用setCount来修改他的值
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  //在想要触发变化的按钮，例如-/+，我们创建一个对应的function
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
