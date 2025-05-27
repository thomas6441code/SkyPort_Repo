import React, { useState, useEffect } from 'react';
import TrackingHelp from "@/components/Tracking/TrackingHelp";

const TestimonialSection = () => {
    // Testimonial data with images
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Logistics Manager, TechCorp',
            content: 'The shipping tracking system saved us countless hours. Real-time updates helped us optimize our supply chain like never before.',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Operations Director, GlobalGoods',
            content: 'Their logistics platform reduced our delivery times by 30%. The customer support is exceptional too!',
            rating: 4,
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        {
            id: 3,
            name: 'David Wilson',
            role: 'CEO, EcoShip',
            content: 'We switched to their service last year and our customer satisfaction scores have never been higher. Highly recommended!',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
        {
            id: 4,
            name: 'Emma Rodriguez',
            role: 'Supply Chain Specialist',
            content: 'The analytics dashboard gives us insights we never had before. Game changer for our international shipments.',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/women/63.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate testimonials every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Display 3 testimonials at a time on larger screens
    const visibleTestimonials = [];
    for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visibleTestimonials.push(testimonials[index]);
    }

    // Handle dot navigation
    const goToTestimonial = (index:number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Trusted by logistics professionals worldwide
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {visibleTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-center mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-indigo-100"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dot Navigation Only */}
                <div id="question" className="flex justify-center space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                currentIndex === index ? 'bg-indigo-600 w-6' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div  className="mx-auto pt-10 md:max-w-[80vw] w-[100vw] px-3">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Mostly Asked Question</h2>
                    <div className="w-16 h-1 bg-sky-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect logistics solution for your business needs, We are here to answer you.
                    </p>
                </div>
                <TrackingHelp
                    faqs={[
                        {
                            question: "How long does it take to update tracking information?",
                            answer: "Tracking updates occur in real-time as scans are processed at each facility."
                        },
                        {
                            question: "My tracking hasn't updated in 24 hours, what should I do?",
                            answer: "Contact our customer support team with your tracking number for assistance." +
                                " updates occur in real-time as scans are processed at each facility"
                        },
                        {
                            question: "How long does it take to update tracking information?",
                            answer: "Tracking updates occur in real-time as scans are processed at each facility." +
                                "Contact our customer support team with your tracking number for assistance."
                        },
                        {
                            question: "My tracking hasn't updated in 24 hours, what should I do?",
                            answer: "Contact our customer support team with your tracking number for assistance." +
                                "Tracking updates occur in real-time as scans are processed at each facility"
                        },
                        {
                            question: "How long does it take to update tracking information?",
                            answer: "Tracking updates occur in real-time as scans are processed at each facility." +
                                "Contact our customer support team with your tracking number for assistance."
                        },
                        {
                            question: "My tracking hasn't updated in 24 hours, what should I do?",
                            answer: "Contact our customer support team with your tracking number for assistance." +
                                "Tracking updates occur in real-time as scans are processed at each facility"
                        }
                    ]}

                />
            </div>
        </section>
    );
};

export default TestimonialSection;
