import Link from "next/link";
import reviewData from "@/data/STAGE3_META_REVIEW_DEMO.json";

export default function PapersPage() {
  const paper = reviewData;

  return (
    <main className="container">
      <section className="page-section">
        {/* Page Header */}
        <div className="papers-header">
          <h1>Papers</h1>

          <p className="page-description">
            Browse submitted papers and their review results.
          </p>
        </div>

        {/* Paper List */}
        <div className="papers-list">
          <article className="paper-card">

            {/* Paper Information */}
            <div className="paper-card-info">

              <Link
                href={`/papers/${paper.paper_id}`}
                className="paper-id-link"
              >
                Paper ID: {paper.paper_id}
              </Link>

              <Link
                href={`/papers/${paper.paper_id}`}
                className="paper-card-title"
              >
                Paper {paper.paper_id}
              </Link>

            </div>

            {/* Review Summary */}
            <div className="review-badges">

              <div className="review-field">
                <div className="review-field-label">
                  Recommendation
                </div>

                <div className="review-field-value recommendation-value">
                  {paper.meta_review.recommendation}
                </div>
              </div>

              <div className="review-field">
                <div className="review-field-label">
                  Confidence
                </div>

                <div className="review-field-value confidence-value">
                  {paper.meta_review.confidence}
                </div>
              </div>

            </div>

            {/* Meta Review Preview */}
            <div className="paper-card-review">

              <div className="paper-card-review-title">
                Meta Review
              </div>

              <p>
                {paper.meta_review.review.length > 400
                  ? `${paper.meta_review.review.slice(0, 400)}...`
                  : paper.meta_review.review}
              </p>

            </div>

            {/* Action */}
            <div className="paper-card-footer">
              <Link
                href={`/papers/${paper.paper_id}`}
                className="button"
              >
                View Review
              </Link>
            </div>

          </article>
        </div>
      </section>
    </main>
  );
}