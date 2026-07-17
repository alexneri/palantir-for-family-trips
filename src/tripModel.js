import { DAYS, TIME_SLOTS, TRIP_META } from './tripData'

export const COLLECTION_BY_TYPE = {
  family: 'families',
  location: 'locations',
  route: 'routes',
  itineraryItem: 'itineraryItems',
  meal: 'meals',
  activity: 'activities',
  stayItem: 'stayItems',
  expense: 'expenses',
  task: 'tasks',
}

export const ENTITY_PAGE = {
  family: 'families',
  location: 'stay',
  route: 'itinerary',
  itineraryItem: 'itinerary',
  meal: 'meals',
  activity: 'activities',
  stayItem: 'stay',
  expense: 'expenses',
  task: 'itinerary',
}

const DEFAULT_SELECTION = { type: 'activity', id: 'act-ingress' }
export const TRIP_DOCUMENT_STORAGE_KEY = 'trip-command-center/v5-public'
export const VIEWER_PROFILE_STORAGE_KEY = 'trip-command-center/viewer/v5-public'
const LEGACY_TRIP_DOCUMENT_STORAGE_KEYS = ['trip-command-center/v4-public', 'trip-command-center/v3-public', 'trip-command-center/v2', 'trip-command-center/v1']
const LEGACY_VIEWER_PROFILE_STORAGE_KEYS = ['trip-command-center/viewer/v4-public', 'trip-command-center/viewer/v3-public', 'trip-command-center/viewer']
const TIMELINE_HOURS_PER_SLOT = 24 / Math.max(TIME_SLOTS.length || 1, 1)
const PUBLIC_BASECAMP_ADDRESS = 'Marina Bay, Singapore'
const PUBLIC_BASECAMP_COORDINATES = { lat: 1.283, lng: 103.8607 }

const MAPS_LINKS = {
  airbnb: TRIP_META.airbnb.url,
  grill: 'https://www.google.com/maps/search/?api=1&query=The+Grill+at+Pine+Mountain+Lake',
  twoGuys: 'https://www.google.com/maps/search/?api=1&query=Two+Guys+Pizza+Pies+Groveland',
  mountainRoom: 'https://www.google.com/maps/search/?api=1&query=The+Mountain+Room+Yosemite',
  priestStation: 'https://www.google.com/maps/search/?api=1&query=Priest+Station+Cafe',
  aroundHorn: 'https://www.google.com/maps/search/?api=1&query=Around+The+Horn+Brewing+Company+Groveland',
  yosemite: 'https://www.google.com/maps/search/?api=1&query=Big+Oak+Flat+Entrance+Yosemite',
}

const SHARED_CONVOY_WINDOWS = {
  thuDinner: { startSlot: 2.94, endSlot: 3 },
  thuDinnerReturn: { startSlot: 3.17, endSlot: 3.23 },
  friLunch: { startSlot: 6.1, endSlot: 6.22 },
  friLunchReturn: { startSlot: 6.44, endSlot: 6.56 },
  satYosemite: { startSlot: 9.02, endSlot: 9.22 },
  satDinner: { startSlot: 10.78, endSlot: 10.96 },
  satDinnerReturn: { startSlot: 11.2, endSlot: 11.3 },
}

function getConvoyWindowSpan(window) {
  return Number((window.endSlot - window.startSlot).toFixed(2))
}

const PUBLIC_FAMILY_PROFILES = {
  'north-star': {
    title: 'Parkers',
    name: 'Parkers',
    shortOrigin: 'LA',
    origin: 'Los Angeles',
    originAddress: '2800 E Observatory Rd, Los Angeles, CA 90027',
    originCoordinates: { lat: 34.1184, lng: -118.3004 },
    responsibility: 'Arrival support',
    routeSummary: 'Thursday arrival run into Pine Mountain Lake with a midpoint lunch and reset stop.',
    note: 'Public trip unit used for first-wave arrival coverage.',
  },
  'silver-peak': {
    title: 'Jiangs',
    name: 'Jiangs',
    shortOrigin: 'SF',
    origin: 'San Francisco',
    originAddress: '1 Ferry Building, San Francisco, CA 94111',
    originCoordinates: { lat: 37.7955, lng: -122.3937 },
    responsibility: 'Shared supplies',
    routeSummary: 'Thursday Bay Area arrival with a quick reset stop before the final mountain leg.',
    note: 'Public trip unit used for same-day Bay Area arrival coverage.',
  },
  'desert-bloom': {
    title: 'Riveras',
    name: 'Riveras',
    shortOrigin: 'RN',
    origin: 'Reno',
    originAddress: '10 N Virginia St, Reno, NV 89501',
    originCoordinates: { lat: 39.5296, lng: -119.8138 },
    responsibility: 'Saturday park support',
    routeSummary: 'Friday arrival flow into Pine Mountain Lake from Reno on one direct drive.',
    note: 'Public trip unit used for the delayed-arrival branch of the plan.',
  },
}

const PUBLIC_BASECAMP = {
  name: 'Marina Bay Basecamp (hotel TBD)',
  address: PUBLIC_BASECAMP_ADDRESS,
  coordinates: PUBLIC_BASECAMP_COORDINATES,
  summary: 'Central Marina Bay basecamp used as the trip staging point. Placeholder until the real hotel is booked.',
  accessNote: 'City-centre stay on the MRT. Swap in the real hotel once booked.',
  directionsNote: 'Use the Marina Bay waypoint for planning until the hotel is set.',
  parkingNote: 'No rental car planned; get around by MRT and Grab.',
  lockNote: null,
  checkIn: 'Check-in after 3:00 PM',
  checkOut: 'Check-out before 11:00 AM',
  wifiNetwork: null,
  wifiPassword: null,
  hostName: null,
  coHostName: null,
  guestSummary: null,
  confirmationCode: null,
  vehicleFee: 'Community access details withheld',
  externalUrl: null,
  manualUrl: null,
  photos: [
    {
      id: 'public-basecamp-exterior',
      label: 'Basecamp exterior reference',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
      sourceUrl: null,
    },
    {
      id: 'public-basecamp-interior',
      label: 'Basecamp interior reference',
      imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      sourceUrl: null,
    },
  ],
}

const PUBLIC_STAY_SUMMARIES = {
  'stay-basecamp': 'Basecamp operations run through the public Groveland-area staging house.',
  'stay-gate-access': 'Arrival logistics are intentionally generalized in the public version.',
  'stay-room-assignments': 'Sleeping assignments are intentionally generalized in the public version.',
  'stay-beach-parking': 'Parking guidance is intentionally simplified in the public version.',
}

const PUBLIC_STAY_NOTES = {
  'stay-basecamp': 'Arrival details are intentionally kept high level in the public version.',
  'stay-gate-access': 'Specific gate and entry instructions are not published.',
  'stay-room-assignments': 'Family-specific room assignments are not published.',
  'stay-beach-parking': 'Vehicle planning remains intentionally generalized.',
}

const PUBLIC_EXPENSE_PAYER = 'Neri'

const LOCATION_MEDIA = {
  'pine-airbnb': PUBLIC_BASECAMP.photos,
  'grill-pml': [
    {
      id: 'grill-dining',
      label: 'Dinner reference',
      imageUrl:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      sourceUrl: MAPS_LINKS.grill,
    },
  ],
  'two-guys-pizza': [
    {
      id: 'two-guys-pizza-dining',
      label: 'Pizza dinner reference',
      imageUrl:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
      sourceUrl: MAPS_LINKS.twoGuys,
    },
  ],
  'mountain-room': [
    {
      id: 'mountain-room-dining',
      label: 'Mountain Room reference',
      imageUrl:
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
      sourceUrl: MAPS_LINKS.mountainRoom,
    },
  ],
  'priest-station': [
    {
      id: 'priest-station-stop',
      label: 'Roadside lunch reference',
      imageUrl:
        'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?auto=format&fit=crop&w=900&q=80',
      sourceUrl: MAPS_LINKS.priestStation,
    },
  ],
  'around-horn': [
    {
      id: 'around-horn-dining',
      label: 'Return dinner reference',
      imageUrl:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80',
      sourceUrl: MAPS_LINKS.aroundHorn,
    },
  ],
  yosemite: [
    {
      id: 'yosemite-view',
      label: 'West entrance reference',
      imageUrl:
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80',
      sourceUrl: MAPS_LINKS.yosemite,
    },
  ],
}

const DAY_NAME_TO_ID = {
  Thursday: 'thu',
  Friday: 'fri',
  Saturday: 'sat',
  Sunday: 'sun',
}

const LEGACY_FAMILY_TASKS = {
  'north-star': {
    'car-pack': 'task-car-pack',
    'kid-bag': 'task-kid-bag',
    groceries: 'task-road-snacks',
    firewood: 'task-firewood',
  },
  'silver-peak': {
    'lake-gear': 'task-lake-gear',
    breakfast: 'task-breakfast-fruit',
    'kids-shoes': 'task-kids-shoes',
    charger: 'task-charger',
  },
  'desert-bloom': {
    'late-arrival': 'task-late-arrival',
    'grill-kit': 'task-grill-kit',
    'yosemite-daypack': 'task-yosemite-daypacks',
    'park-pass': 'task-park-docs',
  },
}

