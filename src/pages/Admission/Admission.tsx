import "./admission.scss";
const imageBaseUrl = "https://petalgirlsschool.ac.ke/images";

const feeTerms = [
  {
    label: "Dates",
    term1: "05 Jan - 02 Apr",
    term2: "27 Apr - 31 Jul",
    term3: "24 Aug - 20 Nov",
    total: "",
  },
  {
    label: "Day",
    term1: "9,800",
    term2: "9,400",
    term3: "7,300",
    total: "26,500",
  },
  {
    label: "Boarding",
    term1: "19,700",
    term2: "18,420",
    term3: "14,480",
    total: "52,600",
  },
];

const forms = [
  {
    description: "Download Admission Form for the 2026 academic year:",
    label: "Admission Form For 2026",
    href: "/documents/admission/Petal%202026%20Admission%20Form.pdf",
  },
  {
    description: "Download the Bursary Application Form:",
    label: "PGSS Bursary Application Form",
    href: "/documents/admission/PGSS%20Bursary%20Application%20Form.pdf",
  },
  {
    description: "Download PGSS Code of Conduct:",
    label: "PGSS Code of Conduct",
    href: "/documents/admission/PGS%20Code%20of%20Conduct.pdf",
  },
];

const Admission = () => (
  <div className="admission-page">
    <div
      className="admission-page__banner"
      style={{ backgroundImage: `url("${imageBaseUrl}/girls%20(1).jpg")` }}
      role="img"
      aria-label="Students at Petal Girls Senior School"
    />

    <div className="container admission-page__content">
      <section className="admission-overview" aria-labelledby="admission-title">
        <div className="admission-overview__copy">
          <p className="admission-section__eyebrow">
            Join our school community
          </p>
          <h2 id="admission-title">Welcome to Petal Girls Senior School</h2>
          <h3>Term Dates &amp; Fees</h3>

          <div
            className="admission-table-wrapper"
            role="region"
            aria-label="Term dates and fees"
            tabIndex={0}
          >
            <table className="admission-fees">
              <caption>2026 term dates and tuition fees (Ksh)</caption>
              <thead>
                <tr>
                  <th scope="col">Fee category</th>
                  <th scope="col">Term 1</th>
                  <th scope="col">Term 2</th>
                  <th scope="col">Term 3</th>
                  <th scope="col">Total (Ksh)</th>
                </tr>
              </thead>
              <tbody>
                {feeTerms.map(({ label, term1, term2, term3, total }) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{term1 || "—"}</td>
                    <td>{term2 || "—"}</td>
                    <td>{term3 || "—"}</td>
                    <td>{total || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            New students pay a non-refundable application fee of Ksh 1,000 to
            cover administration costs. Other fees are payable no later than two
            weeks before the start of each term.
          </p>
          <p>
            For students whose parents or guardians are facing financial
            hardship, the school has a limited number of bursaries available.
            These are offered on a discretionary basis and can cover between 25%
            and, in exceptional cases, 75% of fees for day and boarding
            students. PGSS may also offer a personalised payment plan for fees
            not covered by a bursary.
          </p>
        </div>
        <img
          className="admission-overview__image"
          src={`${imageBaseUrl}/additions/grounds.jpg`}
          alt="Grounds at Petal Girls Senior School"
        />
      </section>

      <section className="admission-downloads" aria-label="Admission documents">
        {forms.map(({ description, label, href }) => (
          <article className="admission-download" key={label}>
            <p>{description}</p>
            <a className="admission-download__button" href={href} download>
              {label}
            </a>
          </article>
        ))}
      </section>
    </div>
  </div>
);

export default Admission;
