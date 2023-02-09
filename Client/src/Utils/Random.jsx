import { surpriseMe } from "../SurpriseMe/Surpriseme";

export default function Random(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMe.length);
  const randomSurprise = surpriseMe[randomIndex];
  if (randomSurprise === prompt) {
    return Random(prompt);
  }
  return randomSurprise;
}
