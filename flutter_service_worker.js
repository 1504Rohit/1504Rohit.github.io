'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "dfa4eba2e181198669bd431c60bdfdad",
".git/config": "53b18ce5e15db681919ef0c16b9b857b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bc83f3f28b33601dd0f891f4cd8c784b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2f91a2f96c4517e32027556d14b5405f",
".git/logs/refs/heads/main": "77d1c17e910341cf38e87e3e46f6f92c",
".git/logs/refs/remotes/origin/main": "7a3267ed682435266d0d29b2cbbf9282",
".git/objects/03/99d9e0013c3cf047f575385e4f012b7ba2206e": "b35192e315a0d5ee599abc6782bcf6e2",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/0b/aa3da4c23d5aafe1378309663ae8d4b25a47ec": "87c9fb5d6db536be1d4056179dca5f01",
".git/objects/0e/fc6ae46d27bddd449722930ee7a518f8784873": "c9df83b9f43d80c191a99ee2fad5e131",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/17/25d5a101313da8862a992a191160eace907a9c": "8473077090a3c7dd26b30f4406a1de2b",
".git/objects/1c/64a458b3f1cd097091eb156c3b7e3675a9112b": "69fc7a3151955bd391154cb5cc93a266",
".git/objects/1d/e983bd9b6796f3a9aaddf2e5b3dfe8ed142c24": "e4a4aaf0fd1b70e27aea1228cc6fdd7d",
".git/objects/2c/ee9ff9b2f9aa020f88fcfb633e1e9be4d2d5c6": "7f678b8631b704f10946f880366e5c87",
".git/objects/2f/f6edfa729c96eef082056c9960181975d75755": "a0199cd88c392788c764713259b4be75",
".git/objects/33/7747096e2275ceed894cd0c40a67bbbce4d898": "77632909bb2afd68f679a832bc6ac6a3",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3c/13c26c641165c9007b07709f2a8595dfe9a7b7": "ed8641b2a714bace12c614fd21c887cf",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/70031a139cbd66b92c1e1442367015da781ffd": "82e575e40aa07b9100a9cf45811b21ff",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/50/0e60ea566c52ade08137edc91ff0f4cfef2c29": "b9d537131f6d7b608e483389cd7f9993",
".git/objects/51/4fca08e14c0b3413fa9085ece79c72678e981a": "605aec3492ef1684c0b77e68fb0516fe",
".git/objects/55/793a9e0c9437d0191ff281db3f374fffeb6057": "54ca49c2dde9f20b000c6eca35eed54a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/0bcf53a6bf91e8d5867a06fc9fbcdbdf98a365": "dfdb850217950f28d6586537a91b99e7",
".git/objects/57/b3e8c32122a3ef84007c01b7c637427ca0db95": "73df21a0afc9ae7b44b24ba31715dab5",
".git/objects/5e/b76cec4d9a95cb4b5738b33412a54952794b61": "bbe9c6f2cda8a6d4bb3a0214c634c41a",
".git/objects/63/4b3af02841699e782dc0560d80a3d9b590f483": "8700fe68e3fe9574d762ce9dd7d99dac",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/931b623c3c083a780981a19610b5b51a2fdb9e": "cfb217d75d94e04c6d5ffe3601a87fb3",
".git/objects/75/dc35193d7747f75798923918b13204d4c0db55": "6ffe74f37c006802a1994e47b3729d05",
".git/objects/79/5d5afeed766458711fc1d36e14097098130dff": "f1f6631dd20e0cb9c82123c5b171e0b7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fa0869e11583e93072aed9d393cbb39937c16d": "07bb60a60f210ee8b0fda432546d204a",
".git/objects/7f/f0e03bd43a91ff4b3a3ebb24ab7375fc1b59c6": "1481c52af4e47db2cd500c7feac66b90",
".git/objects/87/89879052850281022cfd0149a892c3cf8c1971": "a740ae9f061dd80bbc83beee8c430f3d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ef6848b5fdd027aac7f61d3fa475faea254c47": "7ed5ff2f9db008a287d91a6aed1a72ca",
".git/objects/8b/307f0059907f9879fde115ef56e9537c50ed3b": "3ad008c578836625c6abd0ca7592b5aa",
".git/objects/8c/2c5cefca56ead32dd1ddb862b28b936854cde4": "54cc4e17ae480d45c385c1fc352833ee",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/95/9e6f2ab99ded40ccc372bce6fb5a78023bead0": "ed626ebe75a4783d1a94e6edcb00b905",
".git/objects/97/8ae9b5f5db403fa88bf7872d490a6b9637ea6a": "f5a8129ae7f1939746bca127e2a48738",
".git/objects/98/7db8b0886bffc074f837d11024df51ef6eb368": "f927426ff0e4d41b62e40b38a80b0687",
".git/objects/98/b1b8ccf2cf00c6437c8d12ec9c66f055b9a6fa": "83f4cc108184ccb053e222c01def511f",
".git/objects/9e/73d271d0029ba6a94db92b40e39eb22342f61f": "366cf7982819adee1ddb8c77a7056dd3",
".git/objects/a0/649462db6709a25c82c08f21f201d0a91e9c27": "981c0fbcd804e32d222d85cad7a1e31b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/d83d61649084e8010ef0382e69d0fb8df66623": "296cafe11e4ded83de9e611a3572ca0d",
".git/objects/a4/5833e0f6e14388a49851df7b9b7ad0744a892e": "724bdbcf713474ba3c4fc39e06895f36",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b0/901a427d0ae1b21f21bbb663ec78a6c01e3980": "6efe63b151d46a7f990075b816e799eb",
".git/objects/b2/d13160609269f84cd77ba5af5d68f281a6ecbf": "375e2b2022aa9e84a15d77b3eb5e9150",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/78c05b978142a579ec779b92930e2512e85938": "87d0235d18825c07b20d0bc5079b2abe",
".git/objects/d3/1f39ce91ee6c6005b468e97bcb1539f544edb3": "18bf2203dab6173be7dec6ba3e138dd2",
".git/objects/d4/12f1d297f68615eab93f1b3805fa811a44bff4": "8f243113350f156edd9a669a6ae472a1",
".git/objects/d4/371bc2a501d036f86a4cc725099a7a2e24e02b": "2d55dd8de31db7370da8b7b5e537202b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/5af3a8b2be2d0f5e4dc7fdfda7526ee0d070fa": "be9d99c4a745b7ca52c3ed296865ab4a",
".git/objects/dd/444e283301064d3373d165493e339caac73cc4": "f50d4a68546689d4b4d949537dee4168",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/29fac458c9c40ac91a41bf686a3030fa359cd1": "49e9b94e2949a7a75b0134a683ef3267",
".git/objects/f7/66ce09b4fd3102cbf248b90612a8c41b2866ca": "83f340ab14ada0f18dee5d55bdc3d176",
".git/objects/f7/72fa0c15546dd7cb8bced8a4839d72e6f0a477": "a7d5dab1acf79e0dd144403251cdac34",
".git/objects/f9/30cb0edd9023fdd55f11c46f866ceb4e880997": "0248f6c3cf6fb04ad3d40ac19aace25d",
".git/refs/heads/main": "abc4ac76df5cb6be8b0ca9469c4e8e54",
".git/refs/remotes/origin/main": "abc4ac76df5cb6be8b0ca9469c4e8e54",
"assets/AssetManifest.json": "9cd102fc2755fd512c213b59f909e3cb",
"assets/assets/background.riv": "4684f98ac3103dedec13a4e9ebcaf7d6",
"assets/assets/banking.riv": "985895d5929881dc2626b838effda594",
"assets/assets/chatapp.riv": "14d7cd471386de2ea316051143c0fa67",
"assets/assets/codecheff.png": "d8086b399ea563216867ce70e422ecd4",
"assets/assets/college.riv": "2de9898ceb6541099f0e823a2f7d267e",
"assets/assets/dart.webp": "60fbd31aec7b4a720354e75682f53901",
"assets/assets/dsa.png": "b97f2ddbec19eaf2d51838e1e5545d7b",
"assets/assets/ecomm.riv": "855b9355ee2a6f42d704c437ed4bdaa2",
"assets/assets/flutter.png": "8cad79d415e2d88b6b242c0cbf53c270",
"assets/assets/flutter1.png": "3cddbd3d5116523d35a57d34beb742bf",
"assets/assets/fonts/Preahvihear-Regular.ttf": "b728ff1cdead5239b67535d2073baf70",
"assets/assets/infosys-springboard.webp": "8b8110293c463461db60b78918ede149",
"assets/assets/intermidiate.riv": "b48dd5a3ad17b40768e46fd2ca361b79",
"assets/assets/intro_animation.riv": "a61dfb298b1099ae5160671ef3cf7249",
"assets/assets/java.webp": "95003276b0742a18ce49718b582aa296",
"assets/assets/leetcode.webp": "3c541815dfca47ef6a3ed71ac521cd7f",
"assets/assets/my%2520image.jpeg": "1c4136b885676f9fec76aced824bdaca",
"assets/assets/renteasy.riv": "a3e1584463f038477630d60123b4d9c6",
"assets/assets/school.riv": "de2b586b4b9c1b8a09b5ab3fc2fb1fd4",
"assets/assets/tack.riv": "70bfbc4ec3d0e1db30f0ca3c030744d5",
"assets/assets/Udemy-Logo.png": "15117f9676735aba3d579d087eaefe25",
"assets/assets/whatsapp.png": "64955b289c3856ad31744d47419f6be2",
"assets/FontManifest.json": "91a3b378b34fa885f5a6700f6894d35b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "110ca37eaca3641039ab9ca0422643de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/social_media_flutter/fonts/icons.ttf": "a2943704265adec89858d6d95150a109",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fb3e027f825dff41c2a8e9a9fda56c45",
"/": "fb3e027f825dff41c2a8e9a9fda56c45",
"main.dart.js": "b48611f91fd82a4a2a05b5a877ca0ca8",
"manifest.json": "0c8a5e8f71a28b829c49dc124704d145",
"version.json": "4789c8d4b0b8fbbfcffdbcdfd1ee2248"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
