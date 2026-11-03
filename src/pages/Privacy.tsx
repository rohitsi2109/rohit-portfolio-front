import { CONSENT_VERSION } from '../lib/api';

// Must match the Neon project's region (rohit-portfolio-api docs/PLAN.md, section 8)
const DATA_REGION = 'Singapore (AWS ap-southeast-1)';
const CONTACT_EMAIL = 'connect@rohitsingh.in';
const LAST_UPDATED = 'November 2026';

const Privacy = () => {
    return (
        <section className="py-20 px-4 md:px-10 max-w-3xl mx-auto">
            <article className="prose prose-invert prose-headings:font-display prose-a:text-primary max-w-none">
                <h1>Privacy policy</h1>
                <p className="text-gray-400 text-sm">Last updated {LAST_UPDATED} · version {CONSENT_VERSION}</p>

                <p>
                    This policy explains what happens to the details you give me when you book a call or send a
                    message through rohitsingh.in. I'm Rohit Singh, a freelance developer, and I'm the only person
                    who handles this information.
                </p>

                <h2>What I collect</h2>
                <ul>
                    <li><strong>What you type in the form</strong>: your name, email, phone number, time zone and anything you write about your project.</li>
                    <li><strong>How you found the site</strong>: the referring website, the page you first landed on, and campaign tags (UTM parameters) in the link you followed.</li>
                    <li><strong>Your country</strong>, worked out from your connection by my hosting provider. Your IP address itself is not stored.</li>
                    <li><strong>When you agreed to this policy</strong>, and which version of it you saw.</li>
                </ul>
                <p>
                    Nothing is saved while you fill in the form. Details are stored only when you press
                    <em> Confirm Booking</em> (or send a message). The site uses no advertising or tracking cookies.
                </p>

                <h2>Why I collect it</h2>
                <ul>
                    <li>To schedule the call and send you the calendar invite.</li>
                    <li>To contact you about the project you asked about, by email, phone or WhatsApp.</li>
                    <li>To understand which channels bring enquiries, so I know where to spend my time.</li>
                </ul>
                <p>I don't sell your details or use them for unrelated marketing.</p>

                <h2>Where it's stored and who can see it</h2>
                <p>
                    Your details are stored in a database hosted in <strong>{DATA_REGION}</strong>, protected by
                    encryption in transit and access controls. Only I can access it. These services process data on my
                    behalf:
                </p>
                <ul>
                    <li><strong>Cal.com</strong>: schedules the call and sends the invite.</li>
                    <li><strong>Google</strong>: hosts the Google Meet call and calendar event.</li>
                    <li><strong>Vercel</strong>: hosts this website and its server.</li>
                    <li><strong>Neon</strong>: hosts the database.</li>
                </ul>

                <h2>How long I keep it</h2>
                <p>
                    If we don't end up working together, your details are deleted automatically after
                    <strong> 24 months</strong> without contact. If you become a client, I keep project and payment
                    records for as long as needed for the work, and for tax and legal requirements.
                </p>

                <h2>Your choices</h2>
                <p>
                    You can ask to see, correct or delete the information I hold about you at any time by emailing{' '}
                    <a href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20request`}>{CONTACT_EMAIL}</a>. I'll reply within
                    30 days. I handle personal information in line with Australia's Privacy Act 1988 and Singapore's
                    Personal Data Protection Act 2012. If you're unhappy with my response, you can contact the Office of
                    the Australian Information Commissioner or Singapore's Personal Data Protection Commission.
                </p>

                <h2>Changes</h2>
                <p>
                    If this policy changes, the new version will be posted here with a new date. Each booking records
                    the version that was shown at the time.
                </p>
            </article>
        </section>
    );
};

export default Privacy;
