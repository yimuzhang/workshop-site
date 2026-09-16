"use client";

import { FormEvent, useState } from "react";

export default function SubmitPage() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [pdf, setPdf] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handlePdfChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) {
      setPdf(null);
      return;
    }

    // Check PDF
    if (
      file.type !== "application/pdf" &&
      !file.name.toLowerCase().endsWith(".pdf")
    ) {
      setError("Please upload a PDF file.");
      setPdf(null);
      e.target.value = "";
      return;
    }

    // 20 MB limit
    const maxSize = 20 * 1024 * 1024;

    if (file.size > maxSize) {
      setError("The PDF file must be smaller than 20 MB.");
      setPdf(null);
      e.target.value = "";
      return;
    }

    setError("");
    setPdf(file);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    if (!title.trim()) {
      setError("Please enter the paper title.");
      return;
    }

    if (!abstract.trim()) {
      setError("Please enter the paper abstract.");
      return;
    }

    if (!pdf) {
      setError("Please upload the paper PDF.");
      return;
    }

    // ---------------------------------------
    // Current MVP:
    // We only validate the submission locally.
    //
    // Later this function will:
    // 1. Upload PDF to Supabase Storage
    // 2. Save title + abstract + PDF path
    //    to Supabase PostgreSQL
    // ---------------------------------------

    console.log("Paper submission:", {
      title,
      abstract,
      pdfName: pdf.name,
      pdfSize: pdf.size,
    });

    setSubmitted(true);
  }

  function resetForm() {
    setTitle("");
    setAbstract("");
    setPdf(null);
    setError("");
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <main className="container">
        <section className="page-section">
          <div className="submission-success">
            <h1>Submission Received</h1>

            <p>
              Your paper has been submitted successfully.
            </p>

            <p>
              <strong>Title:</strong> {title}
            </p>

            <p>
              <strong>PDF:</strong> {pdf?.name}
            </p>

            <button
              type="button"
              onClick={resetForm}
              className="button"
            >
              Submit Another Paper
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="container">
      <section className="page-section">
        <h1>Submit Your Paper</h1>

        <p className="page-description">
          Please provide the title, abstract, and PDF of your paper.
        </p>

        <form
          onSubmit={handleSubmit}
          className="submission-form"
        >
          {/* Paper Title */}
          <div className="form-group">
            <label htmlFor="title">
              Paper Title
              <span className="required">*</span>
            </label>

            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title of your paper"
              required
            />
          </div>

          {/* Abstract */}
          <div className="form-group">
            <label htmlFor="abstract">
              Abstract
              <span className="required">*</span>
            </label>

            <textarea
              id="abstract"
              name="abstract"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              placeholder="Enter the abstract of your paper"
              rows={12}
              required
            />

            <div className="field-hint">
              Please provide the abstract as plain text.
            </div>
          </div>

          {/* PDF */}
          <div className="form-group">
            <label htmlFor="pdf">
              Paper PDF
              <span className="required">*</span>
            </label>

            <div className="file-upload">
              <input
                id="pdf"
                name="pdf"
                type="file"
                accept="application/pdf,.pdf"
                onChange={handlePdfChange}
                required
              />

              <div className="file-hint">
                PDF only · Maximum file size: 20 MB
              </div>
            </div>

            {pdf && (
              <div className="selected-file">
                <strong>Selected file:</strong>{" "}
                {pdf.name}
                {" · "}
                {(pdf.size / 1024 / 1024).toFixed(2)} MB
              </div>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          {/* Submit */}
          <div className="form-actions">
            <button
              type="submit"
              className="button"
            >
              Submit Paper
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}