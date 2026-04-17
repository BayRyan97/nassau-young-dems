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
  },
  {
    name: "Mike Pentola",
    position: "Democratic Nominee for Nassau County Legislative District 4",
    bio: "Mike is a 35-year-old lifelong resident of southwestern Nassau County, having grown up in East Rockaway, and currently resides in Long Beach with his wife, Arlette, a non-profit immigration attorney, and their two-year-old son, Theodore. Mike is an experienced litigator, who has worked in both the private and public sector as an attorney, and plans on using his decade of experience in law practice to advocate for the needs of the many Nassau County residents who feel forgotten or, in many cases, completely rejected by the powers that be. If elected, Mike will advocate for countywide legislation to address the massive affordability crisis facing all Nassau County residents, perhaps none more than younger folks, small businesses, first time homebuyers, and parents of young children. With your support, Mike knows that we can create a more accessible, more forward-thinking Nassau County, with a future we can all be excited about. When Mike is not working as a full-time government attorney or campaigning, he is taking day trips with his family, reading history, chipping away at the eternal list of films on his Letterboxd watchlist, keeping up on the news out of Washington, D.C. (with gritted teeth), or strumming an acoustic guitar.",
    imageUrl: "/candidates/mike-pentola.jpg"
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
