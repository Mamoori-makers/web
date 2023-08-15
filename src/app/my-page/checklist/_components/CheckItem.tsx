import * as Checkbox from '@radix-ui/react-checkbox';

import { CheckIcon } from '@/icons/CheckIcon';

type CheckItemProps = {
  id: string;
  isChecked: boolean;
  task: string;
};

export const CheckItem = ({ id, isChecked, task }: CheckItemProps) => {
  return (
    <div className="flex p-2">
      <Checkbox.Root
        id={id}
        className="flex h-5 w-5 min-w-[20px] items-center justify-center rounded-md bg-brown-100 shadow-md shadow-stone-500/50"
        checked={isChecked}
        disabled
      >
        <Checkbox.Indicator>
          <CheckIcon strokeColor="white" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="pl-3" htmlFor={id}>
        {task}
      </label>
    </div>
  );
};
