-- =========================================
-- Workshop Database
-- =========================================

create table submissions (
    id uuid primary key default gen_random_uuid(),

    paper_id text unique not null,

    title text not null,

    abstract text not null,

    authors text not null,

    affiliation text,

    email text not null,

    pdf_path text,

    status text not null default 'submitted',

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);


-- =========================================
-- Reviews
-- =========================================

create table reviews (
    id uuid primary key default gen_random_uuid(),

    submission_id uuid
        references submissions(id)
        on delete cascade,

    reviewer_name text,

    score numeric,

    confidence numeric,

    summary text,

    strengths text,

    weaknesses text,

    review_text text,

    published boolean not null default false,

    created_at timestamptz not null default now()
);


-- =========================================
-- Admin users
-- =========================================

create table admin_users (
    id uuid primary key default gen_random_uuid(),

    email text unique not null,

    created_at timestamptz not null default now()
);


-- =========================================
-- Index
-- =========================================

create index submissions_status_idx
on submissions(status);

create index submissions_created_at_idx
on submissions(created_at);

create index reviews_submission_id_idx
on reviews(submission_id);

create index reviews_published_idx
on reviews(published);