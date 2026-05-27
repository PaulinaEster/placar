<template>
  <q-card class="arcade-form">
    <q-card-section>
      <div class="form-title">★ NEW HIGH SCORE ★</div>
    </q-card-section>

    <q-card-section class="q-gutter-md">
      <q-input v-model="form.username" label="PLAYER NAME" outlined dark class="arcade-input" />

      <q-input v-model="form.problem" label="PROBLEM" outlined dark class="arcade-input" />

      <div class="row justify-between">
        <q-input
          v-model.number="form.speedUp"
          label="SPEEDUP"
          type="number"
          step="0.01"
          outlined
          dark
          class="arcade-input col-5"
        />
        <q-select
          v-model.level="form.level"
          label="LEVEL"
          step=""
          outlined
          dark
          :options="['Hard', 'Medium', 'Easy']"
          class="arcade-input col-5"
        />
      </div>

      <q-input v-model="form.machine" label="MACHINE" outlined dark class="arcade-input" />
    </q-card-section>

    <q-card-actions align="center">
      <q-btn label="SUBMIT SCORE" class="arcade-button" @click="submit" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const emit = defineEmits<{
  submit: [
    {
      username: string;
      problem: string;
      speedUp: number;
      level: string;
      machine: string;
    },
  ];
}>();

const form = reactive({
  username: '',
  problem: '',
  speedUp: 0,
  level: '',
  machine: '',
});

function submit() {
  emit('submit', { ...form });

  form.username = '';
  form.problem = '';
  form.speedUp = 0;
  form.machine = '';
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

.form-title {
  text-align: center;
  color: #ffe600;
  font-size: 16px;
  text-shadow:
    2px 2px 0 #ff0000,
    0 0 8px #ff9900;
}

.arcade-input :deep(.q-field__control) {
  background: #111;
  border: 2px solid #00ffff;
}

.arcade-input :deep(.q-field__label) {
  color: #00ffff;
}

.arcade-input :deep(input) {
  color: #fff;
  font-family: 'Press Start 2P', monospace;
}

.arcade-button {
  background: #ff0000;
  color: #fff;
  font-family: 'Press Start 2P', monospace;
  box-shadow:
    0 0 8px #ff0000,
    0 0 16px #ff00ff;
}

.arcade-button:hover {
  transform: scale(1.05);
}
</style>
