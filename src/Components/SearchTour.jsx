import React, { useState } from 'react';
import { MapPin, CalendarDays, DollarSign, Tag, Search, FilterX } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockPackages = [
  { id: 1, title: 'Kyoto Cultural Escape', destination: 'Kyoto, Japan', duration: 7, budget: 2500, type: 'Cultural', image: 'https://picsum.photos/seed/kyoto/400/300', agent: 'Akari Tanaka' },
  { id: 2, title: 'Andean Adventure Trek', destination: 'Cusco, Peru', duration: 10, budget: 3200, type: 'Adventure', image: 'https://picsum.photos/seed/peru/400/300', agent: 'Mateo Rossi' },
  { id: 3, title: 'Tuscan Wine Tour', destination: 'Florence, Italy', duration: 5, budget: 1800, type: 'Relaxation', image: 'https://picsum.photos/seed/tuscany/400/300', agent: 'Isabella Conti' },
  { id: 4, title: 'Serengeti Safari', destination: 'Arusha, Tanzania', duration: 8, budget: 4500, type: 'Wildlife', image: 'https://picsum.photos/seed/safari/400/300', agent: 'Jengo Bakari' },
  { id: 5, title: 'Costa Rican Rainforest Retreat', destination: 'La Fortuna, Costa Rica', duration: 6, budget: 2200, type: 'Nature', image: 'https://picsum.photos/seed/costarica/400/300', agent: 'Elena Gomez' },
  { id: 6, title: 'Parisian Charm Getaway', destination: 'Paris, France', duration: 4, budget: 1500, type: 'City Break', image: 'https://picsum.photos/seed/paris/400/300', agent: 'Jean Dubois' },
];

function SearchTour() {
    
  const [filters, setFilters] = useState({
    destination: '',
    budget: 5000,
    duration: 14,
    type: 'all',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ destination: '', budget: 5000, duration: 14, type: 'all' });
    setSearchTerm('');
  };

  const filteredPackages = mockPackages.filter(pkg => {
    const searchMatch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      pkg.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      pkg.agent.toLowerCase().includes(searchTerm.toLowerCase());

    const destinationMatch = filters.destination
      ? pkg.destination.toLowerCase().includes(filters.destination.toLowerCase())
      : true;

    const budgetMatch = pkg.budget <= filters.budget;
    const durationMatch = pkg.duration <= filters.duration;
    const typeMatch = filters.type === 'all' || pkg.type.toLowerCase() === filters.type.toLowerCase();

    return searchMatch && destinationMatch && budgetMatch && durationMatch && typeMatch;
  });

  const uniqueTypes = ['all', ...new Set(mockPackages.map(p => p.type))];

  return (
    <div className="py-8 bg-white px-8 text-gray-600">
      <div className='flex flex-row justify-between w-full'>
        <h1 className="text-3xl font-bold mb-8">Explore Travel Packages</h1>
        <button>
          <Link to='/' className='font-bold'>Log out</Link> 
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="Search by title, destination, or agent..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 text-base h-12 w-full border border-orange-500 rounded shadow"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="p-4 rounded shadow-lg sticky top-20 bg-white/6 ">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button onClick={resetFilters} className="text-sm text-gray-500 hover:text-black flex items-center">
                <FilterX size={16} className="mr-1" /> Reset
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="font-semibold">Destination</label>
                <input
                  type="text"
                  value={filters.destination}
                  onChange={(e) => handleFilterChange('destination', e.target.value)}
                  placeholder="e.g., Paris, Kyoto"
                  className="w-full mt-1 p-2 border rounded "
                />
              </div>

              <div>
                <label className="font-semibold">Max Budget: ${filters.budget}</label>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={filters.budget}
                  onChange={(e) => handleFilterChange('budget', Number(e.target.value))}
                  className="w-full mt-2"
                />
              </div>

              <div>
                <label className="font-semibold">Max Duration: {filters.duration} days</label>
                <input
                  type="range"
                  min="1"
                  max="14"
                  step="1"
                  value={filters.duration}
                  onChange={(e) => handleFilterChange('duration', Number(e.target.value))}
                  className="w-full mt-2"
                />
              </div>

              <div>
                <label className="font-semibold">Trip Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-full mt-1 p-2 border rounded"
                >
                  {uniqueTypes.map(type => (
                    <option key={type} value={type.toLowerCase()}>
                      {type === 'all' ? 'All Types' : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </aside>

        {/* Packages Grid */}
        <main className="md:col-span-3">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map(pkg => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500">
              <p className="text-lg font-medium">No packages found matching your criteria.</p>
              <p className="mt-2">Try adjusting your filters or search term.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function PackageCard({ pkg }) {
  return (
    <div className="bg-white rounded overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col">
      <div className="w-full h-48 overflow-hidden">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-orange-500 truncate">{pkg.title}</h3>
        <div className="text-sm text-gray-500 flex items-center mt-1">
          <MapPin size={14} className="mr-1" /> {pkg.destination}
        </div>
        <div className="text-sm text-gray-500 flex items-center mt-2">
          <CalendarDays size={14} className="mr-2" /> {pkg.duration} Days
        </div>
        <div className="text-sm text-gray-500 flex items-center">
          <DollarSign size={14} className="mr-2" /> ${pkg.budget.toLocaleString()}
        </div>
        <div className="text-sm text-gray-500 flex items-center">
          <Tag size={14} className="mr-2" /> {pkg.type}
        </div>
        <div className="text-sm text-gray-500 flex items-center mt-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
          Agent: {pkg.agent}
        </div>
        <div className="mt-4">
          <Link to={`/package/${pkg.id}`} className="block w-full text-center py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchTour;