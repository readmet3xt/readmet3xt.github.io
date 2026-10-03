import type { FC } from 'react';
import { BLUEPRINT_FRAMES, HeroBlueprint } from './comps/HeroBlueprint';
import { HeroPath, PATH_FRAMES } from './comps/HeroPath';
import { HeroResearch, RESEARCH_FRAMES } from './comps/HeroResearch';
import { HeroWho, WHO_FRAMES } from './comps/HeroWho';
import {
  LOST_FRAMES,
  TILE_FRAMES,
  TILE_H,
  TILE_W,
  TileIvi,
  TileKoinBasket,
  TileLawx,
  TileLner,
  TileLost,
  TileOtagon,
  TilePebble,
  TileScreenshot,
  TileStampede,
  TileVersus,
} from './comps/Tiles';
import { WELCOME_FRAMES, Welcome } from './comps/Welcome';
import type { LookProps } from './theme';

export type MotionEntry = {
  component: FC<LookProps>;
  durationInFrames: number;
  /** the most telling frame: shown at rest and when animations are off */
  poster?: number;
  /** what the animation shows, for screen readers */
  label: string;
};

/** Landscape on wide screens, portrait on phones. */
export const STORY_SIZE = { wide: { width: 1280, height: 720 }, tall: { width: 600, height: 800 } };

/** One design process, start to end: each story ends where the next begins. */
export const HERO_STORIES: (MotionEntry & { title: string })[] = [
  { title: 'Understand people', component: HeroResearch, durationInFrames: RESEARCH_FRAMES, label: 'People talk; what they say becomes notes; the notes cluster into patterns; one pattern becomes the insight.' },
  { title: 'Design and build', component: HeroBlueprint, durationInFrames: BLUEPRINT_FRAMES, label: 'The insight becomes the key touchpoint in a service blueprint; a person walks the service; that touchpoint becomes an app they use, and people test it.' },
  { title: 'Who I design for', component: HeroWho, durationInFrames: WHO_FRAMES, label: 'I design services for remote teams, rail passengers, conservation partners, first-time crypto investors and players stuck in a game. And then I build them.' },
];

/** "My path so far" plays on its own at the top of the About page. */
export const PATH_STORY: MotionEntry & { title: string } = { title: 'My path so far', component: HeroPath, durationInFrames: PATH_FRAMES, label: 'Mechanical engineering in Hyderabad, the Royal College of Art, research with VISA, BCG and WWT × Airbnb, Softwire, KoinBasket, Otagon, and now service and product design.' };

export const TILE_SIZE = { width: TILE_W, height: TILE_H };

/** One looping tile per case study, keyed by route. */
export const TILES: Record<string, MotionEntry> = {
  '/pebble': { component: TilePebble, durationInFrames: TILE_FRAMES, poster: 150, label: 'Six remote workers drift apart, then gather round a virtual café.' },
  '/stampede': { component: TileStampede, durationInFrames: TILE_FRAMES, poster: 150, label: 'Seven animal archetypes on a Power and Pace chart; a walrus and a bumblebee pair up.' },
  '/iviprogram': { component: TileIvi, durationInFrames: TILE_FRAMES, poster: 150, label: 'Unpaid care tasks on a 24-hour clock turn from invisible to visible.' },
  '/softwire': { component: TileLner, durationInFrames: TILE_FRAMES, poster: 150, label: 'A rail ticket clip shows five essentials, then one tap to pay, while a train passes.' },
  '/koinbasket': { component: TileKoinBasket, durationInFrames: TILE_FRAMES, poster: 150, label: 'Coins drop into a curated basket while the funds stay with the person.' },
  '/otagon': { component: TileOtagon, durationInFrames: TILE_FRAMES, poster: 150, label: 'Pressing F1 sends a screenshot to the phone, and a hint arrives that stops before spoilers.' },
  '/lawx': { component: TileLawx, durationInFrames: TILE_FRAMES, poster: 150, label: 'Each line of an AI answer links to the source that backs it, and each source is checked.' },
  '/versus': { component: TileVersus, durationInFrames: TILE_FRAMES, poster: 150, label: 'A live tournament bracket fills in during a game night.' },
  '/screenshot': { component: TileScreenshot, durationInFrames: TILE_FRAMES, poster: 150, label: 'Screenshots fly from a PC into a phone gallery.' },
};

export const LOST_TILE: MotionEntry = { component: TileLost, durationInFrames: LOST_FRAMES, poster: 100, label: 'A person walks off the service map and finds their way back.' };

export const WELCOME: MotionEntry = { component: Welcome, durationInFrames: WELCOME_FRAMES, label: 'hi. i’m amaan.' };
