const FAQ = () => {
    const faqs = [
        {
            q: 'Where are you based, and how do time zones work?',
            a: "I'm based in India and work remotely with clients worldwide. My working hours overlap with Singapore (SGT) and Australian Eastern time (AEST/AEDT) business hours, so calls, updates and support happen during your day."
        },
        {
            q: 'How is pricing worked out?',
            a: 'Most projects are fixed-price: after a free scoping call I send a written scope with milestones and a quote. Ongoing work can run on a monthly retainer, and small jobs can be billed hourly. Quotes and invoices are in AUD, SGD or USD.'
        },
        {
            q: 'Who owns the code and designs?',
            a: 'You do. On final payment, all source code, designs and credentials are handed over to you, along with documentation so any developer can continue the work.'
        },
        {
            q: 'Can you sign an NDA or work under a contract?',
            a: "Yes. I'm happy to sign your NDA or service agreement, or to provide a simple contract covering scope, milestones, payment terms and IP ownership."
        },
        {
            q: 'How do you handle customer data and privacy?',
            a: "Lead forms and customer data are stored securely with access controls, and can be hosted in a region you choose, such as AWS Sydney or Singapore. I build with Australia's Privacy Act and Singapore's PDPA in mind."
        },
        {
            q: 'What happens after launch?',
            a: 'Every project includes a post-launch support window for bug fixes and small tweaks. After that, you can move to a maintenance retainer or contact me as needed.'
        },
        {
            q: 'Can you work on an existing codebase?',
            a: 'Yes. I regularly extend, fix and modernise existing React, Python and Flutter projects. I start with a short code review so you know what you are working with.'
        }
    ];

    return (
        <section id="faq" className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
                        Common <span className="text-primary">Questions</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
                    {faqs.map(item => (
                        <details key={item.q} className="glass-panel rounded-xl group">
                            <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none text-white font-bold font-display text-lg">
                                {item.q}
                                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-45">add</span>
                            </summary>
                            <p className="px-6 pb-6 text-gray-400 leading-relaxed font-body">{item.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
