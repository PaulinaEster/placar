<template>
  <q-page class="row justify-evenly">
    <div class="col-md-12 col-lg-6 col-sm-12">
      <arcade-menu-component class="q-ma-md" @select="handleMenu" />
      <best-speed-up-component
        class="q-ma-md"
        title="VELOCIDADE MÁXIMA"
        active
        :rows="todos"
      ></best-speed-up-component>
      <code-speed-up-form-component
        v-if="showMenuFormType == 'score'"
        @submit="handleSubmit"
        class="q-ma-md"
      />
      <machine-form-component
        v-else-if="showMenuFormType == 'machine'"
        @submit="handleSubmit"
        class="q-ma-md"
      />
      <problem-form-component
        v-else-if="showMenuFormType == 'problem'"
        @submit="handleSubmit"
        class="q-ma-md"
      />
    </div>
    <example-component
      class="col-md-12 col-lg-6 col-sm-12"
      title="ALL RUNS"
      active
      :rows="todos"
    ></example-component>
  </q-page>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { ref } from 'vue';
import type { CodeSpeedUp } from 'components/models';
import { ParallelismType } from 'components/models';
import BestSpeedUpComponent from 'components/BestSpeedUpComponent.vue';
import ArcadeMenuComponent from 'components/ArcadeMenuComponent.vue';
import ExampleComponent from 'components/ExampleComponent.vue';
import ProblemFormComponent from 'components/ProblemFormComponent.vue';
import MachineFormComponent from 'components/MachineFormComponent.vue';
import CodeSpeedUpFormComponent from 'components/CodeSpeedUpFormComponent.vue';

const showMenuFormType: Ref<string> = ref('');

function handleSubmit(data: {
  username: string;
  problem: string;
  speedUp: number;
  machine: string;
}) {
  console.log(data);
}

function handleMenu(option: 'machine' | 'score' | 'problem') {
  console.log(option);
  showMenuFormType.value = option;
}

const todos = ref<CodeSpeedUp[]>([
  {
    username: 'Janete',
    parallelismType: ParallelismType.GPU,
    problem: {
      id: '123',
      name: 'Animal Rescue',
      complexity: 'Hard',
    },
    speedUp: 124,
    machine: { name: 'Antares' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Cuiaba',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 35,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Charlise',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 35,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Lindjomar',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 35,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
  {
    username: 'Camilo',
    parallelismType: ParallelismType.SharedMemory,
    problem: {
      id: '123',
      name: 'Prime number',
      complexity: 'Easy',
    },
    speedUp: 45,
    machine: { name: 'Cerrado' },
  },
]);
</script>
