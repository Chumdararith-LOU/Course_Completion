export default function Template({ name }) {
  return (
    <main className="certificate-body">
      <h3 className="cert-title">Certificate of Completion</h3>
      <p className="presented-to">This certificate is proudly awarded to</p>
      <h1 className="recipient-name">{name}</h1>
      <p className="certificate-text">
        You has successfully fulfilled all requirements and completed the
        intensive training for the <span class="Crash-Course">Database and MySQL</span> course as part of the <span class="Crash-Course">“GIC
        Vacation Crash Course 2025”</span>. This certificate is awarded by the
        Department of Information and Communication Engineering in recognition
        of your commitment to academic excellence.
      </p>
      <div className="date-location">
        <p>
          From 1<sup> st</sup> September to 2<sup> nd</sup> October 2025, Phnom
          Penh, Cambodia.
        </p>
      </div>
    </main>
  );
}
