import React from "react";
import RightArrowIcon from "@/assets/chevron-right.svg";
import Link from "next/link";

const RefundCancellationPolicy = () => {
    return (
        <div className="bg-gray-100 text-gray-900 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg">
                <div className="flex flex-row items-center -mt-4 -ml-2 mb-2">
                    <Link href="/menu" className="mr-2">
                        <RightArrowIcon className="rotate-180 stroke-neutral-400" />
                    </Link>

                    <div className="-mr-1.5 mt-0.5 tracking-wider text-neutral-600 text-base font-bold">Back</div>
                </div>
                <h1 className="text-3xl font-bold mb-4">Refund and Cancellation Policy</h1>
                <div className="bg-white rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">Cancellation Policy</h2>
                    <p className="text-gray-700 mb-4">
                        You can cancel your purchase within 7 working days of the purchase date. To cancel your purchase, please contact our support team with your order details.
                    </p>
                    <p className="text-gray-700 mb-4">
                        <strong>Contact us :</strong> arterapixel7@gmail.com
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">Refund Policy</h2>
                    <p className="text-gray-700">
                        If you cancel your purchase within the specified period, you are eligible for a refund. The refund will be processed within 3 working days after the
                        cancellation request has been approved. The amount will be credited back to your original payment method.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RefundCancellationPolicy;
