// import React, { useRef, useEffect } from 'react';
// import * as pdfjs from '../pdfjs/build/pdf.mjs';
// import * as pdfWorker from '../pdfjs/build/pdf.worker.mjs';
//
// async function PdfViewer({ pdfUrl }: { pdfUrl: string }) {
//   pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
//   // pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.mjs';
//   const canvasRef = useRef(null);
//
//   useEffect(() => {
//     const renderPdf = async () => {
//       const pdfDoc = await pdfjs.getDocument(pdfUrl).promise;
//       const page = await pdfDoc.getPage(1); // Fetch the first page
//
//       const canvas = canvasRef.current;
//       const context = canvas.getContext('2d');
//       const viewport = page.getViewport({ scale: 1.5 });
//
//       canvas.width = viewport.width;
//       canvas.height = viewport.height;
//
//       const renderContext = {
//         canvasContext: context,
//         viewport,
//       };
//
//       await page.render(renderContext);
//     };
//
//     renderPdf();
//   }, [pdfUrl]);
//
//   return <canvas ref={canvasRef} />;
// }
//
// export default PdfViewer;
import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

export default function PdfViewer() {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: 'https://www.pdf995.com/samples/pdf.pdf',
    page,
    canvasRef,
  });

  return (
    <div>
      {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav>
          <ul className="pager">
            <li className="previous">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Previous
              </button>
            </li>
            <li className="next">
              <button
                disabled={page === pdfDocument.numPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
