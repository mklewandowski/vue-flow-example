export const showHideNodes = [
  { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 100 }, class: 'light',
    data: {
      showHide: true,
      hiddable: false
    },
    hidden: false
  },
  { id: '2', type: 'output', label: 'Node 2', position: { x: 50, y: 150 }, class: 'light',
    data: {
      showHide: false,
      hiddable: true
    },
    hidden: true
  },
  { id: '3', label: 'Node 3', position: { x: 450, y: 150 }, class: 'light',
    data: {
      showHide: false,
      hiddable: true
    },
    hidden: true
  },
  { id: '4', label: 'Node 4', position: { x: 250, y: 200 }, class: 'light',
    data: {
      showHide: false,
      hiddable: true
    },
    hidden: true
  },
]

export const showHideEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e1-4', source: '1', target: '4', animated: true },
]
