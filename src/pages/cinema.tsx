import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

import YoutubeEmbed from '../components/youtubeEmbed';

const Cinema = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className="">
      <YoutubeEmbed embedId="rokGy0huYEA" />
      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div>
  </Main>
);
export default Cinema;