export function makeEntityKey(type, id) {
  return `${type}:${id}`
}

export function parseEntityKey(key) {
  const [type, ...rest] = key.split(':')
  return { type, id: rest.join(':') }
}

export function getCollection(doc, type) {
  const collectionName = COLLECTION_BY_TYPE[type]
  return collectionName ? doc[collectionName] || [] : []
}

export function getEntityById(doc, type, id) {
  return getCollection(doc, type).find((item) => item.id === id) || null
}

export function getEntityBySelection(doc, selection) {
  if (!selection?.type || !selection?.id) return null
  return getEntityById(doc, selection.type, selection.id)
}

export function getEntityTitle(entity) {
  if (!entity) return 'No selection'
  return entity.title || entity.name || entity.label || entity.meal || entity.id
}

export function getDayMeta(dayId) {
  return DAYS.find((day) => day.id === dayId) || null
}

export function getSlotLabel(slotIndex) {
  const safeSlotIndex = Number.isFinite(slotIndex) ? Math.max(slotIndex, 0) : 0
  const dayIndex = Math.floor(safeSlotIndex / TIME_SLOTS.length)
  const slotIndexWithinDay = Math.floor(safeSlotIndex % TIME_SLOTS.length)
  const slot = TIME_SLOTS[slotIndexWithinDay]
  const day = DAYS[dayIndex]
  if (!day) return `${slot}:00`

  const fractionalSlot = safeSlotIndex - Math.floor(safeSlotIndex)
  const baseHour = Number(slot) || 0
  const totalMinutes = Math.round((baseHour + fractionalSlot * 6) * 60)
  const hour24 = Math.floor(totalMinutes / 60) % 24
  const minute = totalMinutes % 60
  const meridiem = hour24 >= 12 ? 'PM' : 'AM'
  const hour12 = hour24 % 12 || 12

  return `${day.shortLabel} ${String(hour12).padStart(2, '0')}:${String(minute).padStart(2, '0')} ${meridiem}`
}

export function getRouteSimulationWindow(doc, route) {
  if (!route) {
    return { start: 0, end: 1 }
  }

  if (route.linkedEntityKey) {
    const linked = parseEntityKey(route.linkedEntityKey)
    if (linked.type === 'itineraryItem') {
      const linkedItem = doc?.itineraryItems?.find((item) => item.id === linked.id)
      if (linkedItem && Number.isFinite(linkedItem.startSlot)) {
        const fallbackSpan = Number.isFinite(linkedItem.span) && linkedItem.span > 0 ? linkedItem.span : 1
        const span = getRouteDurationSlotSpan(route, fallbackSpan)
        return {
          start: linkedItem.startSlot,
          end: linkedItem.startSlot + span,
        }
      }
    }
  }

  const start = Number.isFinite(route.simulationStartSlot) ? route.simulationStartSlot : 0
  const fallbackSpan =
    Number.isFinite(route.simulationEndSlot) && route.simulationEndSlot > start
      ? route.simulationEndSlot - start
      : 1
  const end = start + getRouteDurationSlotSpan(route, fallbackSpan)
  return { start, end }
}

export function getRouteDurationSlotSpan(route, fallbackSpan = 1) {
  const simulationStartSlot = Number(route?.simulationStartSlot)
  const simulationEndSlot = Number(route?.simulationEndSlot)
  if (
    Number.isFinite(simulationStartSlot) &&
    Number.isFinite(simulationEndSlot) &&
    simulationEndSlot > simulationStartSlot
  ) {
    return simulationEndSlot - simulationStartSlot
  }

  const durationSeconds = Number(route?.durationSeconds)
  if (Number.isFinite(durationSeconds) && durationSeconds > 0) {
    return durationSeconds / 3600 / TIMELINE_HOURS_PER_SLOT
  }
  return fallbackSpan
}

export function getItineraryItemEffectiveSpan(doc, item) {
  if (!item) return 1

  const fallbackSpan = Number.isFinite(item.span) && item.span > 0 ? item.span : 1
  if (!item.routeId) return fallbackSpan

  const route = doc?.routes?.find((candidate) => candidate.id === item.routeId)
  return getRouteDurationSlotSpan(route, fallbackSpan)
}

export function isEntityOnPage(entity, pageId) {
  if (!entity) return false
  if (entity.type === 'location') {
    return ['stay', 'meals', 'activities', 'itinerary'].includes(pageId)
  }
  return ENTITY_PAGE[entity.type] === pageId
}

