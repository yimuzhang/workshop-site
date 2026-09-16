const submissions = [
  {
    id: "MLRL-2026-0001",
    title: "Learning Structured Representations",
    authors: "Alice Smith, Bob Zhang",
    status: "Submitted",
  },
  {
    id: "MLRL-2026-0002",
    title: "Efficient Optimization for Large Models",
    authors: "John Doe, Jane Smith",
    status: "Under Review",
  },
  {
    id: "MLRL-2026-0003",
    title: "Robust Learning under Distribution Shift",
    authors: "David Lee et al.",
    status: "Accepted",
  },
];

export default function AdminPage() {
  return (
    <main className="admin-container">
      <div className="admin-header">
        <div>
          <h1>Workshop Admin</h1>
          <p className="form-description">
            Manage paper submissions.
          </p>
        </div>

        <button className="button secondary">
          Logout
        </button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Paper ID</th>
            <th>Title</th>
            <th>Authors</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {submissions.map((paper) => (
            <tr key={paper.id}>
              <td>{paper.id}</td>

              <td>{paper.title}</td>

              <td>{paper.authors}</td>

              <td>
                <span className="status">
                  {paper.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}