import "./index.css";

const SpecialChar = (props: { char: string }) => {
  return (
    <span className="grid place-items-center text-[32rem] uppercase tracking-widest">
      <p
        className="inline-block size-fit select-none leading-none text-transparent [grid-area:1/1]"
        style={{ WebkitTextStroke: "1px white" }}
      >
        {props.char}
      </p>

      <p className="inline-block size-fit select-text bg-gradient-to-b from-white to-60% bg-clip-text leading-none text-transparent [grid-area:1/1]">
        {props.char}
      </p>
    </span>
  );
};

function App() {
  const sentence = "Hey";

  return (
    <>
      <div className="font-DMSerifDisplay flex h-screen w-screen flex-row justify-center gap-2 bg-[#dce2e3]">
        {sentence.split("").map((char) => (
          <SpecialChar char={char} />
        ))}
      </div>
    </>
  );
}

export default App;
