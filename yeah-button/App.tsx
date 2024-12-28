import "./index.css"
import { ButtonIcon } from "./components/ButtonIcon.tsx";
import { TextSVG } from "./components/TextSVG.tsx";

function App() {
  const buttonHeight = 50;
  const setBorderRadius = parseInt(buttonHeight / 4)

  return (
    <div
      className="w-full h-dvh flex items-center justify-center">
      <div
        style={{ height: buttonHeight, borderRadius: setBorderRadius }}
        className="flex items-center justify-center aspect-[2.8/1] select-none cursor-pointer gap-4 text-[10vw] rounded-[30px] bg-gradient-to-b from-[#FFFFFF] to-[#E7E7E7] border-[2px] border-[#BFC1C0]/.2 [box-shadow:_0px_6px_10px_2px_rgba(0,_0,_0,_0.26)] [box-shadow:inset_0px_-6px_12px_-4px_rgba(0,_0,_0,_0.2)] ">
        <div className="h-1/2">
          <ButtonIcon />
        </div>

        <div className="h-1/3">
          <TextSVG />
        </div>
      </div>
    </div>
  )
}

export default App
