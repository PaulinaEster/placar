export enum ParallelismType {
  GPU = 'GPU',
  Distributed = 'Message Passing',
  SharedMemory = 'Shared Memory',
}

export interface Machine {
  name: string;
  id?: string;
}
export type Complexity = 'Hard' | 'Medium' | 'Easy';

export interface Problem {
  id?: string;
  name: string;
  complexity?: Complexity;
}

export interface CodeSpeedUp {
  id?: string;
  username: string;
  parallelismType: ParallelismType;
  problem: Problem;
  speedUp: number;
  machine: Machine;
}
