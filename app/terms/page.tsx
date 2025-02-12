"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const termsContent = [
	{
		title: "Acceptance of Terms",
		content: "By accessing or using IAPPS SAS services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.",
	},
	{
		title: "Service Description",
		content: "IAPPS SAS provides artificial intelligence solutions and software services. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.",
	},
	{
		title: "User Responsibilities",
		content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You agree to use our services in compliance with applicable laws and regulations.",
	},
	{
		title: "Intellectual Property",
		content: "All content, features, and functionality of IAPPS SAS services, including but not limited to software, text, graphics, and logos, are the exclusive property of IAPPS SAS and are protected by intellectual property laws.",
	},
	{
		title: "Payment Terms",
		content: "Some of our services may require payment. You agree to provide accurate billing information and authorize us to charge the applicable fees. All payments are non-refundable unless otherwise specified.",
	},
	{
		title: "Limitation of Liability",
		content: "IAPPS SAS shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.",
	},
	{
		title: "Termination",
		content: "We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.",
	},
];

export default function Terms() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
					<h1 className="text-3xl font-bold text-center text-zinc-100 mb-8">
						Terms of Service
					</h1>
					{termsContent.map((section, i) => (
						<Card key={i}>
							<div className="p-4 relative flex flex-col gap-4 duration-700 group md:gap-8 md:py-12 md:p-16">
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<div className="z-10 flex flex-col">
									<span className="text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display mb-4">
										{section.title}
									</span>
									<span className="text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{section.content}
									</span>
								</div>
							</div>
						</Card>
					))}
					<div className="text-center text-zinc-400 text-sm mt-8 mb-16">
						Last updated: March 2024 | IAPPS SAS
					</div>
				</div>
			</div>
		</div>
	);
}
