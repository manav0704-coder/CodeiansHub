import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { tutorialsData } from '../data/tutorials';

const TutorialDetailPage = () => {
  const { tutorialId, sectionId, chapterId } = useParams();
  const navigate = useNavigate();
  
  // Find the tutorial
  const tutorial = tutorialsData.find((t) => t.id === tutorialId);
  
  // Handle invalid tutorial ID
  if (!tutorial) {
    return (
      <div className="container py-16 text-center">
        <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Tutorial Not Found</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
          The tutorial you're looking for doesn't exist or may have been moved.
        </p>
        <Button to="/tutorials">Back to Tutorials</Button>
      </div>
    );
  }
  
  // Default to first section if none specified
  const currentSection = sectionId 
    ? tutorial.sections.find((s) => s.id === sectionId) 
    : tutorial.sections[0];
    
  // Handle invalid section ID
  if (!currentSection) {
    navigate(`/tutorials/${tutorialId}/${tutorial.sections[0].id}`);
    return null;
  }
  
  // Default to first chapter if none specified
  const currentChapter = chapterId
    ? currentSection.chapters.find((c) => c.id === chapterId)
    : currentSection.chapters[0];
    
  // Handle invalid chapter ID
  if (!currentChapter) {
    navigate(`/tutorials/${tutorialId}/${currentSection.id}/${currentSection.chapters[0].id}`);
    return null;
  }
  
  // Find next and previous chapters for navigation
  const currentChapterIndex = currentSection.chapters.findIndex((c) => c.id === currentChapter.id);
  const previousChapter = currentChapterIndex > 0 
    ? { 
        chapter: currentSection.chapters[currentChapterIndex - 1], 
        section: currentSection 
      }
    : null;
    
  const nextChapter = currentChapterIndex < currentSection.chapters.length - 1
    ? { 
        chapter: currentSection.chapters[currentChapterIndex + 1], 
        section: currentSection 
      }
    : null;
  
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/tutorials" className="mb-4 inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Tutorials
        </Link>
        <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          {tutorial.title}
        </h1>
        <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-300">
          {tutorial.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 p-4 dark:border-gray-700">
              <h2 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                <BookOpen className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
                Sections
              </h2>
            </div>
            <nav className="p-2">
              {tutorial.sections.map((section) => (
                <div key={section.id} className="mb-2">
                  <div className="px-3 py-2 text-sm font-medium text-gray-900 dark:text-white">
                    {section.title}
                  </div>
                  <ul className="ml-4 space-y-1">
                    {section.chapters.map((chapter) => (
                      <li key={chapter.id}>
                        <Link
                          to={`/tutorials/${tutorial.id}/${section.id}/${chapter.id}`}
                          className={`block rounded-md px-3 py-2 text-sm ${
                            section.id === currentSection.id && chapter.id === currentChapter.id
                              ? 'bg-primary-50 text-primary-700 dark:bg-gray-700 dark:text-primary-300'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200'
                          }`}
                        >
                          {chapter.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              {currentChapter.title}
            </h2>
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-gray-800 dark:text-gray-200">{currentChapter.content}</p>
              
              {/* Add more tutorial content here */}
              <p className="mt-6 text-gray-800 dark:text-gray-200">
                This is where the full tutorial content would be displayed. In a real implementation, this could include
                code examples, images, interactive exercises, and more.
              </p>
            </div>
            
            {/* Next/Previous Navigation */}
            <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6 dark:border-gray-700">
              {previousChapter ? (
                <Link
                  to={`/tutorials/${tutorial.id}/${previousChapter.section.id}/${previousChapter.chapter.id}`}
                  className="flex items-center text-sm font-medium text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Previous: {previousChapter.chapter.title}
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextChapter && (
                <Link
                  to={`/tutorials/${tutorial.id}/${nextChapter.section.id}/${nextChapter.chapter.id}`}
                  className="flex items-center text-sm font-medium text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Next: {nextChapter.chapter.title}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialDetailPage; 