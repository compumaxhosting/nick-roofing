import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export const revalidate = 86400; // 24h

export default function BookAppointmentPage() {
	return (
		<>
			<Header />

			<section className="py-16 px-0">
				<div className="text-center mb-10">
					<h1 className="text-xl md:text-2xl font-semibold tracking-[1px] mb-5 text-[#364f4f]">
						Book An Appointment
					</h1>
					<span className="block mx-auto w-10 h-0.5 bg-[#36454F] mb-7"></span>

					<p className="max-w-2xl mx-auto text-sm text-[#333] leading-relaxed">
						Use the form below to request an appointment or ask about our services.
						We’ll get back to you as soon as possible.
					</p>
				</div>

				<div className="flex justify-center px-4">
					<div className="w-full max-w-3xl">
						<ContactForm showAppointmentDate />
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

