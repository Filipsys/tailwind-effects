import "./index.css";

function App() {
  return (
    <>
      <div className="grid h-screen w-screen place-items-center bg-slate-700 font-serif">
        <p
          className="size-fit text-[14rem] font-extrabold uppercase leading-none tracking-widest text-transparent [grid-area:1/1]"
          style={{ WebkitTextStroke: "1px white" }}
        >
          Special
        </p>

        <p className="size-fit bg-gradient-to-b from-white to-70% bg-clip-text text-[14rem] font-extrabold uppercase leading-none tracking-widest text-transparent [grid-area:1/1]">
          Special
        </p>
      </div>
    </>
  );
}

export default App;
