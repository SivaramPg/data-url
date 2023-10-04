'use client'

import { useState } from 'react'
import parseDataUrl from 'parse-data-url'

export default function Home() {
  const [dataUrl, setDataUrl] = useState<string>('')

  return (
    <main className="w-full min-h-screen px-4 py-20 flex items-start justify-start">
      <div className="container mx-auto w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)

            setDataUrl(formData.get('dataUrl')?.toString() ?? '')
          }}
        >
          <label htmlFor="dataUrl" className="block font-bold mb-2 text-2xl">
            Data URL:
          </label>
          <textarea
            name="dataUrl"
            id="dataUrl"
            rows={10}
            className="w-full border-2 border-gray-400 p-2 rounded-lg shadow-md"
            placeholder={`Enter your data url here\nExample: data:image/png;base64,iVBOR.... `}
          />
          <div className="flex items-center justify-start gap-4 mt-4">
            <button
              type="submit"
              className="px-4 py-2 rounded bg-green-500 font-bold text-black shadow-md hover:shadow-lg"
            >
              Submit
            </button>
            <button
              type="reset"
              className="px-4 py-2 rounded bg-red-500 font-bold text-black shadow-md hover:shadow-lg"
            >
              Reset
            </button>
          </div>
        </form>
        <div className="border-b-black border-b-2 w-full my-10" />

        <div className="flex flex-wrap lg:flex-nowrap gap-4 relative">
          <div className="w-full lg:w-1/2 lg:shrink">
            <label htmlFor="url" className="block font-bold mb-2 text-2xl">
              Output Iframe:
            </label>
            <div className="w-full aspect-video border-2 border-blue-200 p-2 bg-blue-50 rounded-lg shadow">
              {!!dataUrl ? (
                <iframe src={dataUrl} className="w-full h-full" sandbox={''} />
              ) : (
                <EmptyState />
              )}
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:shrink">
            <label htmlFor="url" className="block font-bold mb-2 text-2xl">
              Parsed Output :
            </label>
            <pre className="w-full aspect-video shrink break-all whitespace-pre-wrap overflow-auto border p-2 shadow rounded-lg">
              {!!dataUrl ? (
                JSON.stringify(
                  !parseDataUrl(dataUrl)
                    ? 'Invalid URL'
                    : parseDataUrl(dataUrl),
                  null,
                  2
                )
              ) : (
                <EmptyState />
              )}
            </pre>
          </div>
        </div>
      </div>
    </main>
  )
}

function EmptyState() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-4">
      <svg
        width="32"
        height="32"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          fill-rule="evenodd"
          d="M6.5 1a.5.5 0 0 0 0 1c.627 0 .957.2 1.156.478C7.878 2.79 8 3.288 8 4v7c0 .712-.122 1.21-.344 1.522c-.199.278-.53.478-1.156.478a.5.5 0 0 0 0 1c.873 0 1.543-.3 1.97-.897l.03-.044l.03.044c.427.597 1.097.897 1.97.897a.5.5 0 0 0 0-1c-.627 0-.957-.2-1.156-.478C9.122 12.21 9 11.712 9 11V4c0-.712.122-1.21.344-1.522C9.543 2.2 9.874 2 10.5 2a.5.5 0 0 0 0-1c-.873 0-1.543.3-1.97.897l-.03.044l-.03-.044C8.042 1.3 7.372 1 6.5 1ZM14 5h-3V4h3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3v-1h3V5ZM6 4v1H1v5h5v1H1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5Z"
          clip-rule="evenodd"
        />
      </svg>
      <p className="font-bold md:text-lg lg:text-xl">Awaiting your input...</p>
    </div>
  )
}
