export const showHideNodes = [
  { id: '1', type: 'input', label: 'Click me to show/hide nodes', position: { x: 250, y: 25 }, class: 'light',
    data: {
      showHide: true,
      hiddable: false
    },
    hidden: false,
    style: {}
  },
  { id: '2', type: 'output', label: 'I can be shown/hidden', position: { x: 150, y: 100 }, class: 'light',
    data: {
      showHide: false,
      hiddable: true
    },
    hidden: true,
    style: {}
  },
  { id: '3', label: 'I can be shown/hidden', position: { x: 350, y: 100 }, class: 'light',
    data: {
      showHide: false,
      hiddable: true
    },
    hidden: true,
    style: {}
  },
  { id: '4', label: 'I can be shown/hidden', position: { x: 250, y: 175 }, class: 'light',
    data: {
      showHide: false,
      hiddable: true
    },
    hidden: true,
    style: {}
  },
]

export const showHideEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e1-4', source: '1', target: '4', animated: true },
]
