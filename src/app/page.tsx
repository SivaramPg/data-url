'use client'

import { useState } from 'react'
import parseDataUrl from 'parse-data-url'
import { twMerge as cn } from 'tailwind-merge'

export default function Home() {
  const [dataUrl, setDataUrl] = useState<string>('')

  const parsedData = parseDataUrl(dataUrl)

  return (
    <main
      className="w-full min-h-screen px-4 py-20 pt-24 flex items-start justify-start"
      style={{
        background:
          'linear-gradient(42deg,rgba(34,58,252,0.14),rgba(83,101,115,0.11))',
      }}
    >
      <div className="container mx-auto w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)

            setDataUrl(formData.get('dataUrl')?.toString() ?? '')
          }}
          onReset={(e) => {
            e.preventDefault()
            setDataUrl('')
          }}
        >
          <label htmlFor="dataUrl" className="block font-bold mb-2 text-2xl">
            Input Data URL:
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
              className="px-10 py-3 rounded bg-green-500 font-bold text-lg text-black shadow-md hover:shadow-lg"
            >
              Submit
            </button>
            <button
              type="reset"
              className="px-10 py-3 rounded bg-red-500 font-bold text-lg shadow-md hover:shadow-lg text-white"
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
            <div
              className={cn(
                'w-full aspect-video border-2 border-blue-200 p-2 bg-blue-50 rounded-lg shadow',
                dataUrl && !parsedData ? 'border-red-200 bg-red-50' : ''
              )}
            >
              {!!dataUrl ? (
                !!parsedData ? (
                  <iframe
                    src={dataUrl}
                    className="w-full h-full"
                    sandbox={''}
                  />
                ) : (
                  <InvalidState />
                )
              ) : (
                <EmptyState />
              )}
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:shrink">
            <label htmlFor="url" className="block font-bold mb-2 text-2xl">
              Parsed Output JSON:
            </label>
            <pre
              className={cn(
                'w-full aspect-video shrink break-all whitespace-pre-wrap overflow-auto border-2 border-blue-200 p-2 bg-blue-50 shadow rounded-lg',
                dataUrl && !parsedData ? 'border-red-200 bg-red-50' : ''
              )}
            >
              {!!dataUrl ? (
                !!parsedData ? (
                  JSON.stringify(parsedData, null, 2)
                ) : (
                  <InvalidState />
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
          fillRule="evenodd"
          d="M6.5 1a.5.5 0 0 0 0 1c.627 0 .957.2 1.156.478C7.878 2.79 8 3.288 8 4v7c0 .712-.122 1.21-.344 1.522c-.199.278-.53.478-1.156.478a.5.5 0 0 0 0 1c.873 0 1.543-.3 1.97-.897l.03-.044l.03.044c.427.597 1.097.897 1.97.897a.5.5 0 0 0 0-1c-.627 0-.957-.2-1.156-.478C9.122 12.21 9 11.712 9 11V4c0-.712.122-1.21.344-1.522C9.543 2.2 9.874 2 10.5 2a.5.5 0 0 0 0-1c-.873 0-1.543.3-1.97.897l-.03.044l-.03-.044C8.042 1.3 7.372 1 6.5 1ZM14 5h-3V4h3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3v-1h3V5ZM6 4v1H1v5h5v1H1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5Z"
          clipRule="evenodd"
        />
      </svg>
      <p className="font-bold md:text-lg lg:text-xl">Awaiting your input...</p>
    </div>
  )
}

function InvalidState() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-4">
      <svg
        width="48"
        height="48"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.14 7.13L1.27 9a2.65 2.65 0 0 0 0 3.74h0a2.65 2.65 0 0 0 3.74 0l1.11-1.11M9 9.5h1.86a2.64 2.64 0 0 0 2.64-2.64h0a2.64 2.64 0 0 0-2.64-2.64H8.22M7 .5l-.5 2m-6 1l2 1m.5-4l1 2"
        />
      </svg>
      <p className="font-bold md:text-lg lg:text-xl">Invalid data url...</p>
    </div>
  )
}
