import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link href="/" className="logo">
          ML WORKSHOP 2026
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/submit">Submit</Link>
          <Link href="/papers">Papers</Link>
          <Link href="/admin/login">Admin</Link>
        </nav>
      </div>
    </header>
  );
}