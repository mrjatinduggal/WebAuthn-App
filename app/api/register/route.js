import {
  generateRegistrationOptions,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";
import { NextApiRequest, NextApiResponse } from "next";
import { isoUint8Array } from "@simplewebauthn/server/helpers";

const rpName = "Testing Application"; // Change this to your application name
const rpID = "serveo.net"; // Change this to your domain
const origin = "https://b0b910086a8509e762305ab321117494.serveo.net"; // Change this to your URL

let userDatabase = {}; // For now we can you static data registered, later a database can be used for this

export async function POST(req) {
  const incomingData = await req.json();
  const username = incomingData.username;
  if (!username) {
    return Response.json({ error: "Username is required" });
  }

  // Generate options for the user to start registration
  const options = await generateRegistrationOptions({
    rpName,
    rpID,
    userID: isoUint8Array.fromUTF8String(username),
    userName: username,
    attestationType: "none",
  });

  // Store the options in our 'database'
  userDatabase[username] = {
    ...userDatabase[username],
    challenge: options.challenge,
  };

  return Response.json({
    message: "Data received and decrypted",
    data: options,
  });
}

export async function PUT(req) {
  const incomingData = await req.json();
  const { username, attestationResponse } = incomingData;
  const expectedChallenge = userDatabase[username]?.challenge;

  if (!username || !attestationResponse || !expectedChallenge) {
    return Response.json({ error: "Invalid request" });
  }

  try {
    const verification = await verifyRegistrationResponse({
      response: attestationResponse,
      expectedChallenge,
      expectedOrigin: origin,
      expectedRPID: rpID,
    });

    if (verification.verified) {
      // Save the credential in our 'database'
      userDatabase[username] = {
        ...userDatabase[username],
        credential: verification.registrationInfo,
      };
      console.log("userDatabase =>", userDatabase);
      return Response.json({ success: true });
    }

    return Response.json({ error: "Verification failed" });
  } catch (error) {
    console.log("error => ", error);
    return Response.json({ error: error.message });
  }
}
