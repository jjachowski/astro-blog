import { useState } from "react";
type Props = { messages: string[] };
export default function Greeting({ messages }: Props) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);
  return (
    <div className="border-2 border-blue-600 bg-blue-100 p-2 px-4 dark:border-blue-400 dark:bg-blue-700">
      <p className="mb-4 text-xl text-blue-600 dark:text-blue-200  sm:mb-0">
        React component! {greeting}!
      </p>
      <button
        className="border-2 border-blue-500  bg-blue-200 px-4 py-2 text-lg text-blue-500 dark:border-blue-200 dark:bg-blue-600 dark:text-blue-50"
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}
