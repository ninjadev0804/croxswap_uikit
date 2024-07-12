import { ButtonProps, Sizes, variants } from "../Button/types";

export type ButtonMenuItemProps = {
  isActive?: boolean;
  size?: Sizes;
} & ButtonProps;

export interface ButtonMenuProps {
  variant?: typeof variants.PRIMARY | typeof variants.SUCCESS | typeof variants.DANGER | typeof variants.SECONDARY | typeof variants.WARNING | typeof variants.TEXT | typeof variants.TERTIARY;
  activeIndex?: number;
  onClick?: (index: number) => void;
  size?: Sizes;
  children: React.ReactElement[];
}
