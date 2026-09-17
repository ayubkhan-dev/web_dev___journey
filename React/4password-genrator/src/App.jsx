
import { useCallback, useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [charater, setCharater] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (charater) str += "!#$%&'()*+,-./:;<=>?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, number, charater])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="outline-none w-full py-1 px-3"
          />

          <button
            className="flex text-sm bg-blue-700 text-white px-3 py-2"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />

            <label>Length: {length}</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="numberinput"
              checked={number}
              onChange={() => setNumber((prev) => !prev)}
            />

            <label htmlFor="numberinput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charater}
              id="charaterinput"
              onChange={() => setCharater((prev) => !prev)}
            />

            <label htmlFor="charaterinput">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App