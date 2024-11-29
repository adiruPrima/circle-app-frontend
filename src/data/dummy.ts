export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  banner: string;
  bio: string;
  following: number;
  followers: number;
}

export interface Post {
  id: string;
  userId: string;
  author: User;
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
  image?: string;
}

export const dummyUsers: User[] = [
  {
    id: '1',
    name: 'Squidward Tentacles',
    username: '@sigmasquid',
    avatar: 'https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Squidward',
    banner:
      'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1200',
    bio: 'Art is a lifestyle',
    following: 57,
    followers: 43,
  },
  {
    id: '2',
    name: 'Spongebob Squarepants',
    username: '@squarebob',
    avatar: 'https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Spongebob',
    banner:
      'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1200',
    bio: 'Software Engineer',
    following: 150,
    followers: 89,
  },
];

export const dummyPosts: Post[] = [
  {
    id: '1',
    userId: '1',
    author: dummyUsers[0],
    content: 'Berjalan ke Krusty Krab',
    timestamp: '4h',
    likes: 16,
    replies: 1,
  },
  {
    id: '2',
    userId: '2',
    author: dummyUsers[1],
    content: 'Cannot wait for jelly fishing!!',
    timestamp: '6h',
    likes: 22,
    replies: 3,
  },
];

export const suggestedUsers = [
  {
    id: '3',
    name: 'Patrick Star',
    username: '@superstar_p',
    avatar: 'https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Patrick',
  },
  {
    id: '4',
    name: 'Mr. Krabs',
    username: '@naveenen',
    avatar: 'https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Krabs',
  },
  {
    id: '5',
    name: 'Sandy Cheeks',
    username: '@squirel-from-texas',
    avatar: 'https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Sandy',
  },
];
