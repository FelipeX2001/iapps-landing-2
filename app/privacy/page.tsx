"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const privacyContent = [
	{
		title: "Introduction",
		content: "This Privacy Policy explains how IAPPS SAS ('we', 'us', or 'our') collects, uses, and protects your personal information. We are committed to ensuring the privacy and security of all users who access our artificial intelligence services and solutions.",
	},
	{
		title: "Data Collection",
		content: "IAPPS SAS collects information that you provide directly to us, including personal information such as name, email address, and usage data when interacting with our AI services. Our systems may also collect technical data such as IP addresses, device information, cookies, and log files to improve service delivery and enhance user experience.",
	},
	{
		title: "Data Usage",
		content: "Your data is used by IAPPS SAS to provide, maintain, and improve our AI services, personalize your experience, and develop new features. We analyze usage patterns to enhance our AI models while maintaining strict privacy standards. We may also use your information to communicate with you about updates, respond to inquiries, and send relevant marketing communications (which you can opt out of at any time).",
	},
	{
		title: "Data Protection",
		content: "IAPPS SAS implements robust security measures to protect your information from unauthorized access, alteration, or disclosure. Your data is encrypted during transmission and storage, and access is strictly controlled. We regularly review and update our security practices to ensure the highest level of data protection.",
	},
	{
		title: "Data Sharing",
		content: "IAPPS SAS does not sell your personal information. We may share data with trusted service providers who assist in operating our services, subject to strict confidentiality obligations. We may also share information when required by law or to protect our rights, property, or safety.",
	},
	{
		title: "Your Rights",
		content: "You have the right to access, correct, or delete your personal information held by IAPPS SAS. You can also request data portability or restrict processing. Contact us at privacy@iapps.ai for any privacy-related concerns or to exercise your rights under applicable data protection laws.",
	},
	{
		title: "Data Retention",
		content: "IAPPS SAS retains personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When data is no longer needed, it is securely deleted or anonymized.",
	},
	{
		title: "Changes to Privacy Policy",
		content: "IAPPS SAS reserves the right to update this Privacy Policy at any time. We will notify users of any material changes through our website or via email. Your continued use of our services after such modifications constitutes acceptance of the updated Privacy Policy.",
	},
];

export default function Privacy() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
					<h1 className="text-3xl font-bold text-center text-zinc-100 mb-8">
						IAPPS SAS Privacy Policy
					</h1>
					{privacyContent.map((section, i) => (
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
