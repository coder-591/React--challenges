export function idGenerator() {
  let randomId = "";
  const alphabets = "abcdefghijklmnopqurstuvwxyz";
  const numbers = "1234567890";
  const specialChar = "!@#$%^&*_-?~";
  const arr = [...alphabets, ...numbers, ...specialChar];
  for (let i = 0; i < 6; i++) {
    let idx = Math.floor(Math.random() * 51);
    randomId = randomId + arr[idx];
  }
  return randomId;
}
