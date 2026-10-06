# Waterjon — Abyss Pinball 3D

The 3D version of the Abyss Pinball table. It has the same rules, scoring and physics as the 2D version, now in a real-time 3D cabinet:

- Glossy playfield that reflects the ball, the bumpers and the lights.
- Soft shadows, bloom on every lamp and LED, and a dark machine room reflected in the chrome.
- A ramp, slingshots and a jackpot target built as real 3D pieces.
- Two giant kraken tentacles that rise behind the backboard. They thrash red during multiball and strike on every jackpot.
- Bubbles, sparks, light shafts and caustics on the seabed under the cabinet.
- A camera that drifts with the ball, sweeps in from the menu, and pushes in on the Kraken Lock.

It's built with Three.js (graphics) and Matter.js (physics). It uses the exact Matter build Phaser 3.55 ships, bundled into `game.js`, so the ball behaves exactly like the 2D table. All art is drawn in code, so there are no image files.

Files: `index.html`, `style.css`, `game.js`.

## Run it locally

Browsers block some features on `file://`, so serve the folder:

```bash
cd abyss-pinball-3d
python3 -m http.server 8080
# open http://localhost:8080
```

## Graphics settings

Open **SOUND & GRAPHICS** to choose:

- **AUTO** (the default) starts on HIGH. If the frame rate stays low for a few seconds, it switches to LOW.
- **HIGH** adds real-time shadows, bloom, playfield reflections and a clear-coat finish. On phones it renders at up to 1.6x pixel density.
- **LOW** turns off shadows, bloom and reflections and renders at 1.25x. Use it for older phones.

The choice is saved in the browser.

## Use your own track

**Option A: built in (everyone hears it).**
1. Put your file next to `index.html`, e.g. `audio/pressure-drop.mp3`.
2. Near the top of `game.js`, set:
   ```js
   const AUDIO_SRC = 'audio/pressure-drop.mp3';
   ```
   Search the file for `AUDIO_SRC`. It's just below the bundled physics library.
3. Re-upload the folder.

**Option B: in the game.** Tap **SOUND & GRAPHICS → LOAD TRACK** and pick an MP3, WAV or OGG. This only lasts for that browser session.

How the music behaves:
- It starts when the first ball is launched. Phones only allow audio after a tap, and the launch counts as that tap.
- It loops for the whole run and fades out on game over.
- With no track the music is silent. Sound effects still play.

## Deploy to a static site

The three files (plus your audio, if any) are the whole game. No build step is needed.

- **Netlify:** drag the folder onto app.netlify.com/drop.
- **GitHub Pages:** push the folder to a repo, then Settings → Pages → deploy from the main branch.
- **Vercel / Cloudflare Pages:** import the repo with no framework and no build command.
- **Your own site:** upload the folder, e.g. to `waterjon.com/pinball3d/`.

The page loads Three.js r147 from `cdn.jsdelivr.net` and the fonts from Google Fonts. To host fully offline, download those scripts (`three.min.js` plus the eight `examples/js` files listed in `index.html`) and the fonts, then point the tags at your copies.

## High scores and the online leaderboard

This works the same as the 2D table:
- Each player's top 10 scores are saved in their browser (`localStorage`), and their callsign is remembered.
- All reads and writes go through the async `Leaderboard` object in `game.js`.
- To make the leaderboard global, fill in the commented `RemoteAdapter` (a Supabase REST example), then set `Leaderboard.adapter = RemoteAdapter`.

## Tuning

These constants are near the top of `game.js`, after the bundled physics library:
- **Scoring:** `SCORE`.
- **Feel:** `GRAVITY`, `LAUNCH`, `FLIP`, `BUMPER_KICK`, `SLING_KICK`, `MAX_SPEED`.
- **Timers:** `BALL_SAVE_MS`, `COMBO_MS`, `MAX_MULT`.
- **Skill shot:** `SKILL_ZONE`.
- **Ramp height (3D only):** `RAMP_H`.

Lighting, camera and materials live in the `TableView` class:
- `buildLights` for the lights.
- `fitCamera` and `updateCamera` for the camera.
- `buildMaterials` for the materials.

## Controls

| | Desktop | Touch |
|---|---|---|
| Left flipper | ← / A / Left Shift | left half of the screen |
| Right flipper | → / D / Right Shift | right half of the screen |
| Plunger | hold Space, release | press the shooter lane (bottom right), pull down, release |
| Pause / mute | P / M | buttons in the top corners |

While you hold the plunger, a meter lights up on the lane divider. Release inside the highlighted band to arm the Trench Lane skill shot.
