import fundamentals from "@/public/assets/icons/fundamentals.svg";
import introduction from "@/public/assets/icons/introduction.svg";
import security from "@/public/assets/icons/security.svg";
import practical from "@/public/assets/icons/practical.svg";
import development from "@/public/assets/icons/development.svg";
import future from "@/public/assets/icons/future.svg";
import { business, beginnes, technical } from "@/public/assets/images";

export const LEARN_ITEMS = [
  {
    icon: fundamentals,
    title: "Blockchain Fundamentals",
    description: "Understanding the technology behind blockchain, including its structure and basic functioning."
  },
  {
    icon: introduction,
    title: "Introduction to Polkadot",
    description: "Exploration of the Polkadot platform, its unique features and how it facilitates interoperability between blockchains."
  },
  {
    icon: security,
    title: "Security and Consensus",
    description: "Analysis of essential security and consensus mechanisms to guarantee the reliability and integrity of transactions in decentralized environments."
  },
  {
    icon: practical,
    title: "Practical Use Cases",
    description: "Real case studies that demonstrate how blockchain and Polkadot are being applied in various sectors, such as finance, healthcare and logistics."
  },
  {
    icon: development,
    title: "Application Development",
    description: "Practical skills to develop and integrate blockchain-based solutions, including programming concepts and decentralized application architecture."
  },
  {
    icon: future,
    title: "Future perspectives",
    description: "Exploration of emerging trends and future possibilities of blockchain and the Polkadot ecosystem, preparing students for future innovations and opportunities."
  },
];

export const PERSONA_LIST = [
  {
    image: business,
    title: "For Business users",
    bullets: [
      "Understanding the benefits of blockchain for businesses, including operational efficiency, transparency and cost reduction.",
      "Exploring specific Polkadot use cases for industries like finance, healthcare, logistics, and more.",
      "Strategies for integrating blockchain-based solutions into existing business processes and exploring innovation opportunities."
    ]
  },
  {
    image: technical,
    title: "For Technical users",
    bullets: [
      "Depth into the working principles of blockchain and its practical implementation.",
      "Detailed analysis of Polkadot's architecture, including parachains, relays and the consensus layer.",
      "Development of technical skills to build applications and smart contracts compatible with the Polkadot ecosystem."
    ]
  },
  {
    image: beginnes,
    title: "For Beginners",
    bullets: [
      "Accessible explanation of blockchain concepts and how they affect everyday life.",
      "Demonstration of Polkadot's transformative potential in terms of security, privacy and inclusion.",
      "Guidance on how to participate in Polkadot-based projects and take advantage of emerging opportunities in the decentralized economy."
    ]
  },
];
