'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

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
  type: 'Feature';
  properties: any;
  geometry: any;
}

interface GeoJSONData {
  type: 'FeatureCollection';
  features: GeoJSONFeature[];
}

export default function NassauCountyMap() {
  const [mounted, setMounted] = useState(false);
  const [countyBoundary, setCountyBoundary] = useState<GeoJSONData | null>(null);
  const [landmarks, setLandmarks] = useState<GeoJSONData | null>(null);
  const [L, setL] = useState<any>(null);
  const [mapInstance, setMapInstance] = useState<any>(null);

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
      fetch('/data/landmarks.json').then(res => res.json()),
    ]).then(([boundary, landmarksData]) => {
      setCountyBoundary(boundary);
      setLandmarks(landmarksData);
    });
  }, []);

  // Invalidate map size when instance is ready
  useEffect(() => {
    if (mapInstance) {
      setTimeout(() => {
        mapInstance.invalidateSize();
      }, 100);
    }
  }, [mapInstance]);

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
            Explore Nassau County and our important civic locations. Click on markers to learn more.
            whenReady={(map) => {
              setMapInstance(map.target);
              map.target.invalidateSize();
            }}
          </p>
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
                  fillOpacity: 0.1,
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
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-blue" style={{ borderWidth: '2px', borderColor: '#1A45A7' }}></div>
              <span className="text-sm text-gray-700">Nassau County</span>
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
