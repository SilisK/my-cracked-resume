export type AvailabilityOption =
  | "just networking"
  | "seeking job opportunities"
  | "looking for clubs & programs";

export class Profile {
  name: string | null;
  location: string | null;
  email: string | null;
  phoneNumber: string | null;
  summary: string | null;
  industry: string | null;
  headline: string | null;
  photoUrl: string | null;
  website: string | null;
  socials: Record<string, string> | null;
  skills: string[] | null;
  languages: string[] | null; // Human languages only
  availability: AvailabilityOption | null;

  constructor({
    name = null,
    location = null,
    email = null,
    phoneNumber = null,
    summary = null,
    industry = null,
    headline = null,
    photoUrl = null,
    website = null,
    socials = null,
    skills = null,
    languages = null,
    availability = null,
  }: {
    name?: string | null;
    location?: string | null;
    email?: string | null;
    phoneNumber?: string | null;
    summary?: string | null;
    industry?: string | null;
    headline?: string | null;
    photoUrl?: string | null;
    website?: string | null;
    socials?: Record<string, string> | null;
    skills?: string[] | null;
    languages?: string[] | null;
    availability?: AvailabilityOption | null;
  } = {}) {
    this.name = name;
    this.location = location;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.summary = summary;
    this.industry = industry;
    this.headline = headline;
    this.photoUrl = photoUrl;
    this.website = website;
    this.socials = socials;
    this.skills = skills;
    this.languages = languages;
    this.availability = availability;
  }
}
