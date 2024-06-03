import {
  generateAuthenticationOptions,
  verifyAuthenticationResponse,
} from "@simplewebauthn/server";

const rpID = "serveo.net"; // Change this to your domain
const origin = "https://b0b910086a8509e762305ab321117494.serveo.net"; // Change this to your URL

let userDatabase = {}; // For now we can you static data registered, later a database can be used for this

export async function POST(req) {
  const incomingData = await req.json();
  const username = incomingData.username;
  const user = userDatabase[username];
  if (!user || !user.credential) {
    return Response.json({ error: "User not found" });
  }

  const options = await generateAuthenticationOptions({
    rpID,
    allowCredentials: [
      {
        id: user.credential.credentialID,
        type: "public-key",
        transports: ["usb", "ble", "nfc", "internal"],
      },
    ],
  });

  // Store the challenge in our 'database'
  userDatabase[username] = {
    ...userDatabase[username],
    challenge: options.challenge,
  };

  return Response.json(options);
}

export async function PUT(req) {
  const incomingData = await req.json();
  const { username, assertionResponse } = incomingData;
  const user = userDatabase[username];
  const expectedChallenge = user?.challenge;

  if (!username || !assertionResponse || !expectedChallenge) {
    return Response.json({ error: "Invalid request" });
  }

  try {
    const verification = await verifyAuthenticationResponse({
      response: assertionResponse,
      expectedChallenge,
      expectedOrigin: origin,
      expectedRPID: rpID,
      authenticator: user.credential,
    });

    if (verification.verified) {
      return Response.json({ success: true });
    }
    return Response.json({ error: "Verification failed" });
  } catch (error) {
    console.log("error =>", error);
    return Response.json({ error: error.message });
  }
}
