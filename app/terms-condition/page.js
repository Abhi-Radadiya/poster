import React from "react";
import RightArrowIcon from "@/assets/chevron-right.svg";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <section className="bg-gray-100 text-gray-900">
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex flex-row items-center -mt-4 mb-2">
                        <Link href="/menu" className="mr-2">
                            <RightArrowIcon className="rotate-180 stroke-neutral-400" />
                        </Link>

                        <div className="-mr-1.5 mt-0.5 tracking-wider text-neutral-600 text-base font-bold">Back</div>
                    </div>
                    <h1 className="text-2xl font-bold mb-4">End User License Agreement</h1>
                    <p className="mb-4 text-sm">
                        Last updated: <strong>01-08-2024</strong>
                    </p>

                    <h2 className="text-xl font-semibold mb-2">License</h2>
                    <p className="mb-4">
                        ArtEra Pixel grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the Application solely for your personal,
                        non-commercial purposes strictly in accordance with the terms of this Agreement.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Restrictions</h2>
                    <p className="mb-4">
                        If we found any misuse or modification of our content outside ArtEra Pixel app then we may permanently remove your account without any communications or
                        notice. You have only rights to modify images or videos inside app.
                    </p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>You {`don't`} have rights to sell videos or images created from app to other person.</li>
                        <li>You must not republish material from ArtEra Pixel to other platform.</li>
                        <li>You must not sell, rent or sub-license material from ArtEra Pixel.</li>
                        <li>You must not reproduce, duplicate, copy or redistribute material from ArtEra Pixel.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">Modifications to Application</h2>
                    <p className="mb-4">
                        ArtEra Pixel reserves the right to modify, suspend or discontinue, temporarily or permanently, the Application or any service to which it connects, with or
                        without notice and without liability to you.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Term and Termination</h2>
                    <p className="mb-4">This Agreement shall remain in effect until terminated by you or ArtEra Pixel.</p>
                    <p className="mb-4">
                        ArtEra Pixel may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice.
                    </p>
                    <p className="mb-4">
                        This Agreement will terminate immediately, without prior notice from ArtEra Pixel in the event that you fail to comply with any provision of this Agreement.
                        You may also terminate this Agreement by deleting the Application and all copies thereof from your mobile device or from your desktop.
                    </p>
                    <p className="mb-4">
                        Upon termination of this Agreement, you shall cease all use of the Application and delete all copies of the Application from your mobile device or from your
                        desktop.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Payments</h2>
                    <p className="mb-4">We offer paid features in app, any payment done by you for a paid features will be non-refundable in any case.</p>
                    <p className="mb-4">
                        Monthly {`plan's`} validity will be 30 days and yearly {`plan's`} validity will be 365 days.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Custom Frames or Corporate Frames</h2>
                    <p className="mb-4">We offer customized frames in app, customized frame creation can take up-to 15 days to available for use in app after purchasing plan.</p>
                    <p className="mb-4">After finalizing design of custom frame, it will be not change again.</p>

                    <h2 className="text-xl font-semibold mb-2">Severability</h2>
                    <p className="mb-4">
                        If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of
                        such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Amendments to this Agreement</h2>
                    <p className="mb-4">
                        ArtEra Pixel reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material we will provide at least
                        5 {`days'`} notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                    <p className="mb-4">
                        If you have any questions about this Agreement, please contact us at <span className="text-blue-500 hover:underline">arterapixel7@gmail.com</span>.
                    </p>
                </div>
            </section>
        </>
    );
}
