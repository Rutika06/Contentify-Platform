import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { features, testimonials, socialProofStats } from "@/lib/data";
import FallbackImage from "@/components/fallback-image";

export default function HomePage() {
	return (
			<>
			{/* Hero */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-slate-900 to-slate-900" />
				<div className="max-w-6xl mx-auto px-6 pt-36 pb-24 relative">
					<div className="text-center space-y-6">
						<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
							<span className="gradient-text-primary">Create smarter</span> with AI
						</h1>
						<p className="text-slate-400 text-lg max-w-2xl mx-auto">
							Join thousands of creators building their audience with our AI-powered platform.
						</p>
						<div className="flex items-center justify-center gap-3 pt-2">
							<Link href="/dashboard">
								<Button variant="primary">Start Your Journey</Button>
							</Link>
							<Link href="/feed">
								<Button variant="outline">Explore the Feed</Button>
							</Link>
						</div>
					</div>
					{/* Social proof */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
						{socialProofStats.map((item) => (
							<div key={item.label} className="text-center">
								<div className="text-3xl font-extrabold text-white">{item.metric}</div>
								<div className="text-slate-400 text-sm">{item.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features */}
			<section id="features" className="py-20">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Powerful features for creators</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{features.map((f) => (
							<Card key={f.title} className="card-glass">
								<CardContent className="p-6">
									<div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}>
										<f.icon className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-xl font-semibold text-white">{f.title}</h3>
									<p className="text-slate-400 mt-2">{f.desc}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section id="testimonials" className="py-20 border-t border-white/10">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What creators are saying</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{testimonials.map((t) => (
							<Card key={t.name} className="card-glass">
								<CardContent className="p-6 space-y-4">
									<div className="flex items-center gap-3">
									<FallbackImage
										src={`https://images.unsplash.com/photo-${t.imageId}?auto=format&fit=crop&w=96&q=60`}
										alt={t.name}
										width={48}
										height={48}
										className="rounded-full object-cover"
									/>
										<div>
											<div className="font-semibold text-white">{t.name}</div>
											<div className="text-xs text-slate-400">{t.role} • {t.company}</div>
										</div>
									</div>
									<p className="text-slate-300">“{t.content}”</p>
									<div className="flex items-center gap-1 text-yellow-400">
										{Array.from({ length: t.rating }).map((_, i) => (
											<Star key={i} className="h-4 w-4 fill-current" />
										))}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24">
				<div className="max-w-4xl mx-auto text-center px-6">
					<h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to create?</h2>
					<p className="text-slate-400 mb-8">
						Join thousands of creators who are already building their audience and growing their business.
					</p>
					<div className="flex items-center justify-center gap-3">
						<Link href="/dashboard">
							<Button variant="primary">Start Your Journey</Button>
						</Link>
						<Link href="/feed">
							<Button variant="outline">Explore the Feed</Button>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}


