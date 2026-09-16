import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">WORKSHOP 2026</p>

          <h1>
            Machine Learning
            <br />
            Research Workshop
          </h1>

          <p className="hero-description">
            A workshop for discussing emerging ideas, methods, and
            applications in machine learning.
          </p>

          <div className="hero-buttons">
            <Link href="/submit" className="button primary">
              Submit a Paper
            </Link>

            <Link href="/papers" className="button secondary">
              Accepted Papers
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Important Dates</h2>

          <div className="dates">
            <div>
              <span>Submission Opens</span>
              <strong>October 1, 2026</strong>
            </div>

            <div>
              <span>Submission Deadline</span>
              <strong>October 31, 2026</strong>
            </div>

            <div>
              <span>Notification</span>
              <strong>November 20, 2026</strong>
            </div>

            <div>
              <span>Workshop</span>
              <strong>December 10, 2026</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container narrow">
          <h2>Call for Papers</h2>

          <p>
            We invite submissions presenting new research, emerging ideas,
            preliminary results, and novel perspectives in machine learning.
          </p>

          <p>
            We particularly welcome work that explores new learning
            paradigms, optimization methods, representation learning,
            trustworthy AI, and applications of machine learning.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Topics</h2>

          <div className="topics">
            <span>Machine Learning</span>
            <span>Representation Learning</span>
            <span>Optimization</span>
            <span>Generative Models</span>
            <span>Trustworthy AI</span>
            <span>AI Applications</span>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container narrow">
          <h2>Organizers</h2>

          <div className="organizers">
            <div>
              <strong>Organizer Name</strong>
              <p>University / Institution</p>
            </div>

            <div>
              <strong>Organizer Name</strong>
              <p>University / Institution</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}