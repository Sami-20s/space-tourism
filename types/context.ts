import { DestinationListType } from "./Destination/DestinationTypes";
import { NavLinksTypes } from "./Nav/NavTypes";
export type ContextTypes = React.Context<{
    navLinks: NavLinksTypes;
    planetsList: DestinationListType;
    click?: string;
    setClick?: React.Dispatch<React.SetStateAction<string>>;
}>;