function buildLocations() {
  return [
    {
      id: 'pine-airbnb',
      type: 'location',
      title: PUBLIC_BASECAMP.name,
      category: 'stay',
      dayId: 'd02',
      address: PUBLIC_BASECAMP.address,
      coordinates: PUBLIC_BASECAMP.coordinates,
      externalUrl: null,
      summary: 'Central Marina Bay basecamp for the trip. Swap in the real hotel once it is booked; everything else is planned around a city-centre stay on the MRT.',
      parkingNote: PUBLIC_BASECAMP.parkingNote,
      accessNote: PUBLIC_BASECAMP.accessNote,
      directionsNote: PUBLIC_BASECAMP.directionsNote,
      lockNote: PUBLIC_BASECAMP.lockNote,
      checkIn: PUBLIC_BASECAMP.checkIn,
      checkOut: PUBLIC_BASECAMP.checkOut,
      wifiNetwork: PUBLIC_BASECAMP.wifiNetwork,
      wifiPassword: PUBLIC_BASECAMP.wifiPassword,
      hostName: PUBLIC_BASECAMP.hostName,
      coHostName: PUBLIC_BASECAMP.coHostName,
      guestSummary: PUBLIC_BASECAMP.guestSummary,
      confirmationCode: PUBLIC_BASECAMP.confirmationCode,
      vehicleFee: PUBLIC_BASECAMP.vehicleFee,
      manualUrl: PUBLIC_BASECAMP.manualUrl,
      photos: PUBLIC_BASECAMP.photos,
      linkedEntityKeys: [
        makeEntityKey('stayItem', 'sg-stay-basecamp'),
        makeEntityKey('stayItem', 'sg-stay-checkin'),
        makeEntityKey('stayItem', 'sg-stay-room'),
        makeEntityKey('stayItem', 'sg-stay-checkout'),
      ],
    },
    {
      id: 'changi-airport',
      type: 'location',
      title: 'Changi Airport (SIN)',
      category: 'logistics',
      dayId: 'd02',
      stopType: 'Arrival / ingress',
      placesQuery: 'Singapore Changi Airport',
      address: 'Airport Blvd, Singapore',
      coordinates: { lat: 1.3644, lng: 103.9915 },
      externalUrl: 'https://www.google.com/maps/search/?api=1&query=Singapore+Changi+Airport',
      summary: 'Point of entry. Clear immigration, grab an eSIM and a transit card, then MRT or Grab into Marina Bay.',
      linkedEntityKeys: [
        makeEntityKey('family', 'neri'),
        makeEntityKey('itineraryItem', 'ingress'),
      ],
      photos: [],
    },
    {
      id: 'gluttons-bay',
      type: 'location',
      title: 'Makansutra Gluttons Bay',
      category: 'meal',
      dayId: 'd03',
      placesQuery: 'Makansutra Gluttons Bay Singapore',
      address: '8 Raffles Ave, Singapore 039802',
      coordinates: { lat: 1.2897, lng: 103.8547 },
      externalUrl: 'https://www.google.com/maps/search/?api=1&query=Makansutra+Gluttons+Bay',
      summary: 'Seafront hawker row by Esplanade. The anchor food outing: chili crab, satay, BBQ stingray, carrot cake, sugarcane juice.',
      linkedEntityKeys: [
        makeEntityKey('meal', 'meal-makan'),
        makeEntityKey('activity', 'act-makan'),
      ],
      photos: [],
    },
    {
      id: 'gardens-by-the-bay',
      type: 'location',
      title: 'Gardens by the Bay',
      category: 'activity',
      dayId: 'd04',
      placesQuery: 'Gardens by the Bay Singapore',
      address: '18 Marina Gardens Dr, Singapore 018953',
      coordinates: { lat: 1.2816, lng: 103.8636 },
      externalUrl: 'https://www.google.com/maps/search/?api=1&query=Gardens+by+the+Bay',
      summary: 'Cloud Forest, Flower Dome, and the Supertree light show after dark. Book domes online; easy from basecamp on foot or one MRT stop.',
      linkedEntityKeys: [makeEntityKey('activity', 'act-gardens')],
      photos: [],
    },
    {
      id: 'sentosa',
      type: 'location',
      title: 'Sentosa / Resorts World',
      category: 'activity',
      dayId: 'd05',
      placesQuery: 'Sentosa Singapore',
      address: 'Sentosa Island, Singapore',
      coordinates: { lat: 1.254, lng: 103.8238 },
      externalUrl: 'https://www.google.com/maps/search/?api=1&query=Sentosa+Singapore',
      summary: 'Universal Studios, S.E.A. Aquarium, cable car and beaches. A full kid-friendly day; buy USS tickets ahead for a fixed entry window.',
      linkedEntityKeys: [makeEntityKey('activity', 'act-sentosa')],
      photos: [],
    },
    {
      id: 'singapore-zoo',
      type: 'location',
      title: 'Singapore Zoo + Night Safari',
      category: 'activity',
      dayId: 'd06',
      placesQuery: 'Singapore Zoo',
      address: '80 Mandai Lake Rd, Singapore 729826',
      coordinates: { lat: 1.4043, lng: 103.793 },
      externalUrl: 'https://www.google.com/maps/search/?api=1&query=Singapore+Zoo',
      summary: 'Open-concept zoo by day, Night Safari after dark. Furthest site from the city; plan a Grab and pace the kid around the heat.',
      linkedEntityKeys: [makeEntityKey('activity', 'act-zoo')],
      photos: [],
    },
    {
      id: 'chinatown-maxwell',
      type: 'location',
      title: 'Chinatown + Maxwell Food Centre',
      category: 'activity',
      dayId: 'd07',
      placesQuery: 'Maxwell Food Centre Singapore',
      address: '1 Kadayanallur St, Singapore 069184',
      coordinates: { lat: 1.2807, lng: 103.8443 },
      externalUrl: 'https://www.google.com/maps/search/?api=1&query=Maxwell+Food+Centre',
      summary: 'Sri Mariamman temple, Buddha Tooth Relic temple, and Tian Tian chicken rice at Maxwell. Walkable, shaded, low-key.',
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-chinatown'),
        makeEntityKey('meal', 'meal-maxwell'),
      ],
      photos: [],
    },
    {
      id: 'little-india',
      type: 'location',
      title: 'Little India + Kampong Glam',
      category: 'activity',
      dayId: 'd08',
      placesQuery: 'Little India Singapore',
      address: 'Serangoon Rd, Singapore',
      coordinates: { lat: 1.3067, lng: 103.8517 },
      externalUrl: 'https://www.google.com/maps/search/?api=1&query=Little+India+Singapore',
      summary: 'Tekka Centre, Sri Veeramakaliamman temple, Mustafa, then Kampong Glam for Sultan Mosque and Haji Lane. Big colour, banana-leaf dinner.',
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-little-india'),
        makeEntityKey('meal', 'meal-little-india'),
      ],
      photos: [],
    },
    {
      id: 'orchard-road',
      type: 'location',
      title: 'Orchard Road',
      category: 'activity',
      dayId: 'd09',
      placesQuery: 'Orchard Road Singapore',
      address: 'Orchard Rd, Singapore',
      coordinates: { lat: 1.304, lng: 103.8318 },
      externalUrl: 'https://www.google.com/maps/search/?api=1&query=Orchard+Road+Singapore',
      summary: 'Air-conditioned mall belt and ION Orchard. Pair with the Botanic Gardens (UNESCO) and Newton Food Centre for dinner.',
      linkedEntityKeys: [makeEntityKey('activity', 'act-orchard')],
      photos: [],
    },
    {
      id: 'southern-ridges',
      type: 'location',
      title: 'Southern Ridges (Henderson Waves)',
      category: 'activity',
      dayId: 'd10',
      placesQuery: 'Henderson Waves Singapore',
      address: 'Henderson Rd, Singapore',
      coordinates: { lat: 1.2777, lng: 103.8021 },
      externalUrl: 'https://www.google.com/maps/search/?api=1&query=Henderson+Waves',
      summary: 'Canopy walk from Mount Faber to HarbourFront over Henderson Waves. Go early before the heat; ends near VivoCity for lunch and aircon.',
      linkedEntityKeys: [makeEntityKey('activity', 'act-ridges')],
      photos: [],
    },
    {
      id: 'jewel-changi',
      type: 'location',
      title: 'Jewel Changi',
      category: 'activity',
      dayId: 'd11',
      placesQuery: 'Jewel Changi Airport',
      address: '78 Airport Blvd, Singapore 819666',
      coordinates: { lat: 1.3601, lng: 103.9895 },
      externalUrl: 'https://www.google.com/maps/search/?api=1&query=Jewel+Changi+Airport',
      summary: 'Rain Vortex waterfall and Canopy Park. Good flex/buffer day and an easy dry run of the route to the airport before departure.',
      linkedEntityKeys: [makeEntityKey('activity', 'act-jewel')],
      photos: [],
    },
    {
      id: 'botanic-gardens',
      type: 'location',
      title: 'Singapore Botanic Gardens',
      category: 'activity',
      dayId: 'd09',
      placesQuery: 'Singapore Botanic Gardens',
      address: '1 Cluny Rd, Singapore 259569',
      coordinates: { lat: 1.3138, lng: 103.8159 },
      externalUrl: 'https://www.google.com/maps/search/?api=1&query=Singapore+Botanic+Gardens',
      summary: 'UNESCO gardens with the National Orchid Garden and a shaded kids play area. Free entry (orchid garden ticketed).',
      linkedEntityKeys: [makeEntityKey('activity', 'act-orchard')],
      photos: [],
    },
  ]
}

function buildFamilies() {
  return [
    {
      id: 'neri',
      type: 'family',
      title: 'Neri',
      name: 'Neri',
      shortOrigin: 'AMS',
      origin: 'Amsterdam',
      originAddress: '137 Ladogameerhof, 1060 RE Amsterdam, NL',
      originCoordinates: { lat: 52.3648, lng: 4.8085 },
      arrivalDayId: 'd02',
      eta: 'Wed 8/18',
      driveTime: '~13h flight',
      headcount: '2 adults, 1 kid',
      vehicle: 'None (MRT + Grab)',
      vehicleLabel: 'Party 1',
      responsibility: 'Trip lead',
      readiness: 55,
      status: 'Pre-trip',
      routeSummary: 'Overnight AMS to SIN on Aug 17, landing at Changi on Aug 18, then ingress to the Marina Bay basecamp.',
      plannedStopIds: ['changi-airport'],
      taskIds: [
        'task-passports',
        'task-sgac',
        'task-esim',
        'task-insurance',
        'task-tickets',
        'task-pack-tropical',
      ],
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'ingress'),
        makeEntityKey('location', 'changi-airport'),
        makeEntityKey('location', 'pine-airbnb'),
      ],
      note: 'Single family on this trip. The whole plan is theirs to edit live in the browser.',
    },
  ]
}

