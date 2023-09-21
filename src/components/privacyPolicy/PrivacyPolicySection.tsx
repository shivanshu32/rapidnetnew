import Link from 'next/link';
import React from 'react';

const PrivacyPolicySection = () => {
    return (
        <div className='privacy-area pt-110 pb-20'>
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <div className="privacy-wrapper">
                            <p>At Netbox, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy & Policy page outlines how we collect, use, and disclose information when you visit our website or use our broadband and internet services. By accessing our website or using our services, you consent to the practices described in this policy.</p>
                            <div className="privacy-wrapper-box">
                                <h5>1. Information We Collect</h5>
                                <p><strong>Personal Information : </strong> When you sign up for our services, we may collect personal information such as your name, address, email address, phone number, and payment details. We only collect the information necessary to provide you with our services and fulfill your requests.</p>
                                <p><strong>Usage Information : </strong> We may collect non-personal information about your interactions with our website and services. This may include IP addresses, browser type, device information, operating system, and pages visited. We use this information to analyze trends, administer our website, and improve our services.</p>
                            </div>
                            <div className="privacy-wrapper-box">
                                <h5>2. Use of Information</h5>
                                <p><strong>Providing Services : </strong> We use the information we collect to deliver and improve our broadband and internet services. This includes processing your orders, managing your account, and providing customer support.</p>
                                <p><strong>Communication : </strong> We may use your contact information to send you important updates, notifications, and promotional offers related to our services. You can opt out of receiving marketing communications at any time.</p>
                                <p><strong>Legal Compliance : </strong> We may disclose your information to comply with applicable laws, regulations, legal processes, or governmental requests. We may also disclose your information to protect our rights, property, or safety, and that of our users or others.</p>
                            </div>
                            <div className="privacy-wrapper-box">
                                <h5>3. Data Security</h5>
                                <p>We take appropriate measures to safeguard your personal information from unauthorized access, alteration, disclosure, or destruction. We use industry-standard security technologies and procedures to protect your information.</p>
                                <p>While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security of your data.</p>
                            </div>
                            <div className="privacy-wrapper-box">
                                <h5>4. Cookies and Tracking Technologies</h5>
                                <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience. These technologies may collect information about your use of our website, such as your IP address, browser type, and pages visited.</p>
                                <p>You can choose to disable cookies through your browser settings. However, please note that some features of our website may not function properly if cookies are disabled.</p>
                            </div>
                            <div className="privacy-wrapper-box">
                                <h5>5. Third-Party Links</h5>
                                <p>Our website may contain links to third-party websites or services that are not controlled or operated by Netbox. We are not responsible for the privacy practices or content of these third-party websites. We encourage you to review the privacy policies of those websites before providing any personal information.</p>
                            </div>
                            <div className="privacy-wrapper-box">
                                <h5>6. Changes to the Privacy Policy</h5>
                                <p>We may update this Privacy & Policy page from time to time. Any changes we make will be posted on this page, and the revised date will be indicated at the top of the page. We encourage you to review this policy periodically to stay informed about how we collect, use, and protect your information.</p>
                            </div>
                            <div className="privacy-wrapper-box">
                                <h5>7. Contact Us</h5>
                                <p>If you have any questions, concerns, or requests regarding this Privacy & Policy, please contact us at  
                                    <Link href="mailto:netbox@gmail.com" className='hover-underline'> netbox@gmail.com</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicySection;