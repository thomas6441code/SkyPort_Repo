import HeroWithVideos from '@/components/Home/HeroWithVideos';
import ServiceCards from '@/components/common/ServiceCards';
import {Rocket, Package, MapPin, Heart} from "lucide-react";
import {StatsBanner} from "@/components/common/StatsBanner";
import TestimonialSection from "@/components/common/Testimonials";
import MainLayout from "@/layouts/MainLayout";
import ImageSlider from "@/components/common/Slider";
import Pricing from "@/components/Home/Pricing";

const images: string[] = [
    "/images/aerial-view.jpg",
    "/images/transport.jpg",
    "/images/logo-slide.jpg",
];

const stats =[
        {
            value: '72h',
            label: 'Fastest Delivery',
            icon: <Rocket className="h-8 w-8" />,
        },
        {
            value: '100+',
                label: 'Monthly Shipments',
                icon: <Package className="h-8 w-8" />,
        },
        {
            value: '5',
                label: 'Warehouse Locations',
            icon: <MapPin className="h-8 w-8" />,
        },
        {
            value: '98%',
                label: 'Customer Satisfaction',
            icon: <Heart className="h-8 w-8" />,
        }
];

export default function HomePage() {
    return (
        <MainLayout>
            <ImageSlider images={images} />

            <StatsBanner stats={stats} />

            <ServiceCards />

            <HeroWithVideos />

            <Pricing/>

            <TestimonialSection />

            {/* CTA Section */}
            <section className="py-16 bg-sky-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Ship With Us?</h2>
                    <p className="text-sky-100 max-w-2xl mx-auto mb-8">
                        Get started with our logistics solutions today and experience seamless global shipping
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 bg-white text-sky-700 rounded-lg font-medium hover:bg-gray-100 transition shadow-md"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

        </MainLayout>
    );
}