function buildItineraryItems() {
  return [
    {
      id: 'departure-ams',
      type: 'itineraryItem',
      title: 'Depart Amsterdam (red-eye)',
      rowId: 'travel',
      dayId: 'd01',
      startSlot: 3,
      span: 0.9,
      color: 'warning',
      familyIds: ['neri'],
      routeId: null,
      status: 'Scheduled',
      riskLevel: 'Low',
      taskIds: ['task-passports', 'task-pack-tropical'],
      linkedEntityKeys: [makeEntityKey('family', 'neri')],
    },
    {
      id: 'ingress',
      type: 'itineraryItem',
      title: 'Arrive Changi + ingress',
      rowId: 'travel',
      dayId: 'd02',
      startSlot: 6.6,
      span: 0.7,
      color: 'critical',
      familyIds: ['neri'],
      routeId: 'route-ingress',
      status: 'Arrival',
      riskLevel: 'Medium',
      taskIds: ['task-sgac', 'task-esim'],
      linkedEntityKeys: [
        makeEntityKey('family', 'neri'),
        makeEntityKey('location', 'changi-airport'),
        makeEntityKey('location', 'pine-airbnb'),
      ],
    },
    {
      id: 'egress',
      type: 'itineraryItem',
      title: 'Fly home (SIN to AMS)',
      rowId: 'travel',
      dayId: 'd12',
      startSlot: 46,
      span: 0.9,
      color: 'warning',
      familyIds: ['neri'],
      routeId: 'route-egress',
      status: 'Departure',
      riskLevel: 'Medium',
      taskIds: [],
      linkedEntityKeys: [
        makeEntityKey('family', 'neri'),
        makeEntityKey('location', 'jewel-changi'),
      ],
    },
    {
      id: 'day-d02',
      type: 'itineraryItem',
      title: 'Relaxing walk (Marina Bay)',
      rowId: 'activities',
      dayId: 'd02',
      startSlot: 4.8,
      span: 2.4,
      color: 'info',
      familyIds: ['neri'],
      status: 'Go',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('activity', 'act-ingress')],
    },
    {
      id: 'day-d03',
      type: 'itineraryItem',
      title: 'Food day — Makansutra',
      rowId: 'activities',
      dayId: 'd03',
      startSlot: 8.8,
      span: 2.6,
      color: 'success',
      familyIds: ['neri'],
      status: 'Go',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('activity', 'act-makan'), makeEntityKey('meal', 'meal-makan')],
    },
    {
      id: 'day-d04',
      type: 'itineraryItem',
      title: 'Gardens by the Bay',
      rowId: 'activities',
      dayId: 'd04',
      startSlot: 12.8,
      span: 2.6,
      color: 'info',
      familyIds: ['neri'],
      status: 'Go',
      riskLevel: 'Low',
      taskIds: ['task-tickets'],
      linkedEntityKeys: [makeEntityKey('activity', 'act-gardens')],
    },
    {
      id: 'day-d05',
      type: 'itineraryItem',
      title: 'Sentosa / Universal',
      rowId: 'activities',
      dayId: 'd05',
      startSlot: 16.8,
      span: 2.8,
      color: 'warning',
      familyIds: ['neri'],
      status: 'Watch',
      riskLevel: 'Medium',
      taskIds: ['task-tickets'],
      linkedEntityKeys: [makeEntityKey('activity', 'act-sentosa')],
    },
    {
      id: 'day-d06',
      type: 'itineraryItem',
      title: 'Zoo + Night Safari',
      rowId: 'activities',
      dayId: 'd06',
      startSlot: 20.8,
      span: 2.8,
      color: 'violet',
      familyIds: ['neri'],
      status: 'Watch',
      riskLevel: 'Medium',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('activity', 'act-zoo')],
    },
    {
      id: 'day-d07',
      type: 'itineraryItem',
      title: 'Chinatown + Maxwell',
      rowId: 'activities',
      dayId: 'd07',
      startSlot: 24.8,
      span: 2.6,
      color: 'info',
      familyIds: ['neri'],
      status: 'Go',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('activity', 'act-chinatown'), makeEntityKey('meal', 'meal-maxwell')],
    },
    {
      id: 'day-d08',
      type: 'itineraryItem',
      title: 'Little India + Kampong Glam',
      rowId: 'activities',
      dayId: 'd08',
      startSlot: 28.8,
      span: 2.6,
      color: 'success',
      familyIds: ['neri'],
      status: 'Go',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('activity', 'act-little-india'), makeEntityKey('meal', 'meal-little-india')],
    },
    {
      id: 'day-d09',
      type: 'itineraryItem',
      title: 'Orchard + Botanic Gardens',
      rowId: 'activities',
      dayId: 'd09',
      startSlot: 32.8,
      span: 2.6,
      color: 'info',
      familyIds: ['neri'],
      status: 'Go',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('activity', 'act-orchard')],
    },
    {
      id: 'day-d10',
      type: 'itineraryItem',
      title: 'Southern Ridges walk',
      rowId: 'activities',
      dayId: 'd10',
      startSlot: 36.8,
      span: 2.6,
      color: 'warning',
      familyIds: ['neri'],
      status: 'Watch',
      riskLevel: 'Medium',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('activity', 'act-ridges')],
    },
    {
      id: 'day-d11',
      type: 'itineraryItem',
      title: 'Jewel Changi + buffer',
      rowId: 'activities',
      dayId: 'd11',
      startSlot: 40.8,
      span: 2.6,
      color: 'info',
      familyIds: ['neri'],
      status: 'Go',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('activity', 'act-jewel')],
    },
    {
      id: 'support-checkin',
      type: 'itineraryItem',
      title: 'Check-in + SIM + transit card',
      rowId: 'support',
      dayId: 'd02',
      startSlot: 5,
      span: 0.8,
      color: 'muted',
      familyIds: ['neri'],
      status: 'Go',
      riskLevel: 'Low',
      taskIds: ['task-esim'],
      linkedEntityKeys: [makeEntityKey('stayItem', 'sg-stay-checkin')],
    },
    {
      id: 'support-tickets',
      type: 'itineraryItem',
      title: 'Confirm attraction tickets',
      rowId: 'support',
      dayId: 'd04',
      startSlot: 12.5,
      span: 0.6,
      color: 'muted',
      familyIds: ['neri'],
      status: 'Go',
      riskLevel: 'Low',
      taskIds: ['task-tickets'],
      linkedEntityKeys: [makeEntityKey('task', 'task-tickets')],
    },
    {
      id: 'support-repack',
      type: 'itineraryItem',
      title: 'Pre-pack for departure',
      rowId: 'support',
      dayId: 'd11',
      startSlot: 41.5,
      span: 0.6,
      color: 'muted',
      familyIds: ['neri'],
      status: 'Go',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('stayItem', 'sg-stay-checkout')],
    },
  ]
}

function buildMeals() {
  return [
    {
      id: 'meal-arrival',
      type: 'meal',
      title: 'Arrival night — easy hawker',
      dayId: 'd02',
      startSlot: 7.4,
      status: 'Idea',
      owner: 'Neri',
      reservationType: 'Hawker / walk-in',
      timeLabel: '8:00 PM',
      locationId: 'pine-airbnb',
      linkedEntityKeys: [makeEntityKey('activity', 'act-ingress')],
      taskIds: [],
      note: 'Keep the first night light and close to basecamp after the long flight. Lau Pa Sat satay street is a good nearby option.',
    },
    {
      id: 'meal-makan',
      type: 'meal',
      title: 'Makansutra Gluttons Bay',
      dayId: 'd03',
      startSlot: 11,
      status: 'Assigned',
      owner: 'Neri',
      reservationType: 'Hawker dinner',
      timeLabel: '7:00 PM',
      locationId: 'gluttons-bay',
      linkedEntityKeys: [makeEntityKey('activity', 'act-makan')],
      taskIds: [],
      note: 'The anchor food outing. Seafront hawker spread by the Esplanade: chili crab, satay, BBQ stingray, carrot cake.',
    },
    {
      id: 'meal-satay-bay',
      type: 'meal',
      title: 'Satay by the Bay',
      dayId: 'd04',
      startSlot: 14,
      status: 'Idea',
      owner: 'Neri',
      reservationType: 'Lunch',
      timeLabel: '12:30 PM',
      locationId: 'gardens-by-the-bay',
      linkedEntityKeys: [makeEntityKey('activity', 'act-gardens')],
      taskIds: [],
      note: 'Hawker centre inside Gardens by the Bay; easy to fold into the domes day.',
    },
    {
      id: 'meal-maxwell',
      type: 'meal',
      title: 'Maxwell — Tian Tian chicken rice',
      dayId: 'd07',
      startSlot: 26,
      status: 'Idea',
      owner: 'Neri',
      reservationType: 'Hawker lunch',
      timeLabel: '12:30 PM',
      locationId: 'chinatown-maxwell',
      linkedEntityKeys: [makeEntityKey('activity', 'act-chinatown')],
      taskIds: [],
      note: 'Classic Hainanese chicken rice; go before the lunch queue builds.',
    },
    {
      id: 'meal-little-india',
      type: 'meal',
      title: 'Little India — banana leaf dinner',
      dayId: 'd08',
      startSlot: 31,
      status: 'Idea',
      owner: 'Neri',
      reservationType: 'Dinner',
      timeLabel: '7:00 PM',
      locationId: 'little-india',
      linkedEntityKeys: [makeEntityKey('activity', 'act-little-india')],
      taskIds: [],
      note: 'South Indian banana-leaf set; pair with a Kampong Glam wander beforehand.',
    },
    {
      id: 'meal-newton',
      type: 'meal',
      title: 'Newton Food Centre',
      dayId: 'd09',
      startSlot: 35,
      status: 'Idea',
      owner: 'Neri',
      reservationType: 'Hawker dinner',
      timeLabel: '7:30 PM',
      locationId: 'orchard-road',
      linkedEntityKeys: [makeEntityKey('activity', 'act-orchard')],
      taskIds: [],
      note: 'The Crazy Rich Asians hawker centre; BBQ seafood and satay after an Orchard day.',
    },
    {
      id: 'meal-chili-crab',
      type: 'meal',
      title: 'Jumbo Seafood — chili crab',
      dayId: 'd10',
      startSlot: 39,
      status: 'Idea',
      owner: 'Neri',
      reservationType: 'Dinner (book ahead)',
      timeLabel: '7:30 PM',
      locationId: 'pine-airbnb',
      linkedEntityKeys: [makeEntityKey('activity', 'act-ridges')],
      taskIds: [],
      note: 'The sit-down splurge. Reserve a riverside table; messy and worth it.',
    },
  ]
}

