import { useState } from 'react';
import { Search, FileText, Download, BookOpen, Star, User, Clock } from 'lucide-react';
import { notesData } from '../data/notes';
import { Button } from '../components/ui/Button';

const NotesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('JavaScript');

  // Find featured JavaScript guide if it exists
  const featuredJsGuide = notesData.find(note => note.featured && note.category === 'JavaScript');
  
  // Filter notes to only include non-JavaScript notes
  const otherNotes = notesData.filter(note => 
    note.category !== 'JavaScript' && 
    (note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     note.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Study Notes
        </h1>
        <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-300">
          Download comprehensive notes, cheatsheets, and reference materials to support your learning
          journey. Perfect for revision and quick reference.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="w-full max-w-xs">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Featured JavaScript Guide */}
      {featuredJsGuide && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">JavaScript Guide</h2>
          </div>
          
          <div className="rounded-xl bg-gradient-to-r from-secondary-50 to-primary-50 p-1 shadow-lg dark:from-gray-700 dark:to-gray-800">
            <div className="flex flex-col md:flex-row overflow-hidden rounded-lg bg-white dark:bg-gray-800">
              <div className="md:w-1/3 lg:w-1/4 relative overflow-hidden">
                <img
                  src={featuredJsGuide.thumbnail}
                  alt={featuredJsGuide.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex items-center text-white gap-2 mb-2">
                      <BookOpen className="h-5 w-5" />
                      <span>{featuredJsGuide.pages} pages</span>
                    </div>
                    <div className="text-white text-sm">
                      {featuredJsGuide.format} • {featuredJsGuide.fileSize}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-6 flex flex-col">
                <div className="mb-3 flex justify-between items-start">
                  <span className="inline-flex items-center rounded-full bg-secondary-100 px-3 py-1 text-sm font-medium text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300">
                    {featuredJsGuide.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>Updated {featuredJsGuide.lastUpdated}</span>
                  </div>
                </div>
                
                <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  {featuredJsGuide.title}
                </h2>
                
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {featuredJsGuide.description}
                </p>
                
                {featuredJsGuide.topics && (
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Topics covered:</div>
                    <div className="flex flex-wrap gap-2">
                      {featuredJsGuide.topics.map(topic => (
                        <span key={topic} className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">By {featuredJsGuide.author}</span>
                  </div>
                  
                  <Button
                    href={featuredJsGuide.downloadUrl}
                    variant="secondary"
                    className="flex items-center justify-center"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Non-JavaScript Notes (Hidden by default) */}
      {false && otherNotes.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-5 w-5 text-secondary-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Other Notes</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Other notes cards would be rendered here */}
          </div>
        </div>
      )}

      {/* Show message if no notes match search */}
      {searchTerm && !featuredJsGuide && otherNotes.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            No notes found matching your search. Try different keywords or{' '}
            <button
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              onClick={() => {
                setSearchTerm('');
              }}
            >
              reset search
            </button>
            .
          </p>
        </div>
      )}
    </div>
  );
};

export default NotesPage; 