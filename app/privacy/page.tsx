/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "../../components/sections/navbar/default";
import Footer from "../../components/sections/footer/default";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              DroneForce ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by DroneForce.
            </p>
            <p>
              This Privacy Policy applies to our website, and its associated subdomains (collectively, our "Service"). By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>
              We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey, fill out a form, or use the drone mission services.
            </p>
            <h3 className="text-xl font-semibold mb-2">Personal Information:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Wallet addresses</li>
              <li>Phone number</li>
              <li>Drone mission data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We may use the information we collect from you in the following ways:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To personalize your experience and to deliver content and product offerings relevant to your interests.</li>
              <li>To improve our website in order to better serve you.</li>
              <li>To allow us to better service you in responding to your customer service requests.</li>
              <li>To administer drone missions and verify mission completion.</li>
              <li>To process transactions and send notifications about your transactions.</li>
              <li>To send periodic emails regarding your missions or other products and services.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Blockchain Data</h2>
            <p>
              DroneForce is built on the Solana blockchain and uses Arweave for data storage. Information that you choose to store on these public blockchains will be publicly available. This includes mission parameters, proof data, and transaction information. We have no control over how this information is used by third parties once it is on the blockchain.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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
