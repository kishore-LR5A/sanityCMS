// definition typescript file
export interface Post {
  _id: string;
  _createAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  comments: Comment[];
  description: string;
  mainImage;
  slug: {
    current: string;
  };
  body: [object];
}

export interface Comment {
  _id: string;
  _createAt: string;
  post: {
    _ref: string;
    _type: string;
  };
  name: string;
  email: string;
  comment: string;
  approved: boolean;
  _updatedAt: string;
  _rev: string;
  _type: string;
}
