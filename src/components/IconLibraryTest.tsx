import type { IconName } from "@marn.bayan/moi-icons";
import { MoiIcon } from "@marn.bayan/moi-icons/react";

type IconLibraryTestProps = {
  name: IconName;
};

export function IconLibraryTest({ name }: IconLibraryTestProps) {
  return (
    <MoiIcon name={name} className="size-25" variant="Duotone" primaryColor="red" secondaryColor="blue" />
  );
}
