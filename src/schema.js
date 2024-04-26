export const schema = {
  "Player": {
      IdField: "player_id",
      EntityType: "Player",
      Properties: [
          {"field_name": "player_name", "property_name": "name"},
          {"field_name": "world_id", "property_name": "world"},
      ]
  },
  "Creature": {
      IdField: "creature_id",
      EntityType: "Creature",
      Properties: [
          {"field_name": "creature_name", "property_name": "name"},
          {"field_name": "created_date", "property_name": "created_date"},
          {"field_name": "world_id", "property_name": "world"}
      ],
      Relationships: [
        { type: "Faction", relation: "HAS", match_on: "faction_id" },
        { type: "Color", relation: "HAS", match_on: "color_id" },
        { type: "CreatureType", relation: "HAS", match_on: "creature_type_id" }
      ]
  },
  "Friendship": {
      IdField: "personal_rep_id",
      EntityType: "Friendship",
      Properties: [
          {"field_name": "world_id", "property_name": "world"},
          {"field_name": "personal_rep_value", "property_name": "value"}
      ],
      Relationships: [
          { "type": "Player", "relation": "PLAYER", "match_on": "player_id"},
          { "type": "Creature", "relation": "CREATURE", "match_on": "creature_id"}
      ]
  },
  "Color": {
      IdField: "color_id",
      EntityType: "Color",
      Properties: [
          {"field_name": "color_name", "property_name": "name"}
      ]
  },
  "Faction": {
      IdField: "faction_id",
      EntityType: "Faction",
      Properties: [
          {"field_name": "faction_name", "property_name": "name"}
      ]
  },
  "CreatureType": {
      IdField: "creature_type_id",
      EntityType: "CreatureType",
      Properties: [
          {"field_name": "creature_type_name", "property_name": "name"}
      ]
  },
};