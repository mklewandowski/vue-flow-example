import { MarkerType } from '@vue-flow/core'

export const initialNodes = [
  { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 0 }, class: 'light',
    data: {
      queryInfo: 'query 1',
    },
  },
  { id: '2', type: 'output', label: 'Node 2', position: { x: 100, y: 100 }, class: 'light',
    data: {
      queryInfo: 'query 2',
    },
  },
  { id: '3', label: 'Node 3', position: { x: 400, y: 100 }, class: 'light',
      data: {
        queryInfo: 'query 3',
      },
    },
  { id: '4', label: 'Node 4', position: { x: 150, y: 200 }, class: 'light',
      data: {
        queryInfo: 'query 4',
      },
    },
  { id: '5', type: 'output', label: 'Node 5', position: { x: 300, y: 300 }, class: 'light',
      data: {
        queryInfo: 'query 5',
      },
    },
]

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
]
