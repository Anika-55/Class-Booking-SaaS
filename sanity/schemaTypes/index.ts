import { type SchemaTypeDefinition } from "@sanity/types";
import { venueType } from "./venueType";
import { categoryType } from "./categoryType";
import { activityType } from "./activityType";
import { classSessionType } from "./classSessionType";
import { bookingType } from "./bookingType";
import { userProfileType } from "./userProfileType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    userProfileType,
    venueType,
    categoryType,
    activityType,
    classSessionType,
    bookingType,
  ],
};