function buildActivities() {
  return [
    {
      id: 'act-ingress',
      type: 'activity',
      title: 'Ingress + relaxing walk',
      dayId: 'd02',
      window: 'Wed 8/18 / afternoon',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Low',
      locationId: 'pine-airbnb',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'ingress'),
        makeEntityKey('itineraryItem', 'day-d02'),
        makeEntityKey('meal', 'meal-arrival'),
      ],
      taskIds: ['task-sgac', 'task-esim'],
      description: 'Land at Changi, get to the Marina Bay basecamp, then a slow shake-off-the-flight walk around Marina Bay and the waterfront promenade. No agenda beyond adjusting to the heat.',
      backup: 'If the flight leaves everyone wrecked, collapse the walk into a short stroll and an early hawker dinner.',
      note: 'Arrival day. The only real objective is a clean landing and a gentle first evening.',
    },
    {
      id: 'act-makan',
      type: 'activity',
      title: 'Food day — Makansutra',
      dayId: 'd03',
      window: 'Thu 8/19 / evening anchor',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Low',
      locationId: 'gluttons-bay',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'day-d03'),
        makeEntityKey('meal', 'meal-makan'),
      ],
      taskIds: [],
      description: 'Build the day around the food. Easy daytime pacing near Marina Bay, then Makansutra Gluttons Bay by the Esplanade for the hawker spread at night.',
      backup: 'If Gluttons Bay is closed or rained out, pivot to Lau Pa Sat satay street or Newton Food Centre.',
      note: 'Alex flagged this as the food anchor of the trip.',
    },
    {
      id: 'act-gardens',
      type: 'activity',
      title: 'Gardens by the Bay',
      dayId: 'd04',
      window: 'Fri 8/20 / afternoon + light show',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Medium',
      locationId: 'gardens-by-the-bay',
      linkedEntityKeys: [makeEntityKey('itineraryItem', 'day-d04')],
      taskIds: ['task-tickets'],
      description: 'Cloud Forest and Flower Dome for aircon relief, Supertree Grove walk, and the Garden Rhapsody light show after sunset. Book dome tickets online.',
      backup: 'Heavy rain: stay inside the two conservatories and skip the outdoor canopy walk.',
      note: 'Suggested — swap freely.',
    },
    {
      id: 'act-sentosa',
      type: 'activity',
      title: 'Sentosa / Universal Studios',
      dayId: 'd05',
      window: 'Sat 8/21 / full day',
      status: 'Watch',
      riskLevel: 'Medium',
      weatherSensitivity: 'Medium',
      locationId: 'sentosa',
      linkedEntityKeys: [makeEntityKey('itineraryItem', 'day-d05')],
      taskIds: ['task-tickets'],
      description: 'Big kid day. Universal Studios or S.E.A. Aquarium, cable car in, beach time to cool off. Pre-book a USS entry window.',
      backup: 'If USS is a zoo, swap to the Aquarium plus Palawan Beach for a lower-intensity day.',
      note: 'Suggested — swap freely.',
    },
    {
      id: 'act-zoo',
      type: 'activity',
      title: 'Singapore Zoo + Night Safari',
      dayId: 'd06',
      window: 'Sun 8/22 / midday into night',
      status: 'Watch',
      riskLevel: 'Medium',
      weatherSensitivity: 'Medium',
      locationId: 'singapore-zoo',
      linkedEntityKeys: [makeEntityKey('itineraryItem', 'day-d06')],
      taskIds: [],
      description: 'Open-concept zoo in the afternoon, dinner at Mandai, then the Night Safari tram. Furthest site from the city, so lean on Grab and pace the kid.',
      backup: 'Skip the day-zoo and do Night Safari only if the heat is brutal.',
      note: 'Suggested — swap freely.',
    },
    {
      id: 'act-chinatown',
      type: 'activity',
      title: 'Chinatown + Maxwell',
      dayId: 'd07',
      window: 'Mon 8/23 / daytime',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Low',
      locationId: 'chinatown-maxwell',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'day-d07'),
        makeEntityKey('meal', 'meal-maxwell'),
      ],
      taskIds: [],
      description: 'Sri Mariamman and Buddha Tooth Relic temples, Chinatown street market, and chicken rice at Maxwell Food Centre. Shaded and walkable.',
      backup: 'Rain: duck into the Chinatown Heritage Centre and the covered market stalls.',
      note: 'Suggested — swap freely.',
    },
    {
      id: 'act-little-india',
      type: 'activity',
      title: 'Little India + Kampong Glam',
      dayId: 'd08',
      window: 'Tue 8/24 / daytime + dinner',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Low',
      locationId: 'little-india',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'day-d08'),
        makeEntityKey('meal', 'meal-little-india'),
      ],
      taskIds: [],
      description: 'Tekka Centre, temples and Mustafa in Little India, then Sultan Mosque and Haji Lane in Kampong Glam. Colour-heavy, great for photos, banana-leaf dinner.',
      backup: 'Compress to just Kampong Glam if the day runs hot and short.',
      note: 'Suggested — swap freely.',
    },
    {
      id: 'act-orchard',
      type: 'activity',
      title: 'Orchard + Botanic Gardens',
      dayId: 'd09',
      window: 'Wed 8/25 / all day',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Low',
      locationId: 'orchard-road',
      linkedEntityKeys: [makeEntityKey('itineraryItem', 'day-d09')],
      taskIds: [],
      description: 'Morning at the UNESCO Botanic Gardens and the Orchid Garden, afternoon on the Orchard Road mall belt for aircon and shopping, Newton Food Centre for dinner.',
      backup: 'All-rain fallback: Orchard malls only; save the gardens for a clearer day.',
      note: 'Suggested — swap freely.',
    },
    {
      id: 'act-ridges',
      type: 'activity',
      title: 'Southern Ridges walk',
      dayId: 'd10',
      window: 'Thu 8/26 / early morning',
      status: 'Watch',
      riskLevel: 'Medium',
      weatherSensitivity: 'High',
      locationId: 'southern-ridges',
      linkedEntityKeys: [makeEntityKey('itineraryItem', 'day-d10')],
      taskIds: [],
      description: 'Canopy walk from Mount Faber over Henderson Waves to HarbourFront. Start early before the heat; finish at VivoCity for lunch and a chili-crab dinner later.',
      backup: 'If storms roll in, swap the walk for the Mount Faber cable car and VivoCity.',
      note: 'Suggested — swap freely.',
    },
    {
      id: 'act-jewel',
      type: 'activity',
      title: 'Jewel Changi + buffer',
      dayId: 'd11',
      window: 'Fri 8/27 / flexible',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Low',
      locationId: 'jewel-changi',
      linkedEntityKeys: [makeEntityKey('itineraryItem', 'day-d11')],
      taskIds: [],
      description: 'Rain Vortex and Canopy Park at Jewel, plus a soft buffer day to re-do a favourite or handle anything missed. Doubles as a dry run of the airport route.',
      backup: 'Pure rest day at basecamp if everyone is spent.',
      note: 'Suggested — swap freely.',
    },
  ]
}

function buildStayItems() {
  return [
    {
      id: 'sg-stay-basecamp',
      type: 'stayItem',
      title: 'Basecamp — Marina Bay hotel (TBD)',
      dayId: 'd02',
      locationId: 'pine-airbnb',
      category: 'overview',
      summary: 'Central Marina Bay stay used as the base for the whole trip. Placeholder until the real hotel is booked.',
      linkedEntityKeys: [makeEntityKey('location', 'pine-airbnb')],
      taskIds: [],
      note: 'Drop the real hotel name and address here once booked, and the map pin will follow.',
    },
    {
      id: 'sg-stay-checkin',
      type: 'stayItem',
      title: 'Check-in, SIM + transit card',
      dayId: 'd02',
      locationId: 'pine-airbnb',
      category: 'access',
      summary: 'On arrival: grab an eSIM or a Singtel tourist SIM and an EZ-Link / SimplyGo card for the MRT.',
      linkedEntityKeys: [makeEntityKey('location', 'pine-airbnb')],
      taskIds: ['task-esim'],
      note: 'Both are available in the arrivals hall at Changi.',
    },
    {
      id: 'sg-stay-room',
      type: 'stayItem',
      title: 'Room setup',
      dayId: 'd02',
      locationId: 'pine-airbnb',
      category: 'sleep',
      summary: 'One room for the Neri family: 2 adults + 1 kid. Request a cot or extra bed if needed.',
      linkedEntityKeys: [makeEntityKey('family', 'neri')],
      taskIds: [],
      note: 'Single-family trip, so no room-splitting logistics.',
    },
    {
      id: 'sg-stay-checkout',
      type: 'stayItem',
      title: 'Checkout + airport transfer',
      dayId: 'd12',
      locationId: 'pine-airbnb',
      category: 'checkout',
      summary: 'Pre-pack on Aug 27. Allow ~3 hours for Changi on departure day; the MRT reaches the airport but Grab is easier with luggage.',
      linkedEntityKeys: [makeEntityKey('location', 'jewel-changi')],
      taskIds: [],
      note: 'Jewel is pre-immigration, so it can double as the last stop before check-in.',
    },
  ]
}

