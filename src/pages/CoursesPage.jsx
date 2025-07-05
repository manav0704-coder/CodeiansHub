import { CheckCircle, Star, BookOpen, Clock, Award, Users, ArrowRight, Calendar } from 'lucide-react';
import { coursesData } from '../data/courses';
import { Button } from '../components/ui/Button';
import { useState } from 'react';

const CoursesPage = () => {
  // Only keep the JavaScript course
  const jsCourse = coursesData.find(course => course.id === 'js-30');
  
  // Additional features for enhanced presentation
  const highlights = [
    { icon: <BookOpen className="h-5 w-5 text-secondary-600" />, text: "Comprehensive curriculum" },
    { icon: <Clock className="h-5 w-5 text-secondary-600" />, text: "Lifetime access" },
    { icon: <Users className="h-5 w-5 text-secondary-600" />, text: "Community support" },
    { icon: <Award className="h-5 w-5 text-secondary-600" />, text: "Certificate of completion" }
  ];
  
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 dark:bg-gray-800 text-secondary-600 dark:text-secondary-400 font-medium text-sm mb-4">
          <span className="mr-2">🔥</span>
          <span>New Course Launch</span>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Master JavaScript in 30 Days
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300 mb-6">
          Join my hands-on JavaScript course and transform from beginner to confident developer 
          through practical projects and personalized guidance.
        </p>
        <div className="flex justify-center space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map(star => (
            <Star key={star} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          <strong>Launching Soon</strong> - Be among the first to join this exclusive course
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          {/* Hero section */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-700/90 to-primary-700/90 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a" 
              alt="JavaScript Course" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center p-6 md:p-10">
              <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm self-start mb-4">
                {jsCourse.level}
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                {jsCourse.title}
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mb-6">
                {jsCourse.description}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                  <div className="text-sm">Starting Price</div>
                  <div className="text-2xl font-bold">{jsCourse.price}</div>
                </div>
                <Button 
                  size="lg" 
                  className="bg-white/10 hover:bg-white/20 text-secondary-900 font-bold shadow-lg border border-white"
                >
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Course details */}
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg flex flex-col items-center text-center">
                <Clock className="h-8 w-8 text-secondary-600 dark:text-secondary-400 mb-2" />
                <h3 className="font-medium text-gray-900 dark:text-white">Duration</h3>
                <p className="text-gray-600 dark:text-gray-300">{jsCourse.duration}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg flex flex-col items-center text-center">
                <Users className="h-8 w-8 text-secondary-600 dark:text-secondary-400 mb-2" />
                <h3 className="font-medium text-gray-900 dark:text-white">Instructor</h3>
                <p className="text-gray-600 dark:text-gray-300">Manav Pardeshi</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg flex flex-col items-center text-center">
                <Calendar className="h-8 w-8 text-secondary-600 dark:text-secondary-400 mb-2" />
                <h3 className="font-medium text-gray-900 dark:text-white">Starts</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {new Date(jsCourse.startDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Course Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="mr-3 flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <button 
                className="flex items-center justify-between w-full text-left text-xl font-semibold text-gray-900 dark:text-white mb-4"
                onClick={() => setShowDetails(!showDetails)}
              >
                <span>What You'll Learn</span>
                <span className="text-secondary-600">
                  {showDetails ? "−" : "+"}
                </span>
              </button>
              
              {showDetails && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 animate-fadeIn">
                  {jsCourse.features.map((feature, index) => (
                    <div key={index} className="flex items-start p-3">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                  <div className="flex items-start p-3">
                    <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">ES6+ features & syntax</span>
                  </div>
                  <div className="flex items-start p-3">
                    <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">DOM manipulation</span>
                  </div>
                  <div className="flex items-start p-3">
                    <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Asynchronous programming</span>
                  </div>
                  <div className="flex items-start p-3">
                    <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Building real-world applications</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-secondary-50 dark:bg-gray-700/30 rounded-xl p-6 mb-8 border border-secondary-100 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ready to Master JavaScript?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Join this comprehensive course and start your journey to becoming a JavaScript expert. Limited spots available!
              </p>
              <Button 
                className="shine-effect bg-secondary-600 hover:bg-secondary-700 text-white font-bold"
                size="lg"
                fullWidth
              >
                Secure Your Spot Now
              </Button>
            </div>
            
            {/* Course policy */}
            <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <Award className="h-6 w-6 mr-2 text-secondary-600" />
              <span className="text-gray-700 dark:text-gray-300">Limited-time enrollment - Batch starts soon!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage; 