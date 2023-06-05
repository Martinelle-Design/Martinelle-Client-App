import { v4 as uuid } from "uuid";
import { ProjectButtonItem } from "../types/types";
export const projectsClickableData: ProjectButtonItem[] = [
  {
    title: "PRIVATE RESIDENTIAL",
    url: "/projects/private-residential",
    itemType: "project-button-item",
    id: uuid(),
    orderIdx: 0,
    timestamp: Date.now(),
    pk: {
      itemType: "project-button-item",
      orderIdx: 0,
    },
    images: {
      pk: {
        itemType: "project-button-item",
        orderIdx: 0,
      },
      id: uuid(),
      timestamp: Date.now(),
      imgUrl: "",
      placeholderUrl: "",
      description: "",
      orderIdx: 0,
    },
  },
  {
    title: "COMMERCIAL",
    url: "/projects/commercial",
    itemType: "project-button-item",
    id: uuid(),
    orderIdx: 1,
    timestamp: Date.now(),
    pk: {
      itemType: "project-button-item",
      orderIdx: 1,
    },
    images: {
      pk: {
        itemType: "project-button-item",
        orderIdx: 0,
      },
      id: uuid(),
      timestamp: Date.now(),
      imgUrl: "",
      placeholderUrl: "",
      description: "",
      orderIdx: 0,
    },
  },
  {
    title: "FURNITURE MANUFACTURING",
    url: "/projects/furniture-manufacturing",
    itemType: "project-button-item",
    id: uuid(),
    orderIdx: 2,
    timestamp: Date.now(),
    pk: {
      itemType: "project-button-item",
      orderIdx: 2,
    },
    images: {
      pk: {
        itemType: "project-button-item",
        orderIdx: 0,
      },
      id: uuid(),
      timestamp: Date.now(),
      imgUrl: "",
      placeholderUrl: "",
      description: "",
      orderIdx: 0,
    },
  },
  {
    title: "HOSPITALITY",
    url: "/projects/hospitality",
    itemType: "project-button-item",
    id: uuid(),
    orderIdx: 3,
    timestamp: Date.now(),
    pk: {
      itemType: "project-button-item",
      orderIdx: 3,
    },
    images: {
      pk: {
        itemType: "project-button-item",
        orderIdx: 0,
      },
      id: uuid(),
      timestamp: Date.now(),
      imgUrl: "",
      placeholderUrl: "",
      description: "",
      orderIdx: 0,
    },
  },
];
