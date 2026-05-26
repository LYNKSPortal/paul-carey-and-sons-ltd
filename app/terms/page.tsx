import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Paul Carey & Sons Ltd',
  description: 'Terms & Conditions for Paul Carey & Sons Ltd — the terms governing use of our website and services.',
};

const sections = [
  {
    title: '1. Introduction',
    content: `These Terms & Conditions ("Terms") govern your use of the Paul Carey & Sons Ltd website and the services we provide. By accessing our website or engaging our services, you agree to be bound by these Terms.\n\nPaul Carey & Sons Ltd is registered and operates from Ballasalla Farm, Jurby West, Isle of Man, IM7 3AS. If you do not agree to these Terms, please do not use our website or services.`,
  },
  {
    title: '2. Services',
    content: `Paul Carey & Sons Ltd provides civil engineering, groundwork, plant hire, haulage, landscaping, land reclamation, recycling, and demolition services across the Isle of Man.\n\nAll services are subject to a separate written agreement or quotation. No contract for services is formed until a formal quotation has been accepted in writing and confirmed by Paul Carey & Sons Ltd.`,
  },
  {
    title: '3. Quotations',
    content: `Quotations provided by Paul Carey & Sons Ltd are valid for 30 days from the date of issue unless otherwise stated in writing.\n\nQuotations are based on information provided at the time of enquiry. Any changes to the scope of works, site conditions, or project requirements may result in a revised quotation. We reserve the right to withdraw or amend a quotation at any time prior to written acceptance.`,
  },
  {
    title: '4. Payment Terms',
    content: `Payment terms will be specified in the written contract or invoice for each project. Unless otherwise agreed:\n\n• Invoices are due within 30 days of the invoice date.\n• We reserve the right to charge interest on overdue amounts in accordance with applicable legislation.\n• Ownership of materials supplied remains with Paul Carey & Sons Ltd until full payment is received.\n• We reserve the right to suspend works in the event of non-payment.`,
  },
  {
    title: '5. Client Responsibilities',
    content: `The client is responsible for:\n\n• Providing accurate and complete information about the project site and requirements.\n• Ensuring safe and adequate access to the site for our team and equipment.\n• Obtaining any necessary planning permissions, permits, or approvals prior to commencement of works.\n• Notifying us of any known underground services, hazards, or constraints on or near the site.\n\nPaul Carey & Sons Ltd accepts no liability for delays or additional costs arising from the client's failure to fulfil these responsibilities.`,
  },
  {
    title: '6. Variations',
    content: `Any variations to the agreed scope of works must be agreed in writing prior to the additional works being carried out. Verbal instructions to vary works may be acknowledged as a gesture of goodwill but will not be binding on Paul Carey & Sons Ltd unless confirmed in writing.`,
  },
  {
    title: '7. Liability',
    content: `Paul Carey & Sons Ltd carries appropriate public liability and employer's liability insurance. Our liability to clients is limited to the value of the contract for the relevant works.\n\nWe are not liable for:\n\n• Indirect or consequential losses.\n• Loss of profit, revenue, or business opportunity.\n• Losses arising from events outside our reasonable control (force majeure).\n• Damage to underground services not identified or marked by the client prior to commencement.`,
  },
  {
    title: '8. Health, Safety & Environment',
    content: `All works are carried out in accordance with applicable health and safety legislation and Isle of Man regulations. Paul Carey & Sons Ltd is committed to maintaining the highest standards of safety on all sites.\n\nClients must inform us of any site-specific health and safety requirements, rules, or inductions required prior to our attendance on site.`,
  },
  {
    title: '9. Intellectual Property',
    content: `All content on this website, including text, images, logos, and graphics, is the property of Paul Carey & Sons Ltd or its licensors and is protected by applicable intellectual property laws.\n\nYou may not reproduce, distribute, or use any content from this website without prior written consent from Paul Carey & Sons Ltd.`,
  },
  {
    title: '10. Website Use',
    content: `You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:\n\n• Attempt to gain unauthorised access to our website or systems.\n• Transmit any harmful, offensive, or unlawful content.\n• Use automated tools to scrape or extract data from our website.\n\nWe reserve the right to restrict or terminate access to our website at any time without notice.`,
  },
  {
    title: '11. Third-Party Links',
    content: `Our website may contain links to third-party websites. These links are provided for convenience only. Paul Carey & Sons Ltd does not endorse or accept responsibility for the content, privacy practices, or services of any third-party website.`,
  },
  {
    title: '12. Governing Law',
    content: `These Terms & Conditions are governed by the laws of the Isle of Man. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of the Isle of Man.`,
  },
  {
    title: '13. Changes to These Terms',
    content: `We reserve the right to update these Terms & Conditions at any time. Changes will be posted on this page with an updated effective date. Continued use of our website following any changes constitutes acceptance of the updated Terms.`,
  },
  {
    title: '14. Contact Us',
    content: `If you have any questions about these Terms & Conditions, please contact us:\n\n**Paul Carey & Sons Ltd**\nBallasalla Farm, Jurby West, Isle of Man, IM7 3AS\nEmail: mail@pcsltd.im\nPhone: 01624 880581`,
  },
];

export default function TermsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <div className="bg-[#111111] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-gray-400">Home – Terms & Conditions</p>
          <p className="text-gray-500 text-sm mt-4">Last updated: May 2025</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-gray-700 text-lg leading-relaxed mb-12 p-6 bg-[#F5F5F5] rounded-2xl border-l-4 border-[#C1121F]">
          Please read these Terms & Conditions carefully before using our website or engaging our services. By using our website or instructing us to carry out works, you agree to be bound by these Terms.
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
          <h3 className="text-xl font-bold mb-2">Questions about our Terms?</h3>
          <p className="text-gray-400 mb-4">Get in touch and we'll be happy to clarify anything.</p>
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
