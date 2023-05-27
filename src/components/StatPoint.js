import React from 'react'

export default function StatPoint({header, subtitle}) {
  return (
    <div>
        <div className='font-bold text-7xl tracking-tighter'>{header}</div>
        <div className='text-dark/500 tracking-tighter font-medium mt-1 text-center md:text-left'>{subtitle}</div>
        <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
<link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />

    </div>
  )
}