function buildExpenses() {
  return [
    {
      id: 'exp-flights',
      type: 'expense',
      title: 'Flights AMS to SIN (x3)',
      payer: 'Neri',
      amount: 2400,
      split: 'Family',
      allocationMode: 'individual',
      allocations: {},
      settled: false,
      linkedEntityKeys: [makeEntityKey('itineraryItem', 'ingress')],
      note: 'Return fares for 2 adults + 1 kid; placeholder estimate.',
    },
    {
      id: 'exp-hotel',
      type: 'expense',
      title: 'Hotel — 11 nights (TBD)',
      payer: 'Neri',
      amount: 2200,
      split: 'Family',
      allocationMode: 'individual',
      allocations: {},
      settled: false,
      linkedEntityKeys: [makeEntityKey('stayItem', 'sg-stay-basecamp')],
      note: 'Placeholder until the Marina Bay hotel is booked.',
    },
    {
      id: 'exp-attractions',
      type: 'expense',
      title: 'Attraction passes (Gardens / USS / Zoo)',
      payer: 'Neri',
      amount: 350,
      split: 'Family',
      allocationMode: 'individual',
      allocations: {},
      settled: false,
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-gardens'),
        makeEntityKey('activity', 'act-sentosa'),
        makeEntityKey('activity', 'act-zoo'),
      ],
      note: 'Book the big-ticket attractions ahead for fixed entry windows.',
    },
    {
      id: 'exp-food',
      type: 'expense',
      title: 'Food + hawker budget',
      payer: 'Neri',
      amount: 600,
      split: 'Family',
      allocationMode: 'individual',
      allocations: {},
      settled: false,
      linkedEntityKeys: [makeEntityKey('meal', 'meal-makan')],
      note: 'Hawker centres keep this low; the chili-crab dinner is the splurge line.',
    },
    {
      id: 'exp-transport',
      type: 'expense',
      title: 'MRT / Grab + transit cards',
      payer: 'Neri',
      amount: 150,
      split: 'Family',
      allocationMode: 'individual',
      allocations: {},
      settled: false,
      linkedEntityKeys: [makeEntityKey('location', 'changi-airport')],
      note: 'City is compact; MRT covers most of it, Grab for the zoo and luggage days.',
    },
  ]
}

function buildTasks() {
  return [
    {
      id: 'task-passports',
      type: 'task',
      title: 'Passports valid 6+ months',
      dayId: 'd01',
      status: 'done',
      ownerFamilyId: 'neri',
      linkedEntityKeys: [makeEntityKey('family', 'neri')],
      note: '',
    },
    {
      id: 'task-insurance',
      type: 'task',
      title: 'Travel insurance sorted',
      dayId: 'd01',
      status: 'done',
      ownerFamilyId: 'neri',
      linkedEntityKeys: [makeEntityKey('family', 'neri')],
      note: '',
    },
    {
      id: 'task-tickets',
      type: 'task',
      title: 'Book Gardens / USS / Zoo tickets',
      dayId: 'd01',
      status: 'open',
      ownerFamilyId: 'neri',
      linkedEntityKeys: [
        makeEntityKey('family', 'neri'),
        makeEntityKey('activity', 'act-sentosa'),
      ],
      note: '',
    },
    {
      id: 'task-pack-tropical',
      type: 'task',
      title: 'Pack for tropical heat + rain',
      dayId: 'd01',
      status: 'open',
      ownerFamilyId: 'neri',
      linkedEntityKeys: [makeEntityKey('family', 'neri')],
      note: '',
    },
    {
      id: 'task-sgac',
      type: 'task',
      title: 'SG Arrival Card (within 3 days of arrival)',
      dayId: 'd02',
      status: 'open',
      ownerFamilyId: 'neri',
      linkedEntityKeys: [
        makeEntityKey('family', 'neri'),
        makeEntityKey('itineraryItem', 'ingress'),
      ],
      note: '',
    },
    {
      id: 'task-esim',
      type: 'task',
      title: 'eSIM / Singtel tourist data',
      dayId: 'd02',
      status: 'open',
      ownerFamilyId: 'neri',
      linkedEntityKeys: [
        makeEntityKey('family', 'neri'),
        makeEntityKey('stayItem', 'sg-stay-checkin'),
      ],
      note: '',
    },
  ]
}

function buildRoutes() {
  return [
    {
      id: 'route-ingress',
      type: 'route',
      title: 'Changi to basecamp',
      dayId: 'd02',
      familyId: 'neri',
      tone: 'critical',
      originCoordinates: { lat: 1.3644, lng: 103.9915 },
      stopLocationIds: [],
      destinationLocationId: 'pine-airbnb',
      simulationStartSlot: 6.6,
      simulationEndSlot: 7.3,
      durationSeconds: 0.5 * 60 * 60,
      simulationMilestones: [
        { t: 0, progress: 0 },
        { t: 1, progress: 1 },
      ],
      path: [
        { lat: 1.3644, lng: 103.9915 },
        PUBLIC_BASECAMP_COORDINATES,
      ],
      linkedEntityKey: makeEntityKey('itineraryItem', 'ingress'),
    },
    {
      id: 'route-egress',
      type: 'route',
      title: 'Basecamp to Changi',
      dayId: 'd12',
      familyId: 'neri',
      tone: 'warning',
      dashed: true,
      originCoordinates: PUBLIC_BASECAMP_COORDINATES,
      stopLocationIds: ['jewel-changi'],
      destinationLocationId: 'changi-airport',
      simulationStartSlot: 46,
      simulationEndSlot: 46.7,
      durationSeconds: 0.5 * 60 * 60,
      simulationMilestones: [
        { t: 0, progress: 0 },
        { t: 1, progress: 1 },
      ],
      path: [
        PUBLIC_BASECAMP_COORDINATES,
        { lat: 1.3601, lng: 103.9895 },
        { lat: 1.3644, lng: 103.9915 },
      ],
      linkedEntityKey: makeEntityKey('itineraryItem', 'egress'),
    },
  ]
}

export function createInitialTripDocument() {
  return {
    selectedPage: 'itinerary',
    selection: DEFAULT_SELECTION,
    pageNotes: {
      itinerary: 'Singapore 2027: land Aug 18, food day Aug 19 (Makansutra), then a swappable run of city days through Aug 27, fly home Aug 28.',
      stay: 'Basecamp is a Marina Bay placeholder until the hotel is booked. Everything is planned around a city-centre stay on the MRT.',
      meals: 'Makansutra Gluttons Bay is the anchor. The rest lean on hawker centres (Maxwell, Newton, Lau Pa Sat) with one chili-crab splurge.',
      activities: 'Aug 18 arrival and Aug 19 food are set; Aug 20 to Aug 27 are suggestions (Gardens, Sentosa, Zoo, Chinatown, Little India, Orchard, Southern Ridges, Jewel) meant to be swapped.',
      expenses: 'Keep this light. Placeholders for flights, hotel, attractions, food, and transport.',
      families: 'Single family (Neri): passports, SG Arrival Card, eSIM, insurance, and tickets before departure.',
    },
    pageNoteMeta: {},
    ui: {
      searchQuery: '',
      timeline: {
        mode: 'scenario',
        cursorSlot: 3,
      },
      map: {
        showRoutes: true,
        showFacilities: true,
        showTraffic: false,
        focusFamilyId: 'all',
        focusDayId: 'all',
      },
    },
    families: buildFamilies(),
    locations: buildLocations(),
    routes: synchronizeRoutePaths(buildRoutes(), buildLocations()),
    itineraryItems: buildItineraryItems(),
    meals: buildMeals(),
    activities: buildActivities(),
    stayItems: buildStayItems(),
    expenses: buildExpenses(),
    tasks: buildTasks(),
  }
}

export function synchronizeRoutePaths(routes = [], locations = []) {
  const locationById = new Map(locations.map((location) => [location.id, location]))

  return routes.map((route) => {
    if (!route.originCoordinates || !route.destinationLocationId) return route

    const destination = locationById.get(route.destinationLocationId)?.coordinates
    const stopPoints = (route.stopLocationIds || [])
      .map((locationId) => locationById.get(locationId)?.coordinates)
      .filter(Boolean)

    if (!destination) return route

    return {
      ...route,
      path: [route.originCoordinates, ...stopPoints, destination],
    }
  })
}

