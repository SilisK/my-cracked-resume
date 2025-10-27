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
    <div className="sm:border border-zinc-100 sm:bg-white sm:shadow-lg sm:rounded-lg sm:p-4 w-full max-w-xl mx-auto space-y-6 fade-in">
      <div className="flex flex-col text-center items-center">
        <div className="w-24 h-24 rounded-full bg-zinc-100 flex items-center justify-center">
          <User className="w-12 h-12 text-zinc-400" />
        </div>

        <div className="flex-1 space-y-2">
          <h1 className='text-3xl font-bold'>{name}</h1>
          <h2 className='text-xl font-semibold text-zinc-700'>{headline}</h2>
          <p className='text-sm text-zinc-500'>{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;