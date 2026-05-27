<template>
  <q-card class="arcade-form">
    <q-card-section>
      <div class="form-title">★ NEW PROBLEM ★</div>
    </q-card-section>

    <q-card-section class="q-gutter-md">
      <q-input v-model="problem.name" label="PROBLEM NAME" outlined dark class="arcade-input" />

      <q-select
        :model-value="problem.complexity"
        @update:model-value="(val) => (problem.complexity = val as Complexity)"
        :options="complexities"
        label="COMPLEXITY"
        outlined
        dark
        class="arcade-input"
      />
    </q-card-section>

    <q-card-actions align="center">
      <q-btn label="GENERATE JSON" class="arcade-button" @click="generateProblem" />
    </q-card-actions>

    <q-card-section v-if="generatedJson">
      <div class="saved-title">COPY TO problems.json</div>

      <q-input v-model="generatedJson" type="textarea" autogrow readonly class="json-output" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import rawProblemsData from 'src/data/problems.json';
import type { Complexity, Problem } from './models';

const complexities: Problem['complexity'][] = ['Easy', 'Medium', 'Hard'];

const problem = ref<Problem>({
  name: '',
  complexity: 'Easy',
});
const problemsData = rawProblemsData as Problem[];
const generatedJson = ref('');

function generateId(): string {
  return crypto.randomUUID();
}

function generateProblem() {
  if (!problem.value.name.trim()) return;

  const updatedProblems: Problem[] = [
    ...problemsData,
    {
      id: generateId(),
      name: problem.value.name,
      complexity: problem.value.complexity as Complexity,
    },
  ];

  generatedJson.value = JSON.stringify(updatedProblems, null, 2);

  problem.value = {
    name: '',
    complexity: 'Easy',
  };
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
  text-shadow:
    2px 2px 0 #ff0000,
    0 0 8px #ff9900;
}

.arcade-input :deep(.q-field__control) {
  background: #111;
  border: 2px solid #00ffff;
}

.arcade-input :deep(input),
.arcade-input :deep(.q-field__native) {
  color: white;
  font-family: 'Press Start 2P', monospace;
}

.arcade-button {
  background: #ff0000;
  color: white;
  font-family: 'Press Start 2P', monospace;
}

.json-output :deep(textarea) {
  background: #111;
  color: #00ff00;
  font-family: monospace;
}
</style>
