import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, DollarSign, MapPin, MessageSquare, Star, User } from 'lucide-react';


// Mock data - replace with actual data fetching later
const mockPackages = {
  '1': { id: 1, title: 'Kyoto Cultural Escape', destination: 'Kyoto, Japan', duration: 7, budget: 2500, type: 'Cultural', image: 'https://picsum.photos/seed/kyoto/800/500', agent: { name: 'Akari Tanaka', rating: 4.8, avatar: 'https://i.pravatar.cc/150?img=1' }, description: 'Immerse yourself in the ancient traditions and stunning beauty of Kyoto. Visit temples, gardens, and experience a traditional tea ceremony.', itinerary: [ { day: 1, title: 'Arrival & Gion Exploration', description: 'Arrive in Kyoto, check into your hotel, and take a walking tour of the historic Gion district.' }, { day: 2, title: 'Temples & Bamboo Forest', description: 'Visit Kinkaku-ji (Golden Pavilion) and the serene Arashiyama Bamboo Grove.' }, { day: 3, title: 'Fushimi Inari & Tea Ceremony', description: 'Hike through the thousands of red torii gates at Fushimi Inari Shrine and participate in an authentic tea ceremony.' }, { day: '4-7', title: 'Further Exploration/Departure', description: 'Explore Nishiki Market, take a day trip to Nara, or enjoy free time before departure.' } ], included: ['Accommodation (Ryokan option available)', 'Airport transfers', 'Guided tours mentioned', 'Tea ceremony experience'], excluded: ['International flights', 'Meals', 'Personal expenses'] },
  '2': { id: 2, title: 'Andean Adventure Trek', destination: 'Cusco, Peru', duration: 10, budget: 3200, type: 'Adventure', image: 'https://picsum.photos/seed/peru/800/500', agent: { name: 'Mateo Rossi', rating: 4.9, avatar: 'https://i.pravatar.cc/150?img=2' }, description: 'Embark on a breathtaking trek through the Andes, culminating in a visit to the legendary Machu Picchu.', itinerary: [ { day: '1-2', title: 'Arrival in Cusco & Acclimatization', description: 'Fly into Cusco, acclimatize to the altitude, and explore the historic city center.' }, { day: '3-6', title: 'Salkantay Trek', description: 'Begin the challenging but rewarding Salkantay Trek, passing stunning mountain scenery.' }, { day: 7, title: 'Aguas Calientes', description: 'Descend into the cloud forest and arrive in Aguas Calientes, the town below Machu Picchu.' }, { day: 8, title: 'Machu Picchu', description: 'Full day exploring the magnificent citadel of Machu Picchu with a guided tour.' }, { day: '9-10', title: 'Return to Cusco & Departure', description: 'Return to Cusco by train and prepare for departure.' } ], included: ['Accommodation (hotels & camping)', 'Trekking permits', 'Professional guides & porters', 'Most meals during trek', 'Machu Picchu entrance', 'Train tickets'], excluded: ['International flights', 'Some meals in cities', 'Sleeping bag rental', 'Tips'] },
  '3': { id: 3, title: 'Tuscan Wine Tour', destination: 'Florence, Italy', duration: 5, budget: 1800, type: 'Relaxation', image: 'https://picsum.photos/seed/tuscany/800/500', agent: { name: 'Isabella Conti', rating: 4.7, avatar: 'https://i.pravatar.cc/150?img=3' }, description: 'Savor the flavors of Tuscany with vineyard tours, wine tastings, and gourmet Italian cuisine.', itinerary: [ { day: 1, title: 'Florence Arrival', description: 'Arrive in Florence and enjoy a welcome dinner with local wines.' }, { day: 2, title: 'Chianti Region Tour', description: 'Visit two family-owned wineries in the beautiful Chianti hills.' }, { day: 3, title: 'Montepulciano Excursion', description: 'Full day exploring the medieval town of Montepulciano and its renowned vineyards.' }, { day: 4, title: 'Cooking Class & Wine Pairing', description: 'Learn to make traditional Tuscan dishes paired with perfect wine selections.' }, { day: 5, title: 'San Gimignano & Departure', description: 'Morning visit to the historic town of San Gimignano before departure.' } ], included: ['Boutique hotel accommodation', 'Daily breakfast', 'Guided winery tours', 'Cooking class', 'Wine tastings', 'Transportation between sites'], excluded: ['Flights', 'Some meals', 'Personal expenses'] },
  // Add more mock packages as needed
};

function Card({ children, className }) {
  return (
    <div className={`bg-white rounded shadow ${className || ''}`}>
      {children}
    </div>
  );
}

