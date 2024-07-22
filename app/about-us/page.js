import React from "react";

export default function page() {
    return (
        <div className="bg-gray-100 text-gray-900 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>

                <p className="mb-6">
                    Welcome to <strong>Artera Pixel</strong>, your one-stop solution for all your poster needs! We specialize in providing high-quality, visually captivating
                    posters that cater to various occasions and business needs. Our innovative approach and cutting-edge technology ensure that creating stunning posters has never
                    been easier or more efficient.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Our Journey</h2>
                <p className="mb-6">
                    We started with a simple yet powerful idea: to help individuals and businesses create beautiful, professional-grade posters in just a few minutes. Our journey
                    began with the launch of our app, offering a vast collection of readymade festival posters at an affordable price. These posters are perfect for anyone looking
                    to celebrate and share festive joy with unique, eye-catching designs.
                </p>

                <h2 className="text-2xl font-semibold mb-2">{`What's`} Next?</h2>
                <p className="mb-4">Our mission is to constantly evolve and enhance our services to meet your diverse needs. {`Here's`} a sneak peek into our future plans:</p>
                <ul className="list-disc ml-6 mb-6">
                    <li className="mb-2">
                        <strong>Version 2.0:</strong> Soon, we will introduce customized business posters. Whether you need promotional materials, event announcements, or
                        personalized marketing content, our app will allow you to create tailor-made posters that perfectly align with your brand identity.
                    </li>
                    <li>
                        <strong>Version 3.0:</strong> We are excited to integrate AI-generated content into our offerings. This feature will revolutionize the way you create
                        posters, leveraging advanced algorithms to produce unique and highly creative designs. You will also have access to AI-generated posters that blend artistic
                        excellence with innovative technology.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mb-2">Our Promise</h2>
                <p className="mb-6">
                    At Artera Pixel, we are committed to delivering top-notch quality and unparalleled convenience. Our user-friendly app ensures that you can create stunning
                    posters within minutes, saving you valuable time and effort. Whether you are a business owner looking to enhance your marketing materials or an individual
                    wanting to celebrate special occasions with beautiful visuals, we have got you covered.
                </p>

                <p className="mb-6">
                    Join us on this exciting journey and explore the endless possibilities of poster creation with Artera Pixel. {`Let's`} make every occasion special and every
                    message memorable with our exquisite poster designs.
                </p>

                <p className="text-lg font-semibold">Thank you for choosing Artera Pixel!</p>
            </div>
        </div>
    );
}
