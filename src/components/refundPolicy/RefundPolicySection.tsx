import Link from 'next/link';
import React from 'react';

const RefundPolicySection = () => {
    return (
        <div className='privacy-area pt-110 pb-20'>
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <div className="privacy-wrapper">
                            <p>Thank you for choosing Netbox as your broadband and internet service provider. This Refund Policy explains the terms and conditions regarding refunds for our services. By using our website and purchasing our services, you agree to comply with this policy.</p>
                            <div className="privacy-wrapper-box">
                                <h5>1. Service Cancellation and Refunds</h5>
                                <p> If you decide to cancel your service within 15 days from the activation date, you are entitled to a full refund of the fees paid for the service. To initiate the cancellation and refund process, please contact our customer support team.</p>
                                <p>Refunds will be issued using the same payment method used for the initial purchase. The refund amount will exclude any setup fees, shipping charges, or non-refundable charges as specified during the purchase process.</p>
                                <p>Once the cancellation request is received and approved, it may take up to 15 business days for the refund to be processed. The exact time may vary depending on the payment method and financial institution involved.</p>
                            </div>
                            <div className="privacy-wrapper-box">
                                <h5>2. Non-Refundable Charges</h5>
                                <p><strong>Certain charges are non-refundable, and the following items are not eligible for a refund : </strong></p>
                                <p>a. Any usage charges incurred during the service period.</p>
                                <p>b. Fees associated with the purchase or rental of equipment.</p>
                                <p>c. Installation charges or fees paid to third-party contractors.</p>
                                <p>d. Any charges related to additional services or upgrades.</p>
                                <p>e. Fees for any domain registrations or other domain-related services.</p>
                            </div>
                            <div className="privacy-wrapper-box">
                                <h5>3. Termination of Service</h5>
                                <p>If you decide to terminate your service after the specified refund period has passed, no refund will be issued for the unused portion of the service period.</p>
                                <p>In case of termination due to a violation of our Terms of Service or any illegal or prohibited activities, no refund will be provided.</p>
                            </div>
                            <div className="privacy-wrapper-box">
                                <h5>4. Refund Disputes</h5>
                                <p>If you have any concerns or disputes regarding the refund process, please contact our customer support team. We will make every effort to address and resolve the issue in a fair and timely manner.</p>
                            </div>
                            <div className="privacy-wrapper-box">
                                <h5>5. Changes to the Refund Policy</h5>
                                <p>Netbox reserves the right to modify or update this Refund Policy at any time without prior notice. The updated policy will be effective immediately upon posting on our website. We encourage you to review this policy periodically to stay informed about any changes.</p>
                            </div>
                            <div className="privacy-wrapper-box">
                                <h5>6. Contact Us</h5>
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

export default RefundPolicySection;