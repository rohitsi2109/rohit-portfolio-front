import plantDiseasePdf from '../../assets/paper/plantDiseaseDetection.pdf';
import valueBasedPdf from '../../assets/paper/value Based Education.pdf';

const Achievements = () => {
    const achievements = [
        {
            title: 'Journal Publication',
            event: 'PARITANTRA Journal (June 2024)',
            description: 'Co-authored "Smart Crop Health Monitoring System", an AI-powered approach to enhance agricultural productivity. Featured in the special issue of PARITANTRA Journal of Systems Science and Engineering (NSC-2023 selected papers).',
            icon: 'menu_book',
            link: 'https://drive.google.com/file/d/1nC9MXT64wMintgBSDqZBV3C-mNifskSV/view?usp=drive_link',
            linkText: 'View Journal'
        },
        {
            title: 'Best Paper Award',
            event: '46th (Inter) National System Conference',
            description: 'Received the Best Paper Award in the Agroecology-cum-Precision Farming Systems category for the paper "Plant Disease Detection with Bluetooth Controlled Rover", outshining ~400 entries.',
            icon: 'trophy',
            link: plantDiseasePdf,
            linkText: 'Read Paper'
        },
        {
            title: 'Poster Presentation',
            event: '45th (Inter) National System Conference',
            description: 'Accomplished Poster Presentation and publication in the highly competitive Value-Based Education category, surpassing ~2600 submitted papers.',
            icon: 'article',
            link: valueBasedPdf,
            linkText: 'Read Paper'
        },
        {
            title: 'Smart India Hackathon 2023',
            event: 'Internal Hackathon',
            description: 'Successfully completed the internal hackathon, earning the opportunity to participate in the final showdown.',
            icon: 'code_off',
            link: null,
            linkText: ''
        }
    ];

    return (
        <section id="achievements" className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display">Achievements</h2>
                        <div className="h-px bg-white/10 flex-grow"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className="glass-panel p-6 rounded-xl flex flex-col gap-4 border border-white/5 bg-gradient-to-b from-white/5 to-transparent group hover:bg-white/10 transition-colors"
                        >
                            <div className="flex justify-between items-start">
                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                            </div>

                            <div className="flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-1 font-display">{item.title}</h3>
                                <div className="text-sm text-primary mb-3 font-mono">{item.event}</div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {item.description}
                                </p>

                                {item.link && (
                                    <div className="mt-auto pt-4 border-t border-white/5">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-lg">description</span>
                                            {item.linkText}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
