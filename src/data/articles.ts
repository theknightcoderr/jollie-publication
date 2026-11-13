/* MOCK DATA - replace before launch */
import type { Article, ArticleBlock } from '@/types';
import { calculateReadingMinutes } from '@/lib/readingTime';

type RawArticle = Omit<Article, 'readingMinutes'>;

const rawArticles: RawArticle[] = [
  {
    id: 'art-1',
    slug: 'on-the-margins-of-old-sea-charts',
    title: 'On the Margins of Old Sea Charts: Why Writers Need Unmapped Space',
    excerpt:
      'Before coastal surveys were standardised, hydrographers filled blank quadrants with soundings, weather notes, and honest admissions of uncertainty.',
    authorUsername: 'clara-vance',
    categorySlug: 'essays',
    publishedOn: '2026-10-28T09:30:00Z',
    likes: 84,
    comments: 4,
    editorsPick: true,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'In the maritime archives of any old port town, the most revealing documents are rarely the finished copperplate engravings sold to shipowners. They are the working fair sheets—wide linen-backed charts stained with salt water and pencil smudges, where assistant surveyors recorded depth soundings by hand as their rowing boats crossed a sandbar at low tide.',
      },
      {
        type: 'paragraph',
        text: 'What strikes a novelist looking at those sheets is not the precision of the ruled compass roses, but the candour of the margins. Where a fog bank rolled in before the lead-line could be cast, the draughtsman simply wrote in neat copperplate: “Shifting shoals reported by local herring boats; not yet sounded.” Where a cliff line was crumbling faster than the trig points could be fixed, a dotted line sufficed.',
      },
      {
        type: 'heading',
        text: 'The Temptation of Over-Explaining',
      },
      {
        type: 'paragraph',
        text: 'When we sit down to revise a novel or a long essay, our first instinct is often to pave over every dotted line. We worry that if we do not account for every year of a character’s childhood, or explain the exact provenance of every room they enter, the reader will lose trust in our authority. So we fill the page with explanatory scaffolding until no air remains between the rafters.',
      },
      {
        type: 'quote',
        text: 'A durable piece of prose trusts the reader to navigate by a handful of true soundings rather than a map that claims to measure every pebble on the shore.',
        cite: 'Clara Vance, Working Notebooks',
      },
      {
        type: 'paragraph',
        text: 'Yet the books we return to across decades almost always preserve regions of deliberate reticence. Think of the way a seasoned storyteller describes a harbour at dusk: the creak of a fender against wet timber, a single hurricane lamp lit in the customs shed, and then silence. Because the writer does not insist on cataloguing every rope coil on the quay, our own memory steps in to supply the chill of the wind and the smell of coal smoke.',
      },
      {
        type: 'paragraph',
        text: 'During structural editing, the most liberating question we can ask of any chapter is not “What else can I add to make this convincing?” but “Which three soundings are essential to keep the vessel afloat, and what can be left as open water?” When we leave an honest margin around our scenes, the work breathes—and the reader becomes a fellow navigator rather than a passenger locked below deck.',
      },
      {
        type: 'paragraph',
        text: 'Next time a draft feels crowded or airless, take a pencil to the paragraphs where you are explaining a motive that a gesture has already shown. Erase the explanation, leave the gesture standing like a solitary beacon on the headland, and trust the tide to carry the rest.',
      },
    ],
  },
  {
    id: 'art-2',
    slug: 'architecture-of-the-municipal-reading-room',
    title: 'High Windows and Long Tables: The Quiet Civic Promise of the Reading Room',
    excerpt:
      'Why nineteenth- and twentieth-century municipal libraries placed their windows above eye level—and what that geometry teaches us about shared attention.',
    authorUsername: 'miriam-okafor',
    categorySlug: 'essays',
    publishedOn: '2026-10-19T11:00:00Z',
    likes: 112,
    comments: 3,
    editorsPick: true,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'Walk into almost any municipal reference library built between 1880 and 1935 and you will notice two architectural constants before you open a single volume. First, the tables are heavy oak, wide enough that two strangers sitting opposite each other never brush elbows when turning the pages of an atlas. Second, the sills of the great arched windows begin seven or eight feet above the parquet floor.',
      },
      {
        type: 'paragraph',
        text: 'To a casual visitor, those high sills can seem austere, as though the architect wished to wall out the street. In truth, the design solved two practical problems at once: it freed the entire lower perimeter of the room for continuous bookshelves, and it angled northern daylight downward across the centre of the room without casting the glare of passing carriages into the eyes of readers.',
      },
      {
        type: 'heading',
        text: 'Solitude in Company',
      },
      {
        type: 'paragraph',
        text: 'More importantly, those high windows created a distinct psychological microclimate. Seated at a long table beneath a thirty-foot plaster ceiling, you can see the changing silver of the sky and the top branches of plane trees, yet you are temporarily released from the hurry of the pavement outside. You are alone with your notebook, but you are not isolated.',
      },
      {
        type: 'quote',
        text: 'A public reading room is one of the few civic institutions where presence requires neither purchase nor performance—only shared quiet.',
        cite: 'Miriam Okafor, Letters to an Unbuilt City',
      },
      {
        type: 'paragraph',
        text: 'Across the room, a retired engineer may be cross-referencing parish maps while a student translates lines of verse and a job-seeker drafts a letter. None of them need speak a word to one another, yet the rhythmic rustle of turning pages and the scratch of fountain pens form a subtle pact of mutual concentration. Someone else’s steadiness keeps you at your desk for another half-hour when your own resolve wavers.',
      },
      {
        type: 'paragraph',
        text: 'As we build digital spaces for writers and readers today, we would do well to borrow the proportions of those old municipal halls. We do not need flashing notifications, competitive leaderboards, or endless scrolling feeds clamoring for urgency. We need high windows, generous margins, warm paper tones, and a long table where serious work is treated with quiet respect.',
      },
      {
        type: 'paragraph',
        text: 'When a literary platform honours the reader’s attention by refusing to clutter the room, it restores something essential to our literary culture: the sense that words matter enough to be read slowly, in good light, alongside neighbours who care just as deeply.',
      },
    ],
  },
  {
    id: 'art-3',
    slug: 'the-timetable-at-kestrel-halt',
    title: 'The Timetable at Kestrel Halt',
    excerpt:
      'Every Tuesday at four-seventeen, the branch train slowed at a platform that had not sold a ticket since the winter of eighty-four.',
    authorUsername: 'rowan-lindqvist',
    categorySlug: 'short-fiction',
    publishedOn: '2026-10-11T15:20:00Z',
    likes: 96,
    comments: 2,
    editorsPick: true,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'Officially, Kestrel Halt had been struck from the regional passenger timetable in the autumn of 1984, the same month the timber yard closed and the post office amalgamated with the village three miles down the valley. Yet the enamel station sign—white Gill Sans lettering on faded crimson—remained bolted to the concrete lamp standard, because nobody at the district depot had ever signed a requisition order for a spanner and a ladder.',
      },
      {
        type: 'paragraph',
        text: 'More puzzling to new guards working the 16:17 diesel railcar from Market Cross was the standing instruction pencilled into the footplate logbook: “Check speed to fifteen miles per hour approaching milepost 14¼; sound horn once; exchange parcel bag with Mr H. Finch if lantern shown on platform.”',
      },
      {
        type: 'heading',
        text: 'The Blue Canvas Satchel',
      },
      {
        type: 'paragraph',
        text: 'Mr Finch was eighty-one and lived in the former crossing-keeper’s cottage whose gooseberry bushes pressed right against the iron palings. Every Tuesday afternoon, regardless of drizzle or east wind, he stood by the whitewashed coping stones wearing a tweed cap and holding a brass railwayman’s hand-lamp with a clean wick. Slung over his forearm was a heavy blue canvas mailbag stitched with leather corners.',
      },
      {
        type: 'paragraph',
        text: 'Inside the satchel were no letters bearing postage stamps. Instead, there were four or five cloth-bound library books tied with butcher’s twine, a tin of comb honey from his three hives behind the signal box, and a folded slip of foolscap addressed to Mrs Dalziel, thevolunteer librarian at the mechanics’ institute in Market Cross.',
      },
      {
        type: 'quote',
        text: '“Please return the second volume of the county flora,” the slip would read in steady purple ink. “The binding is holding admirably, though page 114 bears an old watermark of tea—not mine. Send anything on arctic voyages or orchard grafting.”',
      },
      {
        type: 'paragraph',
        text: 'As the two-car train eased past the willow herb at walking pace, the guard would lean out of the sliding luggage door, hook the incoming bag from Finch’s outstretched arm, and drop the outgoing satchel onto the gravel beside the bench. The whole transaction lasted less than four seconds. Finch would raise two fingers to his cap brim; the driver would release the brake valve with a sharp hiss; and the diesel engine would gather its modest dignity back toward the viaduct.',
      },
      {
        type: 'paragraph',
        text: 'When a young operations inspector rode the cab in November to audit trackside delays, he tapped his stopwatch and asked the driver what tariff covered an unscheduled parcel exchange at a closed halt. The driver looked down the straight gleaming rails toward the valley mist and replied quietly, “Ballast settlement, sir. The culvert under milepost fourteen needs a gentle tread—and if Mrs Dalziel doesn’t get her books back on Tuesday, the whole branch line loses its bearings.” The inspector closed his notebook, pocketed his watch, and wrote down: “Track condition satisfactory.”',
      },
    ],
  },
  {
    id: 'art-4',
    slug: 'in-praise-of-the-scissors-and-paste-pot',
    title: 'In Praise of the Scissors and the Paste-Pot: Tactile Revision in a Digital Age',
    excerpt:
      'Why printing a recalcitrant chapter onto cheap paper and cutting it into strips with kitchen scissors solves structural knots a cursor never sees.',
    authorUsername: 'nadia-al-mansoor',
    categorySlug: 'craft',
    publishedOn: '2026-09-29T10:00:00Z',
    likes: 73,
    comments: 2,
    editorsPick: true,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'Word processors are marvellous inventions for composing sentences, correcting typos, and searching for the seventeen occasions on which you have inadvertently described a room as “dimly lit.” They are, however, remarkably poor instruments for perceiving the large-scale architecture of a chapter.',
      },
      {
        type: 'paragraph',
        text: 'On a fourteen-inch screen, every paragraph occupies the same glowing rectangular viewport. You cannot see the beginning of a scene and its ending simultaneously; you can only scroll up and down through a vertical tunnel, losing your sense of proportion the way a walker in a dense pine plantation loses sight of the ridge line.',
      },
      {
        type: 'heading',
        text: 'Spreading the Draft Across the Floor',
      },
      {
        type: 'paragraph',
        text: 'Whenever a story stalls in its middle pages, the fastest remedy is also the oldest. Print the draft single-sided on plain recycled paper, clear the dining table or a patch of floorboards, and take up a pair of long-bladed scissors. Cut the chapter apart wherever the scene shifts, the tone alters, or a new speaker enters.',
      },
      {
        type: 'paragraph',
        text: 'Once those twenty or thirty slips of paper are laid out side by side, structural imbalances become visible from six feet away. You see immediately that three consecutive pages consist entirely of retrospective summary before anyone in the room speaks a word. You notice that the image of the brass key introduced on page two does not reappear until page nineteen, and that the true ending of the story is hiding three paragraphs before the final page.',
      },
      {
        type: 'quote',
        text: 'The hand understands weight and sequence in a way the scroll wheel cannot replicate.',
        cite: 'Nadia Al-Mansoor',
      },
      {
        type: 'paragraph',
        text: 'Move the slips around with your fingers. Place the ending where the opening used to sit; tuck two redundant paragraphs into an envelope marked “Compost—save for another book”; tape the surviving strips onto fresh sheets of foolscap with paper tape, and write the new bridging sentences by hand in the gaps between them.',
      },
      {
        type: 'paragraph',
        text: 'When you return to the keyboard an hour later to type in the revised sequence, you are no longer nudging clauses around in the dark. You have held the proportions of the piece in your hands, and the prose carries the crispness of a deliberate cut.',
      },
    ],
  },
  {
    id: 'art-5',
    slug: 'three-winter-herbarium-studies',
    title: 'Three Winter Herbarium Studies',
    excerpt:
      'A sequence of lyric poems on pressed meadowsweet, iron-gall ink, and the frost line along an orchard wall.',
    authorUsername: 'julian-mercer',
    categorySlug: 'poetry',
    publishedOn: '2026-10-22T08:15:00Z',
    likes: 68,
    comments: 1,
    editorsPick: true,
    isMock: true,
    body: [
      {
        type: 'heading',
        text: 'I. Folio 14: Meadowsweet (1892)',
      },
      {
        type: 'poem',
        lines: [
          'Held down by strips of gummed linen tape,',
          'the stalk keeps the bend of a July ditch',
          'where carts once turned above the weir.',
          '',
          'No scent remains in the papery umbel,',
          'only the rust-brown shadow it pressed',
          'into the rag-pulp opposite page—',
          '',
          'as if memory were not the flower itself',
          'but the slight darkening left on the sheet',
          'that closed upon it for a hundred winters.',
        ],
      },
      {
        type: 'heading',
        text: 'II. Iron-Gall Recipe',
      },
      {
        type: 'poem',
        lines: [
          'Crush the oak-apple gathered after frost;',
          'steep in rainwater caught from slate,',
          'stirring with a twig of peeled ash.',
          '',
          'At first the line goes down pale as whey,',
          'hardly visible against the laid cream leaf—',
          'wait until the air has done its work:',
          'what was faintest darkens into permanence.',
        ],
      },
    ],
  },
  {
    id: 'art-6',
    slug: 'limestone-and-weather-cock-at-high-cairn',
    title: 'Limestone and Weather-Cock at High Cairn',
    excerpt:
      'Two upland poems composed along the old drovers’ track above the limestone scar.',
    authorUsername: 'theo-bellingham',
    categorySlug: 'poetry',
    publishedOn: '2026-09-18T17:40:00Z',
    likes: 51,
    comments: 0,
    editorsPick: false,
    isMock: true,
    body: [
      {
        type: 'poem',
        lines: [
          'Seven drystone courses break the gale',
          'between the sheepfold and the cloud-base;',
          'lichen maps a parish older than the spire.',
          '',
          'In the lee of the coping-stone, a wren',
          'waits out the squall with folded wing,',
          'measuring the valley by a single call.',
          '',
          'We carry down no souvenir of stone—',
          'only the cadence of the stepping-stile',
          'and cold rain drying on a woollen sleeve.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Composed during a two-day walk along the northern ridge in early September, where the old packhorse slabs cross the watershed.',
      },
    ],
  },
  {
    id: 'art-7',
    slug: 'smell-of-wheat-paste-and-unbleached-linen',
    title: 'Wheat Paste and Unbleached Linen: My First Week in the Bindery',
    excerpt:
      'In the autumn of 1969, I was taught to fold sixteen-page signatures with a bone folder before I was permitted to touch a single leather spine.',
    authorUsername: 'arthur-pendelton',
    categorySlug: 'memoir',
    publishedOn: '2026-09-12T12:00:00Z',
    likes: 64,
    comments: 1,
    editorsPick: false,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'The workshop occupied the first floor of a former seed warehouse behind the corn exchange. Even on warm afternoons, the floorboards smelled of alum, beeswax, and the small enamel saucepan of flour-and-water paste that simmered on a gas ring by the sink.',
      },
      {
        type: 'paragraph',
        text: 'Master Gillingham handed me a smooth six-inch slip of ox-bone—rounded at one end, tapered at the other—and a stack of five hundred flat printed sheets that had arrived from the letterpress printer that morning. “If your first fold is out by the thickness of a thumbnail,” he said, not unkindly, “the margins will wander like sheep by the time the book reaches the guillotine. Watch the page numerals, not the edge of the paper.”',
      },
      {
        type: 'paragraph',
        text: 'By Friday evening my right thumb ached, but the rhythm had entered my wrist: lift, align the folio numbers against the light, crease once from the centre outward, and stack under the beechwood pressing board. Half a century later, whenever I open a new paperback and see the running heads sit square across the spread, I still hear the quiet tap of that bone folder against the bench.',
      },
    ],
  },
  {
    id: 'art-8',
    slug: 'carrying-the-idiom-across-the-river',
    title: 'Carrying the Idiom Across the River: On Translating Spoken Rhythm',
    excerpt:
      'Why literal accuracy is only the beginning when translating dialogue, proverbs, and regional humour.',
    authorUsername: 'devika-sen',
    categorySlug: 'translation',
    publishedOn: '2026-09-04T14:10:00Z',
    likes: 59,
    comments: 0,
    editorsPick: false,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'Every translator eventually encounters a sentence whose dictionary meaning is transparent, yet whose emotional temperature vanishes the moment it is rendered word for word into English. Often it is a domestic proverb spoken by an grandmother in a kitchen doorway, or a teasing form of address between two childhood friends.',
      },
      {
        type: 'paragraph',
        text: 'If you translate the proverb literally, the English sentence sounds like an anthropological curio; if you substitute a familiar British idiom, you risk transplanting a Yorkshire fireside into the middle of a monsoon courtyard. The craft lies in tuning the syntax—the placement of the verb, the breath before the final clause—so that English carries the cadence of the original tongue without pretending the river was never crossed.',
      },
      {
        type: 'quote',
        text: 'Good translation does not erase the border; it builds a well-proportioned bridge where both banks remain visible.',
        cite: 'Devika Sen',
      },
    ],
  },
  {
    id: 'art-9',
    slug: 'the-art-of-the-quiet-opening-sentence',
    title: 'Against the Fireworks Opening: The Enduring Power of the Quiet First Sentence',
    excerpt:
      'Literary criticism on why so many lasting novels begin not with a melodramatic hook, but with a calm establishment of voice and weather.',
    authorUsername: 'devika-sen',
    categorySlug: 'criticism',
    publishedOn: '2026-08-25T10:30:00Z',
    likes: 77,
    comments: 0,
    editorsPick: false,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'Well-meaning advice columns often instruct emerging novelists that their opening sentence must grab the reader by the lapels like an urgent telegram. Yet when we take down twenty enduring novels from our shelves, remarkably few begin with a gunshot or a riddle.',
      },
      {
        type: 'paragraph',
        text: 'Instead, they begin by tuning an instrument. They establish a narrator whose way of noticing the world—whether ironical, tender, or exact—makes us wish to remain in their company for three hundred pages. Confidence of cadence, rather than volume of incident, is the true invitation into a book.',
      },
    ],
  },
  {
    id: 'art-10',
    slug: 'the-clockmaker-of-lantern-lane',
    title: 'The Clockmaker of Lantern Lane',
    excerpt:
      'A short fable about an apprentice who collected the lost minutes dropped by hurried townsfolk at the market cross.',
    authorUsername: 'elena-rostova',
    categorySlug: 'short-fiction',
    publishedOn: '2026-08-14T16:00:00Z',
    likes: 62,
    comments: 0,
    editorsPick: false,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'At the foot of the market clocktower stood a narrow shop with a bow window full of brass pendulums, none of which swung at quite the same speed. Old Master Thorne maintained that standard railway time was useful enough for boiling eggs and catching omnibuses, but wholly unsuitable for reading fables or watching bread rise.',
      },
      {
        type: 'paragraph',
        text: 'Every Saturday evening after the stalls were packed away, his apprentice Tobias swept the cobblestones beneath the archway with a soft heather broom. Among the chestnut husks and ribbon ends, he always found three or four translucent glass beads—spare minutes that busy merchants had dropped while rushing to count their ledgers.',
      },
      {
        type: 'paragraph',
        text: 'Tobias polished each one with chamois leather and set them inside the winter lanterns delivered to the children’s hospital on the hill, so that bedtime stories there lasted twice as long as the town hall clock claimed.',
      },
    ],
  },
  {
    id: 'art-11',
    slug: 'notes-on-sequencing-a-poetry-pamphlet',
    title: 'How Poems Talk to Their Neighbours: Sequencing a First Pamphlet',
    excerpt:
      'Arranging twenty poems into a collection is closer to hanging an exhibition in a small gallery than compiling a chronological diary.',
    authorUsername: 'julian-mercer',
    categorySlug: 'craft',
    publishedOn: '2026-08-02T09:00:00Z',
    likes: 54,
    comments: 0,
    editorsPick: false,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'When poets gather their work for a first pamphlet, the natural temptation is either to place the strongest three pieces at the very front or to arrange the manuscript in the order the poems were written. Both approaches overlook what happens across the gutter of an open book.',
      },
      {
        type: 'paragraph',
        text: 'When a short lyric on a verso page faces a longer narrative piece on the recto, the two poems enter into conversation before the reader has even finished the first stanza. Pay attention to the final image of every left-hand page and the opening noun of every right-hand page; when those hinges chime rather than clash, twenty separate poems become a single book.',
      },
    ],
  },
  {
    id: 'art-12',
    slug: 'grandmothers-tin-of-postcards-from-aden',
    title: 'The Biscuit Tin of Postcards: Reconstructing a Port Childhood',
    excerpt:
      'How forty hand-tinted harbour postcards and three shipping receipts helped piece together a family’s migration across the Arabian Sea.',
    authorUsername: 'nadia-al-mansoor',
    categorySlug: 'memoir',
    publishedOn: '2026-07-21T13:45:00Z',
    likes: 81,
    comments: 0,
    editorsPick: false,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'For thirty years the rectangular biscuit tin sat on the top shelf of my aunt’s linen cupboard, its painted lid faded to the colour of dried sage. Inside were no family photographs—only forty-two unposted picture postcards of steamer quays, coaling lighters, and signal stations, each bearing a pencilled date on the reverse in my grandfather’s clerkly hand.',
      },
      {
        type: 'paragraph',
        text: 'In life writing, we often grieve the absence of formal diaries. Yet small material traces—a purple customs stamp, the name of a coastal vessel, the price of a bolt of muslin written in the corner of an envelope—hold an anchor in historical reality that memory alone cannot supply. When we listen patiently to objects, they return the voices of the people who carried them.',
      },
    ],
  },
  {
    id: 'art-13',
    slug: 'bilingual-editions-and-the-facing-page',
    title: 'The Hospitality of the Facing Page: Why Bilingual Poetry Editions Matter',
    excerpt:
      'Even for readers with only a handful of words in the source language, seeing the original stanza beside its translation transforms the reading experience.',
    authorUsername: 'julian-mercer',
    categorySlug: 'translation',
    publishedOn: '2026-07-09T11:20:00Z',
    likes: 47,
    comments: 0,
    editorsPick: false,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'A bilingual poetry edition does something quietly radical: it declines to hide the original poem behind the curtain of translation. Placed en face—original on the left, English on the right—the book invites the reader’s eye to travel back and forth across the spine.',
      },
      {
        type: 'paragraph',
        text: 'Even if you do not speak the source tongue fluently, you can see the stanza lengths, the recurring rhyme words, the sudden short line at the turn of a sonnet, and the typographical music of the page. It reminds us that every poem has a physical body as well as a paraphraseable meaning.',
      },
    ],
  },
  {
    id: 'art-14',
    slug: 'on-rereading-provincial-chronicles',
    title: 'Small Towns, Large Canvases: Why the Provincial Novel Never Dates',
    excerpt:
      'A close reading of how bounded geographical settings allow novelists to trace the subtlest shifts in social weather.',
    authorUsername: 'clara-vance',
    categorySlug: 'criticism',
    publishedOn: '2026-06-28T15:00:00Z',
    likes: 69,
    comments: 0,
    editorsPick: false,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'Critics sometimes use the word “provincial” as shorthand for narrow horizons. Yet in fiction, a bounded parish—a market town of four streets, a valley served by a single postbus, an island where every surname is known—acts like a concave mirror.',
      },
      {
        type: 'paragraph',
        text: 'Because the characters cannot simply disappear into a crowd of millions when a misunderstanding arises, they must meet again the next morning at the baker’s counter or the parish vestry. That inescapable proximity forces moral nuance into the open, turning small domestic rooms into stages of enduring human scale.',
      },
    ],
  },
  {
    id: 'art-15',
    slug: 'choosing-a-serif-for-the-long-page',
    title: 'Choosing a Serif for the Long Page: A Typesetter’s Primer for Authors',
    excerpt:
      'Why x-height, leading, and paper shade matter just as much as cover art when preparing a book for print.',
    authorUsername: 'rowan-lindqvist',
    categorySlug: 'craft',
    publishedOn: '2026-06-15T10:15:00Z',
    likes: 88,
    comments: 0,
    editorsPick: false,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'Good interior typesetting is an invisible art. When a reader finishes a three-hundred-page novel without once rubbing their eyes or losing their place as their gaze sweeps from the end of one line to the beginning of the next, the typesetter has done their job well.',
      },
      {
        type: 'paragraph',
        text: 'The secret lies in three quiet relationships: a measure between sixty and seventy characters wide, generous leading that lets ascenders and descenders clear one another without crowding, and a warm off-white paper stock that softens the contrast between ink and page. Treat the interior page with the same respect you give the prose.',
      },
    ],
  },
  {
    id: 'art-16',
    slug: 'walking-the-old-salt-way-in-october',
    title: 'Walking the Old Salt Way in October',
    excerpt:
      'Field diaries from a three-day walk following mediaeval packhorse milestones from the Cheshire plains toward the hills.',
    authorUsername: 'theo-bellingham',
    categorySlug: 'memoir',
    publishedOn: '2026-06-02T08:45:00Z',
    likes: 58,
    comments: 0,
    editorsPick: false,
    isMock: true,
    body: [
      {
        type: 'paragraph',
        text: 'Long before turnpike trusts or canals crossed the county, trains of packhorses carried wicker panniers of evaporated salt along sunken green lanes that still follow the parish boundaries today. You can recognise a salt way by the width of its hedgerows and the deep hollow worn into the sandstone where the track climbs an escarpment.',
      },
      {
        type: 'paragraph',
        text: 'Walking those holloways in late October, with field maples turning amber overhead and woodsmoke drifting from farmhouses below, you feel the continuity of human footsteps across centuries—each traveller reading the same camber of the ground.',
      },
    ],
  },
];

export const articles: Article[] = rawArticles.map((article) => ({
  ...article,
  readingMinutes: calculateReadingMinutes(article.body),
}));

export function getBlocksWordCount(blocks: ArticleBlock[]): number {
  return blocks.reduce((acc, b) => {
    if (b.type === 'poem') return acc + b.lines.join(' ').split(/\s+/).filter(Boolean).length;
    if ('text' in b) return acc + b.text.split(/\s+/).filter(Boolean).length;
    return acc;
  }, 0);
}