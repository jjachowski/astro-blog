import { useState } from "react";
type Props = { messages: string[] };
export default function Greeting({ messages }: Props) {
	const randomMessage = () =>
		messages[Math.floor(Math.random() * messages.length)];

	const [greeting, setGreeting] = useState(messages[0]);

	return (
		<div className="border-2   p-2 border-pink-500 ">
			<h3>React component! {greeting}!</h3>
			<button
				className="bg-indigo-400 px-4 py-2"
				onClick={() => setGreeting(randomMessage())}
			>
				New Greeting
			</button>
		</div>
	);
}
