export interface City {
  slug: string
  name: string
  county: string
  state: string
}

export const CITIES: City[] = [
  {
    slug: 'miami',
    name: 'Miami',
    county: 'Miami-Dade',
    state: 'FL',
  },
  {
    slug: 'boca-raton',
    name: 'Boca Raton',
    county: 'Palm Beach',
    state: 'FL',
  },
  {
    slug: 'fort-lauderdale',
    name: 'Fort Lauderdale',
    county: 'Broward',
    state: 'FL',
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find(city => city.slug === slug)
}

export function getAllCities(): City[] {
  return CITIES
}
