import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Paul Carey & Sons Ltd',
  description: 'Privacy Policy for Paul Carey & Sons Ltd — how we collect, use, and protect your personal data.',
};

const sections = [
  {
    title: '1. Who We Are',
    content: `Paul Carey & Sons Ltd is a family-run civil engineering and groundwork contractor based at Ballasalla Farm, Jurby West, Isle of Man, IM7 3AS. We are the data controller for the personal information we collect through this website and in the course of our business operations.\n\nIf you have any questions about this Privacy Policy or how we handle your data, please contact us at mail@pcsltd.im.`,
  },
  {
    title: '2. What Information We Collect',
    content: `We may collect the following types of personal information:\n\n• **Contact information** – your name, phone number, and email address when you submit an enquiry or quote request.\n• **Project details** – information you provide about your project, location, and requirements.\n• **Usage data** – anonymised data about how you use our website, collected via cookies or analytics tools.\n• **Communication records** – records of correspondence between you and our team.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use your personal information to:\n\n• Respond to your enquiries and provide quotes.\n• Deliver services you have requested.\n• Communicate with you about your project or our services.\n• Comply with legal and regulatory obligations.\n• Improve our website and services.\n\nWe will never sell, rent, or share your personal data with third parties for marketing purposes.`,
  },
  {
    title: '4. Legal Basis for Processing',
    content: `We process your personal data on the following legal grounds:\n\n• **Contractual necessity** – to fulfil a contract or take steps to enter into a contract with you.\n• **Legitimate interests** – to respond to your enquiries and improve our services.\n• **Legal obligation** – where we are required to retain certain information by law.\n• **Consent** – where you have explicitly agreed to a specific use of your data.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your personal data for as long as is necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.\n\nEnquiry and contact data is typically retained for up to 3 years. Project and contract records may be retained for up to 7 years in line with legal requirements.`,
  },
  {
    title: '6. Your Rights',
    content: `Under applicable data protection law, you have the right to:\n\n• **Access** – request a copy of the personal data we hold about you.\n• **Rectification** – request correction of inaccurate or incomplete data.\n• **Erasure** – request deletion of your personal data in certain circumstances.\n• **Restriction** – request that we restrict processing of your data.\n• **Portability** – receive your data in a structured, machine-readable format.\n• **Object** – object to processing based on legitimate interests.\n\nTo exercise any of these rights, please contact us at mail@pcsltd.im.`,
  },
  {
    title: '7. Cookies',
    content: `Our website may use cookies to improve your browsing experience. Cookies are small text files stored on your device. We use:\n\n• **Essential cookies** – required for the website to function correctly.\n• **Analytics cookies** – to understand how visitors use our site (anonymised).\n\nYou can control cookies through your browser settings. Disabling cookies may affect some functionality of our website.`,
  },
  {
    title: '8. Third-Party Services',
    content: `We may use trusted third-party services to operate our website and business, such as email hosting and analytics platforms. These providers are contractually obligated to handle your data securely and only for the purposes we specify.\n\nWe do not transfer your personal data outside the UK or Isle of Man without ensuring appropriate safeguards are in place.`,
  },
  {
    title: '9. Security',
    content: `We take the security of your personal data seriously and implement appropriate technical and organisational measures to protect it against unauthorised access, loss, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, please contact us:\n\n**Paul Carey & Sons Ltd**\nBallasalla Farm, Jurby West, Isle of Man, IM7 3AS\nEmail: mail@pcsltd.im\nPhone: 01624 880581`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <div className="bg-[#111111] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Home – Privacy Policy</p>
          <p className="text-gray-500 text-sm mt-4">Last updated: May 2025</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-gray-700 text-lg leading-relaxed mb-12 p-6 bg-[#F5F5F5] rounded-2xl border-l-4 border-[#C1121F]">
          Paul Carey & Sons Ltd is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or engage with our services.
        </p>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">{section.title}</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                {section.content.split('\n').map((line, i) => {
                  if (line.trim() === '') return null;
                  if (line.startsWith('•')) {
                    return (
                      <p key={i} className="flex items-start gap-2">
                        <span className="text-[#C1121F] font-bold mt-1 flex-shrink-0">•</span>
                        <span dangerouslySetInnerHTML={{ __html: line.slice(1).trim().replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </p>
                    );
                  }
                  return (
                    <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  );
                })}
              </div>
              <div className="mt-8 border-b border-gray-200" />
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-[#111111] rounded-2xl text-white text-center">
          <h3 className="text-xl font-bold mb-2">Questions about your data?</h3>
          <p className="text-gray-400 mb-4">We're happy to help. Get in touch with our team.</p>
          <a
            href="mailto:mail@pcsltd.im"
            className="inline-block bg-[#C1121F] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#a00f1a] transition-colors"
          >
            mail@pcsltd.im
          </a>
        </div>
      </div>
    </main>
  );
}
