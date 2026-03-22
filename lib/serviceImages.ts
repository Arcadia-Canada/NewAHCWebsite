/**
 * serviceImages.ts
 * 
 * Central image registry for all 12 Arcadia service pages.
 * 
 * USAGE:
 *   import { serviceImages } from '@/lib/serviceImages'
 *   const images = serviceImages['dementia-alzheimers']
 * 
 * TO ADD REAL PHOTOS:
 *   1. Place image in /public/images/services/[service]/
 *   2. Replace the placeholder URL with the local path e.g. '/images/services/dementia/dementia-hero.jpg'
 *   3. Update the alt text to accurately describe the real photo
 * 
 * PLACEHOLDER IMAGES:
 *   Using placehold.co until real photos are available.
 *   Format: https://placehold.co/[width]x[height]/1C2B3A/ffffff?text=[label]
 */

export type ServiceImageSet = {
  heroImage: string
  heroAlt: string
  midImage: string
  midAlt: string
  optionalImage?: string
  optionalAlt?: string
}

export const serviceImages: Record<string, ServiceImageSet> = {

  // ─── HIGHEST PRIORITY ───────────────────────────────────────────────────────

  'dementia-alzheimers': {
    heroImage: 'https://placehold.co/1200x600/1C2B3A/ffffff?text=Dementia+Hero',
    heroAlt: 'Caregiver supporting an older woman with dementia in her home in Toronto',
    midImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=Dementia+Mid',
    midAlt: 'Caregiver and senior looking through family photos together',
    optionalImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=Dementia+Optional',
    optionalAlt: 'Support worker assisting senior during a walk outside',
  },

  'acquired-brain-injury': {
    heroImage: 'https://placehold.co/1200x600/1C2B3A/ffffff?text=ABI+Hero',
    heroAlt: 'Rehabilitation support worker assisting a client with daily tasks at home',
    midImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=ABI+Mid',
    midAlt: 'Caregiver supporting client with mobility and rehabilitation exercises',
    optionalImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=ABI+Optional',
    optionalAlt: 'Support worker and client working through a daily routine together',
  },

  'palliative': {
    heroImage: 'https://placehold.co/1200x600/1C2B3A/ffffff?text=Palliative+Hero',
    heroAlt: 'Compassionate caregiver sitting with a senior patient at home in Toronto',
    midImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=Palliative+Mid',
    midAlt: 'Family member and caregiver providing comfort and presence at home',
  },

  // ─── HIGH PRIORITY ───────────────────────────────────────────────────────────

  'hospital-discharge': {
    heroImage: 'https://placehold.co/1200x600/1C2B3A/ffffff?text=Hospital+Discharge+Hero',
    heroAlt: 'Caregiver helping a senior settle safely into their home after hospital discharge',
    midImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=Hospital+Discharge+Mid',
    midAlt: 'Support worker reviewing a care plan with a recently discharged patient',
  },

  'rehabilitation-support': {
    heroImage: 'https://placehold.co/1200x600/1C2B3A/ffffff?text=Rehab+Support+Hero',
    heroAlt: 'Rehabilitation support worker assisting a senior with mobility at home',
    midImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=Rehab+Support+Mid',
    midAlt: 'Caregiver helping client practice balance and strength exercises',
  },

  'personal-support-daily-living': {
    heroImage: 'https://placehold.co/1200x600/1C2B3A/ffffff?text=Personal+Support+Hero',
    heroAlt: 'Personal support worker assisting a senior with morning routine at home',
    midImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=Personal+Support+Mid',
    midAlt: 'PSW preparing a meal for an elderly client in their kitchen',
  },

  'respite': {
    heroImage: 'https://placehold.co/1200x600/1C2B3A/ffffff?text=Respite+Care+Hero',
    heroAlt: 'Caregiver providing companionship to a senior so family can take a break',
    midImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=Respite+Care+Mid',
    midAlt: 'Respite caregiver playing cards with an elderly client at home',
  },

  // ─── MEDIUM PRIORITY ─────────────────────────────────────────────────────────

  'overnight-24-hour': {
    heroImage: 'https://placehold.co/1200x600/1C2B3A/ffffff?text=Overnight+Care+Hero',
    heroAlt: 'Live-in caregiver providing overnight support for a senior at home',
    midImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=Overnight+Care+Mid',
    midAlt: 'Caregiver checking on a senior client during overnight care',
  },

  'companion-care': {
    heroImage: 'https://placehold.co/1200x600/1C2B3A/ffffff?text=Companion+Care+Hero',
    heroAlt: 'Companion caregiver and senior enjoying a conversation at home in Toronto',
    midImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=Companion+Care+Mid',
    midAlt: 'Caregiver and senior going for a walk together in the neighbourhood',
  },

  'case-management': {
    heroImage: 'https://placehold.co/1200x600/1C2B3A/ffffff?text=Case+Management+Hero',
    heroAlt: 'Care manager meeting with a family to discuss a senior\'s care plan',
    midImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=Case+Management+Mid',
    midAlt: 'Case manager reviewing documentation and coordinating care services',
  },

  'light-housekeeping': {
    heroImage: 'https://placehold.co/1200x600/1C2B3A/ffffff?text=Housekeeping+Hero',
    heroAlt: 'Caregiver helping a senior maintain a clean and safe home environment',
    midImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=Housekeeping+Mid',
    midAlt: 'Support worker assisting with light housekeeping tasks for an elderly client',
  },

  'downsizing-transition': {
    heroImage: 'https://placehold.co/1200x600/1C2B3A/ffffff?text=Downsizing+Hero',
    heroAlt: 'Care team helping a senior family sort belongings during a home transition',
    midImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=Downsizing+Mid',
    midAlt: 'Support worker helping a senior pack and organize during a move',
  },

}

/**
 * Helper: get images for a service with a safe fallback
 * 
 * Usage:
 *   const images = getServiceImages('dementia-alzheimers')
 */
export function getServiceImages(serviceKey: string): ServiceImageSet {
  return serviceImages[serviceKey] ?? {
    heroImage: 'https://placehold.co/1200x600/1C2B3A/ffffff?text=Coming+Soon',
    heroAlt: 'Arcadia Home Care — professional in-home care across Toronto',
    midImage: 'https://placehold.co/800x500/1C2B3A/ffffff?text=Coming+Soon',
    midAlt: 'Arcadia caregiver providing support at home',
  }
}
