/**
 * URL State Serialization and Shareable Scenario Link Manager
 * Allows expats to share their exact relocation parameters via link with family or HR.
 */

export function parseUserProfileFromURL() {
  if (typeof window === 'undefined') return null;

  try {
    const params = new URLSearchParams(window.location.search);
    const origin = params.get('origin');
    const dest = params.get('dest');
    const city = params.get('city');
    const persona = params.get('persona');
    const diet = params.get('diet');
    const faith = params.get('faith');
    const departure = params.get('departure');
    const pets = params.get('pets');

    if (!dest && !origin) return null;

    return {
      origin: origin || 'India',
      destinationCountry: dest || 'germany',
      destinationCity: city || 'Berlin',
      persona: persona || 'bachelor',
      dietary: diet || 'vegetarian',
      faith: faith || 'hinduism',
      departureDate: departure || '',
      hasPets: pets === 'true'
    };
  } catch (e) {
    console.warn('URL state parsing error:', e);
    return null;
  }
}

export function generateShareableScenarioLink(userProfile) {
  if (typeof window === 'undefined') return '';

  const url = new URL(window.location.href);
  url.searchParams.set('origin', userProfile.origin || 'India');
  url.searchParams.set('dest', userProfile.destinationCountry || 'germany');
  url.searchParams.set('city', userProfile.destinationCity || 'Berlin');
  url.searchParams.set('persona', userProfile.persona || 'bachelor');
  if (userProfile.dietary) url.searchParams.set('diet', userProfile.dietary);
  if (userProfile.faith) url.searchParams.set('faith', userProfile.faith);
  if (userProfile.departureDate) url.searchParams.set('departure', userProfile.departureDate);
  if (userProfile.hasPets) url.searchParams.set('pets', 'true');

  return url.toString();
}

export async function copyScenarioLinkToClipboard(userProfile) {
  const link = generateShareableScenarioLink(userProfile);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(link);
    return true;
  }
  return false;
}