function CardHeader({ children, className }) {
  return (
    <div className={`p-4 pb-0 ${className || ''}`}>
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return (
    <div className={`p-4 ${className || ''}`}>
      {children}
    </div>
  );
}

function CardFooter({ children, className }) {
  return (
    <div className={`p-4 pt-0 ${className || ''}`}>
      {children}
    </div>
  );
}

function CardTitle({ children }) {
  return <h3 className="text-xl font-bold mb-1">{children}</h3>;
}

function CardDescription({ children }) {
  return <p className="text-gray-500 text-sm">{children}</p>;
}

function Separator() {
  return <hr className="my-4 border-gray-200" />;
}

function Button({ children, variant, size, className, onClick }) {
  const baseClass = "rounded font-medium transition-colors";
  
  const variantClasses = {
    default: "bg-orange-500 text-white hover:bg-orange-600",
    outline: "border border-gray-300 bg-white hover:bg-gray-50",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };
  
  const sizeClasses = {
    default: "py-2 px-4 text-sm",
    lg: "py-3 px-5 text-base"
  };
  
  const classes = `${baseClass} ${variantClasses[variant || 'default']} ${sizeClasses[size || 'default']} ${className || ''}`;
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

function Avatar({ children, className }) {
  return (
    <div className={`overflow-hidden rounded-full ${className || ''}`}>
      {children}
    </div>
  );
}

function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}

function AvatarFallback({ children }) {
  return <div className="bg-gray-200 flex items-center justify-center w-full h-full text-gray-500">{children}</div>;
}

export default function PackageDetailsPage() {

  const { id } = useParams();
  const navigate = useNavigate();
  
  // TODO: Fetch package data based on ID instead of mock
  const pkg = mockPackages[id];

  if (!pkg) {
    return <div className="container py-8 text-center">Package not found.</div>;
  }

  // Helper to format day ranges
  const formatDay = (day) => {
    if (typeof day === 'number') {
      return `Day ${day}`;
    }
    return `Days ${day}`; // Handle ranges like "4-7"
  };

  return (
    <div className="w-full py-8 px-4 bg-white text-gray-600">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Image Carousel Placeholder */}
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/50 to-transparent w-full p-6">
              <h1 className="text-3xl font-bold text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>{pkg.title}</h1>
              <div className="flex items-center text-lg text-gray-200 mt-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
                <MapPin className="h-5 w-5 mr-2" /> {pkg.destination}
              </div>
            </div>
          </div>

          {/* Package Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Package Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center p-3 bg-gray-100 rounded-lg">
                  <Clock className="h-6 w-6 mb-1 text-orange-500"/>
                  <span className="font-medium">{pkg.duration} Days</span>
                  <span className="text-xs text-gray-500">Duration</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-100 rounded-lg">
                  <DollarSign className="h-6 w-6 mb-1 text-orange-500"/>
                  <span className="font-medium">${pkg.budget.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">Approx. Budget</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-100 rounded-lg">
                  <User className="h-6 w-6 mb-1 text-orange-500"/>
                  <span className="font-medium">{pkg.type}</span>
                  <span className="text-xs text-gray-500">Trip Type</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-100 rounded-lg">
                  <Star className="h-6 w-6 mb-1 text-yellow-500 fill-current"/>
                  <span className="font-medium">{pkg.agent.rating}/5</span>
                  <span className="text-xs text-gray-500">Agent Rating</span>
                </div>
              </div>
              <Separator/>
              <p className="text-gray-600">{pkg.description}</p>
            </CardContent>
          </Card>

          {/* Itinerary */}
          <Card>
            <CardHeader>
              <CardTitle>Itinerary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pkg.itinerary.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex flex-col items-center mt-1">
                    <span className="font-bold text-orange-500 text-sm whitespace-nowrap">{formatDay(item.day)}</span>
                    {index < pkg.itinerary.length - 1 && (
                      <div className="w-px h-full bg-gray-300 my-1 min-h-[2rem]"></div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Included / Excluded */}
          <Card>
            <CardHeader>
              <CardTitle>What's Included / Excluded</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-green-700">Included:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {pkg.included.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-red-700">Excluded:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {pkg.excluded.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="sticky top-20 shadow-md">
            <CardHeader className="text-center">
              <CardTitle>Book or Customize</CardTitle>
              <CardDescription>Ready to go or need changes?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button size="lg" className="w-full">Book This Package</Button>
              <Button size="lg" variant="outline" className="w-full">Request Customization</Button>
            </CardContent>
            <Separator className="my-4" />
            <CardHeader className="pt-0 text-center">
              <CardTitle className="text-lg">Your Travel Agent</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center space-y-3">
              <Avatar className="h-20 w-20">
                <AvatarImage src={pkg.agent.avatar} alt={pkg.agent.name} />
                <AvatarFallback>{pkg.agent.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-semibold">{pkg.agent.name}</span>
              <div className="flex items-center text-sm text-gray-500">
                <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" /> {pkg.agent.rating} Rating
              </div>
              <Button variant="secondary" className="w-full" onClick={() => navigate(`/chat?agent=${pkg.agent.name.replace(' ', '-')}`)}>
                <MessageSquare className="mr-2 h-4 w-4"/> Chat with {pkg.agent.name.split(' ')[0]}
              </Button>
            </CardContent>
            <CardFooter className="text-xs text-gray-500 text-center justify-center">
              Chatting allows you to discuss details before booking.
            </CardFooter>
          </Card>
          <Button variant="outline" className="w-full" onClick={() => navigate('/search')}>
            Back to Search
          </Button>
        </div>
      </div>
    </div>
  );
}