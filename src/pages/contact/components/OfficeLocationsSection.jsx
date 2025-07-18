import React from 'react';
import Icon from '../../../components/AppIcon';

const OfficeLocationsSection = () => {
  const offices = [
    {
      city: 'San Francisco',
      country: 'USA',
      address: 'Near Hanuman Mandir, Patel Samaj Road, Sultanabad, Manaveder, Junagadh, Gujarat',
      phone: '9316360039',
      email: ['zanand1828@gmail.com', 'support@wotzapmsg.com'],
      timezone: 'PST (UTC-8)',
      isHeadquarters: true
    },
    {
      city: 'London',
      country: 'UK',
      address: 'Near Hanuman Mandir, Patel Samaj Road, Sultanabad, Manaveder, Junagadh, Gujarat',
      phone: '9316360039',
      email: ['zanand1828@gmail.com', 'support@wotzapmsg.com'],
      timezone: 'GMT (UTC+0)',
      isHeadquarters: false
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: 'Near Hanuman Mandir, Patel Samaj Road, Sultanabad, Manaveder, Junagadh, Gujarat',
      phone: '9316360039',
      email: ['zanand1828@gmail.com', 'support@wotzapmsg.com'],
      timezone: 'SGT (UTC+8)',
      isHeadquarters: false
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Global Offices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With offices around the world, we're here to support you no matter where you are.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-card p-8 border border-gray-100 relative">
              {office.isHeadquarters && (
                <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Headquarters
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} color="white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {office.city}
                </h3>
                <p className="text-gray-600">{office.country}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={16} color="#6b7280" className="mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">{office.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={16} color="#6b7280" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">{office.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={16} color="#6b7280" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    {Array.isArray(office.email) ? (
                      office.email.map((email, idx) => (
                        <p className="text-sm text-gray-600" key={email}>
                          <a href={`mailto:${email}`}>{email}</a>
                        </p>
                      ))
                    ) : (
                      <p className="text-sm text-gray-600">
                        <a href={`mailto:${office.email}`}>{office.email}</a>
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={16} color="#6b7280" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Timezone</p>
                    <p className="text-sm text-gray-600">{office.timezone}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-gray-100 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Globe" size={24} color="#6b7280" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Interactive Map
          </h3>
          <p className="text-gray-600 mb-6">
            View our office locations on an interactive map to find the nearest location to you.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            View Map
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocationsSection;