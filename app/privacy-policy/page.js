import React from "react";
import RightArrowIcon from "@/assets/chevron-right.svg";
import Link from "next/link";

export default function Page() {
    return (
        <div className="bg-gray-100 text-gray-900">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-row items-center -mt-4 mb-2">
                    <Link href="/menu" className="mr-2">
                        <RightArrowIcon className="rotate-180 stroke-neutral-400" />
                    </Link>

                    <div className="-mr-1.5 mt-0.5 tracking-wider text-neutral-600 text-base font-bold">Back</div>
                </div>

                <h1 className="text-2xl font-bold mb-4">ArtEra Pixel</h1>

                <p className="mb-4">
                    This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our
                    Service.
                </p>
                <p className="mb-4">
                    If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is
                    used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
                </p>

                <h2 className="text-xl font-semibold mb-2">Trademark</h2>
                <p className="mb-4">
                    ArtEra Pixel is registered trademark of Corporate Enterprise company located at 203, 2nd Floor, Pride Plaza, Opp. JP Tower, Tagor Road, Rajkot-360002.
                </p>

                <h2 className="text-xl font-semibold mb-2">Collection of Information</h2>
                <p className="mb-4">
                    For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I
                    request will be retained on our system. The app does use third party services that may collect information used to identify you.
                </p>

                <h2 className="text-xl font-semibold mb-2">Security</h2>
                <p className="mb-4">
                    In order to ensure data security, we will in consideration of appropriate technical possibilities, ensure that only authorized persons receive access to the
                    data for legally permissible purposes, protect stored or transmitted data against accidental or unlawful destruction, loss or unintended changes and
                    unauthorized or unlawful storage or processing, unauthorized access or unauthorized or unlawful transmission, and comply with all applicable data protection
                    provisions.
                </p>
                <p className="mb-4">
                    We also recommend that you take additional steps towards protecting yourself and your information, such as keeping your login information and passwords secret,
                    and making sure you regularly update the software and apps {`you've`} downloaded.
                </p>

                <h2 className="text-xl font-semibold mb-2">Transfer of Data</h2>
                <p className="mb-4">
                    I want to inform you that whenever you use our Service, in a case of an error in the app I collect data and information (through third party products) on your
                    phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the
                    configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
                </p>

                <h2 className="text-xl font-semibold mb-2">{`Children's`} Information</h2>
                <p className="mb-4">
                    Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or
                    monitor and guide their online activity.
                </p>
                <p className="mb-4">
                    ArtEra Pixel does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind
                    of information on our app, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our
                    records.
                </p>

                <h2 className="text-xl font-semibold mb-2">Marketing</h2>
                <p className="mb-4">
                    We will use the information associated with you to be able to deliver our services in the Application. Furthermore, we may use the information to send you offer
                    or newsletters and for marketing purpose if you have agreed hereto according to applicable local law.
                </p>

                <h2 className="text-xl font-semibold mb-2">Change of Privacy Policy</h2>
                <p className="mb-4">
                    We are allowed to change this Privacy Policy at any time, and we advise you to review the Privacy Policy from time to time. In case of major changes in the
                    content of this Privacy Policy, you will be informed about the changes and asked to agree hereto.
                </p>

                <h2 className="text-xl font-semibold mb-2">Opt-out from Data Collection and Inquiries</h2>
                <p className="mb-4">
                    As a user, you may opt-out of all information collection by discontinuing your use of the Application or by disabling individual parts of the App or by
                    informing us by e-mail:
                    <span className="text-blue-500 hover:underline">arterapixel7@gmail.com</span>
                </p>
                <p className="mb-4">
                    Questions, comments and inquiries regarding this Privacy Policy and the personal data we have stored and processed about you are welcomed and should be
                    addressed to
                    <a href="mailto:arterapixel7@gmail.com" className="text-blue-500 hover:underline">
                        arterapixel7@gmail.com
                    </a>
                    .
                </p>

                <h2 className="text-xl font-semibold mb-2">GDPR Data Protection Rights</h2>
                <p className="mb-4">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                <ul className="list-disc ml-6 mb-4">
                    <li>The right to access: You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                    <li>
                        The right to rectification: You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that
                        we complete the information you believe is incomplete.
                    </li>
                    <li>The right to erasure: You have the right to request that we erase your personal data, under certain conditions.</li>
                    <li>The right to restrict processing: You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                    <li>The right to object to processing: You have the right to object to our processing of your personal data, under certain conditions.</li>
                    <li>
                        The right to data portability: You have the right to request that we transfer the data that we have collected to another organization, or directly to you,
                        under certain conditions.
                    </li>
                </ul>
                <p className="mb-4">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

                <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
                <p className="mb-4">
                    This Privacy Policy shall be governed by and construed in accordance with India law. In the event that any of the provisions of this Privacy Policy should
                    become ineffective, invalid or unenforceable, this shall not affect the effectiveness, validity and enforceability of the remaining provisions. In the event of
                    the ineffectiveness, invalidity or un-enforceability of any of these provisions you agree that we may substitute such by an effective, valid and enforceable
                    provision which is, in its legal result, as close as possible to the ineffective, invalid or unenforceable provision.
                </p>

                <p className="text-sm">
                    Last update: <strong>01-08-2024</strong>
                </p>
            </div>
        </div>
    );
}
