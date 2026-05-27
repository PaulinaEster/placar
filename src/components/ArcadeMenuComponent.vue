<template>
  <q-card class="arcade-menu">
    <q-card-section class="row justify-around q-gutter-lg menu-row">
      <q-btn class="menu-button" label="NEW SCORE" @click="select('score')" />

      <q-btn class="menu-button" label="NEW MACHINE" @click="select('machine')" />

      <q-btn class="menu-button" label="NEW PROBLEM" @click="select('problem')" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
type MenuOption = 'machine' | 'score' | 'problem';

const emit = defineEmits<{
  select: [MenuOption];
}>();

function select(option: MenuOption) {
  emit('select', option);
}
</script>

<style scoped>
.arcade-menu {
  background: #000;
  /* border: 4px solid #ff00ff; */
  /* box-shadow:
    0 0 12px #ff00ff,
    0 0 24px #00ffff; */
  font-family: 'Press Start 2P', monospace;
}

.menu-title {
  text-align: center;
  color: #ffe600;
  font-size: 16px;
  text-shadow:
    2px 2px 0 #ff0000,
    0 0 8px #ff9900;
}

.menu-row {
  flex-wrap: nowrap;
}

.menu-button {
  flex: 1;

  background: #111;
  color: #00ffff;

  font-family: 'Press Start 2P', monospace;
  font-size: 10px;

  border: 2px solid #00ffff;

  text-shadow: 0 0 6px #00ffff;

  transition: all 0.2s ease;
}

.menu-button:hover {
  background: #220022;
  color: #ffe600;
  border-color: #ffe600;

  text-shadow:
    0 0 8px #ffe600,
    0 0 16px #ff0000;

  transform: scale(1.05);
}
</style>
