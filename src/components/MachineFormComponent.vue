<template>
  <q-card class="arcade-form">
    <q-card-section>
      <div class="form-title">★ NEW MACHINE ★</div>
    </q-card-section>

    <q-card-section>
      <q-input v-model="machineName" label="MACHINE NAME" outlined dark class="arcade-input" />
    </q-card-section>

    <q-card-actions align="center">
      <q-btn label="GENERATE JSON" class="arcade-button" @click="generateMachine" />
    </q-card-actions>

    <q-card-section v-if="generatedJson">
      <div class="saved-title">COPY TO machines.json</div>

      <q-input v-model="generatedJson" type="textarea" autogrow readonly class="json-output" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import machinesData from 'src/data/machines.json';
import type { Machine } from './models';

const machineName = ref('');
const generatedJson = ref('');

function generateId(): string {
  return crypto.randomUUID();
}

function generateMachine() {
  if (!machineName.value.trim()) return;

  const updatedMachines: Machine[] = [
    ...machinesData,
    {
      id: generateId(),
      name: machineName.value,
    },
  ];

  generatedJson.value = JSON.stringify(updatedMachines, null, 2);
  machineName.value = '';
}
</script>

<style scoped>
.arcade-form {
  background: #000;
  border: 4px solid #ff00ff;
  box-shadow:
    0 0 12px #ff00ff,
    0 0 24px #00ffff;
  color: white;
  font-family: 'Press Start 2P', monospace;
}

.form-title,
.saved-title {
  text-align: center;
  color: #ffe600;
  font-size: 14px;
  margin-bottom: 16px;
}

.arcade-input :deep(.q-field__control) {
  background: #111;
  border: 2px solid #00ffff;
}

.arcade-button {
  background: #ff0000;
  color: white;
  font-family: 'Press Start 2P', monospace;
}

.json-output :deep(textarea) {
  font-family: monospace;
  color: #00ff00;
  background: #111;
}
</style>
