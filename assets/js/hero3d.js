/* PS Digital Studios – hero 3D background.
   Purely decorative: floating low-poly indigo shapes behind the hero text.
   Safe by design: if Three.js fails to load, or the browser has no WebGL,
   this script simply does nothing and the existing gradient background shows instead. */
(function () {
  'use strict';
  if (typeof THREE === 'undefined') return;

  const mount = document.getElementById('hero3d');
  if (!mount) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  } catch (e) {
    return; // no WebGL support -> silently skip, gradient background remains
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 11);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  mount.appendChild(renderer.domElement);

  // Soft lighting so the wireframe/solid mix has gentle shading, not flat silhouettes.
  scene.add(new THREE.AmbientLight(0x8890ff, 0.7));
  const key = new THREE.PointLight(0xffffff, 0.9);
  key.position.set(6, 6, 8);
  scene.add(key);
  const rim = new THREE.PointLight(0x6366f1, 0.8);
  rim.position.set(-8, -4, 4);
  scene.add(rim);

  const group = new THREE.Group();
  scene.add(group);

  // A handful of simple, low-poly shapes in the brand's indigo tones, scattered
  // through the hero's empty space so they read as ambient depth, not clutter.
  const palette = [0x6366f1, 0x8b8ef8, 0x4a43d8];
  const shapes = [];
  function addShape(geometry, x, y, z, scale, wire) {
    const color = palette[shapes.length % palette.length];
    const material = wire
      ? new THREE.MeshBasicMaterial({ color: color, wireframe: true, transparent: true, opacity: 0.45 })
      : new THREE.MeshStandardMaterial({ color: color, roughness: 0.35, metalness: 0.15, transparent: true, opacity: 0.9 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.scale.setScalar(scale);
    mesh.userData.baseY = y;
    mesh.userData.speed = 0.4 + Math.random() * 0.5;
    mesh.userData.phase = Math.random() * Math.PI * 2;
    mesh.userData.spin = (0.08 + Math.random() * 0.12) * (Math.random() < 0.5 ? -1 : 1);
    group.add(mesh);
    shapes.push(mesh);
  }

  addShape(new THREE.IcosahedronGeometry(1.5, 0), 6.2, 2.4, -2, 1, true);
  addShape(new THREE.TorusGeometry(1, 0.32, 12, 40), -6.4, -2.6, -3, 1, false);
  addShape(new THREE.OctahedronGeometry(1.1, 0), 5.4, -3.4, -1, 0.9, true);
  addShape(new THREE.IcosahedronGeometry(0.7, 0), -5.6, 3.2, -1.5, 0.8, false);

  function layout() {
    const w = mount.clientWidth, h = mount.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  layout();
  window.addEventListener('resize', layout);

  // Gentle parallax toward the pointer on desktop only; touch devices skip this.
  let targetX = 0, targetY = 0;
  if (canHover) {
    mount.closest('.hero').addEventListener('mousemove', (e) => {
      const r = mount.getBoundingClientRect();
      targetX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      targetY = ((e.clientY - r.top) / r.height - 0.5) * 2;
    });
  }

  let running = true;
  const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    running = entries[0].isIntersecting;
  }, { threshold: 0.05 }) : null;
  if (io) io.observe(mount);
  document.addEventListener('visibilitychange', () => { if (document.hidden) running = false; else if (!io || mount.getBoundingClientRect().bottom > 0) running = true; });

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    if (!running) return;
    const t = clock.getElapsedTime();
    shapes.forEach((m) => {
      m.position.y = m.userData.baseY + Math.sin(t * m.userData.speed + m.userData.phase) * 0.35;
      m.rotation.x += 0.003 * m.userData.spin;
      m.rotation.y += 0.005 * m.userData.spin;
    });
    group.rotation.y += (targetX * 0.15 - group.rotation.y) * 0.04;
    group.rotation.x += (targetY * 0.08 - group.rotation.x) * 0.04;
    renderer.render(scene, camera);
  }

  if (reduceMotion) {
    // Respect the person's OS-level motion preference: render one still frame only.
    renderer.render(scene, camera);
  } else {
    animate();
  }
})();
