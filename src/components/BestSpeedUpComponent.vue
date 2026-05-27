<template>
  <q-table class="arcade-scoreboard" flat hide-bottom :rows="rows" :columns="bests" row-key="id">
    <template v-slot:top>
      <div class="arcade-header">
        <div class="logo">GMAP</div>
        <div class="subtitle">{{ title }}</div>
      </div>
    </template>

    <template v-slot:body-cell-position="props">
      <q-td :props="props">
        {{ ordinal(props.pageIndex + 1) }}
      </q-td>
    </template>

    <template v-slot:body-cell-speedUp="props">
      <q-td :props="props"> {{ props.value.toFixed(2) }}x </q-td>
    </template>
  </q-table>
</template>

<script setup lang="ts">
import type { QTableColumn } from 'quasar';
import type { CodeSpeedUp } from './models';

defineProps<{
  rows: CodeSpeedUp[];
  title: string;
}>();

const ordinal = (n: number) => {
  const suffix = ['TH', 'ST', 'ND', 'RD'];
  return `${n}${suffix[n] || 'TH'}`;
};

const bests: QTableColumn<CodeSpeedUp>[] = [
  {
    name: 'position',
    label: '',
    field: 'id',
    align: 'left',
  },
  {
    name: 'username',
    label: 'User',
    field: 'username',
    align: 'left',
  },
  {
    name: 'problem',
    label: 'Problem',
    field: (row) => row.problem.name,
    align: 'left',
  },
  {
    name: 'machine',
    label: 'Machine',
    field: (row) => row.machine.name,
    align: 'left',
  },
  {
    name: 'speedUp',
    label: 'SpeedUp',
    field: 'speedUp',
    align: 'right',
  },
  {
    name: 'complexity',
    label: 'Level',
    field: (row: CodeSpeedUp) => row.problem.complexity,
    align: 'right',
  },
];
</script>

<style scoped>
.arcade-scoreboard {
  background: #4e4e4e;
  color: #fff;
  font-family: 'Press Start 2P', monospace;
  border: 4px solid #111;
  box-shadow:
    inset 0 0 0 2px #222,
    0 0 30px rgba(255, 0, 0, 0.25);
}

.arcade-header {
  width: 100%;
  text-align: center;
  padding: 24px 0;
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #ad0d0d;
  text-shadow:
    2px 2px 0 #ff0000,
    4px 4px 0 #ffe600;
  transform: skew(-18deg);
}

.subtitle {
  margin-top: 12px;
  color: #ffffff;
  font-size: 12px;
  letter-spacing: 4px;
}

.arcade-scoreboard thead {
  display: none;
}

.arcade-scoreboard tbody tr {
  background: #202020;
}

.arcade-scoreboard td {
  color: #fff;
  border: none;
  padding: 8px 14px;
  font-size: 11px;
  text-shadow: 0 0 2px currentColor;
}

/* ranking */
.arcade-scoreboard td:first-child {
  color: #7fffd4;
}

/* jogador */
.arcade-scoreboard td:nth-child(2) {
  color: #ffffff;
}

/* problema */
.arcade-scoreboard td:nth-child(3) {
  color: #ffff66;
}

/* máquina */
.arcade-scoreboard td:nth-child(4) {
  color: #66ffff;
}

/* speedup */
.arcade-scoreboard td:last-child {
  color: #ff4444;
}

/* top 3 destaque */
.arcade-scoreboard tbody tr:nth-child(1) td {
  color: #ffd700;
}

.arcade-scoreboard tbody tr:nth-child(2) td {
  color: #c0c0c0;
}

.arcade-scoreboard tbody tr:nth-child(3) td {
  color: #cd7f32;
}
</style>
