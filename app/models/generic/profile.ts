export class Profile {
  name: string | null;
  location: string | null;
  contact: string | null;
  summary: string | null;
  industry: string | null;

  constructor({
    name="",
    location="",
    contact="",
    summary="",
    industry="",
  }: {
    name?: string | null;
    location?: string | null;
    contact?: string | null;
    summary?: string | null;
    industry?: string | null;
  } = {}) {
    this.name = name;
    this.location = location;
    this.contact = contact;
    this.summary = summary;
    this.industry = industry;
  }
}