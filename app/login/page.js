"use client";
import { useState } from "react";
import { startAuthentication } from "@simplewebauthn/browser";

export default function Login() {
  const [username, setUsername] = useState("");

  const handleLogin = async () => {
    const optionsResponse = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    const options = await optionsResponse.json();

    const assertionResponse = await startAuthentication(options);

    const loginResponse = await fetch("/api/login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, assertionResponse }),
    });

    if (loginResponse) {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
