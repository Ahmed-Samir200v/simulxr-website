/**
 * SIMULXR — Centralized asset registry
 * All image/media references live here.
 * Change the CDN base once to update the entire site.
 */

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg';

export const IMAGES = {
  // Hero & backgrounds
  heroBg:       `${CDN}/hero-bg-auykFKKejJF8W8DzHQxasg.webp`,
  processBg:    `${CDN}/process-bg-jz2xqA9VwjaWpbsfLuaS3c.webp`,

  // Simulation scenarios
  simEmergency: `${CDN}/sim-emergency-MDu2SyrPqjHMYtfLuFAMMs.webp`,
  simEquipment: `${CDN}/sim-equipment-jXJpjtz2kpYaq7vK9oas3b.webp`,
  simConfined:  `${CDN}/sim-confined-Ux2cYqBEqiUCxLB8cvH397.webp`,
  simOnboarding:`${CDN}/sim-onboarding-fHPPuvivUtFDGH7M2vAvm9.webp`,
  simMaintenance:`${CDN}/sim-maintenance-AqoA7zPcBcpttopqyKJAKU.webp`,
  simLoto:      `${CDN}/sim-loto-5LrYtsPXEMPjJPyZLYC3Md.webp`,
} as const;

/**
 * Image replacement recommendations:
 *
 * KEEP (good quality, on-brand):
 *   - heroBg: industrial worker in VR ✓
 *   - processBg: industrial background ✓
 *   - simEmergency: emergency scenario ✓
 *
 * UPGRADE (replace with XR-platform imagery):
 *   - simEquipment → XR headset + industrial panel overlay
 *   - simConfined  → digital twin control room view
 *   - simOnboarding→ operator in Meta Quest in field
 *   - simLoto      → AR maintenance overlay on real equipment
 *
 * ADD (currently missing):
 *   - heroXR: operator with Meta Quest 3 in refinery
 *   - digitalTwin: 3D facility visualization
 *   - analytics: dashboard with real-time training data
 *   - teamPhoto: founder/team in studio
 */
