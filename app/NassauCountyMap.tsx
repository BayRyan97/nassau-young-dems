'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import react-leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const GeoJSON = dynamic(
  () => import('react-leaflet').then((mod) => mod.GeoJSON),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface GeoJSONFeature {
  type: string;
  properties: any;
  geometry: any;
}

interface GeoJSONData {
  type: string;
  features: GeoJSONFeature[];
}

export default function NassauCountyMap() {
  const [mounted, setMounted] = useState(false);
  const [countyBoundary, setCountyBoundary] = useState<GeoJSONData | null>(null);
  const [towns, setTowns] = useState<GeoJSONData | null>(null);
  const [districts, setDistricts] = useState<GeoJSONData | null>(null);
  const [landmarks, setLandmarks] = useState<GeoJSONData | null>(null);
  const [showDistricts, setShowDistricts] = useState(false);
  const [L, setL] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    
    // Load Leaflet
    import('leaflet').then((leaflet) => {
      setL(leaflet.default);
      // Fix default marker icon issue
      delete (leaflet.default.Icon.Default.prototype as any)._getIconUrl;
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });
    });

    // Load GeoJSON data
    Promise.all([
      fetch('/data/nassau-county-boundary.json').then(res => res.json()),
      fetch('/data/nassau-towns.json').then(res => res.json()),
      fetch('/data/legislative-districts.json').then(res => res.json()),
      fetch('/data/landmarks.json').then(res => res.json()),
    ]).then(([boundary, townsData, districtsData, landmarksData]) => {
      setCountyBoundary(boundary);
      setTowns(townsData);
      setDistricts(districtsData);
      setLandmarks(landmarksData);
    });
  }, []);

  if (!mounted || !L) {
    return (
      <div className="bg-light py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">
              Nassau County Interactive Map
            </h2>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      </div>
    );
  }

  const center: [number, number] = [40.7289, -73.5900];

  return (
    <section className="bg-light py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">
            Nassau County Interactive Map
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Explore Nassau County's towns, legislative districts, and important civic locations. 
            Click on any area for more information.
          </p>
          
          {/* Map Controls */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={() => setShowDistricts(!showDistricts)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                showDistricts
                  ? 'bg-blue text-white shadow-lg'
                  : 'bg-white text-blue border-2 border-blue hover:bg-blue/10'
              }`}
            >
              {showDistricts ? 'Hide' : 'Show'} Legislative Districts
            </button>
          </div>
        </div>

        {/* Map Container */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <MapContainer
            center={center}
            zoom={10}
            style={{ height: '600px', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            {/* County Boundary */}
            {countyBoundary && (
              <GeoJSON
                data={countyBoundary}
                style={{
                  color: '#1A45A7',
                  weight: 4,
                  fillColor: '#1A45A7',
                  fillOpacity: 0.05,
                }}
              />
            )}

            {/* Towns */}
            {towns && (
              <GeoJSON
                data={towns}
                style={(feature) => ({
                  color: '#3B82F6',
                  weight: 2,
                  fillColor: '#3B82F6',
                  fillOpacity: 0.1,
                })}
                onEachFeature={(feature, layer) => {
                  if (feature.properties) {
                    layer.bindPopup(`
                      <div style="font-family: 'DM Sans', sans-serif;">
                        <h3 style="font-weight: bold; font-size: 16px; margin-bottom: 8px; color: #0D1F4C;">
                          ${feature.properties.name}
                        </h3>
                        <p style="margin: 4px 0; color: #4B5563;">
                          <strong>Type:</strong> ${feature.properties.type}
                        </p>
                        ${feature.properties.population ? `
                          <p style="margin: 4px 0; color: #4B5563;">
                            <strong>Population:</strong> ${parseInt(feature.properties.population).toLocaleString()}
                          </p>
                        ` : ''}
                      </div>
                    `);
                  }
                }}
              />
            )}

            {/* Legislative Districts */}
            {showDistricts && districts && (
              <GeoJSON
                data={districts}
                style={(feature) => ({
                  color: '#7C3AED',
                  weight: 2,
                  dashArray: '5, 5',
                  fillColor: '#7C3AED',
                  fillOpacity: 0.15,
                })}
                onEachFeature={(feature, layer) => {
                  if (feature.properties) {
                    layer.bindPopup(`
                      <div style="font-family: 'DM Sans', sans-serif;">
                        <h3 style="font-weight: bold; font-size: 16px; margin-bottom: 8px; color: #0D1F4C;">
                          Legislative District ${feature.properties.district}
                        </h3>
                        <p style="margin: 4px 0; color: #4B5563;">
                          ${feature.properties.area}
                        </p>
                        <p style="margin-top: 8px; font-size: 14px; color: #7C3AED;">
                          <em>Want to contact your representative? Use the button below!</em>
                        </p>
                      </div>
                    `);
                  }
                }}
              />
            )}

            {/* Landmarks */}
            {landmarks && landmarks.features.map((feature: GeoJSONFeature, index: number) => {
              if (feature.geometry.type === 'Point') {
                const [lng, lat] = feature.geometry.coordinates;
                return (
                  <Marker key={index} position={[lat, lng]}>
                    <Popup>
                      <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <h3 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px', color: '#0D1F4C' }}>
                          {feature.properties.name}
                        </h3>
                        <p style={{ margin: '4px 0', color: '#4B5563', fontSize: '14px' }}>
                          <strong>Type:</strong> {feature.properties.type}
                        </p>
                        {feature.properties.address && (
                          <p style={{ margin: '4px 0', color: '#4B5563', fontSize: '14px' }}>
                            <strong>Address:</strong> {feature.properties.address}
                          </p>
                        )}
                        {feature.properties.description && (
                          <p style={{ marginTop: '8px', color: '#4B5563', fontSize: '13px', fontStyle: 'italic' }}>
                            {feature.properties.description}
                          </p>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                );
              }
              return null;
            })}
          </MapContainer>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-navy mb-4">Map Legend</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-blue" style={{ borderWidth: '2px', borderColor: '#1A45A7' }}></div>
              <span className="text-sm text-gray-700">County Boundary</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-sky" style={{ borderWidth: '2px', borderColor: '#3B82F6' }}></div>
              <span className="text-sm text-gray-700">Town Boundaries</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-purple" style={{ borderWidth: '2px', borderColor: '#7C3AED', borderStyle: 'dashed' }}></div>
              <span className="text-sm text-gray-700">Legislative Districts</span>
            </div>
            <div className="flex items-center gap-3">
              <img 
                src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png" 
                alt="Marker" 
                className="w-6 h-6"
              />
              <span className="text-sm text-gray-700">Important Locations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
