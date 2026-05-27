<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="arcade-header-bar">
      <q-toolbar class="arcade-toolbar">
        <q-toolbar-title class="arcade-title">
          <div class="marquee">
            <span> ⚡ SPEEDUP GMAP • BENCHMARK LEGENDS ⚡ </span>
          </div>
        </q-toolbar-title>

        <div class="arcade-version">v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container class="arcade-page">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>

<style scoped>
.arcade-page::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.03) 0px,
    rgba(255, 255, 255, 0.03) 1px,
    transparent 2px,
    transparent 4px
  );
}
.arcade-header-bar {
  background: linear-gradient(180deg, #220022 0%, #000 100%);
  border-bottom: 4px solid #ff00ff;
  box-shadow:
    0 0 10px #ff00ff,
    0 0 20px #00ffff;
}

.arcade-toolbar {
  min-height: 90px;
  padding: 0 24px;
}

.arcade-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 18px;
  color: #ff0000;
  text-shadow:
    2px 2px 0 #ffe600,
    0 0 8px #ff9900,
    0 0 16px #ff00ff;
  letter-spacing: 2px;
}

.arcade-version {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: #00ffff;
  text-shadow: 0 0 8px #00ffff;
}

.arcade-page {
  background: radial-gradient(circle at top, #111 0%, #000 70%);
  min-height: 100vh;
}
.arcade-title {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

.marquee {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.marquee span {
  display: inline-block;
  padding-left: 100%;
  white-space: nowrap;

  font-family: 'Press Start 2P', monospace;
  font-size: 16px;
  color: #ffe600;

  text-shadow:
    2px 2px 0 #ff0000,
    0 0 8px #ff9900,
    0 0 16px #ff00ff;

  animation: arcade-scroll 18s linear infinite;
}

@keyframes arcade-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