export function migrateLegacyState(raw) {
  const doc = createInitialTripDocument()
  if (!raw || typeof raw !== 'object') return doc

  if (typeof raw.selectedPage === 'string') {
    doc.selectedPage = raw.selectedPage
  }

  if (raw.notes && typeof raw.notes === 'object') {
    doc.pageNotes = { ...doc.pageNotes, ...raw.notes }
  }

  if (Array.isArray(raw.meals)) {
    doc.meals = doc.meals.map((meal) => {
      const existing = raw.meals.find((item) => item.id === meal.id)
      return existing ? { ...meal, status: existing.status || meal.status, note: existing.note || meal.note } : meal
    })
  }

  if (Array.isArray(raw.expenses)) {
    doc.expenses = doc.expenses.map((expense) => {
      const existing = raw.expenses.find((item) => item.id === expense.id)
      return existing
        ? {
            ...expense,
            settled: typeof existing.settled === 'boolean' ? existing.settled : expense.settled,
            title: existing.title || expense.title,
            payer: existing.payer || expense.payer,
            amount: typeof existing.amount === 'number' ? existing.amount : expense.amount,
            split: existing.split || expense.split,
            allocationMode: existing.allocationMode || expense.allocationMode,
            allocations: existing.allocations && typeof existing.allocations === 'object'
              ? existing.allocations
              : expense.allocations,
            note: existing.note || expense.note,
          }
        : expense
    })
  }

  if (Array.isArray(raw.families)) {
    doc.families = doc.families.map((family) => {
      const existing = raw.families.find((item) => item.id === family.id)
      return existing
        ? {
            ...family,
            readiness: typeof existing.readiness === 'number' ? existing.readiness : family.readiness,
            status: existing.status || family.status,
            responsibility: existing.responsibility || family.responsibility,
            routeSummary: existing.routeSummary || family.routeSummary,
          }
        : family
    })

    const taskStatusById = {}
    raw.families.forEach((family) => {
      const mapping = LEGACY_FAMILY_TASKS[family.id] || {}
      ;(family.checklist || []).forEach((item) => {
        const taskId = mapping[item.id]
        if (taskId) {
          taskStatusById[taskId] = item.done ? 'done' : 'open'
        }
      })
    })

    doc.tasks = doc.tasks.map((task) =>
      taskStatusById[task.id] ? { ...task, status: taskStatusById[task.id] } : task,
    )

    if (typeof raw.selectedFamilyId === 'string') {
      doc.selection = { type: 'family', id: raw.selectedFamilyId }
    }
  }

  return doc
}

function refreshSeededCollection(existing = [], seeded = [], preserveFields = []) {
  const existingById = new Map(existing.map((item) => [item.id, item]))

  return seeded.map((item) => {
    const current = existingById.get(item.id)
    if (!current) return item

    const preserved = preserveFields.reduce((acc, field) => {
      if (current[field] !== undefined) acc[field] = current[field]
      return acc
    }, {})

    return {
      ...item,
      ...preserved,
    }
  })
}

function routeStructureMatches(currentRoute, seededRoute) {
  if (!currentRoute || !seededRoute) return false

  const currentOrigin = currentRoute.originCoordinates || null
  const seededOrigin = seededRoute.originCoordinates || null
  const sameOrigin =
    currentOrigin?.lat === seededOrigin?.lat
    && currentOrigin?.lng === seededOrigin?.lng

  const currentStops = currentRoute.stopLocationIds || []
  const seededStops = seededRoute.stopLocationIds || []
  const sameStops =
    currentStops.length === seededStops.length
    && currentStops.every((stopId, index) => stopId === seededStops[index])

  return sameOrigin && sameStops && currentRoute.destinationLocationId === seededRoute.destinationLocationId
}

function refreshSeededDoc(doc) {
  const seeded = createInitialTripDocument()
  const locations = refreshSeededCollection(doc.locations, seeded.locations, [
    'note',
    'lastEditedByFamilyId',
    'lastEditedAt',
    'title',
    'placesQuery',
    'placeId',
    'address',
    'coordinates',
    'externalUrl',
    'phoneNumber',
    'websiteUrl',
    'rating',
    'userRatingsTotal',
    'openingHours',
    'livePhotos',
    'basecampDrive',
  ])

  const currentRoutesById = new Map(doc.routes.map((route) => [route.id, route]))
  const routes = seeded.routes.map((route) => {
    const current = currentRoutesById.get(route.id)
    if (!current) return route

    const preserveLiveRouting = routeStructureMatches(current, route)

    return {
      ...route,
      ...(preserveLiveRouting
        ? {
            path: current.path,
            durationSeconds: current.durationSeconds,
            durationText: current.durationText,
            distanceMeters: current.distanceMeters,
            distanceText: current.distanceText,
          }
        : {}),
      note: current.note,
      lastEditedByFamilyId: current.lastEditedByFamilyId,
      lastEditedAt: current.lastEditedAt,
    }
  })

  return {
    ...doc,
    families: refreshSeededCollection(doc.families, seeded.families, [
      'readiness',
      'status',
      'responsibility',
      'note',
      'lastEditedByFamilyId',
      'lastEditedAt',
    ]),
    locations,
    itineraryItems: refreshSeededCollection(doc.itineraryItems, seeded.itineraryItems),
    stayItems: refreshSeededCollection(doc.stayItems, seeded.stayItems, ['note', 'lastEditedByFamilyId', 'lastEditedAt']),
    expenses: refreshSeededCollection(doc.expenses, seeded.expenses, [
      'title',
      'payer',
      'amount',
      'split',
      'settled',
      'allocationMode',
      'allocations',
      'note',
      'createdByFamilyId',
      'createdAt',
      'lastEditedByFamilyId',
      'lastEditedAt',
    ]),
    routes: synchronizeRoutePaths(routes, locations),
  }
}

export function getInitialTripDocument() {
  if (typeof window === 'undefined') return createInitialTripDocument()

  try {
    const rawCurrent = window.localStorage.getItem(TRIP_DOCUMENT_STORAGE_KEY)
    if (rawCurrent) {
      const parsed = JSON.parse(rawCurrent)
      if (parsed?.locations && parsed?.selection) return refreshSeededDoc(parsed)
    }
  } catch {
    return createInitialTripDocument()
  }

  return createInitialTripDocument()
}

export function clearLegacyTripStorage() {
  if (typeof window === 'undefined') return
  LEGACY_TRIP_DOCUMENT_STORAGE_KEYS.forEach((key) => window.localStorage.removeItem(key))
  LEGACY_VIEWER_PROFILE_STORAGE_KEYS.forEach((key) => window.localStorage.removeItem(key))
}

export function getLocationForEntity(doc, entity) {
  if (!entity) return null
  if (entity.type === 'location') return entity
  if (!entity.locationId) return null
  return getEntityById(doc, 'location', entity.locationId)
}

export function getTasksForEntity(doc, entity) {
  if (!entity) return []
  const entityKey = makeEntityKey(entity.type, entity.id)
  return doc.tasks.filter((task) => {
    if (entity.taskIds?.includes(task.id)) return true
    return (task.linkedEntityKeys || []).includes(entityKey)
  })
}

export function getLinkedEntities(doc, entity) {
  if (!entity) return []

  const seen = new Set()
  const linked = []

  const pushEntity = (item) => {
    if (!item) return
    const key = makeEntityKey(item.type, item.id)
    if (key === makeEntityKey(entity.type, entity.id) || seen.has(key)) return
    seen.add(key)
    linked.push(item)
  }

  ;(entity.linkedEntityKeys || []).forEach((key) => {
    const ref = parseEntityKey(key)
    pushEntity(getEntityById(doc, ref.type, ref.id))
  })

  if (entity.locationId) {
    pushEntity(getEntityById(doc, 'location', entity.locationId))
  }

  getTasksForEntity(doc, entity).forEach(pushEntity)

  return linked
}

export function getEntitySummary(entity) {
  if (!entity) return ''
  if (entity.type === 'family') return `${entity.origin} inbound, ${entity.headcount}`
  if (entity.type === 'meal') return `${getDayMeta(entity.dayId)?.shortLabel || entity.dayId} at ${entity.timeLabel}`
  if (entity.type === 'activity') return entity.window
  if (entity.type === 'location') return entity.address
  if (entity.type === 'stayItem') return entity.category
  if (entity.type === 'expense') return `${entity.payer} · $${entity.amount}`
  if (entity.type === 'itineraryItem') return getSlotLabel(entity.startSlot)
  if (entity.type === 'task') return entity.status
  return ''
}

