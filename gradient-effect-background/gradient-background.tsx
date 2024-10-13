import "./index.css";

function App() {
  return (
    <>
      <div
        className="flex h-screen w-full items-center justify-center"
        style={{
          background:
            "radial-gradient(120vw 220vh at 0 150vh, #262030, 60%, #411c3f, #18233b, #262130)",
        }}
      >
        <h1 className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-8xl font-bold leading-normal text-transparent text-white">
          Gradient Effect Background
        </h1>
      </div>
    </>
  );
}

export default App;
