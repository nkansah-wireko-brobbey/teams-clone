export type ChatMember = {
  id: number;
  user: {
    id: number;
    name: string;
    email: string;
    pictureUrl: string;
  };
};
