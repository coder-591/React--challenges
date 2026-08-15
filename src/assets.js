export function idGenerator() {
  let randomId = "";
  const alphabets = "abcdefghijklmnopqurstuvwxyz";
  const numbers = "1234567890";
  const specialChar = "!@#$%^&*_-?~";
  const arr = [...alphabets, ...numbers, ...specialChar];
  for (let i = 0; i < 6; i++) {
    let idx = Math.floor(Math.random() * arr.length);
    randomId = randomId + arr[idx];
  }
  return randomId;
}

export const notifications = [
  {
    id: 1,
    message: "Profile updated successfully.",
    type: "success",
  },
  {
    id: 2,
    message: "Unable to save your changes.",
    type: "error",
  },
  {
    id: 3,
    message: "Your session will expire soon.",
    type: "warning",
  },
  {
    id: 4,
    message: "New message received.",
    type: "info",
  },
  {
    id: 5,
    message: "File uploaded successfully.",
    type: "success",
  },
  {
    id: 6,
    message: "Invalid email address.",
    type: "error",
  },
  {
    id: 7,
    message: "Your storage is almost full.",
    type: "warning",
  },
  {
    id: 8,
    message: "New update is available.",
    type: "info",
  },
  {
    id: 9,
    message: "Password changed successfully.",
    type: "success",
  },
  {
    id: 10,
    message: "Failed to connect to the server.",
    type: "error",
  },
  {
    id: 11,
    message: "Please verify your email address.",
    type: "warning",
  },
  {
    id: 12,
    message: "You received a new friend request.",
    type: "info",
  },
  {
    id: 13,
    message: "Payment completed successfully.",
    type: "success",
  },
  {
    id: 14,
    message: "Payment could not be processed.",
    type: "error",
  },
  {
    id: 15,
    message: "You have unsaved changes.",
    type: "warning",
  },
  {
    id: 16,
    message: "Your report is ready to download.",
    type: "info",
  },
  {
    id: 17,
    message: "Account created successfully.",
    type: "success",
  },
  {
    id: 18,
    message: "Something went wrong. Please try again.",
    type: "error",
  },
  {
    id: 19,
    message: "Your internet connection is unstable.",
    type: "warning",
  },
  {
    id: 20,
    message: "A new login was detected.",
    type: "info",
  },
];
