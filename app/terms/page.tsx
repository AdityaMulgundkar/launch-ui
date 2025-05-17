/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "../../components/sections/navbar/default";
import Footer from "../../components/sections/footer/default";

export default function TermsOfService() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the DroneForce platform, website, or any applications made available by DroneForce (collectively, the "Service"), you agree to be bound by these Terms of Service. If you do not agree to these Terms, you may not access or use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p>
              DroneForce is a decentralized platform that connects drone operators with those seeking drone services. The platform facilitates the creation, execution, and verification of drone missions using blockchain technology for secure transactions and proof verification.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p>
              To use certain features of the Service, you must create an account and connect a compatible cryptocurrency wallet. You are responsible for maintaining the confidentiality of your account and wallet information, and for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Drone Operations and Compliance</h2>
            <p>
              Users operating drones through our platform are responsible for complying with all applicable local, state, and federal laws and regulations regarding drone operations, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Airspace restrictions and regulations</li>
              <li>Drone registration requirements</li>
              <li>Pilot licensing and certification</li>
              <li>Privacy laws and restrictions</li>
              <li>Safety requirements</li>
            </ul>
            <p>
              DroneForce does not take responsibility for any illegal or unauthorized drone operations conducted by users of our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Smart Contracts and Payment</h2>
            <p>
              The Service utilizes smart contracts on the Solana blockchain to facilitate payments and mission verification. By using the Service, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Blockchain transactions are irreversible</li>
              <li>Smart contract terms are binding once deployed</li>
              <li>You are responsible for having sufficient funds to cover transaction fees</li>
              <li>DroneForce is not responsible for any loss of funds due to user error, wallet compromise, or blockchain network issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Proof Storage and Verification</h2>
            <p>
              Mission proofs are stored on the Arweave blockchain. By submitting proof data, you grant DroneForce a worldwide, royalty-free license to use, reproduce, modify, and display this content for the purpose of operating the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p>
              DroneForce shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
            <p>
              DroneForce reserves the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <a href="mailto:info@dfautopilot.com" className="text-primary">info@dfautopilot.com</a>
            </p>
          </section>

          <div className="text-sm text-muted-foreground mt-12 border-t pt-4">
            Last Updated: May 17, 2025
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
