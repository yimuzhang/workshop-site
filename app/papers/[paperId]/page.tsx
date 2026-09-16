import Link from "next/link";
import { notFound } from "next/navigation";
import reviewData from "@/data/STAGE3_META_REVIEW_DEMO.json";

interface PaperReviewPageProps {
  params: Promise<{
    paperId: string;
  }>;
}

export function generateStaticParams() {
  return [
    {
      paperId: reviewData.paper_id,
    },
  ];
}

export default async function PaperReviewPage({
  params,
}: PaperReviewPageProps) {
  const { paperId } = await params;

  if (paperId !== reviewData.paper_id) {
    notFound();
  }

  const paper = reviewData;
  const metaReview = paper.meta_review;

  return (
    <main className="container">
      <section className="page-section">
        <div className="review-page-header">
          <Link href="/papers" className="back-link">
            ← Back to Papers
          </Link>

          <div className="paper-id">
            Paper ID: {paper.paper_id}
          </div>

          <h1>Paper Review</h1>
        </div>

        <div className="review-summary">
          <div className="review-summary-item">
            <div className="review-label">
              Recommendation
            </div>

            <div className="review-value recommendation">
              {metaReview.recommendation}
            </div>
          </div>

          <div className="review-summary-item">
            <div className="review-label">
              Confidence
            </div>

            <div className="review-value">
              {metaReview.confidence}
            </div>
          </div>
        </div>

        <section className="meta-review-section">
          <h2>Meta Review</h2>

          <div className="meta-review-content">
            {metaReview.review
              .split(/\n\s*\n/)
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </section>

        <div className="review-page-footer">
          <Link
            href="/papers"
            className="button secondary-button"
          >
            Back to Papers
          </Link>
        </div>
      </section>
    </main>
  );
}