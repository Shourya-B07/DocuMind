"use client"

import dynamic from "next/dynamic"

// ⬅️ Now we can safely disable SSR here
const PdfRenderer = dynamic(() => import("./PdfRenderer"), { ssr: false })

export default PdfRenderer
