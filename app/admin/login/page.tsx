"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // 第一版临时登录
    if (
      email === "admin@example.com" &&
      password === "admin123"
    ) {
      router.push("/admin");
      return;
    }

    alert("Invalid login credentials.");
  }

  return (
    <main className="form-container">
      <h1>Admin Login</h1>

      <p className="form-description">
        Workshop organizer access.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="admin@example.com"
          />
        </div>

        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="form-submit">
          Login
        </button>
      </form>
    </main>
  );
}