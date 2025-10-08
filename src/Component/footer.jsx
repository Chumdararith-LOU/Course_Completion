import signature from "../assets/signature.png";

export default function Footer() {
  return (
    <footer className="certificate-footer">
      <div className="signature-block">
        <div className="signature">
          <img src={signature} alt="Signature" className="signature-image" />
          <p className="signature-line"></p>
          <p>
            <strong>Ms. Seak Leng</strong>
          </p>
          <p>Deputy Director of the Department of GIC</p>
        </div>
      </div>
    </footer>
  );
}