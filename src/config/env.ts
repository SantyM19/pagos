export const env = {
    MEGARED_TOKEN: process.env.MEGARED_QA_TOKEN || "c2337eca385cb3116b88c3451a86d18d05ba5a04",
    MEGARED_HOSTNAME: process.env.MEGARED_QA_HOSTNAME || "https://appv2_api.megared.net.co",
    MEGARED_VERSION: "2.0.3"
  }

export const firebaseConfig1 = {
  apiKey: process.env.MEGARED_API_KEY,
  authDomain: process.env.MEGARED_AUTH_DOMAIN,
  projectId: "pagosquestions",
  storageBucket: process.env.MEGARED_STORAGE_BUCKET,
  messagingSenderId: process.env.MEGARED_MESSAGING_SENDER_ID,
  appId: process.env.MEGARED_APP_ID,
  measurementId: process.env.MEGARED_MEASUREMENT_ID
};

export const firebaseConfig2 = {
  apiKey: "AIzaSyBoHtrD2lYHsHqlrCD2ikAT2aUNlO8yMr8",
  authDomain: process.env.MEGARED_AUTH_DOMAIN,
  projectId: "pagosquestions",
  storageBucket: process.env.MEGARED_STORAGE_BUCKET,
  messagingSenderId: process.env.MEGARED_MESSAGING_SENDER_ID,
  appId: process.env.MEGARED_APP_ID,
  measurementId: process.env.MEGARED_MEASUREMENT_ID
};