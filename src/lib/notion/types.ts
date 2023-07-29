export type Tag = {
  id: string;
  name: string;
  color: 'red' | 'green' | 'blue' | 'orange' | 'yellow' | 'brown' | 'gray' | 'purple' | 'pink';
};

export type Post = {
  id: string;
  title: string;
  summary: string;
  thumbnailImg: string;
  slug: string;
  tags: Tag[];
  date: string;
};
