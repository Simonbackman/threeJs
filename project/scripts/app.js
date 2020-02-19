function init() {
  var scene = new THREE.Scene();
  var gui = new dat.GUI();
  var box = getBox(1, 1, 1);
  var plane = getPlane(14.8);
  var pointLight = getPointLight(1);
  var sun = getSphere(2.05);

  // box.position.y = box.geometry.parameters.height / 2;
  box.position.y = 2;
  box.position.x = 5;
  box.position.z = 2;

  plane.rotation.x = Math.PI / 2;
  plane.position.y = -0.25;
  pointLight.position.y = 15;
  pointLight.position.z = 1.4;
  pointLight.intensity = 1;

  gui.add(pointLight, 'intensity', 0, 2.5);
  gui.add(pointLight.position, 'x', -10, 10);
  // gui.add(pointLight.position, 'y', 0, 10);
  // gui.add(pointLight.position, 'z', -10, 10);

  gui.add(box.position, 'x', -10, 10);
  gui.add(box.position, 'z', -10, 10);

  var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.x = -35;
  camera.position.y = 25;
  camera.position.z = 40;

  camera.lookAt(new THREE.Vector3(0, 0, 0));

  var renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor('rgb(120, 120, 120)');
  document.getElementById('webgl').appendChild(renderer.domElement);

  var controls = new THREE.OrbitControls(camera, renderer.domElement);

  var lightAmbient = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(lightAmbient);
  /*=======
    Textures
    =======*/
  var textureWood = new THREE.TextureLoader().load('./textures/treeWood.bmp');
  var textureLeaves = new THREE.TextureLoader().load('./textures/leaves.bmp');
  var textureG = new THREE.TextureLoader().load('./textures/grass2.bmp');
  var textureR = new THREE.TextureLoader().load('./textures/water.bmp');
  var texture = new THREE.TextureLoader().load('./textures/grass.jpg');

  var woodFloor = new THREE.TextureLoader().load('./textures/woodFloor.bmp');

  scene.add(box);
  scene.add(plane);
  pointLight.add(sun);
  scene.add(pointLight);

  var material_grass = new THREE.MeshLambertMaterial({
    map: texture
  });

  // Behind waterfall
  var geometry_back = new THREE.BoxGeometry(0.1, 4.5, 6);
  var ground_back = new THREE.Mesh(geometry_back, material_grass);
  ground_back.position.set(7.5, 2, -4.55);
  scene.add(ground_back);

  var ground_backWaterFall2 = new THREE.BoxGeometry(0.5, 0.5, 6);
  var ground_backWaterFall2 = new THREE.Mesh(
    ground_backWaterFall2,
    material_grass
  );
  ground_backWaterFall2.position.set(7.2, 0.001, -4.55);
  scene.add(ground_backWaterFall2);

  // grassland Left
  var geometry_left = new THREE.BoxGeometry(2, 4.2, 2);
  var ground_left = new THREE.Mesh(geometry_left, material_grass);
  ground_left.position.set(6.45, 2.1, -6.55);
  scene.add(ground_left);

  var geometry_right = new THREE.BoxGeometry(9, 1.6, 2);
  var ground_leftD = new THREE.Mesh(geometry_right, material_grass);
  ground_leftD.position.set(2.5, 0.6, -6.55);
  scene.add(ground_leftD);

  var geometry_right = new THREE.BoxGeometry(2.5, 1.6, 2);
  var ground_leftD2 = new THREE.Mesh(geometry_right, material_grass);
  ground_leftD2.position.set(4.5, 1.6, -6.55);
  scene.add(ground_leftD2);

  var geometry_right = new THREE.BoxGeometry(2, 2.1, 2);
  var ground_leftD3 = new THREE.Mesh(geometry_right, material_grass);
  ground_leftD3.position.set(5.9, 3, -6.55);
  scene.add(ground_leftD3);

  var geometry_right = new THREE.BoxGeometry(0.5, 2.5, 2);
  var ground_leftD4 = new THREE.Mesh(geometry_right, material_grass);
  ground_leftD4.position.set(4.8, 2.5, -6.55);
  scene.add(ground_leftD4);

  var geometry_right = new THREE.BoxGeometry(0.5, 1, 2);
  var ground_leftD4 = new THREE.Mesh(geometry_right, material_grass);
  ground_leftD4.position.set(4.3, 2.9, -6.55);
  scene.add(ground_leftD4);

  var geometry_right = new THREE.BoxGeometry(0.5, 0.5, 2);
  var ground_leftD4 = new THREE.Mesh(geometry_right, material_grass);
  ground_leftD4.position.set(3.8, 2.6, -6.55);
  scene.add(ground_leftD4);

  var geometry_right = new THREE.BoxGeometry(0.5, 0.8, 2);
  var ground_leftD5 = new THREE.Mesh(geometry_right, material_grass);
  ground_leftD5.position.set(3.25, 1.8, -6.55);
  scene.add(ground_leftD5);

  var geometry_right = new THREE.BoxGeometry(0.5, 0.4, 2);
  var ground_leftD6 = new THREE.Mesh(geometry_right, material_grass);
  ground_leftD6.position.set(2.77, 1.6, -6.55);
  scene.add(ground_leftD6);

  //grassland right
  var geometry_right = new THREE.BoxGeometry(2, 4.3, 2);
  var ground_right = new THREE.Mesh(geometry_right, material_grass);
  ground_right.position.set(6.5, 2.1, -2.55);
  scene.add(ground_right);

  // Grass Ground Right
  var geometry_right = new THREE.BoxGeometry(9, 1.6, 2);
  var ground_rightD = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD.position.set(2.5, 0.6, -2.55);
  scene.add(ground_rightD);

  var geometry_right = new THREE.BoxGeometry(2.5, 1.6, 2);
  var ground_rightD2 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD2.position.set(4.5, 1.6, -2.55);
  scene.add(ground_rightD2);

  var geometry_right = new THREE.BoxGeometry(2, 2.1, 2);
  var ground_rightD3 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD3.position.set(5.9, 3, -2.55);
  scene.add(ground_rightD3);

  var geometry_right = new THREE.BoxGeometry(0.5, 2.5, 2);
  var ground_rightD4 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD4.position.set(4.8, 2.5, -2.55);
  scene.add(ground_rightD4);

  var geometry_right = new THREE.BoxGeometry(0.5, 1, 2);
  var ground_rightD4 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD4.position.set(4.3, 2.9, -2.55);
  scene.add(ground_rightD4);

  var geometry_right = new THREE.BoxGeometry(0.5, 0.5, 2);
  var ground_rightD4 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD4.position.set(3.8, 2.6, -2.55);
  scene.add(ground_rightD4);

  var geometry_right = new THREE.BoxGeometry(0.5, 0.8, 2);

  var ground_rightD5 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD5.position.set(3.25, 1.8, -2.55);
  scene.add(ground_rightD5);

  var geometry_right = new THREE.BoxGeometry(0.5, 0.4, 2);
  var ground_rightD6 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD6.position.set(2.77, 1.6, -2.55);
  scene.add(ground_rightD6);

  var geometry_right = new THREE.BoxGeometry(3, 1.6, 1);
  var ground_rightD7 = new THREE.Mesh(geometry_right, material_grass);
  //   ground_rightD7.rotation.y = 85.9;
  ground_rightD7.rotation.y = 85;
  ground_rightD7.position.set(-2, 0.58, -2.6);
  scene.add(ground_rightD7);

  // around Water pool
  var geometry_right = new THREE.BoxGeometry(5.4, 1.6, 1.4);
  var ground_rightD8 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD8.rotation.y = 52.9;
  ground_rightD8.position.set(-4.2, 0.59, -2.5);
  scene.add(ground_rightD8);

  var geometry_right = new THREE.BoxGeometry(2.8, 1.6, 1.4);
  var ground_rightD9 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD9.rotation.y = 1.55;
  ground_rightD9.position.set(-5.4, 0.58, -4.8);
  scene.add(ground_rightD9);

  var geometry_right = new THREE.BoxGeometry(3.8, 1.6, 1.7);
  var ground_rightD10 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD10.position.set(-3.4, 0.58, -6.7);
  scene.add(ground_rightD10);

  // Piece in river
  var geometry_right = new THREE.BoxGeometry(1, 0.6, 0.4);
  var ground_rightD11 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD11.rotation.y = 0.5;
  ground_rightD11.position.set(-4.3, 0.8, -5.9);
  scene.add(ground_rightD11);

  var geometry_right = new THREE.BoxGeometry(1.8, 1.6, 1.7);
  var ground_rightD12 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD12.position.set(-6.2, 0.58, -6.7);
  scene.add(ground_rightD12);

  var geometry_right = new THREE.BoxGeometry(1.8, 1.6, 3.7);
  var ground_rightD13 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD13.position.set(-6.5, 0.6, -5.7);
  scene.add(ground_rightD13);

  var geometry_right = new THREE.BoxGeometry(1.8, 1.6, 3.7);
  var ground_rightD14 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD14.position.set(-6.5, 0.6, -2);
  scene.add(ground_rightD14);

  var geometry_right = new THREE.BoxGeometry(1.8, 1.6, 8.7);
  var ground_rightD15 = new THREE.Mesh(geometry_right, material_grass);
  ground_rightD15.rotation.y = 1.55;
  ground_rightD15.position.set(-2.8, 0.58, -1.55);
  scene.add(ground_rightD15);

  /* =========
    River Parts
    
    ==========*/

  var material_river = new THREE.MeshLambertMaterial({
    color: 0x6bc6ff,
    map: textureR
  });

  //rivers
  var geometry_river = new THREE.BoxGeometry(2, 4.1, 2);
  var river = new THREE.Mesh(geometry_river, material_river);
  river.position.set(6.5, 2.1, -4.55);
  scene.add(river);

  var geometry_river = new THREE.BoxGeometry(3, 2.1, 2);
  var river2 = new THREE.Mesh(geometry_river, material_river);
  river2.position.set(5.2, 1.1, -4.55);
  scene.add(river2);

  var geometry_river = new THREE.BoxGeometry(0.5, 1.6, 2);
  var river3 = new THREE.Mesh(geometry_river, material_river);
  river3.position.set(3.7, 0.7, -4.55);
  scene.add(river3);

  var geometry_river = new THREE.BoxGeometry(1.9, 2.1, 2);
  var river4 = new THREE.Mesh(geometry_river, material_river);
  river4.position.set(5, 1.8, -4.55);
  scene.add(river4);

  var geometry_river = new THREE.BoxGeometry(0.9, 1.1, 2);
  var river5 = new THREE.Mesh(geometry_river, material_river);
  river5.position.set(5, 2.8, -4.55);
  scene.add(river5);

  var geometry_river = new THREE.BoxGeometry(0.2, 1.3, 2);
  var river6 = new THREE.Mesh(geometry_river, material_river);
  river6.position.set(5.4, 3.4, -4.55);
  scene.add(river6);

  var geometry_river = new THREE.BoxGeometry(0.2, 1.3, 2);
  var river7 = new THREE.Mesh(geometry_river, material_river);
  river7.position.set(5.29, 3.25, -4.55);
  scene.add(river7);

  var geometry_river = new THREE.BoxGeometry(0.3, 1.3, 2);
  var river8 = new THREE.Mesh(geometry_river, material_river);
  river8.position.set(5.1, 3.1, -4.55);
  scene.add(river8);

  var geometry_river = new THREE.BoxGeometry(0.2, 0.3, 2);
  var river9 = new THREE.Mesh(geometry_river, material_river);
  river9.position.set(4.85, 3.5, -4.55);
  scene.add(river9);

  var geometry_river = new THREE.BoxGeometry(0.2, 1.6, 2);
  var river10 = new THREE.Mesh(geometry_river, material_river);
  river10.position.set(3.7, 0.9, -4.55);
  scene.add(river10);

  var geometry_river = new THREE.BoxGeometry(9, 1, 2);
  var landRiver = new THREE.Mesh(geometry_river, material_river);
  landRiver.position.set(3, 0.4, -4.55);
  scene.add(landRiver);

  // water pool
  var geometry = new THREE.CircleGeometry(2, 6);
  var circleW = new THREE.Mesh(geometry, material_river);
  circleW.position.y = 0.9;
  circleW.position.x = -3;
  circleW.position.z = -4.5;
  circleW.rotation.x = 4.72;
  circleW.rotation.z = 11;
  scene.add(circleW);

  // var HouseWindowBe = new THREE.BoxGeometry(1, 0.1, 10);
  // var HouseWindowBe = new THREE.Mesh(HouseWindowBe, material_house);
  // HouseWindowBe.position.set(3, 1, 13);
  // HouseWindowBe.rotation.x = 1.58;
  // scene.add(HouseWindowBe);

  //river bed
  // var geometry_bed = new THREE.BoxGeometry(1, .05, 4);
  // var bed = new THREE.Mesh(geometry_bed, material_grass);
  // bed.position.set(-4.5, .025, -5.55);
  // scene.add(bed);

  // var geometry_bed = new THREE.BoxGeometry(1, .05, 2);
  // var bed2 = new THREE.Mesh(geometry_bed, material_grass);
  // bed.position.set(.5, .025, -6.55);
  // scene.add(bed2);

  let loader = new THREE.GLTFLoader();
  loader.load('./house/scene.gltf', function(gltf) {
    scene.add(gltf.scene);
    gltf.position.set(24, 24, 24);
    // house = gltf.scene.children[0];
  });

  var tree = function(x, z) {
    this.x = x;
    this.z = z;

    trunk;
    var material_trunk = new THREE.MeshLambertMaterial({
      color: 'brown',
      map: textureWood
    });
    var geometry_trunk = new THREE.BoxGeometry(0.65, 1.15, 0.65);
    var trunk = new THREE.Mesh(geometry_trunk, material_trunk);
    trunk.position.set(this.x, 4.275, this.z);
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    scene.add(trunk);

    //leaves
    var geometry_leaves = new THREE.BoxGeometry(0.75, 2.8, 0.75);
    var material_leaves = new THREE.MeshLambertMaterial({
      color: 0x65bb61,
      map: textureLeaves
    });
    var leaves = new THREE.Mesh(geometry_leaves, material_leaves);
    leaves.position.set(this.x, 5.6 + 0.15 + 0.4 / 2, this.z);
    leaves.castShadow = true;
    scene.add(leaves);
  };

  tree(6.35, -6.85);

  var Drop = function() {
    this.geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    this.drop = new THREE.Mesh(this.geometry, material_river);
    this.drop.position.set(6, 4.1, -5.55 + Math.random() * 1.9 * 1.1);
    scene.add(this.drop);
    this.speed = 0;
    this.lifespan = Math.random() * 40 + 70;

    this.update = function() {
      this.speed += 0.0007;
      this.lifespan--;
      // this.drop.position.x += (.5 - this.drop.position.x) / 70;
      this.drop.position.x += (-2.1 - this.drop.position.x) / 200;
      this.drop.position.y -= this.speed;
    };
  };
  var drops = [];

  var count = 0;
  var render = function() {
    requestAnimationFrame(render);
    if (count % 3 == 0) {
      for (var i = 0; i < 5; i++) {
        drops.push(new Drop());
      }
    }
    count++;
    for (var i = 0; i < drops.length; i++) {
      drops[i].update();
      if (drops[i].lifespan < 0) {
        scene.remove(scene.getObjectById(drops[i].drop.id));
        drops.splice(i, 1);
      }
    }
    renderer.render(scene, camera);
  };
  render();

  update(renderer, scene, camera, controls);
  return scene;
}

function getBox() {
  var geometry = new THREE.BoxGeometry(0.5, 0.5, 3.5);
  var material = new THREE.MeshPhongMaterial({ color: 'red' });
  var mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  return mesh;
}

function getPlane(size) {
  var texture = new THREE.TextureLoader().load('./textures/grass.jpg');
  var geometry = new THREE.PlaneGeometry(size, size);
  var material = new THREE.MeshPhongMaterial({
    map: texture,
    side: THREE.DoubleSide
  });
  var mesh = new THREE.Mesh(geometry, material);
  mesh.receiveShadow = true;
  return mesh;
}

function getSphere(size) {
  var textureSun = new THREE.TextureLoader().load('./textures/sun.bmp');
  var geometry = new THREE.SphereGeometry(size, 20, 20);
  var material = new THREE.MeshBasicMaterial({
    color: 'yellow',
    map: textureSun
  });
  var mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

function getPointLight(intensity) {
  var light = new THREE.PointLight(0xffffff, intensity);
  light.castShadow = true;
  return light;
}

function update(renderer, scene, camera, controls) {
  renderer.render(scene, camera);
  controls.update();
  requestAnimationFrame(function() {
    update(renderer, scene, camera, controls);
  });
}
var scene = init();
