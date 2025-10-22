import { Mail, Phone, MapPin, Globe, Briefcase, Languages, Award, User } from 'lucide-react';

const ProfileCard = ({ profile }) => {
  const {
    name,
    location,
    email,
    phoneNumber,
    summary,
    industry,
    headline,
    photoUrl,
    website,
    socials,
    skills,
    languages,
    availability
  } = profile;

  return (
    <div className="min-h-screen bg-white p-8 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-xl mx-auto px-4 pt-8 pb-16 space-y-6 animate-fade-in">
        {/* Header Section */}
        <div className="flex items-start gap-6 mb-8 pb-8 border-b border-zinc-200">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={name || 'Profile'}
              className="w-24 h-24 rounded-lg object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-lg bg-zinc-100 flex items-center justify-center">
              <User className="w-12 h-12 text-zinc-400" />
            </div>
          )}
          
          <div className="flex-1">
            {name && <h1 className="text-3xl font-bold text-black mb-2">{name}</h1>}
            {headline && <p className="text-lg text-zinc-500 mb-3">{headline}</p>}
            {availability && (
              <span className="inline-block px-3 py-1 bg-black text-white text-sm rounded-lg">
                {availability}
              </span>
            )}
          </div>
        </div>

        {/* Summary */}
        {summary && (
          <div className="mb-8">
            <p className="text-zinc-700 leading-relaxed">{summary}</p>
          </div>
        )}

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {email && (
            <div className="flex items-center gap-3 text-zinc-600">
              <Mail className="w-5 h-5 text-zinc-500" />
              <a href={`mailto:${email}`} className="hover:text-black transition-colors">
                {email}
              </a>
            </div>
          )}
          {phoneNumber && (
            <div className="flex items-center gap-3 text-zinc-600">
              <Phone className="w-5 h-5 text-zinc-500" />
              <a href={`tel:${phoneNumber}`} className="hover:text-black transition-colors">
                {phoneNumber}
              </a>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-3 text-zinc-600">
              <MapPin className="w-5 h-5 text-zinc-500" />
              <span>{location}</span>
            </div>
          )}
          {industry && (
            <div className="flex items-center gap-3 text-zinc-600">
              <Briefcase className="w-5 h-5 text-zinc-500" />
              <span>{industry}</span>
            </div>
          )}
        </div>

        {/* Website and Socials */}
        {(website || (socials && Object.keys(socials).length > 0)) && (
          <div className="mb-8">
            {website && (
              <div className="flex items-center gap-3 text-zinc-600 mb-3">
                <Globe className="w-5 h-5 text-zinc-500" />
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  {website}
                </a>
              </div>
            )}
            {socials && Object.entries(socials).map(([platform, url]) => (
              <div key={platform} className="flex items-center gap-3 text-zinc-600 mb-2">
                <Globe className="w-5 h-5 text-zinc-500" />
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  {platform}
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-zinc-500" />
              <h2 className="text-xl font-semibold text-black">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages && languages.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Languages className="w-5 h-5 text-zinc-500" />
              <h2 className="text-xl font-semibold text-black">Languages</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-lg text-sm"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;