<script setup>
import { ref } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { ControlButton, Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import { initialEdges, initialNodes } from './initial-elements.js'
import { showHideNodes, showHideEdges } from './show-hide-elements.js'
import Icon from './Icon.vue'

/**
 * useVueFlow provides all event handlers and store properties
 * You can pass the composable an object that has the same properties as the VueFlow component props
 */
const { onPaneReady, onNodeDragStop, onNodeClick, onConnect, addEdges, setViewport, toObject } = useVueFlow()

const nodes = ref(initialNodes)

const edges = ref(initialEdges)

const queryString = ref("QUERY: ")

// our dark mode toggle flag
const dark = ref(false)

/**
 * This is a Vue Flow event-hook which can be listened to from anywhere you call the composable, instead of only on the main component
 * Any event that is available as `@event-name` on the VueFlow component is also available as `onEventName` on the composable and vice versa
 *
 * onPaneReady is called when viewpane & nodes have visible dimensions
 */
onPaneReady(({ fitView }) => {
  fitView()
})

/**
 * onNodeDragStop is called when a node is done being dragged
 *
 * Node drag events provide you with:
 * 1. the event object
 * 2. the nodes array (if multiple nodes are dragged)
 * 3. the node that initiated the drag
 * 4. any intersections with other nodes
 */
onNodeDragStop(({ event, nodes, node, intersections }) => {
  console.log('Node Drag Stop', { event, nodes, node, intersections })
})

let nodesHidden = true;
onNodeClick(({ event, node, connectedEdges }) => {
  console.log('Node Click', { event, node, connectedEdges })
  if (node.data.queryInfo)
  {
    queryString.value = queryString.value + " + " + node.data.queryInfo;
  }
  if (node.data.showHide)
  {
    console.log("Show/hide Nodes")
    nodesHidden = !nodesHidden
    nodes.value = nodes.value.map((node) => ({ ...node, hidden: node.data.hiddable && nodesHidden }))
    //edges.value = edges.value.map((edge) => ({ ...edge, hidden: edge.hiddable && nodesHidden }))
  }
})

/**
 * onConnect is called when a new connection is created.
 *
 * You can add additional properties to your new edge (like a type or label) or block the creation altogether by not calling `addEdges`
 */
onConnect((connection) => {
  addEdges(connection)
})

/**
 * To update a node or multiple nodes, you can
 * 1. Mutate the node objects *if* you're using `v-model`
 * 2. Use the `updateNode` method (from `useVueFlow`) to update the node(s)
 * 3. Create a new array of nodes and pass it to the `nodes` ref
 */
function updatePos() {
  nodes.value = nodes.value.map((node) => {
    return {
      ...node,
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
    }
  })
}

/**
 * toObject transforms your current graph data to an easily persist-able object
 */
function logToObject() {
  console.log(toObject())
}

/**
 * Resets the current viewport transformation (zoom & pan)
 */
function resetTransform() {
  setViewport({ x: 0, y: 0, zoom: 1 })
}

function toggleDarkMode() {
  dark.value = !dark.value
}

function showShowHideNodes() {
  // clear all nodes and edges
  nodes.value = [];
  edges.value = [];
  // add new nodes and edges
  nodes.value = showHideNodes;
  edges.value = showHideEdges;
}

</script>

<template>
  <div className="selection-container">
    <div>
      <button>Clickable Nodes</button>
      <button @click="showShowHideNodes">Show/Hide Nodes</button>
      <button>Schema -> Nodes</button>
    </div>
    <div className="info-container">
      {{ queryString }}
    </div>
  </div>
  <VueFlow
    :nodes="nodes"
    :edges="edges"
    :class="{ dark }"
    class="basicflow"
    :default-viewport="{ zoom: 1.5 }"
    :min-zoom="0.2"
    :max-zoom="4"
  >
    <Background pattern-color="#aaa" :gap="16" />

    <MiniMap />

    <Controls position="top-right">
      <ControlButton title="Reset Transform" @click="resetTransform">
        <Icon name="reset" />
      </ControlButton>

      <ControlButton title="Shuffle Node Positions" @click="updatePos">
        <Icon name="update" />
      </ControlButton>

      <ControlButton title="Toggle Dark Mode" @click="toggleDarkMode">
        <Icon v-if="dark" name="sun" />
        <Icon v-else name="moon" />
      </ControlButton>

      <ControlButton title="Log `toObject`" @click="logToObject">
        <Icon name="log" />
      </ControlButton>
    </Controls>
  </VueFlow>
</template>
