// Article content data
const articles = {
    1: {
        title: "The Evolution of Neural Networks: From Perceptrons to Deep Learning",
        content: `
            <h2>The Evolution of Neural Networks: From Perceptrons to Deep Learning</h2>
            <p>Neural networks have come a long way since their inception in the 1940s. What started as a simple mathematical model has evolved into the complex deep learning architectures that power today's artificial intelligence revolution.</p>
            
            <h3>The Birth of Neural Networks</h3>
            <p>The concept of artificial neural networks began with Warren McCulloch and Walter Pitts in 1943, who proposed the first mathematical model of a neural network. Their work laid the foundation for understanding how biological neurons could be modeled mathematically.</p>
            
            <h3>The Perceptron Era</h3>
            <p>In 1958, Frank Rosenblatt developed the perceptron, the first neural network that could learn from examples. The perceptron was a single-layer neural network that could classify linearly separable patterns. Despite its limitations, it was a significant step forward in machine learning.</p>
            
            <h3>The AI Winter and Renaissance</h3>
            <p>The 1970s and 1980s saw periods of reduced funding and interest in AI research, known as "AI winters." However, the development of backpropagation in the 1980s by Rumelhart, Hinton, and Williams revitalized neural network research, enabling multi-layer networks to learn effectively.</p>
            
            <h3>The Deep Learning Revolution</h3>
            <p>The 2010s marked the beginning of the deep learning era. With increased computational power and large datasets, deep neural networks achieved breakthrough performance in various tasks:</p>
            <ul>
                <li>Image recognition with Convolutional Neural Networks (CNNs)</li>
                <li>Natural language processing with Recurrent Neural Networks (RNNs)</li>
                <li>Game playing with Deep Q-Networks and AlphaGo</li>
                <li>Generative models creating realistic images and text</li>
            </ul>
            
            <h3>Modern Architectures</h3>
            <p>Today's neural networks include sophisticated architectures like Transformers, which have revolutionized natural language processing, and Graph Neural Networks for handling structured data. These architectures continue to push the boundaries of what's possible in AI.</p>
            
            <h3>The Future of Neural Networks</h3>
            <p>As we look to the future, neural networks are becoming more efficient, interpretable, and capable. Research in areas like neuromorphic computing, quantum neural networks, and continual learning promises to bring even more advanced AI systems.</p>
            
            <p>The journey from simple perceptrons to today's deep learning systems demonstrates the remarkable progress in artificial intelligence. As we continue to advance, neural networks will undoubtedly play an increasingly important role in shaping our technological future.</p>
        `
    },
    2: {
        title: "Ethical Considerations in AI Development: Bias, Fairness, and Accountability",
        content: `
            <h2>Ethical Considerations in AI Development: Bias, Fairness, and Accountability</h2>
            <p>As artificial intelligence becomes increasingly integrated into our daily lives, the ethical implications of AI development have never been more critical. From biased algorithms to opaque decision-making processes, the challenges we face require careful consideration and proactive solutions.</p>
            
            <h3>Understanding AI Bias</h3>
            <p>AI bias occurs when algorithms produce systematically prejudiced results due to erroneous assumptions in the machine learning process. This bias can stem from various sources:</p>
            <ul>
                <li>Biased training data reflecting historical inequalities</li>
                <li>Unrepresentative datasets lacking diversity</li>
                <li>Developer biases embedded in algorithm design</li>
                <li>Feedback loops that reinforce existing biases</li>
            </ul>
            
            <h3>Real-World Impact of Bias</h3>
            <p>The consequences of biased AI systems can be severe and far-reaching. Examples include:</p>
            <ul>
                <li>Hiring algorithms that discriminate against certain demographics</li>
                <li>Criminal justice systems showing racial bias in risk assessments</li>
                <li>Healthcare AI that underperforms for minority populations</li>
                <li>Loan approval systems that perpetuate economic inequality</li>
            </ul>
            
            <h3>Ensuring Fairness in AI</h3>
            <p>Achieving fairness in AI requires a multi-faceted approach:</p>
            <ul>
                <li><strong>Diverse and Representative Data:</strong> Ensuring training datasets reflect the diversity of the populations they serve</li>
                <li><strong>Regular Auditing:</strong> Continuously testing AI systems for biased outcomes</li>
                <li><strong>Inclusive Development Teams:</strong> Building diverse teams that can identify potential biases</li>
                <li><strong>Transparency:</strong> Making AI decision-making processes as interpretable as possible</li>
            </ul>
            
            <h3>Accountability in AI Systems</h3>
            <p>Establishing clear accountability frameworks is essential for responsible AI development. This includes:</p>
            <ul>
                <li>Clear guidelines for AI system deployment and monitoring</li>
                <li>Defined responsibility for AI outcomes and errors</li>
                <li>Legal and regulatory frameworks for AI governance</li>
                <li>Mechanisms for redress when AI systems cause harm</li>
            </ul>
            
            <h3>The Path Forward</h3>
            <p>Building ethical AI systems requires ongoing commitment from developers, organizations, and society as a whole. Key priorities include:</p>
            <ul>
                <li>Developing industry-wide ethical standards and best practices</li>
                <li>Investing in research on fairness and interpretability</li>
                <li>Creating regulatory frameworks that balance innovation with protection</li>
                <li>Promoting education and awareness about AI ethics</li>
            </ul>
            
            <p>As we continue to advance AI technology, maintaining a focus on ethics, fairness, and accountability will be crucial for creating systems that benefit all of humanity. The choices we make today will shape the future of AI and its impact on society for generations to come.</p>
        `
    },
    3: {
        title: "The Path to Artificial General Intelligence: Challenges and Possibilities",
        content: `
            <h2>The Path to Artificial General Intelligence: Challenges and Possibilities</h2>
            <p>Artificial General Intelligence (AGI) represents the holy grail of AI research - a system that can understand, learn, and apply knowledge across a wide range of tasks at human or superhuman levels. While current AI excels at specific tasks, achieving AGI remains one of the greatest challenges in computer science.</p>
            
            <h3>What is AGI?</h3>
            <p>Unlike narrow AI systems designed for specific tasks, AGI would possess the ability to:</p>
            <ul>
                <li>Reason and think abstractly</li>
                <li>Learn from experience and adapt to new situations</li>
                <li>Understand context and nuance</li>
                <li>Transfer knowledge between domains</li>
                <li>Exhibit creativity and imagination</li>
            </ul>
            
            <h3>Current AI vs. AGI</h3>
            <p>Today's AI systems, while impressive, remain fundamentally limited:</p>
            <ul>
                <li><strong>Specialization:</strong> Excel at specific tasks but cannot generalize</li>
                <li><strong>Data Dependency:</strong> Require massive amounts of training data</li>
                <li><strong>Lack of Common Sense:</strong> Struggle with everyday reasoning</li>
                <li><strong>No True Understanding:</strong> Pattern matching without comprehension</li>
            </ul>
            
            <h3>Technical Challenges</h3>
            <p>The path to AGI is fraught with significant technical hurdles:</p>
            <ul>
                <li><strong>Reasoning and Causality:</strong> Understanding cause and effect relationships</li>
                <li><strong>Common Sense Knowledge:</strong> Encoding the vast implicit knowledge humans possess</li>
                <li><strong>Continual Learning:</strong> Learning without forgetting previous knowledge</li>
                <li><strong>Efficiency:</strong> Achieving human-level intelligence with reasonable computational resources</li>
            </ul>
            
            <h3>Approaches to AGI</h3>
            <p>Researchers are exploring various paths toward AGI:</p>
            <ul>
                <li><strong>Scaling Current Methods:</strong> Making larger language models and neural networks</li>
                <li><strong>Hybrid Systems:</strong> Combining neural networks with symbolic reasoning</li>
                <li><strong>Neuromorphic Computing:</strong> Building hardware that mimics brain structure</li>
                <li><strong>Cognitive Architectures:</strong> Designing systems based on human cognition</li>
            </ul>
            
            <h3>Timeline Predictions</h3>
            <p>Expert opinions on when AGI might arrive vary widely:</p>
            <ul>
                <li>Pessimistic estimates: 50-100 years or more</li>
                <li>Moderate estimates: 20-30 years</li>
                <li>Optimistic estimates: 5-10 years</li>
            </ul>
            
            <h3>Societal Implications</h3>
            <p>The arrival of AGI would transform society in profound ways:</p>
            <ul>
                <li><strong>Economic Impact:</strong> Potential for unprecedented productivity gains</li>
                <li><strong>Employment:</strong> Disruption of labor markets and job creation</li>
                <li><strong>Scientific Discovery:</strong> Accelerating research across all fields</li>
                <li><strong>Education:</strong> Personalized learning and knowledge dissemination</li>
            </ul>
            
            <h3>Safety and Alignment</h3>
            <p>Ensuring AGI is safe and aligned with human values is crucial:</p>
            <ul>
                <li>Developing robust alignment techniques</li>
                <li>Creating fail-safe mechanisms</li>
                <li>Establishing international governance frameworks</li>
                <li>Promoting transparency and collaboration</li>
            </ul>
            
            <p>While the path to AGI remains uncertain, the journey itself drives innovation and pushes the boundaries of what's possible in artificial intelligence. Whether AGI arrives in decades or centuries, the pursuit continues to advance our understanding of both machine and human intelligence.</p>
        `
    },
    4: {
        title: "Transformers and Large Language Models: Revolutionizing Natural Language Processing",
        content: `
            <h2>Transformers and Large Language Models: Revolutionizing Natural Language Processing</h2>
            <p>The introduction of transformer architectures in 2017 marked a watershed moment in natural language processing. This breakthrough has given rise to large language models (LLMs) that can understand and generate human language with unprecedented sophistication.</p>
            
            <h3>The Transformer Architecture</h3>
            <p>Transformers revolutionized NLP by introducing several key innovations:</p>
            <ul>
                <li><strong>Self-Attention Mechanism:</strong> Allows models to weigh the importance of different words in context</li>
                <li><strong>Parallel Processing:</strong> Unlike RNNs, transformers process all tokens simultaneously</li>
                <li><strong>Positional Encoding:</strong> Incorporates word order information without sequential processing</li>
                <li><strong>Multi-Head Attention:</strong> Captures different types of relationships between words</li>
            </ul>
            
            <h3>From BERT to GPT</h3>
            <p>The transformer architecture has enabled the development of increasingly powerful models:</p>
            <ul>
                <li><strong>BERT (2018):</strong> Bidirectional understanding of context</li>
                <li><strong>GPT-2 (2019):</strong> Impressive text generation capabilities</li>
                <li><strong>GPT-3 (2020):</strong> Few-shot learning and emergent abilities</li>
                <li><strong>GPT-4 (2023):</strong> Multimodal understanding and advanced reasoning</li>
            </ul>
            
            <h3>Key Capabilities of Modern LLMs</h3>
            <p>Today's large language models demonstrate remarkable abilities:</p>
            <ul>
                <li><strong>Context Understanding:</strong> Grasping nuance, subtext, and implicit meaning</li>
                <li><strong>Code Generation:</strong> Writing and debugging programming code</li>
                <li><strong>Translation:</strong> High-quality language translation</li>
                <li><strong>Summarization:</strong> Condensing long texts effectively</li>
                <li><strong>Creative Writing:</strong> Generating stories, poetry, and dialogue</li>
            </ul>
            
            <h3>Training Process</h3>
            <p>Training large language models involves several stages:</p>
            <ul>
                <li><strong>Data Collection:</strong> Gathering vast amounts of text from the internet</li>
                <li><strong>Pre-training:</strong> Learning language patterns on unlabeled data</li>
                <li><strong>Fine-tuning:</strong> Adapting to specific tasks or safety requirements</li>
                <li><strong>Alignment:</strong> Ensuring helpful, harmless, and honest outputs</li>
            </ul>
            
            <h3>Applications Across Industries</h3>
            <p>LLMs are transforming numerous sectors:</p>
            <ul>
                <li><strong>Healthcare:</strong> Medical documentation and research assistance</li>
                <li><strong>Education:</strong> Personalized tutoring and content creation</li>
                <li><strong>Customer Service:</strong> Advanced chatbots and support systems</li>
                <li><strong>Content Creation:</strong> Writing assistance and creative tools</li>
                <li><strong>Research:</strong> Literature analysis and hypothesis generation</li>
            </ul>
            
            <h3>Challenges and Limitations</h3>
            <p>Despite their capabilities, LLMs face significant challenges:</p>
            <ul>
                <li><strong>Hallucinations:</strong> Generating plausible but incorrect information</li>
                <li><strong>Bias:</strong> Reflecting biases present in training data</li>
                <li><strong>Computational Cost:</strong> Requiring massive resources for training and inference</li>
                <li><strong>Interpretability:</strong> Difficulty understanding how decisions are made</li>
            </ul>
            
            <h3>The Future of Language Models</h3>
            <p>Research directions for next-generation LLMs include:</p>
            <ul>
                <li><strong>Efficiency:</strong> Smaller models with comparable performance</li>
                <li><strong>Multimodality:</strong> Integrating text, images, audio, and video</li>
                <li><strong>Reasoning:</strong> Enhanced logical and mathematical abilities</li>
                <li><strong>Personalization:</strong> Adapting to individual users and contexts</li>
            </ul>
            
            <p>Transformer architectures and large language models have fundamentally changed our relationship with technology and language. As these systems continue to evolve, they promise to further blur the line between human and machine communication, opening new possibilities for human-computer interaction and knowledge discovery.</p>
        `
    },
    5: {
        title: "Privacy in the Age of AI: Balancing Innovation with Personal Data Protection",
        content: `
            <h2>Privacy in the Age of AI: Balancing Innovation with Personal Data Protection</h2>
            <p>As artificial intelligence systems become increasingly sophisticated and pervasive, the tension between technological innovation and personal privacy has never been more pronounced. The very data that fuels AI's capabilities also raises critical questions about privacy, consent, and individual rights.</p>
            
            <h3>The Data Dilemma</h3>
            <p>Modern AI systems thrive on data - lots of it. This creates a fundamental challenge:</p>
            <ul>
                <li><strong>Innovation Needs:</strong> AI requires diverse, large-scale datasets to learn effectively</li>
                <li><strong>Privacy Rights:</strong> Individuals have legitimate concerns about personal data usage</li>
                <li><strong>Economic Incentives:</strong> Companies monetize data-driven insights</li>
                <li><strong>Regulatory Requirements:</strong> Laws increasingly restrict data collection and use</li>
            </ul>
            
            <h3>Types of Privacy Concerns</h3>
            <p>AI systems raise various privacy issues:</p>
            <ul>
                <li><strong>Surveillance:</strong> Continuous monitoring through cameras, sensors, and online behavior</li>
                <li><strong>Data Profiling:</strong> Creating detailed behavioral and psychological profiles</li>
                <li><strong>Predictive Privacy:</strong> Inferring sensitive information from non-sensitive data</li>
                <li><strong>Location Tracking:</strong> Monitoring movements and physical presence</li>
                <li><strong>Biometric Data:</strong> Collecting and analyzing facial, voice, and other biological markers</li>
            </ul>
            
            <h3>Real-World Privacy Challenges</h3>
            <p>Several high-profile cases highlight privacy concerns:</p>
            <ul>
                <li><strong>Smart Home Devices:</strong> Always-listening assistants recording private conversations</li>
                <li><strong>Facial Recognition:</strong> Mass surveillance and identification without consent</li>
                <li><strong>Social Media:</strong> Extensive data collection for targeted advertising</li>
                <li><strong>Healthcare AI:</strong> Sensitive medical information analysis and sharing</li>
                <li><strong>Workplace Monitoring:</strong> Employee tracking and productivity analysis</li>
            </ul>
            
            <h3>Regulatory Landscape</h3>
            <p>Governments worldwide are responding with privacy regulations:</p>
            <ul>
                <li><strong>GDPR (EU):</strong> Comprehensive data protection with strict consent requirements</li>
                <li><strong>CCPA (California):</strong> Consumer data rights and transparency requirements</li>
                <li><strong>AI Act (EU):</strong> Proposed regulations specifically targeting AI systems</li>
                <li><strong>Industry Standards:</strong> Self-regulation and best practices development</li>
            </ul>
            
            <h3>Privacy-Preserving AI Techniques</h3>
            <p>Researchers are developing innovative approaches to privacy-friendly AI:</p>
            <ul>
                <li><strong>Federated Learning:</strong> Training models on local devices without centralizing data</li>
                <li><strong>Differential Privacy:</strong> Adding mathematical noise to protect individual privacy</li>
                <li><strong>Homomorphic Encryption:</strong> Computing on encrypted data without decryption</li>
                <li><strong>Synthetic Data:</strong> Generating artificial datasets that preserve statistical properties</li>
                <li><strong>Edge Computing:</strong> Processing data locally on devices rather than in the cloud</li>
            </ul>
            
            <h3>Best Practices for Organizations</h3>
            <p>Companies developing AI systems should adopt privacy-by-design principles:</p>
            <ul>
                <li><strong>Minimization:</strong> Collect only necessary data</li>
                <li><strong>Transparency:</strong> Clearly communicate data practices</li>
                <li><strong>Consent:</strong> Obtain meaningful informed consent</li>
                <li><strong>Security:</strong> Implement robust data protection measures</li>
                <li><strong>Accountability:</strong> Establish clear responsibility for data stewardship</li>
            </ul>
            
            <h3>Individual Rights and Control</h3>
            <p>Empowering users to control their data is crucial:</p>
            <ul>
                <li><strong>Access Rights:</strong> Ability to view and download personal data</li>
                <li><strong>Correction Rights:</strong> Ability to fix inaccurate information</li>
                <li><strong>Deletion Rights:</strong> "Right to be forgotten" and data removal</li>
                <li><strong>Portability:</strong> Ability to transfer data between services</li>
                <li><strong>Opt-out Options:</strong> Choices to limit data collection and use</li>
            </ul>
            
            <h3>The Path Forward</h3>
            <p>Balancing AI innovation with privacy protection requires:</p>
            <ul>
                <li>Technological innovation in privacy-preserving techniques</li>
                <li>Clear regulatory frameworks that enable innovation while protecting rights</li>
                <li>Industry commitment to ethical data practices</li>
                <li>Public education about privacy risks and protections</li>
                <li>International cooperation on privacy standards</li>
            </ul>
            
            <p>As AI continues to evolve, finding the right balance between innovation and privacy will be essential for building trust and ensuring that the benefits of artificial intelligence are realized without compromising fundamental rights to privacy and autonomy.</p>
        `
    },
    6: {
        title: "Quantum Computing and AI: The Next Frontier in Computational Intelligence",
        content: `
            <h2>Quantum Computing and AI: The Next Frontier in Computational Intelligence</h2>
            <p>The convergence of quantum computing and artificial intelligence represents one of the most exciting frontiers in technology. While still in its early stages, quantum AI promises to solve problems currently beyond the reach of classical computers, potentially revolutionizing machine learning and optimization.</p>
            
            <h3>Understanding Quantum Computing</h3>
            <p>Quantum computers leverage quantum mechanical phenomena:</p>
            <ul>
                <li><strong>Superposition:</strong> Qubits can exist in multiple states simultaneously</li>
                <li><strong>Entanglement:</strong> Qubits can be correlated in ways that transcend classical physics</li>
                <li><strong>Interference:</strong> Quantum states can interfere constructively or destructively</li>
                <li><strong>Quantum Parallelism:</strong> Ability to process many possibilities simultaneously</li>
            </ul>
            
            <h3>Why Quantum for AI?</h3>
            <p>Quantum computing offers unique advantages for AI applications:</p>
            <ul>
                <li><strong>Exponential Speedup:</strong> Potential for dramatic performance improvements</li>
                <li><strong>Complex Optimization:</strong> Solving problems with vast solution spaces</li>
                <li><strong>Pattern Recognition:</strong> Identifying patterns in high-dimensional data</li>
                <li><strong>Quantum Data:</strong> Processing inherently quantum information</li>
            </ul>
            
            <h3>Quantum Machine Learning Approaches</h3>
            <p>Several quantum ML paradigms are emerging:</p>
            <ul>
                <li><strong>Quantum Neural Networks:</strong> Neural networks with quantum parameters</li>
                <li><strong>Quantum Support Vector Machines:</strong> Quantum-enhanced classification algorithms</li>
                <li><strong>Quantum Boltzmann Machines:</strong> Quantum versions of probabilistic models</li>
                <li><strong>Variational Quantum Algorithms:</strong> Hybrid classical-quantum optimization</li>
            </ul>
            
            <h3>Current Quantum AI Applications</h3>
            <p>Early applications are showing promise in several areas:</p>
            <ul>
                <li><strong>Drug Discovery:</strong> Molecular simulation and optimization</li>
                <li><strong>Financial Modeling:</strong> Risk analysis and portfolio optimization</li>
                <li><strong>Cryptography:</strong> Quantum-resistant security systems</li>
                <li><strong>Climate Modeling:</strong> Complex system simulation</li>
                <li><strong>Material Science:</strong> Discovery of new materials and compounds</li>
            </ul>
            
            <h3>Technical Challenges</h3>
            <p>Significant hurdles remain in quantum AI development:</p>
            <ul>
                <li><strong>Hardware Limitations:</strong> Noisy quantum computers with limited qubits</li>
                <li><strong>Error Correction:</strong> Quantum decoherence and error rates</li>
                <li><strong>Algorithm Development:</strong> Creating efficient quantum algorithms</li>
                <li><strong>Talent Shortage:</strong> Limited expertise in both quantum computing and AI</li>
            </ul>
            
            <h3>Major Players and Investments</h3>
            <p>Leading companies and research institutions are investing heavily:</p>
            <ul>
                <li><strong>Google:</strong> Quantum supremacy experiments and quantum AI research</li>
                <li><strong>IBM:</strong> Quantum network and accessible quantum computers</li>
                <li><strong>Microsoft:</strong> Quantum development kit and topological qubits</li>
                <li><strong>Startups:</strong> Specialized quantum computing companies</li>
                <li><strong>Academic Research:</strong> University quantum research centers</li>
            </ul>
            
            <h3>Timeline and Expectations</h3>
            <p>Expert predictions vary on quantum AI timelines:</p>
            <ul>
                <li><strong>Near-term (1-3 years):</strong> Small-scale quantum advantage demonstrations</li>
                <li><strong>Mid-term (3-7 years):</strong> Practical applications in specific domains</li>
                <li><strong>Long-term (7-15 years):</strong> Broad quantum AI adoption</li>
            </ul>
            
            <h3>Societal Implications</h3>
            <p>Quantum AI could transform society in profound ways:</p>
            <ul>
                <li><strong>Scientific Discovery:</strong> Accelerating research across disciplines</li>
                <li><strong>Economic Impact:</strong> New industries and productivity gains</li>
                <li><strong>Security:</strong> Both threats and solutions for cybersecurity</li>
                <li><strong>Healthcare:</strong> Personalized medicine and drug development</li>
            </ul>
            
            <h3>Ethical Considerations</h3>
            <p>Quantum AI raises new ethical questions:</p>
            <ul>
                <li><strong>Accessibility:</strong> Ensuring equitable access to quantum resources</li>
                <li><strong>Dual Use:</strong> Preventing malicious applications</li>
                <li><strong>Transparency:</strong> Understanding quantum AI decisions</li>
                <li><strong>Regulation:</strong> Developing appropriate governance frameworks</li>
            </ul>
            
            <h3>The Future Outlook</h3>
            <p>The convergence of quantum computing and AI promises to:</p>
            <ul>
                <li>Solve currently intractable problems</li>
                <li>Enable new forms of artificial intelligence</li>
                <li>Transform scientific research and discovery</li>
                <li>Create unprecedented computational capabilities</li>
            </ul>
            
            <p>While quantum AI is still in its infancy, the rapid progress in both quantum computing and artificial intelligence suggests that their convergence will be a defining technological development of the coming decades. The organizations and researchers who master this intersection will likely shape the future of computational intelligence.</p>
        `
    }
};

// DOM elements
const blogwebsite = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const articleCards = document.querySelectorAll('.article-card');
const readMoreBtns = document.querySelectorAll('.read-more');
const modal = document.getElementById('article-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Mobile menu toggle
blogwebsite.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    blogwebsite.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        blogwebsite.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        articleCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.classList.add('fade-in');
                }, 10);
            } else {
                card.style.display = 'none';
                card.classList.remove('fade-in');
            }
        });
    });
});

// Modal functionality
readMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const articleId = btn.getAttribute('data-article');
        const article = articles[articleId];
        
        if (article) {
            modalBody.innerHTML = article.content;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe article cards
articleCards.forEach(card => {
    observer.observe(card);
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add initial animations
    document.querySelector('.hero-content').classList.add('fade-in');
    
    // Set initial filter state
    filterBtns[0].click();
});
