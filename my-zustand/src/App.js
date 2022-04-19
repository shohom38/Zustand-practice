import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  name: "연예인",
  inc() {
    set((state) => ({count : state.count + 1}))
  },
  dec() {
    set((state) => ({count : state.count - 1}))
  }
}))

const useStore2 = create((set) => ({
  count: 0,
  name: "연예인 굿즈",
  inc() {
    set((state) => ({count : state.count + 1}))
  },
  dec() {
    set((state) => ({count : state.count - 1}))
  },
  morePay() {
    set((state) => ({count : state.count + 100}))
  },
  resetPay: (input) => set(
    {
      count: input
    }
  ),
}))

function App() {
  const {count, name, inc, dec} = useStore();
  return (
    <div className="App">
      <p>{name}의 호감도 : {count}</p>
      <button onClick={() => {
        inc()
      }}>좋아요</button>
      <button onClick={() => {
        dec()
      }}>싫어요</button>
      <Payment />
    </div>
  );
}

function Payment() {
  const {count, inc, dec, name, morePay , resetPay} =useStore2();
  return (
    <div>
      <p>{name}를 위한 카드 사용 {count}</p>
      <button onClick={() => {
        inc()
      }}>굿즈 사기</button>
      <button onClick={() => {
        dec()
      }}>굿즈 버리기</button>
      <button onClick={() => resetPay(0)}>굿즈 리셋</button>
      <button onClick={() => morePay()}>굿즈 왕창사기</button>
    </div>
  )
}

export default App;
