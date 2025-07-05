import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, X, Code, Layout, Server, Database, ChevronDown, BookOpen } from 'lucide-react';
import { tutorialsData } from '../data/tutorials';
import { Button } from '../components/ui/Button';

const TutorialsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [animateCards, setAnimateCards] = useState(false);

  // Extract unique categories from tutorials
  const categories = [
    { id: 'all', name: 'All Tutorials', icon: <BookOpen size={18} /> },
    { id: 'frontend', name: 'Frontend', icon: <Layout size={18} /> },
    { id: 'backend', name: 'Backend', icon: <Server size={18} /> },
    { id: 'database', name: 'Database', icon: <Database size={18} /> },
    { id: 'javascript', name: 'JavaScript', icon: <Code size={18} /> },
  ];

  // Filter tutorials based on search term and category
  const filteredTutorials = tutorialsData.filter((tutorial) => {
    const matchesSearch = 
      tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'all' || 
      (tutorial.categories && tutorial.categories.includes(selectedCategory));
    
    return matchesSearch && matchesCategory;
  });

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setAnimateCards(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory]);

  // Update URL when search changes
  useEffect(() => {
    if (searchTerm) {
      setSearchParams({ search: searchTerm });
    } else {
      setSearchParams({});
    }
  }, [searchTerm, setSearchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setAnimateCards(false);
    // Reset animation to trigger it again
    setTimeout(() => setAnimateCards(true), 100);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setAnimateCards(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setAnimateCards(false);
  };

  return (
    <div className="container py-12">
      {/* Header with animated gradient */}
      <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-secondary-500 to-secondary-700 p-8 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-white"></div>
        </div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white font-medium text-sm mb-4 backdrop-blur-sm">
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Learn at your own pace</span>
          </div>
          
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Tutorials Library
          </h1>
          <p className="max-w-3xl text-lg text-white/90">
            Browse our comprehensive collection of web development tutorials. From HTML basics to
            advanced JavaScript frameworks, we've got you covered.
          </p>

          {/* Search */}
          <div className="mt-6 max-w-md">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full rounded-md border border-white/20 bg-white/10 backdrop-blur-sm py-3 pl-10 pr-10 text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                placeholder="Search tutorials..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {searchTerm && (
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white"
                  onClick={clearSearch}
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mr-4">Categories</h2>
            <div className="hidden md:flex space-x-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'secondary' : 'outline'}
                  className={`flex items-center gap-2 ${selectedCategory === category.id ? '' : 'bg-white dark:bg-gray-800'}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>
            
            {/* Mobile Filter Button */}
            <div className="md:hidden">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={16} />
                <span>Filter</span>
                <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredTutorials.length} of {tutorialsData.length} tutorials
          </div>
        </div>
        
        {/* Mobile Category Filter */}
        {showFilters && (
          <div className="mt-4 grid grid-cols-2 gap-2 md:hidden">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'secondary' : 'outline'}
                className={`flex items-center justify-center gap-2 ${selectedCategory === category.id ? '' : 'bg-white dark:bg-gray-800'}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.icon}
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              <div className="p-6 space-y-3">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-2/3"></div>
                <div className="h-8 mt-4"></div>
                <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Tutorial Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTutorials.map((tutorial, index) => {
              // Check if tutorial is coming soon
              const isComingSoon = tutorial.id === 'react' || tutorial.id === 'nodejs';
              
              // Create appropriate component based on tutorial status
              const TutorialCard = (
                <div 
                  className={`group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 ${
                    !isComingSoon ? 'hover:-translate-y-2 hover:shadow-lg' : 'opacity-75 cursor-not-allowed'
                  } dark:border-gray-700 dark:bg-gray-800 ${
                    animateCards ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-48 overflow-hidden bg-gray-100 relative">
                    <img
                      src={tutorial.image}
                      alt={tutorial.title}
                      className={`h-full w-full object-cover object-center ${!isComingSoon ? 'transition-transform duration-700 group-hover:scale-110' : ''}`}
                    />
                    
                    {/* Coming Soon tag for React and Node.js */}
                    {isComingSoon && (
                      <div className="absolute top-0 right-0 bg-secondary-600 text-white px-3 py-1 m-2 rounded-full text-xs font-medium">
                        Coming Soon
                      </div>
                    )}
                    
                    {/* Category tags */}
                    <div className="absolute bottom-0 left-0 p-2 flex flex-wrap gap-1">
                      {tutorial.categories && tutorial.categories.map((cat) => (
                        <span 
                          key={cat} 
                          className="inline-block bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className={`mb-2 text-xl font-semibold text-gray-900 ${!isComingSoon ? 'group-hover:text-secondary-600' : ''} dark:text-white dark:group-hover:text-secondary-400`}>
                      {tutorial.title}
                    </h2>
                    <p className="mb-4 flex-1 text-gray-600 dark:text-gray-300">
                      {tutorial.description}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <div className="inline-flex items-center rounded-full bg-secondary-50 px-3 py-1 text-xs font-medium text-secondary-700 dark:bg-gray-700 dark:text-secondary-300">
                        {tutorial.sections.length} sections
                      </div>
                      {!isComingSoon && (
                        <span className="text-secondary-600 dark:text-secondary-400 text-sm font-medium group-hover:underline">
                          Learn more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
              
              // Wrap with Link only if not coming soon
              return isComingSoon ? (
                <div key={tutorial.id}>
                  {TutorialCard}
                </div>
              ) : (
                <Link
                  key={tutorial.id}
                  to={`/tutorials/${tutorial.id}`}
                  className="block"
                >
                  {TutorialCard}
                </Link>
              );
            })}
          </div>

          {/* Show message if no tutorials match search */}
          {filteredTutorials.length === 0 && (
            <div className="mt-8 text-center p-12 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary-100 text-secondary-600 dark:bg-gray-700 dark:text-secondary-400">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                No tutorials found
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                No tutorials found matching your search criteria. Try different keywords or adjust your filters.
              </p>
              <Button
                onClick={() => {
                  clearSearch();
                  setSelectedCategory('all');
                }}
              >
                Reset filters
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TutorialsPage; 