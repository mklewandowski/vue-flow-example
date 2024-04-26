export const styledNodes = [
  { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 100 }, class: 'light',
    data: {
      queryInfo: 'query 1',
    },
    hidden: false,
    style: { backgroundColor: 'lightsalmon', width: '100px', height: '100px' },
  },
  { id: '2', type: 'output', label: 'Node 2', position: { x: 100, y: 300 }, class: 'light',
    data: {
      queryInfo: 'query 2',
    },
    hidden: false,
    style: { backgroundColor: 'lightpink', width: '100px', height: '100px', borderRadius: '50%' },
  },
  { id: '3', label: 'Node 3', position: { x: 400, y: 300 }, class: 'light',
    data: {
      queryInfo: 'query 3',
    },
    hidden: false,
    style: { backgroundColor: 'lavender', width: '100px', height: '30px', fontSize: '10px' },
  },
]

export const styledEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
]
