import { Banner } from '@/components/common/Banner';
import { ListHeader } from '@/components/common/ListHeader';
import { ListItem } from '@/components/common/ListItem';
import { BANNER_IMG_URL } from '@/constants/bannerImage';
import { BANNER, MOCK_DATA } from '@/constants/community';
import { Container } from '@/styles/common';

export const Community = () => {
  return (
    <>
      <Banner
        mainText={BANNER.main}
        subText={BANNER.sub}
        background={BANNER_IMG_URL.community}
        size="large"
      />
      <Container>
        <div style={{ margin: '30px 0' }}>
          <ListHeader />
          {MOCK_DATA.map(({ id, title, date, contents, author }) => (
            <ListItem key={id} title={title} date={date} contents={contents} author={author} />
          ))}
        </div>
      </Container>
    </>
  );
};
