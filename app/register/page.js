"use client";
import { useState } from "react";
import { startRegistration } from "@simplewebauthn/browser";

export default function Register() {
  const [username, setUsername] = useState("");

  const handleRegister = async () => {
    const optionsResponse = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    const options = await optionsResponse.json();

    const attestationResponse = await startRegistration(options.data);

    await fetch("/api/register", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, attestationResponse }),
    });
  };

  return (
    <>
      <h1>Register</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button onClick={handleRegister}>Register</button>
    </>
  );
}
