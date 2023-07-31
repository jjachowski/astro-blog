import { motion } from "framer-motion";
import { useState } from "react";
type Props = { messages: string[] };
export default function Greeting({ messages }: Props) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(
    messages[messages.length >= 3 ? 3 : 0]
  );
  new Date().toLocaleDateString("pl-PL");

  return (
    <div className="border-2 border-blue-600 bg-blue-50 p-2 px-4 shadow-md dark:border-blue-400 dark:bg-blue-700">
      <p className="mb-4 h-12 text-xl text-blue-700 dark:text-blue-200 sm:mb-2">
        React component! {greeting}!
      </p>
      <p className="mb-2 text-blue-600 dark:text-blue-100">
        This component is an Astro Island - it renders react component and uses
        Framer Motion to animate button below
      </p>

      <motion.button
        whileHover={{ scale: 1.2, rotate: [0, 5, -5, 5, -5, 0] }}
        whileTap={{ scale: 0.7 }}
        transition={{ duration: 0.5, scale: { duration: 0.1 } }}
        className="m-4 border-2 border-blue-700  bg-blue-100 px-4 py-2 text-lg text-blue-700 
        dark:border-blue-200 dark:bg-blue-600 dark:text-blue-50
        "
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </motion.button>
    </div>
  );
}