export function getSearchResults(doc, query) {
  if (!query?.trim()) return []
  const normalized = query.trim().toLowerCase()
  const types = ['family', 'meal', 'activity', 'location', 'stayItem', 'expense', 'itineraryItem', 'task']
  const items = types.flatMap((type) =>
    getCollection(doc, type).map((item) => ({
      ...item,
      type,
      searchText: [
        item.title,
        item.name,
        item.summary,
        item.note,
        item.address,
        item.description,
        item.backup,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase(),
    })),
  )

  return items
    .filter((item) => item.searchText.includes(normalized))
    .slice(0, 8)
}

export function getTimelineContext(doc, overrideCursorSlot = doc.ui.timeline.cursorSlot) {
  const cursorSlot = overrideCursorSlot
  const liveEntities = [...doc.itineraryItems, ...doc.meals].filter((item) => {
    const span = getItineraryItemEffectiveSpan(doc, item)
    return cursorSlot >= item.startSlot && cursorSlot < item.startSlot + span
  })

  const nextEntities = [...doc.itineraryItems, ...doc.meals]
    .filter((item) => item.startSlot > cursorSlot)
    .sort((a, b) => a.startSlot - b.startSlot)
    .slice(0, 4)

  const prepSoon = nextEntities
    .flatMap((item) => getTasksForEntity(doc, item))
    .filter((task) => task.status !== 'done')
    .filter((task, index, array) => array.findIndex((candidate) => candidate.id === task.id) === index)
    .slice(0, 5)

  const riskWatch = [...doc.activities, ...doc.itineraryItems]
    .filter((item) => item.riskLevel === 'High' || item.status === 'Watch')
    .slice(0, 4)

  return {
    cursorSlot,
    cursorLabel: getSlotLabel(cursorSlot),
    liveEntities,
    nextEntities,
    prepSoon,
    riskWatch,
  }
}

export function getDependencyPrompts(doc, entity) {
  const tasks = getTasksForEntity(doc, entity).filter((task) => task.status !== 'done')
  return tasks.slice(0, 3).map((task) => ({
    id: `prompt-${entity.type}-${entity.id}-${task.id}`,
    label: task.title,
    reason: entity.type === 'activity'
      ? `${getEntityTitle(entity)} depends on this before go-time.`
      : 'This is still unresolved and is linked to the selected item.',
  }))
}

export function getRouteForEntity(doc, entity) {
  if (!entity) return null
  if (entity.routeId) return getEntityById(doc, 'route', entity.routeId)
  const entityKey = makeEntityKey(entity.type, entity.id)
  const directRoute = doc.routes.find((route) => route.linkedEntityKey === entityKey)
  if (directRoute) return directRoute

  for (const linkedKey of entity.linkedEntityKeys || []) {
    const linkedRoute = doc.routes.find((route) => route.linkedEntityKey === linkedKey)
    if (linkedRoute) return linkedRoute
  }

  return null
}

export function updateEntityInCollection(collection, id, updater) {
  return collection.map((item) => (item.id === id ? updater(item) : item))
}

function replacePublicStrings(value) {
  if (typeof value !== 'string' || !value) return value
  return value
}

function sanitizePublicText(value, fallback = '') {
  if (typeof value !== 'string') return fallback
  return replacePublicStrings(value)
}

function sanitizeFamilyEntity(family) {
  const profile = PUBLIC_FAMILY_PROFILES[family.id]
  if (!profile) {
    return {
      ...family,
      note: '',
    }
  }

  return {
    ...family,
    title: profile.title,
    name: profile.name,
    shortOrigin: profile.shortOrigin,
    origin: profile.origin,
    originAddress: profile.originAddress,
    originCoordinates: profile.originCoordinates,
    responsibility: profile.responsibility,
    routeSummary: profile.routeSummary,
    note: profile.note,
  }
}

function sanitizeLocationEntity(location) {
  if (location.id === 'pine-airbnb') {
    return {
      ...location,
      title: PUBLIC_BASECAMP.name,
      address: PUBLIC_BASECAMP.address,
      coordinates: PUBLIC_BASECAMP.coordinates,
      summary: PUBLIC_BASECAMP.summary,
      accessNote: PUBLIC_BASECAMP.accessNote,
      directionsNote: PUBLIC_BASECAMP.directionsNote,
      parkingNote: PUBLIC_BASECAMP.parkingNote,
      lockNote: PUBLIC_BASECAMP.lockNote,
      checkIn: PUBLIC_BASECAMP.checkIn,
      checkOut: PUBLIC_BASECAMP.checkOut,
      wifiNetwork: PUBLIC_BASECAMP.wifiNetwork,
      wifiPassword: PUBLIC_BASECAMP.wifiPassword,
      hostName: PUBLIC_BASECAMP.hostName,
      coHostName: PUBLIC_BASECAMP.coHostName,
      guestSummary: PUBLIC_BASECAMP.guestSummary,
      confirmationCode: PUBLIC_BASECAMP.confirmationCode,
      vehicleFee: PUBLIC_BASECAMP.vehicleFee,
      externalUrl: PUBLIC_BASECAMP.externalUrl,
      manualUrl: PUBLIC_BASECAMP.manualUrl,
      photos: PUBLIC_BASECAMP.photos,
      livePhotos: [],
      websiteUrl: null,
      phoneNumber: null,
      reservationNote: null,
      note: '',
    }
  }

  return {
    ...location,
    title: sanitizePublicText(location.title),
    summary: sanitizePublicText(location.summary),
    note: '',
    reservationNote: sanitizePublicText(location.reservationNote || ''),
    address: sanitizePublicText(location.address),
  }
}

function sanitizeStayItemEntity(item) {
  return {
    ...item,
    title: sanitizePublicText(item.title),
    summary: PUBLIC_STAY_SUMMARIES[item.id] || sanitizePublicText(item.summary),
    note: PUBLIC_STAY_NOTES[item.id] || '',
  }
}

function sanitizeExpenseEntity(expense) {
  return {
    ...expense,
    title: sanitizePublicText(expense.title),
    payer: PUBLIC_EXPENSE_PAYER,
    allocations: {},
    note: '',
  }
}

function sanitizeGenericEntity(entity) {
  return {
    ...entity,
    title: sanitizePublicText(entity.title),
    name: sanitizePublicText(entity.name),
    summary: sanitizePublicText(entity.summary),
    note: '',
    description: sanitizePublicText(entity.description),
    backup: sanitizePublicText(entity.backup),
    routeSummary: sanitizePublicText(entity.routeSummary),
    owner: sanitizePublicText(entity.owner),
    payer: sanitizePublicText(entity.payer),
  }
}

export function projectTripDocument(doc, visibilityMode = 'public') {
  if (visibilityMode !== 'public') return doc

  const sanitizedFamilies = doc.families.map(sanitizeFamilyEntity)

  const projected = {
    ...doc,
    pageNotes: Object.fromEntries(Object.keys(doc.pageNotes || {}).map((key) => [key, ''])),
    pageNoteMeta: {},
    families: sanitizedFamilies,
    locations: doc.locations.map(sanitizeLocationEntity),
    stayItems: doc.stayItems.map(sanitizeStayItemEntity),
    expenses: doc.expenses.map(sanitizeExpenseEntity),
    meals: doc.meals.map(sanitizeGenericEntity),
    activities: doc.activities.map(sanitizeGenericEntity),
    itineraryItems: doc.itineraryItems.map(sanitizeGenericEntity),
    tasks: doc.tasks.map(sanitizeGenericEntity),
  }

  projected.routes = synchronizeRoutePaths(
    doc.routes.map((route) => {
      const nextRoute = {
        ...route,
        title: sanitizePublicText(route.title),
        note: '',
      }

      if (route.id === 'route-sf-desert-bloom') {
        nextRoute.originCoordinates = PUBLIC_FAMILY_PROFILES['desert-bloom'].originCoordinates
        if (route.path?.length) {
          nextRoute.path = [PUBLIC_FAMILY_PROFILES['desert-bloom'].originCoordinates, ...route.path.slice(1)]
        }
      }

      if (route.id === 'route-sun-home-desert-bloom' && route.path?.length) {
        nextRoute.path = [
          ...route.path.slice(0, -1),
          PUBLIC_FAMILY_PROFILES['desert-bloom'].originCoordinates,
        ]
      }

      return nextRoute
    }),
    projected.locations,
  )

  return projected
}

export function getSelectablePageEntities(doc, pageId) {
  switch (pageId) {
    case 'itinerary':
      return [...doc.activities, ...doc.itineraryItems]
    case 'stay':
      return [...doc.stayItems, ...doc.locations.filter((location) => location.category === 'stay')]
    case 'meals':
      return doc.meals
    case 'activities':
      return doc.activities
    case 'expenses':
      return doc.expenses
    case 'families':
      return doc.families
    default:
      return []
  }
}

export function ensureSelectionForPage(doc, pageId) {
  const selected = getEntityBySelection(doc, doc.selection)
  if (selected && isEntityOnPage(selected, pageId)) return doc.selection
  const fallback = getSelectablePageEntities(doc, pageId)[0]
  return fallback ? { type: fallback.type, id: fallback.id } : DEFAULT_SELECTION
}

export function getTasksByFamily(doc, familyId) {
  return doc.tasks.filter((task) => task.ownerFamilyId === familyId)
}

export function getFamilyReadiness(doc, familyId) {
  const tasks = getTasksByFamily(doc, familyId)
  if (!tasks.length) return 100
  const doneCount = tasks.filter((task) => task.status === 'done').length
  return Math.round((doneCount / tasks.length) * 100)
}

export function getTasksForDay(doc, dayId) {
  return doc.tasks.filter((task) => task.dayId === dayId)
}

export function getPageNote(doc, pageId) {
  return doc.pageNotes[pageId] || ''
}

export function getFamilyFilterOptions(doc) {
  return [
    { id: 'all', label: 'All Families' },
    ...doc.families.map((family) => ({ id: family.id, label: family.title })),
  ]
}
