import ant from '../assets/tilemaps/ant.json';
import asymmetrical from '../assets/tilemaps/asymmetrical.json';
import box from '../assets/tilemaps/box.json';
import challenge from '../assets/tilemaps/challenge.json';
import dilbert from '../assets/tilemaps/dilbert.json';
import down from '../assets/tilemaps/down.json';
import fall from '../assets/tilemaps/fall.json';
import invert from '../assets/tilemaps/invert.json';
import maze from '../assets/tilemaps/maze.json';
import precise from '../assets/tilemaps/precise.json';
import restart from '../assets/tilemaps/restart.json';
import spikes from '../assets/tilemaps/spikes.json';
import start from '../assets/tilemaps/start.json';

export const levels = [
  // 1
  {
    text: 'Arrow/WASD to move & jump',
    json: start,
  },

  // 2
  {
    text: 'Press Spacebar to invert player',
    json: invert,
  },

  // 3
  {
    text: 'Press R to restart the level',
    json: restart,
  },

  // 4
  {
    text: 'Watch out for spikes',
    json: spikes,
  },

  // 5
  {
    text: "Don't look down",
    json: down,
  },

  // 6
  {
    text: 'Jump carefully...',
    json: precise,
  },

  // 7
  {
    text: "Something's different",
    json: asymmetrical,
  },

  // 8
  {
    text: 'Go down the rabbit hole',
    json: ant,
  },

  // 9
  {
    text: 'Exit the maze',
    json: maze,
  },

  // 10
  {
    text: 'Face your troubles',
    json: dilbert,
  },

  // 11
  {
    text: "What's with the box?",
    json: box,
  },

  // 12
  {
    text: 'Take a leap of faith',
    json: fall,
  },

  // 13
  {
    text: 'Think carefully...',
    json: challenge,
  },
] as const;
