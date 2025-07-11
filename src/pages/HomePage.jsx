import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Book, FileText, Star, Code, CheckCircle, ArrowRight, Users, Trophy, Zap, Clock, Target, Layers, Rocket } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { tutorialsData } from '../data/tutorials';

const TypewriterText = ({ text, delay = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className="font-mono text-secondary-600 dark:text-secondary-400">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const CodeSnippet = () => {
  return (
    <div className="code-block rounded-lg text-sm md:text-base w-full max-w-lg mx-auto">
      <pre className="language-javascript">
        <code>
          <span className="text-blue-400">import</span> <span className="text-green-400">React</span> <span className="text-blue-400">from</span> <span className="text-yellow-400">'react'</span>;{'\n\n'}
          <span className="text-blue-400">function</span> <span className="text-yellow-400">LearnWithCodePeCharcha</span>() {'{'}
          <span className="text-blue-400">const</span> [<span className="text-green-400">skills</span>, <span className="text-yellow-400">setSkills</span>] = <span className="text-yellow-400">React.useState</span>([]);{'\n\n  '}
          <span className="text-blue-400">useEffect</span>(() =&gt; {'{'}
          <span className="text-green-400">const</span> <span className="text-yellow-400">newSkills</span> = [<span className="text-yellow-400">'React'</span>, <span className="text-yellow-400">'JavaScript'</span>, <span className="text-yellow-400">'Node.js'</span>];{'\n    '}
          <span className="text-yellow-400">setSkills</span>(<span className="text-yellow-400">newSkills</span>);{'\n  '}
          {'}'}, []);{'\n\n  '}
          <span className="text-blue-400">return</span> ({'\n    '}
          {'<'}<span className="text-green-400">div</span>{'>'}{'\n      '}
          {'<'}<span className="text-green-400">h1</span>{'>'}Master web development{'</'}<span className="text-green-400">h1</span>{'>'}{'\n      '}
          {'<'}<span className="text-green-400">p</span>{'>'}Learn with CodePeCharcha{'</'}<span className="text-green-400">p</span>{'>'}{'\n    '}
          {'</'}<span className="text-green-400">div</span>{'>'}{'\n  '});{'\n'}
          {'}'}
        </code>
      </pre>
    </div>
  );
};

const HomePage = () => {
  // Featured tutorials - just grab the first 3
  const featuredTutorials = tutorialsData.slice(0, 3);
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  
  // For scroll reveal animations
  const [isVisible, setIsVisible] = useState({
    features: false,
    tutorials: false,
    testimonials: false,
    cta: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const features = document.getElementById('features');
      const tutorials = document.getElementById('tutorials');
      const vision = document.getElementById('vision');
      const cta = document.getElementById('cta');
      
      if (features && window.scrollY + window.innerHeight > features.offsetTop + 100) {
        setIsVisible(prev => ({ ...prev, features: true }));
      }
      
      if (tutorials && window.scrollY + window.innerHeight > tutorials.offsetTop + 100) {
        setIsVisible(prev => ({ ...prev, tutorials: true }));
      }
      
      if (vision && window.scrollY + window.innerHeight > vision.offsetTop + 100) {
        setIsVisible(prev => ({ ...prev, testimonials: true }));
      }
      
      if (cta && window.scrollY + window.innerHeight > cta.offsetTop + 100) {
        setIsVisible(prev => ({ ...prev, cta: true }));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsNewsletterSubmitted(true);
      setEmail('');
    }, 500);
  };

  const stats = [
    { icon: <Rocket className="h-6 w-6" />, value: 'New', label: 'Platform' },
    { icon: <Layers className="h-6 w-6" />, value: '10+', label: 'Topics' },
    { icon: <Target className="h-6 w-6" />, value: '100%', label: 'Focus' },
    { icon: <Clock className="h-6 w-6" />, value: 'Coming', label: 'Soon' },
  ];

  const features = [
    {
      title: "Structured Learning Path",
      description: "Our tutorials follow a logical progression from fundamentals to advanced concepts, ensuring a solid foundation.",
      icon: <BookOpen className="h-8 w-8" />,
      items: ['Step-by-step guidance', 'Progressive difficulty', 'Practical examples']
    },
    {
      title: "Modern Curriculum",
      description: "Learn the latest web development technologies and best practices that are in-demand in the industry today.",
      icon: <Book className="h-8 w-8" />,
      items: ['Latest frameworks', 'Industry standards', 'Real-world applications']
    },
    {
      title: "Comprehensive Resources",
      description: "Access downloadable notes, cheatsheets, and reference materials to support your learning journey.",
      icon: <FileText className="h-8 w-8" />,
      items: ['Downloadable resources', 'Interactive exercises', 'Code snippets library']
    }
  ];

  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section with Code Animation */}
      <section className="bg-gradient-to-br from-secondary-50 to-secondary-100 py-16 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-secondary-400"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-secondary-600"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-secondary-300"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start gap-8 text-left">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 dark:bg-gray-800 text-secondary-600 dark:text-secondary-400 font-medium text-sm mb-4">
                  <span className="mr-2">✨</span>
                  <span>The modern way to learn coding</span>
                </div>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  Learn Web Development{' '}
                  <span className="gradient-text">
                    With Me
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  Welcome to <span className="font-bold">CodePeCharcha</span> - My personal coding platform where I share tutorials, 
                  documentation, and handwritten notes to help you master web development.
                </p>
                <TypewriterText text="// Start coding your future today" delay={70} />
              </div>
              <div className="flex flex-wrap gap-4">
                <Button to="/tutorials" size="lg" className="shine-effect">
                  Explore Tutorials
                </Button>
                <Button to="/courses" variant="outline" size="lg">
                  Browse Courses
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 w-full">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-100 dark:bg-gray-700 text-secondary-600 dark:text-secondary-400 mb-2">
                      {stat.icon}
                    </div>
                    <div className="font-bold text-xl text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="float-animation">
                <CodeSnippet />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section id="tutorials" className={`container transition-all duration-700 transform ${isVisible.tutorials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white flex items-center">
            <Code className="mr-2 text-secondary-600" size={28} />
            Featured Tutorials
          </h2>
          <Link
            to="/tutorials"
            className="flex items-center font-medium text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300 group"
          >
            View all
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTutorials.map((tutorial, index) => {
            const isComingSoon = tutorial.id === 'react' || tutorial.id === 'nodejs';
            
            const TutorialCard = (
              <div 
                className={`group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 ${!isComingSoon ? 'hover:shadow-xl hover:-translate-y-1' : 'opacity-75 cursor-not-allowed'} dark:border-gray-700 dark:bg-gray-800`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4 h-48 overflow-hidden rounded-md bg-gray-100 relative">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className={`h-full w-full object-cover object-center ${!isComingSoon ? 'transition-transform duration-700 group-hover:scale-110' : ''}`}
                  />
                  {/* Coming Soon tag */}
                  {isComingSoon && (
                    <div className="absolute top-0 right-0 bg-secondary-600 text-white px-3 py-1 m-2 rounded-full text-xs font-medium">
                      Coming Soon
                    </div>
                  )}
                </div>
                <h3 className={`mb-2 text-xl font-semibold text-gray-900 ${!isComingSoon ? 'group-hover:text-secondary-600' : ''} dark:text-white dark:group-hover:text-secondary-400`}>
                  {tutorial.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{tutorial.description}</p>
                {!isComingSoon && (
                  <div className="flex items-center justify-between mt-auto">
                    <div className="inline-flex items-center rounded-full bg-secondary-50 px-3 py-1 text-xs font-medium text-secondary-700 dark:bg-gray-700 dark:text-secondary-300">
                      {tutorial.sections.length} sections
                    </div>
                    <span className="text-secondary-600 dark:text-secondary-400 text-sm font-medium group-hover:underline">Learn more</span>
                  </div>
                )}
              </div>
            );
            
            return isComingSoon ? (
              <div key={tutorial.id} className="scroll-reveal" style={{ animationDelay: `${index * 150}ms` }}>
                {TutorialCard}
              </div>
            ) : (
              <Link key={tutorial.id} to={`/tutorials/${tutorial.id}`} className="block scroll-reveal" style={{ animationDelay: `${index * 150}ms` }}>
                {TutorialCard}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us - Features */}
      <section id="features" className={`bg-gray-50 py-16 dark:bg-gray-900 transition-all duration-700 ${isVisible.features ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 dark:bg-gray-800 text-secondary-600 dark:text-secondary-400 font-medium text-sm mb-4">
              <span className="mr-2">🚀</span>
              <span>What I Offer</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Enhance Your Learning Journey
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              I've designed this platform to share my knowledge and resources in a structured way,
              with a focus on practical skills and real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 scroll-reveal"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4 rounded-full bg-secondary-100 p-4 text-secondary-600 dark:bg-gray-700 dark:text-secondary-400">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="text-left w-full space-y-2 mt-auto">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 mr-2 text-secondary-600 dark:text-secondary-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section instead of Testimonials */}
      <section id="vision" className={`container py-16 transition-all duration-700 ${isVisible.testimonials ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 dark:bg-gray-800 text-secondary-600 dark:text-secondary-400 font-medium text-sm mb-4">
            <span className="mr-2">🔮</span>
            <span>My Vision</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white mb-4">
            Building A Better Way To Learn Coding
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            I'm creating this platform to share my knowledge and help fellow developers learn more effectively.
            Here's what I'm working towards:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col scroll-reveal">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-100 text-secondary-600 dark:bg-gray-700 dark:text-secondary-400 mr-4">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Community-Driven</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Building a supportive learning environment</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 flex-1">
              "My goal is to create a supportive community where learners can collaborate, share knowledge, and grow together. I believe in the power of community-driven learning."
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col scroll-reveal" style={{ animationDelay: '150ms' }}>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-100 text-secondary-600 dark:bg-gray-700 dark:text-secondary-400 mr-4">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Practical Learning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Real-world skills that matter</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 flex-1">
              "I focus on teaching practical skills that directly apply to real-world development. My content is designed to bridge the gap between theory and practice."
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col scroll-reveal" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-100 text-secondary-600 dark:bg-gray-700 dark:text-secondary-400 mr-4">
                <Rocket className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Continuous Growth</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Always evolving and improving</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 flex-1">
              "I'm committed to continuously improving this platform based on your feedback and industry trends. The content will always stay up-to-date with the latest technologies and best practices."
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary-50 dark:bg-gray-800/50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white mb-4">
              Stay Updated with My Latest Content
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to receive updates when I publish new tutorials, notes, and exclusive learning resources.
            </p>
            
            {isNewsletterSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-400 p-4 rounded-lg">
                <p className="font-medium">Thank you for subscribing! Check your email for confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="shine-effect">
                  Subscribe
                </Button>
              </form>
            )}
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className={`container py-8 transition-all duration-700 ${isVisible.cta ? 'opacity-100' : 'opacity-0'}`}>
        <div className="rounded-2xl bg-gradient-to-r from-secondary-500 to-secondary-700 p-8 text-white md:p-12 overflow-hidden relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-white"></div>
          </div>
          
          <div className="mx-auto max-w-3xl text-center relative z-10">
            <h2 className="mb-4 text-3xl font-bold">Ready to Start Learning?</h2>
            <p className="mb-8 text-lg text-white/90">
              Join my community of learners and take your web development skills to the next level.
              Start your journey today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                to="/tutorials"
                variant="outline"
                className="border-white bg-white/10 text-white hover:bg-white/20 shine-effect"
                size="lg"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Tutorials
              </Button>
              <Button
                to="/courses"
                className="bg-white/10 text-black font-extrabold hover:bg-white/20 shine-effect border border-white"
                size="lg"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 