import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Header from './header.jsx';
import Template from './template.jsx';
import Footer from './footer.jsx'

export default function Candidate({ name }) {
  // Create a ref to attach to the certificate DOM element
  const certificateRef = useRef();

  // Function to handle the PDF download
  const handleDownloadPdf = async () => {
    const element = certificateRef.current;
    if (!element) {
      return;
    }

    // Use html2canvas to capture the element as an image
    const canvas = await html2canvas(element, {
      scale: 3, // Increase scale for better resolution
    });

    const imgData = canvas.toDataURL('image/png');

    // Create a new jsPDF instance
    // A4 dimensions in landscape: 297mm x 210mm
    const pdf = new jsPDF('landscape', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Add the captured image to the PDF
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    // Save the PDF with a unique name
    pdf.save(`Certificate-${name}.pdf`);
  };

  return (
    <div className="preview-container">
      {/* The download button is placed outside the printed area */}
      <div className="download-section">
        <h1 className="variant-title">Certificate for {name}</h1>
        <button className="download-btn" onClick={handleDownloadPdf}>
          Download PDF
        </button>
      </div>

      {/* Attach the ref to the section you want to capture */}
      <section className="certificate" ref={certificateRef}>
        <div className="certificate-inner">
          <Header />
          <Template name={name} />
          <Footer/>
        </div>
      </section>
    </div>
  );
}