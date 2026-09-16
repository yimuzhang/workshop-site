const papers = [
  {
    id: "MLRL-2026-0001",
    title: "Learning Structured Representations for Machine Learning",
    authors: "Alice Smith, Bob Zhang",
    abstract:
      "We study structured representations for improving learning efficiency and generalization.",
    status: "Accepted",
  },
  {
    id: "MLRL-2026-0002",
    title: "Efficient Optimization for Large Models",
    authors: "John Doe, Jane Smith",
    abstract:
      "This work investigates efficient optimization strategies for modern machine learning models.",
    status: "Accepted",
  },
  {
    id: "MLRL-2026-0003",
    title: "Robust Learning under Distribution Shift",
    authors: "David Lee et al.",
    abstract:
      "We investigate robust learning methods under changing data distributions.",
    status: "Accepted",
  },
];

export default function PapersPage() {
  return (
    <main className="form-container">
      <h1>Accepted Papers</h1>

      <p className="form-description">
        Papers accepted to the workshop will be listed here.
      </p>

      <div className="paper-list">
        {papers.map((paper) => (
          <article key={paper.id} className="paper-card">
            <div className="paper-meta">
              {paper.id} · {paper.status}
            </div>

            <h3>{paper.title}</h3>

            <div className="paper-meta">
              {paper.authors}
            </div>

            <p>{paper.abstract}</p>
          </article>
        ))}
      </div>
    </main>
  );
}