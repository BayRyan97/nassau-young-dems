'use client';

import Image from 'next/image';

interface Candidate {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

const candidates: Candidate[] = [
  {
    name: "Shreya Gupta",
    position: "Candidate for Town of Oyster Bay Clerk",
    bio: "My name is Shreya Gupta, and I am a structural engineer. I graduated from Rensselaer Polytechnic Institute in 2020 with a Bachelor's & Master's degree in Civil (Structural) Engineering. I have approximately six years of experience in working on transportation and infrastructure projects. I believe that everything is political and am deeply interested in creating tangible improvements in our lives through politics and resource management.",
    imageUrl: "/candidates/shreya-gupta.jpg"
  }
];

export default function CandidateSpotlight() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {candidates.map((candidate, index) => (
        <article 
          key={index}
          className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-gold hover:-translate-y-1"
        >
          {/* Candidate Photo */}
          <div className="relative w-full h-80 bg-gradient-to-br from-blue/10 to-sky/10">
            <Image
              src={candidate.imageUrl}
              alt={candidate.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          {/* Candidate Info */}
          <div className="p-6">
            <h3 className="text-2xl font-serif font-bold text-navy mb-2">
              {candidate.name}
            </h3>
            <p className="text-blue font-semibold mb-4 text-sm uppercase tracking-wide">
              {candidate.position}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {candidate.bio}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
