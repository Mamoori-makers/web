import { ListHeader } from '@/components/common/ListHeader';
import { ListItem } from '@/components/common/ListItem';
import { WILL_LIST } from '@/constants/will';
import useMovePage from '@/hooks/useMovePage';

export const WillList = () => {
  const [goNewWill] = useMovePage('/roadmap/will/new');

  return (
    <div style={{ marginBottom: '50px' }}>
      <ListHeader goPage={goNewWill} />
      {WILL_LIST.map(({ id, title, date, contents }) => (
        <ListItem key={id} title={title} date={date} contents={contents} />
      ))}
    </div>
  );
};
