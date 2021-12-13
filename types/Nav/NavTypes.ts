export type NavLinksTypes = {
    id: number;
    title: string;
    url: string;
    number: string;
}[];

export type NavLinksProps = {
    list: NavLinksTypes;
    isBurgerClick: boolean;
    setIsBurgerClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export type NavSingleLinkProps = {
    id: number;
    title: string;
    url: string;
    number: string;
    click: string;
    setClick: React.Dispatch<React.SetStateAction<string>>;
    setIsBurgerClick: React.Dispatch<React.SetStateAction<boolean>>;
};
