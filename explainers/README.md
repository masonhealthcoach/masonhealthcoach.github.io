# Explainer videos (source, not part of the website)

EP.01 "Your body can't tell the difference between a tiger and your inbox": 3D (three.js) human + mechanical tiger in a HUD panel, 24s, 1080x1920.

Rebuild:
1. `npm i three@0.160.0` inside a folder `npmt/` next to `tiger.html`
2. `python3 -m http.server 8765` in this folder
3. `node still3.js "7,12.5"` for check frames, `node render3.js` for the MP4 (needs Playwright + ffmpeg; uses SwiftShader WebGL)

EP.02 models: tiger (Sketchfab, licence/author to confirm), "James realistic male character" by StormierTunic16, CC-BY-4.0. Model files are not committed; put them in assets/ (Tiger.glb, tiger_col/nrm/ao.png, james/scene.gltf+bin+textures).
